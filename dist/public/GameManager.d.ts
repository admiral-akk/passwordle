export declare class GameManager {
    private state;
    private network;
    private playerBoard;
    private opponentBoard;
    private input;
    constructor();
}
export declare enum PlayerActions {
    JoinLobby = 0,
    StartLobby = 1,
    EnterGuess = 2,
    DeleteChar = 3,
    AddChar = 4,
    CopyLobbyLink = 5
}
export declare enum GameActions {
    SendState = 0,
    SendGameId = 1,
    SendResults = 2,
    RequestState = 3
}
