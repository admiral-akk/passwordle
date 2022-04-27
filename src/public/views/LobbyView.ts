export class LobbyView {
  constructor() {
    const top = document.getElementById('lobby');
    const startGame = document.createElement('button');
    top?.appendChild(startGame);
  }
}