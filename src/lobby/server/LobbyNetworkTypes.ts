import {Socket as ServerSocket} from 'socket.io';
import {Socket as ClientSocket} from 'socket.io-client';
import {EndGameState} from '../../game/client/view/subview/EndGameView';
import {InterServerEvents, SocketData} from '../../NetworkTypes';
export type LobbyClientSocket = ClientSocket<
  LobbyClientRequests,
  LobbyServerRequests
>;
export type LobbyServerSocket = ServerSocket<
  LobbyServerRequests,
  LobbyClientRequests,
  InterServerEvents,
  SocketData
>;

// Things to ask the client/view to do
export interface LobbyClientRequests {
  EnterMenu: (lobbyId: string) => void;
  MatchFound: (lobbyId: string) => void;
  GameEnded: (ending: EndGameState) => void;
}

// Things to ask the server/view to do
export interface LobbyServerRequests {
  FindMatch: () => void;
  JoinLobby: (lobbyId: string) => void;
}
