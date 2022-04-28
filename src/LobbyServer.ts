import express from 'express';
import {
  FIND_MATCH_ENDPOINT_NAME,
  HOST_LOBBY_ENDPOINT_NAME,
} from './public/lobby/LobbyNetwork';
import {ClientId} from './public/struct/ClientId';

export class LobbyServer {
  private lobbyIds: string[];
  private privateLobbyIds: string[];
  private publicLobbyIds: string[];

  constructor() {
    this.lobbyIds = [];
    this.privateLobbyIds = [];
    this.publicLobbyIds = [];
  }

  RegisterLobbyHandlers(app: express.Application): void {
    app.post(HOST_LOBBY_ENDPOINT_NAME, (req, res) => this.HostLobby(req, res));
    app.post(FIND_MATCH_ENDPOINT_NAME, (req, res) => this.FindMatch(req, res));
  }

  private FindMatch(req: express.Request, res: express.Response): void {
    const lobbyId = GenerateLobbyId(this.lobbyIds);
    console.log(`Creating new public lobby: ${lobbyId}`);
    this.lobbyIds.push(lobbyId);
    this.publicLobbyIds.push(lobbyId);
    res.json(new ClientId(lobbyId));
  }

  private HostLobby(req: express.Request, res: express.Response): void {
    const lobbyId = GenerateLobbyId(this.lobbyIds);
    console.log(`Creating new private lobby: ${lobbyId}`);
    this.lobbyIds.push(lobbyId);
    this.privateLobbyIds.push(lobbyId);
    res.json(new ClientId(lobbyId));
  }
}

function GenerateLobbyId(takenIds: string[]): string {
  let lobbyId: string;
  do {
    lobbyId = Math.floor(Math.random() * 10000).toString();
  } while (lobbyId in takenIds);
  return lobbyId;
}
