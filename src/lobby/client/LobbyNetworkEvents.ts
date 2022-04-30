import {Socket} from 'socket.io-client';

export interface LobbyServerToClientEvents {
  PrivateLobbyId: (lobbyId: string) => void;
  PublicLobbyId: () => void;
  LobbyReady: () => void;
  RematchRequested: () => void;
  RematchRefused: () => void;
}

export interface LobbyClientToServerEvents {
  HostPublicLobby: () => void;
  HostPrivateLobby: () => void;
  JoinPrivateLobby: (lobbyId: string) => void;
  AcceptRematch: () => void;
  RejectRematch: () => void;
}

export type LobbySocket = Socket<
  LobbyServerToClientEvents,
  LobbyClientToServerEvents
>;
