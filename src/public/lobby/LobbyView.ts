export class LobbyView {
  constructor(hostLobby: () => void, matchmake: () => void) {
    const lobby = document.getElementById('lobby');
    const background = document.createElement('div');
    const modal = document.createElement('div');
    modal.className = 'modal';
    AddButton(modal, 'Private Game', hostLobby);
    AddButton(modal, 'Join Random Game', matchmake);
    background.appendChild(modal);
    background.className = 'background';
    lobby?.appendChild(background);
  }
}

function AddButton(parent: HTMLElement, name: string, callback: () => void) {
  const button = document.createElement('button');
  button.className = 'host-button';
  button.innerText = name;
  button.addEventListener('click', callback);
  parent.appendChild(button);
}
