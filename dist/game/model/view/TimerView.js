"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimerView = void 0;
const Subview_1 = require("./Subview");
class TimerView extends Subview_1.Subview {
    constructor() {
        const base = document.getElementById('timer');
        super(base, 'timer', 'Timer');
        this.time = this.AddDiv(base, 'timer');
    }
    Reset() {
        this.time.innerText = 'No timer.';
    }
    UpdateTime(timeMillis) {
        this.time.innerText = (timeMillis / 1000).toFixed(0) + 's left!';
    }
    TimeExhausted() {
        this.time.innerText = "Time's up!";
    }
}
exports.TimerView = TimerView;
//# sourceMappingURL=TimerView.js.map