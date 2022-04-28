export class ClientId {
  public lobbyId: string;
  public playerId: string;

  constructor(lobbyId = '', playerId = '') {
    this.lobbyId = lobbyId;
    this.playerId = playerId;
  }
}
