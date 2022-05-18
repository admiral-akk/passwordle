"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheyRejectedRematch = exports.TheyRequestedRematch = exports.RematchRejected = exports.RematchRequested = void 0;
const LobbyCommand_1 = require("../LobbyCommand");
const TypeDecorator_1 = require("./TypeDecorator");
let RematchRequested = class RematchRequested extends LobbyCommand_1.LobbyCommand {
    Apply(model) {
        throw new Error('Method not implemented.');
    }
};
RematchRequested = __decorate([
    (0, TypeDecorator_1.AddTypeString)('RematchRequested')
], RematchRequested);
exports.RematchRequested = RematchRequested;
let RematchRejected = class RematchRejected extends LobbyCommand_1.LobbyCommand {
    Apply(model) {
        throw new Error('Method not implemented.');
    }
};
RematchRejected = __decorate([
    (0, TypeDecorator_1.AddTypeString)('RematchRejected')
], RematchRejected);
exports.RematchRejected = RematchRejected;
let TheyRequestedRematch = class TheyRequestedRematch extends LobbyCommand_1.LobbyCommand {
    Apply(model) {
        throw new Error('Method not implemented.');
    }
};
TheyRequestedRematch = __decorate([
    (0, TypeDecorator_1.AddTypeString)('TheyRequestedRematch')
], TheyRequestedRematch);
exports.TheyRequestedRematch = TheyRequestedRematch;
let TheyRejectedRematch = class TheyRejectedRematch extends LobbyCommand_1.LobbyCommand {
    Apply(model) {
        throw new Error('Method not implemented.');
    }
};
TheyRejectedRematch = __decorate([
    (0, TypeDecorator_1.AddTypeString)('TheyRejectedRematch')
], TheyRejectedRematch);
exports.TheyRejectedRematch = TheyRejectedRematch;
//# sourceMappingURL=RematchCommands.js.map