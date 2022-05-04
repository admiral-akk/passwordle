"use strict";
// https://stackoverflow.com/questions/61295715/typedef-equivalent-for-typescript
// https://evertpot.com/opaque-ts-types/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToPlayerId = void 0;
function assertValidPlayerId(input) { }
function ToPlayerId(s) {
    assertValidPlayerId(s);
    return s;
}
exports.ToPlayerId = ToPlayerId;
//# sourceMappingURL=PlayerId.js.map