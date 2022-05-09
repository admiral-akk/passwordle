import {LobbyState} from '../../../public/PlayerState';
import {LobbyId} from '../../LobbyId';
import {LobbyClientSocket} from '../../server/LobbyNetworkTypes';
import {MatchState} from '../match/MatchState';
import {Modal} from '../Modal';

export class FindingMatchState extends LobbyState {
  private modal: FindingMatchModal = new FindingMatchModal();

  protected Enter(): void {}
  public Exit(): Promise<void> {
    return this.modal.Exit();
  }
  protected Register(socket: LobbyClientSocket): void {
    socket.on('MatchFound', (lobbyId: LobbyId) => {
      this.MatchFound(lobbyId);
    });
  }
  protected Deregister(socket: LobbyClientSocket): void {
    socket.removeAllListeners('MatchFound');
  }

  MatchFound(lobbyId: LobbyId) {
    this.SwitchState(new MatchState(lobbyId));
  }
}

class FindingMatchModal extends Modal {
  constructor() {
    super();
    this.AddDiv('finding', 'Finding Match...');
  }
}
