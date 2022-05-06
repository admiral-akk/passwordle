import {BaseModal} from './Modal';

export class MenuModal extends BaseModal {
  constructor(
    modal: HTMLDivElement,
    hostLobby: () => void,
    matchmake: () => void
  ) {
    super();
    const privateDiv = this.AddDiv(modal, '', 'private-game');
    this.AddButton(
      privateDiv,
      'private-game',
      'Copy Link to Clipboard',
      hostLobby
    );
    const publicDiv = this.AddDiv(modal, '', 'public-game');
    this.AddButton(publicDiv, 'public-game', 'Join Random Game', matchmake);
  }
}
