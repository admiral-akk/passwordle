import { HintUpdate } from '../HintUpdate';
import { BoardView } from './BoardView';
export declare class OpponentBoardView extends BoardView {
    constructor(base: HTMLDivElement);
    HintUpdate(update: HintUpdate): void;
}
