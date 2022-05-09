"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPopup = void 0;
const Animate_1 = require("./Animate");
function AddPopup(target, text, durationSeconds = 1.5) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerText = text;
    target.appendChild(popup);
    (0, Animate_1.AnimateCSS)(popup, Animate_1.AnimationType.BounceIn, 0.5)
        .then(() => new Promise(resolve => setTimeout(resolve, 1000 * (durationSeconds - 1))))
        .then(() => {
        (0, Animate_1.AnimateCSS)(popup, Animate_1.AnimationType.FadeOut, 0.5);
        return new Promise(resolve => setTimeout(resolve, 450));
    })
        .finally(() => popup.remove());
}
exports.AddPopup = AddPopup;
//# sourceMappingURL=Popup.js.map