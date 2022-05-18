"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameComplete = exports.LobbyDesynced = void 0;
const LobbyCommand_1 = require("../LobbyCommand");
const TypeDecorator_1 = require("./TypeDecorator");
let LobbyDesynced = class LobbyDesynced extends LobbyCommand_1.LobbyCommand {
    Apply(model) {
        throw new Error('Method not implemented.');
    }
};
LobbyDesynced = __decorate([
    (0, TypeDecorator_1.AddTypeString)('LobbyDesynced')
], LobbyDesynced);
exports.LobbyDesynced = LobbyDesynced;
let GameComplete = class GameComplete extends LobbyCommand_1.LobbyCommand {
    Apply(model) {
        throw new Error('Method not implemented.');
    }
};
GameComplete = __decorate([
    (0, TypeDecorator_1.AddTypeString)('GameComplete')
], GameComplete);
exports.GameComplete = GameComplete;
//# sourceMappingURL=TransitionCommands.js.map