"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const Animate_1 = require("../../game/model/view/Animate");
class Modal {
    constructor() {
        this.elements = [];
        this.popup = null;
        const root = document.getElementById('lobby');
        const background = this.AddRootDiv(root, 'background');
        this.base = this.AddRootDiv(background, 'modal');
    }
    Exit() {
        return new Promise(() => this.elements.forEach(element => element.remove()));
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
    AddPopup(target, text, durationMilliseconds = 1500) {
        if (this.popup) {
            return;
        }
        this.popup = document.createElement('div');
        this.popup.className = 'popup';
        this.popup.innerText = text;
        target.appendChild(this.popup);
        this.elements.push(this.popup);
        (0, Animate_1.AnimateCSS)(this.popup, Animate_1.AnimationType.BounceIn, 0.5);
        new Promise(resolve => setTimeout(resolve, durationMilliseconds - 500))
            .then(() => {
            if (!this.popup) {
                return;
            }
            (0, Animate_1.AnimateCSS)(this.popup, Animate_1.AnimationType.FadeOut, 0.5);
            return new Promise(resolve => setTimeout(resolve, 450));
        })
            .then(() => {
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