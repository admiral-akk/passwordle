import { CharUpdate } from '../CharUpdate';
import { BoardView } from './BoardView';
export declare class PlayerBoardView extends BoardView {
    constructor(base: HTMLDivElement);
    Update(update: CharUpdate): void;
}
