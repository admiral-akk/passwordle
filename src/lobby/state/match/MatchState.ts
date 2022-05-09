import {LobbyState} from '../../../public/PlayerState';
import {LobbyId} from '../../LobbyId';
import {LobbyClientSocket} from '../../server/LobbyNetworkTypes';
import {Modal} from '../Modal';

export class MatchState extends LobbyState {
  private modal: MatchModal = new MatchModal();

  protected Enter(): void {}
  public Exit(): Promise<void> {
    return this.modal.Exit();
  }
  protected Register(socket: LobbyClientSocket): void {}
  protected Deregister(socket: LobbyClientSocket): void {}

  constructor(private lobbyId: LobbyId) {
    super();
  }
}

class MatchModal extends Modal {
  constructor() {
    super();
    this.AddDiv('match', 'Match Found! Entering game!');
  }
}
