import {LetterState} from './LetterState';

export class WordKnowledge {
  public letterKnowledge: LetterState[];
  public guess: string;
  constructor(letterKnowledge: LetterState[], guess: string) {
    this.letterKnowledge = letterKnowledge;
    this.guess = guess;
  }
}
