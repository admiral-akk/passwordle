"use strict";
// https://stackoverflow.com/questions/61295715/typedef-equivalent-for-typescript
// https://evertpot.com/opaque-ts-types/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToPlayerId = void 0;
function assertValidPlayerId(input) { }
function ToPlayerId(socket) {
    assertValidPlayerId(socket.id);
    return socket.id;
}
exports.ToPlayerId = ToPlayerId;
//# sourceMappingURL=PlayerId.js.map