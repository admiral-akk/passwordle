"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpponentUpdate = exports.OpponentUpdateType = void 0;
var OpponentUpdateType;
(function (OpponentUpdateType) {
    OpponentUpdateType[OpponentUpdateType["AddChar"] = 0] = "AddChar";
    OpponentUpdateType[OpponentUpdateType["Delete"] = 1] = "Delete";
    OpponentUpdateType[OpponentUpdateType["Submit"] = 2] = "Submit";
})(OpponentUpdateType = exports.OpponentUpdateType || (exports.OpponentUpdateType = {}));
class OpponentUpdate {
    constructor(type, wordIndex, charIndex) {
        this.type = type;
        this.wordIndex = wordIndex;
        this.charIndex = charIndex;
    }
}
exports.OpponentUpdate = OpponentUpdate;
//# sourceMappingURL=OpponentUpdate.js.map