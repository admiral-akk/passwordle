"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyView = void 0;
class LobbyView {
    constructor(hostLobby, matchmake) {
        const lobby = document.getElementById('lobby');
        const background = document.createElement('div');
        const modal = document.createElement('div');
        modal.className = 'modal';
        AddButton(modal, 'Private Game', hostLobby);
        AddButton(modal, 'Join Random Game', matchmake);
        background.appendChild(modal);
        background.className = 'background';
        lobby === null || lobby === void 0 ? void 0 : lobby.appendChild(background);
    }
}
exports.LobbyView = LobbyView;
function AddButton(parent, name, callback) {
    const button = document.createElement('button');
    button.className = 'host-button';
    button.innerText = name;
    button.addEventListener('click', callback);
    parent.appendChild(button);
}
//# sourceMappingURL=LobbyView.js.map