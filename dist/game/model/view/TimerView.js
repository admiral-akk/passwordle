"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimerView = void 0;
const Animate_1 = require("./Animate");
const Subview_1 = require("./Subview");
class TimerView extends Subview_1.Subview {
    constructor(base) {
        super(base, 'timer');
        this.currentTime = 0;
        this.time = this.AddDiv(base, 'timer-div');
    }
    Reset() {
        super.Reset();
        this.time.innerText = '';
        this.currentTime = 0;
    }
    StartTimer(timeMillis) {
        this.UpdateTime(timeMillis);
        (0, Animate_1.AnimateCSS)(this.time, Animate_1.AnimationType.FadeIn).then(() => {
            return (0, Animate_1.AnimateCSS)(this.time, Animate_1.AnimationType.HeartBeat);
        });
    }
    UpdateTime(timeMillis) {
        const timeSeconds = Math.ceil(timeMillis / 1000);
        if (this.currentTime === timeSeconds) {
            return;
        }
        if (timeSeconds === 0) {
            return;
        }
        this.currentTime = timeSeconds;
        this.time.innerText = timeSeconds.toFixed(0) + 's left!';
        switch (timeSeconds) {
            case 10:
                (0, Animate_1.AnimateCSS)(this.time, Animate_1.AnimationType.HeartBeat);
                break;
            case 5:
            case 4:
            case 3:
            case 2:
            case 1:
                (0, Animate_1.AnimateCSS)(this.time, Animate_1.AnimationType.Pulse);
                break;
        }
    }
    TimeExhausted() {
        this.time.innerText = "Time's up!";
        (0, Animate_1.AnimateCSS)(this.time, Animate_1.AnimationType.Pulse);
    }
}
exports.TimerView = TimerView;
//# sourceMappingURL=TimerView.js.map