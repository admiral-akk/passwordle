import {GameServerSocket} from './GameNetworkTypes';
import {PlayerId} from '../../PlayerId';
import {ClientGameMirror} from './ClientGameMirror';
import {Word} from '../../game/structs/Word';
import {GetRandomWord} from '../../game/Words';
import {KnowledgeExchangeServer} from './KnowledgeUpdateServer';
import {LockedGuess, UpdatedAnswerKnowledge} from './updates/Updates';
export class ServerGame {
  playerClient: Record<PlayerId, ClientGameMirror> = {};
  exchangeServer: KnowledgeExchangeServer;

  constructor(sockets: GameServerSocket[]) {
    const players = sockets.map(s => s.data.playerId!);
    const secrets = GenerateSecrets(sockets.map(s => s.data.playerId!));
    for (let i = 0; i < sockets.length; i++) {
      const player = sockets[i].data.playerId!;
      console.log(`player: ${player}`);
      this.playerClient[player] = new ClientGameMirror(sockets[i]);
    }
    this.exchangeServer = new KnowledgeExchangeServer(
      players,
      secrets,
      (playerId: PlayerId, update: UpdatedAnswerKnowledge) => {
        this.playerClient[playerId].UpdatedAnswerKnowledge(update);
      }
    );
    for (let i = 0; i < sockets.length; i++) {
      const player = sockets[i].data.playerId!;
      const opponent = sockets[(i + 1) % 2].data.playerId!;
      this.playerClient[player].RegisterOtherPlayer(
        this.playerClient[opponent]
      );
      this.playerClient[player].RegisterLockedGuess((update: LockedGuess) => {
        this.exchangeServer.RegisterGuess(player, update.guess);
      });
      const secret = secrets[player];
      this.playerClient[player].SetSecret(secret);
    }
  }
}

function GenerateSecrets(playerIds: PlayerId[]): Record<PlayerId, Word> {
  const answersUsed: Word[] = [];
  const answers: Record<PlayerId, Word> = {};
  for (let i = 0; i < playerIds.length; i++) {
    const answer = GenerateSecret(answersUsed);
    answers[playerIds[i]] = answer;
    answersUsed.push(answer);
  }
  return answers;
}

function GenerateSecret(answersUsed: Word[]): Word {
  let answer: Word;
  do {
    answer = GetRandomWord();
  } while (answer in answersUsed);
  return GetRandomWord();
}
