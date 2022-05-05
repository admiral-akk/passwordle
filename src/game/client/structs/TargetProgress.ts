import {LetterState} from './LetterState';
import {WordKnowledge} from './WordKnowledge';

export class TargetProgress {
  public knownCharacters: string[];
  constructor(knownCharacters: string[] = ['', '', '', '', '']) {
    this.knownCharacters = knownCharacters;
  }

  UpdateProgress(knowledge: WordKnowledge) {
    for (let i = 0; i < knowledge.guess.length; i++) {
      if (knowledge.letterKnowledge[i] === LetterState.Green) {
        this.knownCharacters[i] = knowledge.guess[i];
      }
    }
  }
}
