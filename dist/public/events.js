"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyboardUpdatedEvent = exports.BoardUpdatedEvent = exports.AddCharEvent = exports.DeleteEvent = exports.SubmitWordEvent = void 0;
class SubmitWordEvent extends CustomEvent {
    constructor() {
        super('submit');
    }
}
exports.SubmitWordEvent = SubmitWordEvent;
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
class BoardUpdatedEvent extends CustomEvent {
    constructor(game) {
        super('update_board', { detail: game });
    }
}
exports.BoardUpdatedEvent = BoardUpdatedEvent;
class KeyboardUpdatedEvent extends CustomEvent {
    constructor(game) {
        super('update_keyboard', { detail: game });
    }
}
exports.KeyboardUpdatedEvent = KeyboardUpdatedEvent;
//# sourceMappingURL=events.js.map