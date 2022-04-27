declare const validLobbyId: unique symbol;
export declare type LobbyId = string & {
    [validLobbyId]: true;
};
export declare function ToLobbyId(id: string): LobbyId;
export {};
