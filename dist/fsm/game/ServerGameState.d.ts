import { Word } from '../../game/structs/Word';
import { PlayerId } from '../../PlayerId';
import { ClientGameState } from './ClientGameState';
import { PlayerBoard } from './PlayerBoard';
export declare class ServerGameState {
    boards: Record<PlayerId, PlayerBoard>;
    answers: Record<PlayerId, Word>;
    clients: Record<PlayerId, ClientGameState>;
    opponent: Record<PlayerId, PlayerId>;
    constructor(players: PlayerId[]);
    private addChar;
    private submit;
    private delete;
}
