import {GameServerSocket} from './GameNetworkTypes';
import {PlayerId} from '../../PlayerId';
import {ClientGameMirror} from './ClientGameMirror';
import {UpdatedAnswerKnowledge} from './updates/Updates';
import {Word} from '../../game/structs/Word';
import {GetRandomWord} from '../../game/Words';
export class ServerGame {
  opponent: Record<PlayerId, PlayerId> = {};
  playerClient: Record<PlayerId, ClientGameMirror> = {};

  constructor(sockets: GameServerSocket[]) {
    const answers = GenerateAnswers(sockets.map(s => s.data.playerId!));
    for (let i = 0; i < sockets.length; i++) {
      const player = sockets[i].data.playerId!;
      console.log(`player: ${player}`);
      this.opponent[player] = sockets[(i + 1) % 2].data.playerId!;
      this.playerClient[player] = new ClientGameMirror(sockets[i]);
    }
    for (let i = 0; i < sockets.length; i++) {
      const player = sockets[i].data.playerId!;
      const opponent = this.opponent[player];
      this.playerClient[player].RegisterOtherPlayer(
        this.playerClient[opponent]
      );
    }
    for (let i = 0; i < sockets.length; i++) {
      const player = sockets[i].data.playerId!;
      const update = new UpdatedAnswerKnowledge(answers[player]);
      this.playerClient[player].UpdatedAnswerKnowledge(update);
    }
  }
}

function GenerateAnswers(playerIds: PlayerId[]): Record<PlayerId, Word> {
  const answersUsed: Word[] = [];
  const answers: Record<PlayerId, Word> = {};
  for (let i = 0; i < playerIds.length; i++) {
    const answer = GenerateAnswer(answersUsed);
    answers[playerIds[i]] = answer;
    answersUsed.push(answer);
  }
  return answers;
}

function GenerateAnswer(answersUsed: Word[]): Word {
  let answer: Word;
  do {
    answer = GetRandomWord();
  } while (answer in answersUsed);
  return GetRandomWord();
}
