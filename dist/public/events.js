"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameStateEvent = exports.PlayerToMoveEvent = exports.SubmitGuessEvent = exports.AddCharCommand = exports.DeleteCommand = exports.SubmitCommand = void 0;
class SubmitCommand extends CustomEvent {
    constructor() {
        super(SubmitCommand.name);
    }
}
exports.SubmitCommand = SubmitCommand;
class DeleteCommand extends CustomEvent {
    constructor() {
        super(DeleteCommand.name);
    }
}
exports.DeleteCommand = DeleteCommand;
class AddCharCommand extends CustomEvent {
    constructor(char) {
        super(AddCharCommand.name, { detail: char });
    }
}
exports.AddCharCommand = AddCharCommand;
class SubmitGuessEvent extends CustomEvent {
    constructor(guess) {
        super(SubmitGuessEvent.name, { detail: guess });
    }
}
exports.SubmitGuessEvent = SubmitGuessEvent;
class PlayerToMoveEvent extends CustomEvent {
    constructor() {
        super(PlayerToMoveEvent.name);
    }
}
exports.PlayerToMoveEvent = PlayerToMoveEvent;
class GameStateEvent extends CustomEvent {
    constructor(state) {
        super(GameStateEvent.name, { detail: state });
    }
}
exports.GameStateEvent = GameStateEvent;
//# sourceMappingURL=Events.js.map