import {LetterState} from './LetterState';
import {WordKnowledge} from './WordKnowledge';

export class TargetProgress {
  public knownCharacters: string[];
  constructor(knownCharacters: string[] = ['', '', '', '', '']) {
    this.knownCharacters = knownCharacters;
  }
}

export function UpdateProgress(
  target: TargetProgress,
  knowledge: WordKnowledge
) {
  for (let i = 0; i < knowledge.guess.length; i++) {
    if (knowledge.letterKnowledge[i] === LetterState.Correct) {
      target.knownCharacters[i] = knowledge.guess[i];
    }
  }
}

export function Complete(target: TargetProgress): boolean {
  const unfilled = target.knownCharacters.filter(c => c === '').length;
  return unfilled === 0;
}
