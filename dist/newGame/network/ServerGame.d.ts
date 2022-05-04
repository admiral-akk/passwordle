import { GameServerSocket } from './GameNetworkTypes';
import { PlayerId } from '../../PlayerId';
import { ServerBoard } from '../model/ServerBoard';
import { ClientGameMirror } from './ClientGameMirror';
import { AddedChar } from './updates/Updates';
export declare class ServerGame {
    opponent: Record<PlayerId, PlayerId>;
    playerClient: Record<PlayerId, ClientGameMirror>;
    board: ServerBoard;
    constructor(sockets: GameServerSocket[]);
    addedChar(player: PlayerId, update: AddedChar): void;
}
