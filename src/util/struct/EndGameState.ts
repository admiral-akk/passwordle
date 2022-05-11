import {TargetProgress} from '../../game/client/structs/TargetProgress';
import {Word} from '../../game/structs/Word';

export class EndGameState {
  constructor(
    public yourPassword: Word,
    public opponentPassword: Word,
    public yourProgress: TargetProgress,
    public opponentProgress: TargetProgress
  ) {}
}
