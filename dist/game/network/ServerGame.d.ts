import { GameServerSocket } from './GameNetworkTypes';
import { PlayerId } from '../../structs/PlayerId';
import { ClientGameMirror } from './ClientGameMirror';
import { KnowledgeExchangeServer } from './KnowledgeUpdateServer';
export declare class ServerGame {
    private GameEnded;
    playerClient: Record<PlayerId, ClientGameMirror>;
    exchangeServer: KnowledgeExchangeServer;
    constructor(sockets: GameServerSocket[], GameEnded: () => void);
}
