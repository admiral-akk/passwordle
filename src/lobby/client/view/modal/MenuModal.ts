import {BaseModal} from './Modal';

export class MenuModal extends BaseModal {
  private privateGame: HTMLButtonElement;
  private publicGame: HTMLButtonElement;

  constructor(
    modal: HTMLDivElement,
    hostLobby: () => void,
    matchmake: () => void
  ) {
    super();
    this.privateGame = this.AddButton(
      modal,
      'Copy Link to Clipboard',
      hostLobby
    );
    this.publicGame = this.AddButton(modal, 'Join Random Game', matchmake);
  }

  Enter(): void {
    this.privateGame.style.display = 'block';
    this.publicGame.style.display = 'block';
  }

  Exit(): void {
    this.privateGame.remove();
    this.publicGame.remove();
  }
}
