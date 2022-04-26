"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameStateMessage = exports.PollingMessage = exports.GameStartedMessage = exports.NewGameMessage = exports.KnowledgeUpdateMessage = exports.SubmitWordMessage = exports.BaseNetworkMessage = void 0;
class BaseNetworkMessage {
    constructor(type, id, detail) {
        this.type = type;
        this.detail = detail;
        this.id = id;
    }
}
exports.BaseNetworkMessage = BaseNetworkMessage;
class SubmitWordMessage extends BaseNetworkMessage {
    constructor(guess, id) {
        super('submit', id, guess);
    }
}
exports.SubmitWordMessage = SubmitWordMessage;
class KnowledgeUpdateMessage extends BaseNetworkMessage {
    constructor(knowledge, id) {
        super('update_knowledge', id, knowledge);
    }
}
exports.KnowledgeUpdateMessage = KnowledgeUpdateMessage;
class NewGameMessage extends BaseNetworkMessage {
    constructor() {
        super('new_game', '0', true);
    }
}
exports.NewGameMessage = NewGameMessage;
class GameStartedMessage extends BaseNetworkMessage {
    constructor(id) {
        super('game_started', id, true);
    }
}
exports.GameStartedMessage = GameStartedMessage;
class PollingMessage extends BaseNetworkMessage {
    constructor(id) {
        super('polling', id, true);
    }
}
exports.PollingMessage = PollingMessage;
class GameStateMessage extends BaseNetworkMessage {
    constructor(id, gameHistory) {
        super('polling', id, gameHistory);
    }
}
exports.GameStateMessage = GameStateMessage;
//# sourceMappingURL=network_events.js.map