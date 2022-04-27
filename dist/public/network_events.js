"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameStateMessage = exports.PollingMessage = exports.GameStartedMessage = exports.NewGameMessage = exports.KnowledgeUpdateMessage = exports.SubmitWordMessage = exports.MoveMessage = exports.GameStateMesssage = exports.EnterGameMessage = exports.StartNewGameMessage = exports.BaseMessage = exports.BaseNetworkMessage = void 0;
const game_history_1 = require("./game_history");
class BaseNetworkMessage {
    constructor(type, id, detail) {
        this.type = type;
        this.detail = detail;
        this.id = id;
    }
}
exports.BaseNetworkMessage = BaseNetworkMessage;
class BaseMessage {
    constructor(id = '', playerName = '') {
        this.id = id;
        this.playerName = playerName;
    }
}
exports.BaseMessage = BaseMessage;
class StartNewGameMessage extends BaseMessage {
}
exports.StartNewGameMessage = StartNewGameMessage;
class EnterGameMessage extends BaseMessage {
}
exports.EnterGameMessage = EnterGameMessage;
class GameStateMesssage extends BaseMessage {
    constructor(id = '', playerName = '', history = new game_history_1.History()) {
        super(id, playerName);
        this.history = history;
    }
}
exports.GameStateMesssage = GameStateMesssage;
class MoveMessage extends BaseMessage {
    constructor(id = '', playerName = '', move) {
        super(id, playerName);
        this.move = move;
    }
}
exports.MoveMessage = MoveMessage;
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