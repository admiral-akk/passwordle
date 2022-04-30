import {GetRandomWord} from './Words';
import {Hint} from './client/structs/Hint';
import {GameServerSocket} from './GameServerSocket';
import {GetKnowledge} from './logic/WordleLogic';
import {ToWord, Word} from './structs/Word';
import {TargetProgress} from './client/structs/TargetProgress';

enum GameState {
  Start,
  SubmissionOpen,
}

export class GameServer {
  private players: GameServerSocket[];
  private state: GameState;
  private answers: Word[];
  private guesses: Word[];
  private progress: TargetProgress[];
  constructor(players: GameServerSocket[]) {
    this.players = players;
    this.state = GameState.Start;
    this.answers = [];
    this.guesses = [];
    this.progress = [];
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
      this.answers.push(ToWord(GenerateAnswer(this.answers)));
      this.guesses.push(ToWord(''));
      this.progress.push(new TargetProgress(['', '', '', '', '']));
    });
    for (let i = 0; i < this.players.length; i++) {
      this.players[i].emit('SecretWord', this.answers[i]);
    }
  }

  private RegisterPlayers(players: GameServerSocket[]) {
    players.forEach(player => {
      player.on('SubmitGuess', (guess: string) => {
        const playerIndex = player.data.playerIndex!;
        this.guesses[playerIndex] = ToWord(guess);
        if (this.guesses.filter(g => g.length === 0).length === 0) {
          this.UpdateProgress();
          this.RevealHints();
          this.CheckWin();
          this.ClearWords();
        }
      });
    });
  }

  private UpdateProgress() {
    for (let i = 0; i < this.progress.length; i++) {
      const answer = this.answers[i];
      const knowledge = GetKnowledge(this.guesses[i],answer);
      const extraKnowledge = GetKnowledge(this.guesses[(i+1)%2],answer);
      this.progress[i].UpdateProgress(knowledge);
      this.progress[i].UpdateProgress(extraKnowledge);
    }
  }

  private RevealHints() {
    this.players.forEach(player => {
      const playerIndex = player.data.playerIndex!;
      const targetAnswer = this.answers[(playerIndex + 1) % 2];
      const playerKnowledge = GetKnowledge(
        this.guesses[playerIndex],
        targetAnswer
      );
      const opponentKnowledge = GetKnowledge(
        this.guesses[(playerIndex + 1) % 2],
        targetAnswer
      );
      player.emit(
        'Hints',
        new Hint(
          playerKnowledge,
          opponentKnowledge,
          this.progress[playerIndex],
          this.progress[(playerIndex + 1) % 2]
        )
      );
    });
  }

  private CheckWin() {
    for (let i = 0; i < this.players.length; i++) {
      const guess = this.guesses[i];
      const targetAnswer = this.answers[(i + 1) % 2];
      if (guess === targetAnswer) {
        this.players[i].emit('Won');
        this.players[(i + 1) % 2].emit('Lost');
        break;
      }
    }
  }

  private ClearWords() {
    for (let i = 0; i < this.guesses.length; i++) {
      this.guesses[i] = ToWord('');
    }
  }
}

function GenerateAnswer(existingAnswers: string[]) {
  let answer: string;
  do {
    answer = GetRandomWord();
  } while (answer in existingAnswers);
  return answer;
}
