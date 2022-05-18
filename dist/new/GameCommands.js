"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameFinished = exports.TheyDisconnected = exports.RevealAnnotations = exports.YourForcedGuess = exports.RevealGuess = exports.TheyDeleted = exports.TheyLockedGuess = exports.TheyAddedKey = exports.Delete = exports.LockGuess = exports.AddKey = void 0;
const Command_1 = require("./Command");
class AddKey extends Command_1.Command {
    constructor(key) {
        super(AddKey.name);
        this.key = key;
    }
}
exports.AddKey = AddKey;
class LockGuess extends Command_1.Command {
    constructor() {
        super(LockGuess.name);
    }
}
exports.LockGuess = LockGuess;
class Delete extends Command_1.Command {
    constructor() {
        super(Delete.name);
    }
}
exports.Delete = Delete;
class TheyAddedKey extends Command_1.Command {
    constructor() {
        super(TheyAddedKey.name);
    }
}
exports.TheyAddedKey = TheyAddedKey;
class TheyLockedGuess extends Command_1.Command {
    constructor() {
        super(TheyLockedGuess.name);
    }
}
exports.TheyLockedGuess = TheyLockedGuess;
class TheyDeleted extends Command_1.Command {
    constructor() {
        super(TheyDeleted.name);
    }
}
exports.TheyDeleted = TheyDeleted;
class RevealGuess extends Command_1.Command {
    constructor(guess) {
        super(RevealGuess.name);
        this.guess = guess;
    }
}
exports.RevealGuess = RevealGuess;
class YourForcedGuess extends Command_1.Command {
    constructor(guess) {
        super(YourForcedGuess.name);
        this.guess = guess;
    }
}
exports.YourForcedGuess = YourForcedGuess;
class RevealAnnotations extends Command_1.Command {
    constructor(yourAnnotation, theirAnnotation) {
        super(RevealAnnotations.name);
        this.yourAnnotation = yourAnnotation;
        this.theirAnnotation = theirAnnotation;
    }
}
exports.RevealAnnotations = RevealAnnotations;
class TheyDisconnected extends Command_1.Command {
    constructor() {
        super(TheyDisconnected.name);
    }
}
exports.TheyDisconnected = TheyDisconnected;
class GameFinished extends Command_1.Command {
    constructor(yourAnnotation, theirAnnotation) {
        super(GameFinished.name);
        this.yourAnnotation = yourAnnotation;
        this.theirAnnotation = theirAnnotation;
    }
}
exports.GameFinished = GameFinished;
//# sourceMappingURL=GameCommands.js.map