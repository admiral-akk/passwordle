"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgeUpdateEvent = exports.AddCharEvent = exports.DeleteEvent = exports.SubmitWordEvent = void 0;
class SubmitWordEvent extends CustomEvent {
    constructor(guess) {
        super('submit', { detail: guess });
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
class KnowledgeUpdateEvent extends CustomEvent {
    constructor(knowledge) {
        super('update_knowledge', { detail: knowledge });
    }
}
exports.KnowledgeUpdateEvent = KnowledgeUpdateEvent;
//# sourceMappingURL=events.js.map