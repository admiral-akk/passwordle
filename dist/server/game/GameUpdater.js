"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameUpdater = void 0;
class GameUpdater {
    constructor(consumers) {
        this.consumers = consumers;
        this.AddedChar = (update) => this.consumers.forEach(consumer => consumer.AddedChar(update));
        this.Deleted = () => this.consumers.forEach(consumer => consumer.Deleted());
        this.LockedGuess = () => this.consumers.forEach(consumer => consumer.LockedGuess());
        this.OpponentAddedChar = () => this.consumers.forEach(consumer => consumer.OpponentAddedChar());
        this.OpponentDeleted = () => this.consumers.forEach(consumer => consumer.OpponentDeleted());
        this.OpponentLockedGuess = () => this.consumers.forEach(consumer => consumer.OpponentLockedGuess());
        this.SetSecret = (secret) => this.consumers.forEach(consumer => consumer.SetSecret(secret));
        this.UpdatedAnswerKnowledge = (update) => this.consumers.forEach(consumer => consumer.UpdatedAnswerKnowledge(update));
        this.OpponentDisconnected = () => this.consumers.forEach(consumer => consumer.OpponentDisconnected());
        this.RandomGuess = (guess) => this.consumers.forEach(consumer => consumer.RandomGuess(guess));
    }
}
exports.GameUpdater = GameUpdater;
//# sourceMappingURL=GameUpdater.js.map