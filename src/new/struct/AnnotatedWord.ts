export class AnnotatedWord {
  constructor(public word: string, public annotation: Knowledge[] = []) {}
}

export enum Knowledge {
  None,
  NotInWord,
  WrongPosition,
  Correct,
}
