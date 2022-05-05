"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
class Modal {
    AddButton(parent, name, callback) {
        const button = document.createElement('button');
        button.style.display = 'none';
        button.className = 'host-button';
        button.innerText = name;
        button.addEventListener('click', callback);
        parent.appendChild(button);
        return button;
    }
    AddDiv(parent, text) {
        const div = document.createElement('div');
        div.style.display = 'none';
        div.innerText = text;
        parent.appendChild(div);
        return div;
    }
}
exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map