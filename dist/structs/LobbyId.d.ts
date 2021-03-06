import { LobbyServerSocket } from '../network/LobbyNetworkTypes';
declare const validLobbyId: unique symbol;
export declare type LobbyId = string & {
    [validLobbyId]: true;
};
export declare function FindLobbyIdInURL(): LobbyId | null;
export declare function GenerateLobbyLink(lobbyId: LobbyId): string;
export declare function GenerateLobbyId(socket: LobbyServerSocket): LobbyId;
export {};
