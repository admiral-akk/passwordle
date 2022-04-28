import {LobbyMenuView} from './LobbyMenuView';
import {ModalView} from './ModalView';

export class LobbyView {
  private root: HTMLElement;
  private background: HTMLDivElement;
  private modal: HTMLDivElement;

  // Using https://gameprogrammingpatterns.com/state.html pattern here.
  private currentModal: ModalView | null;

  constructor() {
    this.root = document.getElementById('lobby')!;
    this.background = document.createElement('div');
    this.modal = document.createElement('div');
    this.modal = document.createElement('div');
    this.modal.className = 'modal';
    this.background.appendChild(this.modal);
    this.background.className = 'background';
    this.root.appendChild(this.background);

    this.currentModal = null;
  }

  private SetModal(newModal: ModalView) {
    if (this.currentModal) {
      this.currentModal.Exit();
    }
    this.currentModal = newModal;
    this.currentModal.Enter();
  }

  Menu(hostLobby: () => void, matchmake: () => void): void {
    this.SetModal(new LobbyMenuView(this.modal, hostLobby, matchmake));
  }

  HostingMatch(shareUrl: string) {}

  private CopyToClipboard(url: string) {
    navigator.clipboard.writeText(url);
  }
}

function AddButton(parent: HTMLElement, name: string, callback: () => void) {
  const button = document.createElement('button');
  button.className = 'host-button';
  button.innerText = name;
  button.addEventListener('click', callback);
  parent.appendChild(button);
}
