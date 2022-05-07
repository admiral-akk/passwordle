import {Socket} from 'socket.io-client';

export interface LobbyServerSentEvents {
  LookingForMatch: () => void;
  MatchFound: () => void;
}
export interface LobbyClientSentEvents {
  RequestMatch: () => void;
}

export type LobbySocket = Socket<LobbyServerSentEvents, LobbyClientSentEvents>;

export function Register(socket: LobbySocket, handler: LobbyServerSentEvents) {}
