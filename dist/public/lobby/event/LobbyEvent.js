"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyEvent = void 0;
const NetworkEvent_1 = require("../../event/NetworkEvent");
class LobbyEvent extends NetworkEvent_1.NetworkEvent {
    constructor(clientId) {
        super(LobbyEvent.name);
        this.clientId = clientId;
    }
}
exports.LobbyEvent = LobbyEvent;
//# sourceMappingURL=LobbyEvent.js.map