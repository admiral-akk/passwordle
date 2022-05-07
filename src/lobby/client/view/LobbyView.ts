import {EndGameState} from '../../../game/client/view/subview/EndGameView';
import {FindingMatchModal} from './modal/FindingMatchModal';
import {GameEndedModal} from './modal/GameEndedModal';
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

  GameEnded(ending: EndGameState) {
    this.background.style.display = 'block';
    console.log('Game ended modal triggered!');
    this.SetModal(new GameEndedModal(this.modal, ending));
  }

  Menu(hostLobby: () => void, matchmake: () => void): void {
    this.SetModal(new MenuModal(this.modal, hostLobby, matchmake));
  }

  FindingMatch() {
    this.SetModal(new FindingMatchModal(this.modal));
  }

  LobbyReady() {
    this.SetModal(new LobbyReadyModal(this.modal));
  }

  InGame() {
    if (this.currentModal) {
      this.currentModal.Exit();
    }
    this.currentModal = null;
    this.background.style.display = 'none';
  }
}
