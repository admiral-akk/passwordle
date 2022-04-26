export declare class WordleServer {
    private _games;
    constructor();
    HandleEvent(body: any): Promise<any>;
    HandlePoll(body: any): Promise<any>;
    private NewGame;
    private Guess;
}
