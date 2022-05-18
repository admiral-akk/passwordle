import { GameServerSocket } from '../../network/GameNetworkTypes';
import { PlayerId } from '../../structs/PlayerId';
export declare class GameServer {
    private gameValidators;
    private gameUpdaters;
    private games;
    PlayerDisconnected(playerId: PlayerId): void;
    StartGame(playerSockets: GameServerSocket[]): void;
    ClearGame(players: PlayerId[]): void;
}
