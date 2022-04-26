import { GameStateMessage, INetworkMessage } from './public/network_events';
export declare class WordleServer {
    private _games;
    constructor();
    HandleEvent(body: INetworkMessage): Promise<INetworkMessage>;
    HandlePoll(body: INetworkMessage): Promise<GameStateMessage>;
    private NewGame;
    private Guess;
}
