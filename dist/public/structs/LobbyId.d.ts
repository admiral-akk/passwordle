declare const validLobbyId: unique symbol;
export declare type LobbyId = string & {
    [validLobbyId]: true;
};
export declare function ToLobbyId(id: string): LobbyId;
export declare function GenerateRandomLobbyId(): LobbyId;
export declare function FetchLobbyId(): LobbyId | null;
export {};
