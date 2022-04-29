"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimateCSS = exports.AnimationType = void 0;
var AnimationType;
(function (AnimationType) {
    AnimationType["Pulse"] = "pulse";
    AnimationType["Bounce"] = "bounce";
})(AnimationType = exports.AnimationType || (exports.AnimationType = {}));
const ANIMATION_DURATION_STR = '--animate-duration';
const ANIMATION_CLASS_STR = 'animate__animated';
// From https://animate.style/#javascript
function AnimateCSS(element, animation, duration = 0.3) {
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
//# sourceMappingURL=Animate.js.map