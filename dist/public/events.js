"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameHistoryEvent = exports.GameStartedEvent = exports.NewGameEvent = exports.KnowledgeUpdateEvent = exports.AddCharEvent = exports.DeleteEvent = exports.SubmitCommand = exports.SubmitWordEvent = void 0;
class SubmitWordEvent extends CustomEvent {
    constructor(guess) {
        super('submit', { detail: guess });
    }
}
exports.SubmitWordEvent = SubmitWordEvent;
class SubmitCommand extends CustomEvent {
    constructor() {
        super('submit_command');
    }
}
exports.SubmitCommand = SubmitCommand;
class DeleteEvent extends CustomEvent {
    constructor() {
        super('delete');
    }
}
exports.DeleteEvent = DeleteEvent;
class AddCharEvent extends CustomEvent {
    constructor(char) {
        super('add_key', { detail: char });
    }
}
exports.AddCharEvent = AddCharEvent;
class KnowledgeUpdateEvent extends CustomEvent {
    constructor(knowledge) {
        super('update_knowledge', { detail: knowledge });
    }
}
exports.KnowledgeUpdateEvent = KnowledgeUpdateEvent;
class NewGameEvent extends CustomEvent {
    constructor() {
        super('new_game');
    }
}
exports.NewGameEvent = NewGameEvent;
class GameStartedEvent extends CustomEvent {
    constructor() {
        super('game_started');
    }
}
exports.GameStartedEvent = GameStartedEvent;
class GameHistoryEvent extends CustomEvent {
    constructor(gameHistory) {
        super('game_history', { detail: gameHistory });
    }
}
exports.GameHistoryEvent = GameHistoryEvent;
//# sourceMappingURL=events.js.map