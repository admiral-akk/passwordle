import {LetterState} from '../../client/structs/LetterState';

export interface BoardView {
  SetCharKnowledge(
    wordIndex: number,
    charIndex: number,
    char: string,
    knowledge: LetterState
  ): void;
}
