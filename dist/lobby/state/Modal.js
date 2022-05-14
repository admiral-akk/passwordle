"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const Animate_1 = require("../../game/model/view/Animate");
class Modal {
    constructor() {
        this.elements = [];
        this.popup = null;
        const root = document.getElementById('lobby');
        const background = this.AddRootDiv(root, 'background2');
        this.base = this.AddRootDiv(background, 'modal2');
    }
    Exit() {
        return Promise.resolve(this.elements.forEach(element => element.remove()));
    }
    AddButton(base = this.base, className, text, callback) {
        const button = document.createElement('button');
        button.className = className;
        button.innerText = text;
        button.onclick = callback;
        base.appendChild(button);
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
    AddPopup(target, text, durationSeconds = 1.5) {
        if (this.popup) {
            return;
        }
        this.popup = document.createElement('div');
        this.popup.className = 'popup';
        this.popup.innerText = text;
        target.appendChild(this.popup);
        this.elements.push(this.popup);
        (0, Animate_1.AnimateCSS)(this.popup, Animate_1.AnimationType.BounceIn, 0.5)
            .then(() => new Promise(resolve => setTimeout(resolve, 1000 * (durationSeconds - 1))))
            .then(() => {
            if (!this.popup) {
                return;
            }
            (0, Animate_1.AnimateCSS)(this.popup, Animate_1.AnimationType.FadeOut, 0.5);
            return new Promise(resolve => setTimeout(resolve, 450));
        })
            .finally(() => {
            if (!this.popup) {
                return;
            }
            if (this.elements.indexOf(this.popup) > -1) {
                this.elements.splice(this.elements.indexOf(this.popup));
            }
            this.popup.remove();
            this.popup = null;
        });
    }
}
exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map