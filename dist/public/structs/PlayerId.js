"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToPlayerId = void 0;
// Just for the type system.
function assertValidPlayerId(input) { }
function ToPlayerId(id) {
    assertValidPlayerId(id);
    return id;
}
exports.ToPlayerId = ToPlayerId;
//# sourceMappingURL=PlayerId.js.map