import {
  Complete,
  TargetProgress,
  UpdateProgress,
} from '../../structs/TargetProgress';
import {GetKnowledge} from '../logic/WordleLogic';
import {Word} from '../../structs/Word';
import {PlayerId} from '../../structs/PlayerId';
import {UpdatedAnswerKnowledge} from './updates/Updates';
import {EndGameSummary} from '../../structs/EndGameState';

export class KnowledgeExchangeServer {
  private progress: Record<PlayerId, TargetProgress> = {};
  private opponent: Record<PlayerId, PlayerId> = {};
  private currentGuess: Record<PlayerId, Word> = {};
  private guessCount = 0;

  constructor(
    private players: PlayerId[],
    private answers: Record<PlayerId, Word>,
    private updateKnowledgeCallback: (
      playerId: PlayerId,
      update: UpdatedAnswerKnowledge
    ) => void,
    private GameEnded: () => void
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

  private CheckEndGame() {
    this.players.forEach(player => {
      if (Complete(this.progress[player])) {
        this.GameEnded();
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

  private IsEndGame(): boolean {
    if (
      this.players.filter(player => Complete(this.progress[player])).length > 0
    ) {
      return true;
    }
    if (this.guessCount === 6) {
      return true;
    }
    return false;
  }

  private GenerateSummary(player: PlayerId): EndGameSummary | null {
    if (!this.IsEndGame()) {
      return null;
    }
    const opponent = this.opponent[player];
    return new EndGameSummary(
      this.answers[player],
      this.answers[opponent],
      this.progress[player],
      this.progress[opponent]
    );
  }

  private SendKnowledge(player: PlayerId) {
    const opponent = this.opponent[player];
    const targetAnswer = this.answers[opponent];
    const playerGuess = this.currentGuess[player];
    const opponentGuess = this.currentGuess[opponent];
    const playerKnowledge = GetKnowledge(playerGuess, targetAnswer);
    const opponentKnowledge = GetKnowledge(opponentGuess, targetAnswer);
    const endgame: EndGameSummary | null = this.GenerateSummary(player);
    const update = new UpdatedAnswerKnowledge(
      playerKnowledge,
      opponentKnowledge,
      this.progress[opponent],
      this.progress[player],
      endgame
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
    this.guessCount++;
    this.SendUpdatedKnowledge();
  }
}

function UpdateTargetProgress(
  progress: TargetProgress,
  guess: Word,
  answer: Word
) {
  UpdateProgress(progress, GetKnowledge(guess, answer));
}
