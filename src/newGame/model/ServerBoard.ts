import {Word} from '../../game/structs/Word';
import {GetRandomWord} from '../../game/Words';
import {PlayerId} from '../../PlayerId';
import {
  NewGameClientToServerEvents,
  NewGameServerToClientEvents,
} from '../network/GameNetworkTypes';
import {AddedChar, UpdatedAnswerKnowledge} from '../network/updates/Updates';

export class ServerBoard {
  private answers: Record<PlayerId, Word> = {};
  constructor(players: PlayerId[]) {
    const answersUsed: Word[] = [];
    for (let i = 0; i < players.length; i++) {
      const answer = GenerateAnswer(answersUsed);
      this.answers[players[i]] = answer;
      answersUsed.push(answer);
    }
  }
  addedChar(player: PlayerId, update: AddedChar) {}
  generateKnowledge(player: PlayerId): UpdatedAnswerKnowledge {
    return new UpdatedAnswerKnowledge(this.answers[player]);
  }
}

function GenerateAnswer(answersUsed: Word[]): Word {
  let answer: Word;
  do {
    answer = GetRandomWord();
  } while (answer in answersUsed);
  return GetRandomWord();
}
