"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindingMatchState = void 0;
const PlayerState_1 = require("../../../public/PlayerState");
const MatchState_1 = require("../match/MatchState");
const Modal_1 = require("../Modal");
class FindingMatchState extends PlayerState_1.LobbyState {
    constructor() {
        super(...arguments);
        this.modal = new FindingMatchModal();
    }
    Enter() { }
    Exit() {
        this.modal.Exit();
    }
    Register(socket) {
        socket.on('MatchFound', (lobbyId) => {
            this.MatchFound(lobbyId);
        });
    }
    Deregister(socket) {
        socket.removeAllListeners('MatchFound');
    }
    MatchFound(lobbyId) {
        this.SwitchState(new MatchState_1.MatchState(lobbyId));
    }
}
exports.FindingMatchState = FindingMatchState;
class FindingMatchModal extends Modal_1.Modal {
    constructor() {
        super();
        this.AddDiv('finding', 'Finding Match...');
    }
}
//# sourceMappingURL=FindingMatchState.js.map