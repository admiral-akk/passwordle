import {WORDS} from '../public/words';
import {GameServerSocket} from './GameServerSocket';

enum GameState {
  Start,
  SubmissionOpen,
}

export class GameServer {
  private players: GameServerSocket[];
  private state: GameState;
  private answers: string[];
  constructor(players: GameServerSocket[]) {
    this.players = players;
    this.state = GameState.Start;
    this.answers = [];
    this.SetState(GameState.Start);
  }

  private SetState(newState: GameState) {
    this.state = newState;
    switch (newState) {
      case GameState.Start:
        this.GenerateAnswers();
        setTimeout(() => {
          this.SetState(GameState.SubmissionOpen);
        }, 4000);
        break;
      case GameState.SubmissionOpen:
        this.OpenSubmission();
        break;
      default:
        break;
    }
  }

  private OpenSubmission() {
    this.players.forEach(player => {
      player.emit('SubmissionOpen');
    });
  }

  private GenerateAnswers() {
    this.players.forEach(() => {
      this.answers.push(GenerateAnswer(this.answers));
    });
    for (let i = 0; i < this.players.length; i++) {
      this.players[i].emit('SecretWord', this.answers[i]);
    }
  }
}

function GenerateAnswer(existingAnswers: string[]) {
  let answer: string;
  do {
    answer = WORDS[Math.floor(Math.random() * WORDS.length)];
  } while (answer in existingAnswers);
  return answer;
}
