import { CharUpdate } from '../CharUpdate';
import { HintUpdate } from '../HintUpdate';
import { BoardView } from './BoardView';
export declare class PlayerBoardView extends BoardView {
    constructor(base: HTMLDivElement);
    Update(update: CharUpdate): void;
    HintUpdate(update: HintUpdate): void;
}
