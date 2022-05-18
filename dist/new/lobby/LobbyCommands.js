"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyCommands = exports.GameComplete = exports.LobbyDesynced = exports.TheyRejectedRematch = exports.TheyRequestedRematch = exports.RematchRejected = exports.RematchRequested = exports.TheyLeftLobby = exports.TheyJoinedLobby = exports.JoinedLobby = exports.CreatedLobby = void 0;
const LobbyCommand_1 = require("./LobbyCommand");
const LobbyModel_1 = require("./LobbyModel");
function addType(templateType) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.type = templateType;
            }
        };
    };
}
let CreatedLobby = class CreatedLobby extends LobbyCommand_1.LobbyCommand {
    constructor(data) {
        super(data);
    }
    Apply(model) {
        const state = model.state;
        const lobbyId = model.lobbyId;
        const playerCount = model.playerCount;
        model.state = LobbyModel_1.LobbyState.InLobby;
        model.lobbyId = this.data.lobbyId;
        model.playerCount = 1;
        return () => {
            model.state = state;
            model.lobbyId = lobbyId;
            model.playerCount = playerCount;
        };
    }
};
CreatedLobby = __decorate([
    addType('CreatedLobby')
], CreatedLobby);
exports.CreatedLobby = CreatedLobby;
let JoinedLobby = class JoinedLobby extends LobbyCommand_1.LobbyCommand {
    Apply(model) {
        const state = model.state;
        const lobbyId = model.lobbyId;
        const playerCount = model.playerCount;
        model.state = LobbyModel_1.LobbyState.InLobby;
        model.lobbyId = this.data.lobbyId;
        model.playerCount = 2;
        return () => {
            model.state = state;
            model.lobbyId = lobbyId;
            model.playerCount = playerCount;
        };
    }
};
JoinedLobby = __decorate([
    addType('JoinedLobby')
], JoinedLobby);
exports.JoinedLobby = JoinedLobby;
let TheyJoinedLobby = class TheyJoinedLobby extends LobbyCommand_1.LobbyCommand {
    Apply(model) {
        const playerCount = model.playerCount;
        model.playerCount = 2;
        return () => {
            model.playerCount = playerCount;
        };
    }
};
TheyJoinedLobby = __decorate([
    addType('TheyJoinedLobby')
], TheyJoinedLobby);
exports.TheyJoinedLobby = TheyJoinedLobby;
let TheyLeftLobby = class TheyLeftLobby extends LobbyCommand_1.LobbyCommand {
    Apply(model) {
        const playerCount = model.playerCount;
        model.playerCount = 1;
        return () => {
            model.playerCount = playerCount;
        };
    }
};
TheyLeftLobby = __decorate([
    addType('TheyLeftLobby')
], TheyLeftLobby);
exports.TheyLeftLobby = TheyLeftLobby;
let RematchRequested = class RematchRequested extends LobbyCommand_1.LobbyCommand {
    Apply(model) {
        throw new Error('Method not implemented.');
    }
};
RematchRequested = __decorate([
    addType('RematchRequested')
], RematchRequested);
exports.RematchRequested = RematchRequested;
let RematchRejected = class RematchRejected extends LobbyCommand_1.LobbyCommand {
    Apply(model) {
        throw new Error('Method not implemented.');
    }
};
RematchRejected = __decorate([
    addType('RematchRejected')
], RematchRejected);
exports.RematchRejected = RematchRejected;
let TheyRequestedRematch = class TheyRequestedRematch extends LobbyCommand_1.LobbyCommand {
    Apply(model) {
        throw new Error('Method not implemented.');
    }
};
TheyRequestedRematch = __decorate([
    addType('TheyRequestedRematch')
], TheyRequestedRematch);
exports.TheyRequestedRematch = TheyRequestedRematch;
let TheyRejectedRematch = class TheyRejectedRematch extends LobbyCommand_1.LobbyCommand {
    Apply(model) {
        throw new Error('Method not implemented.');
    }
};
TheyRejectedRematch = __decorate([
    addType('TheyRejectedRematch')
], TheyRejectedRematch);
exports.TheyRejectedRematch = TheyRejectedRematch;
let LobbyDesynced = class LobbyDesynced extends LobbyCommand_1.LobbyCommand {
    Apply(model) {
        throw new Error('Method not implemented.');
    }
};
LobbyDesynced = __decorate([
    addType('LobbyDesynced')
], LobbyDesynced);
exports.LobbyDesynced = LobbyDesynced;
let GameComplete = class GameComplete extends LobbyCommand_1.LobbyCommand {
    Apply(model) {
        throw new Error('Method not implemented.');
    }
};
GameComplete = __decorate([
    addType('GameComplete')
], GameComplete);
exports.GameComplete = GameComplete;
exports.LobbyCommands = [
    CreatedLobby,
    LobbyDesynced,
    RematchRejected,
    TheyLeftLobby,
    JoinedLobby,
    RematchRequested,
    TheyJoinedLobby,
    GameComplete,
    TheyRequestedRematch,
    TheyRejectedRematch,
];
//# sourceMappingURL=LobbyCommands.js.map