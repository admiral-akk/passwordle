import {GameServerToClientEvents} from './game/client/GameNetworkEvents';
import {
  LobbyClientToServerEvents,
  LobbyServerToClientEvents,
} from './lobby/client/LobbyNetworkEvents';
import {Lobby} from './lobby/Lobby';

export interface ServerToClientEvents
  extends LobbyServerToClientEvents,
    GameServerToClientEvents {}
export interface ClientToServerEvents
  extends LobbyClientToServerEvents,
    GameServerToClientEvents {}

export interface InterServerEvents {
  HandoffLobby: (lobby: Lobby) => void;
}
export interface SocketData {
  name: string;
}
