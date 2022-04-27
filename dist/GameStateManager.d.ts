import { GameState } from './public/structs/GameState';
import { NewMove } from './public/structs/Move';
import { PlayerId } from './public/structs/PlayerId';
export declare class GameStateManager {
    private gameState;
    private player1Id;
    private player2Id;
    private answer1;
    private answer2;
    private state;
    private GenerateAnswer;
    constructor(players: PlayerId[]);
    SubmitMove(move: NewMove): void;
    GetState(player: string): GameState;
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
import { WordKnowledge } from './public/knowledge';
export declare function GetKnowledge(guess: string, answer: string): WordKnowledge;
