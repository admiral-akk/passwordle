import { GameState } from '../model/GameState';
import { UpdatedAnswerKnowledge } from '../network/Updates';
import { ClientSocket } from '../../client/ClientNetworking';
import { EndGameSummary } from '../../structs/EndGameState';
export declare class ClientGame extends GameState {
    private socket;
    private gameEnd;
    private validator;
    private updater;
    private clientState;
    StartGame(): void;
    constructor(socket: ClientSocket, gameEnd: (endGame: EndGameSummary) => void);
    private SubmitRandomGuess;
    private Input;
    OpponentDisconnected(endGameSummary: EndGameSummary): void;
    EndGame(endGameSummary: EndGameSummary): Promise<void>;
    UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge): Promise<void>;
}
