import { HintUpdate } from '../HintUpdate';
import { OpponentUpdate } from '../OpponentUpdate';
import { BoardView } from './BoardView';
export declare class OpponentBoardView extends BoardView {
    constructor(base: HTMLDivElement);
    OpponentUpdate(update: OpponentUpdate): void;
    HintUpdate(update: HintUpdate): void;
}
