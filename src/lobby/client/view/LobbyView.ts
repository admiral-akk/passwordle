import {FindingMatchModal} from './modal/FindingMatchModal';
import {GameEndedModal} from './modal/GameEndedModal';
import {HostingModal} from './modal/HostingModal';
import {LoadingModal} from './modal/LoadingModal';
import {LobbyReadyModal} from './modal/LobbyReadyModal';
import {MenuModal} from './modal/MenuModal';
import {BaseModal} from './modal/Modal';

export class LobbyView {
  private root: HTMLElement;
  private background: HTMLDivElement;
  private modal: HTMLDivElement;

  // Using https://gameprogrammingpatterns.com/state.html pattern here.
  private currentModal: BaseModal | null;

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

  private SetModal(newModal: BaseModal) {
    if (this.currentModal) {
      this.currentModal.Exit();
    }
    this.currentModal = newModal;
    this.currentModal.Enter();
  }

  Loading() {
    this.SetModal(new LoadingModal(this.modal));
  }

  GameEnded() {
    console.log('Game ended modal triggered!');
    this.SetModal(new GameEndedModal(this.modal));
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

  RematchMenu() {
    this.modal.style.display = 'block';
    this.background.style.display = 'block';
    this.root.style.display = 'block';
  }

  InGame() {
    if (this.currentModal) {
      this.currentModal.Exit();
    }
    this.currentModal = null;
    this.modal.style.display = 'none';
    this.background.style.display = 'none';
    this.root.style.display = 'none';
  }
}

function CopyToClipboard(url: string) {
  navigator.clipboard.writeText(url);
}
