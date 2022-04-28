import {ModalView} from './ModalView';

export class LobbyMenuView implements ModalView {
  private privateGame: HTMLButtonElement;
  private publicGame: HTMLButtonElement;

  constructor(
    modal: HTMLDivElement,
    hostLobby: () => void,
    matchmake: () => void
  ) {
    this.privateGame = AddButton(modal, 'Private Game', hostLobby);
    this.publicGame = AddButton(modal, 'Join Random Game', matchmake);
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

function AddButton(
  parent: HTMLElement,
  name: string,
  callback: () => void
): HTMLButtonElement {
  const button = document.createElement('button');
  button.style.display = 'none';
  button.className = 'host-button';
  button.innerText = name;
  button.addEventListener('click', callback);
  parent.appendChild(button);
  return button;
}
