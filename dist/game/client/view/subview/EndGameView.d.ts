import { Subview } from '../../../model/view/Subview';
export declare enum EndGameState {
    Lost = 0,
    Won = 1,
    Tied = 2,
    Disconnected = 3
}
export declare class EndGameView extends Subview {
    constructor(base: HTMLElement);
    GameOver(state: EndGameState): void;
    Reset(): void;
}
