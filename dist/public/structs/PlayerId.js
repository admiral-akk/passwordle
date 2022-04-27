"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateRandomPlayerId = exports.ToPlayerId = void 0;
// Just for the type system.
function assertValidPlayerId(input) { }
function ToPlayerId(id) {
    assertValidPlayerId(id);
    return id;
}
exports.ToPlayerId = ToPlayerId;
function GenerateRandomPlayerId() {
    return ToPlayerId(Math.floor(Math.random() * 100000).toString());
}
exports.GenerateRandomPlayerId = GenerateRandomPlayerId;
//# sourceMappingURL=PlayerId.js.map