import {Complete, TargetProgress} from '../client/structs/TargetProgress';
import {GetKnowledge} from '../logic/WordleLogic';
import {Word} from '../structs/Word';
import {PlayerId} from '../../PlayerId';
import {UpdatedAnswerKnowledge} from './updates/Updates';
import {EndGameState} from '../EndGameState';

export class KnowledgeExchangeServer {
  private progress: Record<PlayerId, TargetProgress> = {};
  private opponent: Record<PlayerId, PlayerId> = {};
  private currentGuess: Record<PlayerId, Word> = {};

  constructor(
    private players: PlayerId[],
    private answers: Record<PlayerId, Word>,
    private updateKnowledgeCallback: (
      playerId: PlayerId,
      update: UpdatedAnswerKnowledge
    ) => void,
    private GameEnded: (ending: Record<PlayerId, EndGameState>) => void
  ) {
    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      this.opponent[player] = players[(i + 1) % 2];
      this.progress[player] = new TargetProgress();
    }
  }

  private SendUpdatedKnowledge() {
    this.UpdateProgress();
    this.players.forEach(player => this.SendKnowledge(player));
    this.ClearGuesses();
    this.CheckEndGame();
  }

  private GenerateEndgame(): Record<PlayerId, EndGameState> {
    const endGame: Record<PlayerId, EndGameState> = {};
    for (let i = 0; i < this.players.length; i++) {
      const player = this.players[i];
      const finished = Complete(this.progress[player]);
    }
    return endGame;
  }

  private CheckEndGame() {
    this.players.forEach(player => {
      if (Complete(this.progress[player])) {
        const endgame = this.GenerateEndgame();
        this.GameEnded(endgame);
        return;
      }
    });
  }

  private UpdateProgress() {
    this.players.forEach(player => {
      const opponent = this.opponent[player];
      const targetAnswer = this.answers[opponent];
      const playerGuess = this.currentGuess[player];
      const opponentGuess = this.currentGuess[opponent];
      UpdateTargetProgress(this.progress[player], playerGuess, targetAnswer);
      UpdateTargetProgress(this.progress[player], opponentGuess, targetAnswer);
    });
  }

  private SendKnowledge(player: PlayerId) {
    const opponent = this.opponent[player];
    const targetAnswer = this.answers[opponent];
    const playerGuess = this.currentGuess[player];
    const opponentGuess = this.currentGuess[opponent];
    const playerKnowledge = GetKnowledge(playerGuess, targetAnswer);
    const opponentKnowledge = GetKnowledge(opponentGuess, targetAnswer);
    const update = new UpdatedAnswerKnowledge(
      playerKnowledge,
      opponentKnowledge,
      this.progress[opponent],
      this.progress[player]
    );
    this.updateKnowledgeCallback(player, update);
  }

  private ClearGuesses() {
    this.players.forEach(player => {
      delete this.currentGuess[player];
    });
  }

  RegisterGuess(player: PlayerId, guess: Word) {
    this.currentGuess[player] = guess;
    if (Object.keys(this.currentGuess).length < 2) {
      return;
    }
    this.SendUpdatedKnowledge();
  }
}

function UpdateTargetProgress(
  progress: TargetProgress,
  guess: Word,
  answer: Word
) {
  progress.UpdateProgress(GetKnowledge(guess, answer));
}
