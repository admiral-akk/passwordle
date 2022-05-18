"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = exports.CommandData = void 0;
class CommandData {
    constructor(commandId, confirmed, player, key, guess, lobbyId, yourAnnotation, theirAnnotation) {
        this.commandId = commandId;
        this.confirmed = confirmed;
        this.player = player;
        this.key = key;
        this.guess = guess;
        this.lobbyId = lobbyId;
        this.yourAnnotation = yourAnnotation;
        this.theirAnnotation = theirAnnotation;
    }
}
exports.CommandData = CommandData;
class Command {
    constructor(data) {
        this.data = data;
    }
    Execute(model) {
        this.update = this.Apply(model);
    }
}
exports.Command = Command;
//# sourceMappingURL=Command.js.map