"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameUpdater = void 0;
class GameUpdater {
    constructor(state, emitter) {
        this.state = state;
        this.emitter = emitter;
        this.AddedChar = (update) => {
            var _a;
            this.state.AddedChar(update);
            (_a = this.emitter) === null || _a === void 0 ? void 0 : _a.AddedChar(update);
        };
        this.Deleted = () => {
            var _a;
            this.state.Deleted();
            (_a = this.emitter) === null || _a === void 0 ? void 0 : _a.Deleted();
        };
        this.LockedGuess = (update) => {
            var _a;
            this.state.PlayerLockedGuess(update);
            (_a = this.emitter) === null || _a === void 0 ? void 0 : _a.LockedGuess(update);
        };
        this.OpponentAddedChar = () => {
            var _a;
            this.state.OpponentAddedChar();
            (_a = this.emitter) === null || _a === void 0 ? void 0 : _a.OpponentAddedChar();
        };
        this.OpponentDeleted = () => {
            var _a;
            this.state.OpponentDeleted();
            (_a = this.emitter) === null || _a === void 0 ? void 0 : _a.OpponentDeleted();
        };
        this.OpponentLockedGuess = () => {
            var _a;
            this.state.OpponentLockedGuess();
            (_a = this.emitter) === null || _a === void 0 ? void 0 : _a.OpponentLockedGuess();
        };
        this.SetSecret = (secret) => {
            var _a;
            this.state.SetSecret(secret);
            (_a = this.emitter) === null || _a === void 0 ? void 0 : _a.SetSecret(secret);
        };
        this.UpdatedAnswerKnowledge = (update) => {
            var _a;
            this.state.UpdatedAnswerKnowledge(update);
            (_a = this.emitter) === null || _a === void 0 ? void 0 : _a.UpdatedAnswerKnowledge(update);
        };
        this.OpponentDisconnected = () => {
            var _a;
            this.state.OpponentDisconnected();
            (_a = this.emitter) === null || _a === void 0 ? void 0 : _a.OpponentDisconnected();
        };
    }
}
exports.GameUpdater = GameUpdater;
//# sourceMappingURL=GameUpdater.js.map