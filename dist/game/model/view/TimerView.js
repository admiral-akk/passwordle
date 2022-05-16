"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimerView = void 0;
const Animate_1 = require("./Animate");
const Subview_1 = require("./Subview");
class TimerView extends Subview_1.Subview {
    constructor(base) {
        super(base, 'timer');
        this.currentTime = 0;
        const title = this.AddDiv(this.root, 'title-div');
        title.innerText = 'Passwordle';
        const timeContainer = this.AddDiv(this.root, 'time-container');
        this.AddSpan(timeContainer, 'iconify timer-div', 'fa-solid:stopwatch');
        this.time = this.AddDiv(timeContainer, 'timer-div');
        this.UpdateTime(30000);
    }
    Reset() {
        super.Reset();
        this.UpdateTime(30000);
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
        this.time.innerText = '0:' + timeSeconds.toFixed(0).padStart(2, '0');
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
        this.time.innerText = '0:00';
        (0, Animate_1.AnimateCSS)(this.time, Animate_1.AnimationType.Pulse);
    }
}
exports.TimerView = TimerView;
//# sourceMappingURL=TimerView.js.map