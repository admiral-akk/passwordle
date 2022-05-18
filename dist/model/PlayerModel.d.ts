import { LobbyId } from '../structs/LobbyId';
declare enum LobbyState {
    None = 0,
    InLobby = 1,
    InGame = 2
}
export declare class LobbyModel {
    state: LobbyState;
    lobbyId?: LobbyId;
    playerCount: number;
    rematchRequestCount: number;
    requestedRematch: boolean;
    CreatedLobby(lobbyId: LobbyId): void;
    JoinedLobby(lobbyId: LobbyId): void;
    TheyJoinedLobby(): void;
    StartedGame(): void;
    GameFinished(yourPassword: AnnotatedWord, theirPassword: AnnotatedWord): void;
    RequestedRematch(): void;
    TheyRequestedRematch(): void;
    RematchRejected(lobbyId: LobbyId): void;
}
export declare enum GameState {
    None = 0,
    Empty = 1,
    CanSubmit = 2,
    Waiting = 3,
    Gameover = 4
}
export declare class GameModel {
    state: GameState;
    currentGuess: string;
    theirCharCount: number;
    yourGuesses: AnnotatedWord[];
    theirGuesses: AnnotatedWord[];
    theyLocked: boolean;
    yourPassword: string;
    GameStart(): void;
    Added(char: string): void;
    Deleted(): void;
    Locked(): void;
    TheyAdded(): void;
    TheyDeleted(): void;
    TheyLocked(): void;
    ShowTheirGuess(theirGuess: string): void;
    UpdateInformation(yourGuessKnowledge: Knowledge[], theirGuessKnowledge: Knowledge[]): void;
    RandomGuess(guess: string): void;
    Gameover(): void;
    SetYourPassword(password: string): void;
}
export declare enum Knowledge {
    None = 0,
    NotInWord = 1,
    WrongPosition = 2,
    Correct = 3
}
export declare class AnnotatedWord {
    word: string;
    annotation: Knowledge[];
    constructor(word: string, annotation?: Knowledge[]);
}
export {};
