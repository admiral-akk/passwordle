"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPopup = exports.AnimateCSS = exports.AnimationType = void 0;
var AnimationType;
(function (AnimationType) {
    AnimationType["Pulse"] = "pulse";
    AnimationType["BounceIn"] = "bounceIn";
    AnimationType["FlipInX"] = "flipInX";
    AnimationType["HeartBeat"] = "heartBeat";
    AnimationType["ShakeX"] = "shakeX";
    AnimationType["ShakeY"] = "shakeY";
    AnimationType["FadeIn"] = "fadeIn";
    AnimationType["FadeOut"] = "fadeOut";
    AnimationType["Flash"] = "flash";
})(AnimationType = exports.AnimationType || (exports.AnimationType = {}));
const ANIMATION_DURATION_STR = '--animate-duration';
const ANIMATION_CLASS_STR = 'animate__animated';
// From https://animate.style/#javascript
function AnimateCSS(element, animation, duration = 0.5) {
    return new Promise(resolve => {
        const animationName = `animate__${animation.toString()}`;
        const node = element;
        node.style.setProperty(ANIMATION_DURATION_STR, `${duration.toFixed(2)}s`);
        node.classList.add(ANIMATION_CLASS_STR, animationName);
        function animationEnd(event) {
            event.stopPropagation();
            node.classList.remove(ANIMATION_CLASS_STR, animationName);
            resolve('Animation complete');
        }
        node.addEventListener('animationend', animationEnd, { once: true });
    });
}
exports.AnimateCSS = AnimateCSS;
function AddPopup(target, text, yPos, background, durationSeconds = 1.5) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerText = text;
    popup.style.top = `${yPos}px`;
    popup.style.backgroundColor = background;
    target.appendChild(popup);
    AnimateCSS(popup, AnimationType.BounceIn, 0.5)
        .then(() => new Promise(resolve => setTimeout(resolve, 1000 * (durationSeconds - 1))))
        .then(() => {
        AnimateCSS(popup, AnimationType.FadeOut, 0.5);
        return new Promise(resolve => setTimeout(resolve, 450));
    })
        .finally(() => popup.remove());
}
exports.AddPopup = AddPopup;
//# sourceMappingURL=Animate.js.map