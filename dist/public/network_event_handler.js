"use strict";
// Handles events to/from the server.
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkEventHandler = void 0;
const events_1 = require("./events");
class NetworkEventHandler {
    constructor() {
        document.addEventListener('submit', e => {
            Post('/event', { type: e.type, detail: e.detail, event: e });
        });
        document.dispatchEvent(new events_1.NewGameEvent());
    }
}
exports.NetworkEventHandler = NetworkEventHandler;
function Post(path, data) {
    return window.fetch(path, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}
function Get(path, data) {
    return window.fetch(path, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
}
//# sourceMappingURL=network_event_handler.js.map