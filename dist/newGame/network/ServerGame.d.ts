import { GameServerSocket } from './GameNetworkTypes';
import { PlayerId } from '../../PlayerId';
import { ClientGameMirror } from './ClientGameMirror';
import { KnowledgeExchangeServer } from './KnowledgeUpdateServer';
export declare class ServerGame {
    playerClient: Record<PlayerId, ClientGameMirror>;
    exchangeServer: KnowledgeExchangeServer;
    constructor(sockets: GameServerSocket[]);
}
