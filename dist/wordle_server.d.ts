import { GameStateMessage, INetworkMessage } from './public/network_events';
export declare class WordleServer {
    private _games;
    private _awaitingMatch;
    constructor();
    HandleEvent(body: INetworkMessage): Promise<INetworkMessage>;
    HandlePoll(body: INetworkMessage): Promise<GameStateMessage>;
    private NewGame;
    private Guess;
}
