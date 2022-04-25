"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameStartedMessage = exports.NewGameMessage = exports.KnowledgeUpdateMessage = exports.SubmitWordMessage = exports.NetworkMessage = void 0;
class NetworkMessage {
    constructor(type, detail) {
        this.type = type;
        this.detail = detail;
    }
}
exports.NetworkMessage = NetworkMessage;
class SubmitWordMessage extends NetworkMessage {
    constructor(guess) {
        super('submit', guess);
    }
}
exports.SubmitWordMessage = SubmitWordMessage;
class KnowledgeUpdateMessage extends NetworkMessage {
    constructor(knowledge) {
        super('update_knowledge', knowledge);
    }
}
exports.KnowledgeUpdateMessage = KnowledgeUpdateMessage;
class NewGameMessage extends NetworkMessage {
    constructor() {
        super('new_game', true);
    }
}
exports.NewGameMessage = NewGameMessage;
class GameStartedMessage extends NetworkMessage {
    constructor() {
        super('game_started', true);
    }
}
exports.GameStartedMessage = GameStartedMessage;
//# sourceMappingURL=network_events.js.map