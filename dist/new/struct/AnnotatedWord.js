"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knowledge = exports.AnnotatedWord = void 0;
class AnnotatedWord {
    constructor(word, annotation = []) {
        this.word = word;
        this.annotation = annotation;
    }
}
exports.AnnotatedWord = AnnotatedWord;
var Knowledge;
(function (Knowledge) {
    Knowledge[Knowledge["None"] = 0] = "None";
    Knowledge[Knowledge["NotInWord"] = 1] = "NotInWord";
    Knowledge[Knowledge["WrongPosition"] = 2] = "WrongPosition";
    Knowledge[Knowledge["Correct"] = 3] = "Correct";
})(Knowledge = exports.Knowledge || (exports.Knowledge = {}));
//# sourceMappingURL=AnnotatedWord.js.map