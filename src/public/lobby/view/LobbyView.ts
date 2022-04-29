import {FindingMatchModal} from './modal/FindingMatchModal';
import {HostingModal} from './modal/HostingModal';
import {LobbyReadyModal} from './modal/LobbyReadyModal';
import {MenuModal} from './modal/MenuModal';
import {Modal} from './modal/Modal';

export class LobbyView {
  private root: HTMLElement;
  private background: HTMLDivElement;
  private modal: HTMLDivElement;

  // Using https://gameprogrammingpatterns.com/state.html pattern here.
  private currentModal: Modal | null;

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

  private SetModal(newModal: Modal) {
    if (this.currentModal) {
      this.currentModal.Exit();
    }
    this.currentModal = newModal;
    this.currentModal.Enter();
  }

  Menu(hostLobby: () => void, matchmake: () => void): void {
    this.SetModal(new MenuModal(this.modal, hostLobby, matchmake));
  }

  HostingMatch(link: string) {
    this.SetModal(new HostingModal(this.modal, () => CopyToClipboard(link)));
  }

  FindingMatch() {
    this.SetModal(new FindingMatchModal(this.modal));
  }

  LobbyReady() {
    this.SetModal(new LobbyReadyModal(this.modal));
  }
}

function CopyToClipboard(url: string) {
  navigator.clipboard.writeText(url);
}
