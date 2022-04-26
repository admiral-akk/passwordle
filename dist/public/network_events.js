"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameStartedMessage = exports.NewGameMessage = exports.KnowledgeUpdateMessage = exports.SubmitWordMessage = exports.NetworkMessage = void 0;
class NetworkMessage {
    constructor(type, id, detail) {
        this.type = type;
        this.detail = detail;
        this.id = id;
    }
}
exports.NetworkMessage = NetworkMessage;
class SubmitWordMessage extends NetworkMessage {
    constructor(guess, id) {
        super('submit', id, guess);
    }
}
exports.SubmitWordMessage = SubmitWordMessage;
class KnowledgeUpdateMessage extends NetworkMessage {
    constructor(knowledge, id) {
        super('update_knowledge', id, knowledge);
    }
}
exports.KnowledgeUpdateMessage = KnowledgeUpdateMessage;
class NewGameMessage extends NetworkMessage {
    constructor() {
        super('new_game', '0', true);
    }
}
exports.NewGameMessage = NewGameMessage;
class GameStartedMessage extends NetworkMessage {
    constructor(id) {
        super('game_started', id, true);
    }
}
exports.GameStartedMessage = GameStartedMessage;
//# sourceMappingURL=network_events.js.map