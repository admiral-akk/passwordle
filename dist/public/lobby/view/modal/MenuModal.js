"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuModal = void 0;
class MenuModal {
    constructor(modal, hostLobby, matchmake) {
        this.privateGame = AddButton(modal, 'Private Game', hostLobby);
        this.publicGame = AddButton(modal, 'Join Random Game', matchmake);
    }
    Enter() {
        this.privateGame.style.display = 'block';
        this.publicGame.style.display = 'block';
    }
    Exit() {
        this.privateGame.remove();
        this.publicGame.remove();
    }
}
exports.MenuModal = MenuModal;
function AddButton(parent, name, callback) {
    const button = document.createElement('button');
    button.style.display = 'none';
    button.className = 'host-button';
    button.innerText = name;
    button.addEventListener('click', callback);
    parent.appendChild(button);
    return button;
}
//# sourceMappingURL=MenuModal.js.map