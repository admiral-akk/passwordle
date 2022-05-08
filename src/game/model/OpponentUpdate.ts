export enum OpponentUpdateType {
  AddChar,
  Delete,
  Submit,
}

export class OpponentUpdate {
  constructor(
    public type: OpponentUpdateType,
    public wordIndex: number,
    public charIndex: number
  ) {}
}
