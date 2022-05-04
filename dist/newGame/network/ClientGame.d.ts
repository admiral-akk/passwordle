import { GameClientSocket, NewGameServerToClientEvents } from './GameNetworkTypes';
import { AddedChar, UpdatedAnswerKnowledge } from './updates/Updates';
export declare class ClientGame implements NewGameServerToClientEvents {
    private socket;
    private board;
    private view;
    constructor(socket: GameClientSocket);
    OpponentAddedChar(): void;
    UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge): void;
    AddChar(char: string): AddedChar;
}
