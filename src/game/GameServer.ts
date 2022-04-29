import {WORDS} from './Words';
import {Hint} from './client/structs/Hint';
import {GameServerSocket} from './GameServerSocket';

enum GameState {
  Start,
  SubmissionOpen,
}

export class GameServer {
  private players: GameServerSocket[];
  private state: GameState;
  private answers: string[];
  private guesses: string[];
  constructor(players: GameServerSocket[]) {
    this.players = players;
    this.state = GameState.Start;
    this.answers = [];
    this.guesses = [];
    this.RegisterPlayers(this.players);
    this.SetState(GameState.Start);
  }

  private SetState(newState: GameState) {
    this.state = newState;
    switch (newState) {
      case GameState.Start:
        this.GenerateAnswers();
        setTimeout(() => {
          this.SetState(GameState.SubmissionOpen);
        }, 1000);
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
      this.guesses.push('');
    });
    for (let i = 0; i < this.players.length; i++) {
      this.players[i].emit('SecretWord', this.answers[i]);
    }
  }

  private RegisterPlayers(players: GameServerSocket[]) {
    players.forEach(player => {
      player.on('SubmitGuess', (guess: string) => {
        const playerIndex = player.data.playerIndex!;
        this.guesses[playerIndex] = guess;
        if (this.guesses.filter(g => g.length === 0).length === 0) {
          this.RevealHints();
        }
      });
    });
  }

  private RevealHints() {
    this.players.forEach(player => {
      const playerIndex = player.data.playerIndex!;
      const playerGuess = this.guesses[playerIndex];
      const opponentGuess = this.guesses[(playerIndex + 1) % 2];
      player.emit('Hints', new Hint(playerGuess, opponentGuess));
    });
    for (let i = 0; i < this.guesses.length; i++) {
      this.guesses[i] = '';
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
