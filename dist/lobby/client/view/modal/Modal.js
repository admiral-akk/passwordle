"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModal = void 0;
class BaseModal {
    constructor() {
        this.elementsAdded = [];
    }
    Enter() {
        this.elementsAdded.forEach(element => (element.style.display = 'block'));
    }
    Exit() {
        this.elementsAdded.forEach(element => element.remove());
    }
    AddButton(parent, className, name, callback) {
        const button = document.createElement('button');
        button.style.display = 'none';
        button.className = className;
        button.innerText = name;
        button.addEventListener('click', callback);
        parent.appendChild(button);
        this.elementsAdded.push(button);
        return button;
    }
    AddDiv(parent, text, className = '') {
        const div = document.createElement('div');
        div.style.display = 'none';
        div.innerText = text;
        if (className !== '') {
            div.className = className;
        }
        parent.appendChild(div);
        this.elementsAdded.push(div);
        return div;
    }
}
exports.BaseModal = BaseModal;
//# sourceMappingURL=Modal.js.map