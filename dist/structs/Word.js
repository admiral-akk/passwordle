"use strict";
// https://stackoverflow.com/questions/61295715/typedef-equivalent-for-typescript
// https://evertpot.com/opaque-ts-types/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToWord = void 0;
function assertValidWord(input) { }
function ToWord(s) {
    s = s.toUpperCase();
    assertValidWord(s);
    return s;
}
exports.ToWord = ToWord;
//# sourceMappingURL=Word.js.map