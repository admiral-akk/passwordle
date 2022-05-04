import { GameServerSocket } from './GameNetworkTypes';
import { PlayerId } from '../../PlayerId';
import { ClientGameMirror } from './ClientGameMirror';
export declare class ServerGame {
    opponent: Record<PlayerId, PlayerId>;
    playerClient: Record<PlayerId, ClientGameMirror>;
    constructor(sockets: GameServerSocket[]);
}
