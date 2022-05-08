import { GameServerSocket } from './GameNetworkTypes';
import { PlayerId } from '../../PlayerId';
import { ClientGameMirror } from './ClientGameMirror';
import { KnowledgeExchangeServer } from './KnowledgeUpdateServer';
import { EndGameState } from '../EndGameState';
export declare class ServerGame {
    private GameEnded;
    playerClient: Record<PlayerId, ClientGameMirror>;
    exchangeServer: KnowledgeExchangeServer;
    constructor(sockets: GameServerSocket[], GameEnded: (ending: Record<PlayerId, EndGameState>) => void);
}
