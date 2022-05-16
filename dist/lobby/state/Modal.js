"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
class Modal {
    constructor(containerName) {
        this.elements = [];
        const root = document.getElementById('lobby');
        const background = this.AddDiv('background', '', root);
        const base = this.AddDiv('modal', '', background);
        this.container = this.AddDiv(`${containerName}-container`, '', base);
    }
    Exit() {
        return Promise.resolve(this.elements.forEach(element => element.remove()));
    }
    AddButton(className, text, callback, parent) {
        const button = document.createElement('button');
        button.className = className;
        button.innerText = text;
        button.onclick = callback;
        this.AppendChild(button, parent);
        return button;
    }
    AppendChild(child, parent) {
        if (parent) {
            parent.appendChild(child);
        }
        else {
            this.container.appendChild(child);
        }
        this.elements.push(child);
    }
    AddDiv(className, text, parent) {
        const div = document.createElement('div');
        div.className = className;
        div.innerText = text ? text : '';
        this.AppendChild(div, parent);
        return div;
    }
    AddParagraph(className, text = '', parent) {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = text;
        paragraph.className = className;
        this.AppendChild(paragraph, parent);
        return paragraph;
    }
}
exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map