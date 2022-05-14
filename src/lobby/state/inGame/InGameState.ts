import {LobbyState} from '../../../client/PlayerState';
import {LobbyClientSocket} from '../../../network/LobbyNetworkTypes';
import {Modal} from '../Modal';

export class InGameState extends LobbyState {
  public Exit(): Promise<void> {
    return this.modal.Exit();
  }
  private modal: InGameModal = new InGameModal();

  protected Enter(): void {}

  protected Register(socket: LobbyClientSocket): void {}
  protected Deregister(socket: LobbyClientSocket): void {}

  constructor() {
    super();
  }
}

class InGameModal extends Modal {
  private text: HTMLDivElement;

  constructor() {
    super();
    this.text = this.AddDiv('loading', 'In game!');
  }
}
