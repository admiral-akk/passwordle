"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
class Modal {
    constructor() {
        this.elements = [];
        const root = document.getElementById('lobby');
        const background = this.AddRootDiv(root, 'background');
        this.base = this.AddRootDiv(background, 'modal');
    }
    Exit() {
        this.elements.forEach(element => element.remove());
    }
    AddButton(className, text, callback) {
        const button = document.createElement('button');
        button.className = className;
        button.innerText = text;
        button.onclick = callback;
        this.base.appendChild(button);
        this.elements.push(button);
        return button;
    }
    AddRootDiv(root, className, text = '') {
        const div = document.createElement('div');
        div.className = className;
        div.innerText = text;
        root.appendChild(div);
        this.elements.push(div);
        return div;
    }
    AddDiv(className, text = '') {
        return this.AddRootDiv(this.base, className, text);
    }
}
exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map