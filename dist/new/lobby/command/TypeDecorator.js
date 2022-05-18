"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTypeString = void 0;
function AddTypeString(templateType) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.type = templateType;
            }
        };
    };
}
exports.AddTypeString = AddTypeString;
//# sourceMappingURL=TypeDecorator.js.map