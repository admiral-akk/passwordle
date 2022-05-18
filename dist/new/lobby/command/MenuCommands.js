"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheyLeftLobby = exports.TheyJoinedLobby = exports.JoinedLobby = exports.CreatedLobby = void 0;
const LobbyCommand_1 = require("../LobbyCommand");
const LobbyModel_1 = require("../LobbyModel");
const LobbyUpdate_1 = require("../LobbyUpdate");
const TypeDecorator_1 = require("./TypeDecorator");
let CreatedLobby = class CreatedLobby extends LobbyCommand_1.LobbyCommand {
    constructor(data) {
        super(data);
    }
    Apply(model) {
        const update = new LobbyUpdate_1.LobbyUpdate();
        update.SetLobbyId(model, this.data.lobbyId);
        update.SetState(model, LobbyModel_1.LobbyState.InLobby);
        update.SetPlayerCount(model, 1);
        return update;
    }
};
CreatedLobby = __decorate([
    (0, TypeDecorator_1.AddTypeString)('CreatedLobby')
], CreatedLobby);
exports.CreatedLobby = CreatedLobby;
let JoinedLobby = class JoinedLobby extends LobbyCommand_1.LobbyCommand {
    Apply(model) {
        const update = new LobbyUpdate_1.LobbyUpdate();
        update.SetLobbyId(model, this.data.lobbyId);
        update.SetState(model, LobbyModel_1.LobbyState.InLobby);
        update.SetPlayerCount(model, 2);
        return update;
    }
};
JoinedLobby = __decorate([
    (0, TypeDecorator_1.AddTypeString)('JoinedLobby')
], JoinedLobby);
exports.JoinedLobby = JoinedLobby;
let TheyJoinedLobby = class TheyJoinedLobby extends LobbyCommand_1.LobbyCommand {
    Apply(model) {
        const update = new LobbyUpdate_1.LobbyUpdate();
        update.SetPlayerCount(model, 2);
        return update;
    }
};
TheyJoinedLobby = __decorate([
    (0, TypeDecorator_1.AddTypeString)('TheyJoinedLobby')
], TheyJoinedLobby);
exports.TheyJoinedLobby = TheyJoinedLobby;
let TheyLeftLobby = class TheyLeftLobby extends LobbyCommand_1.LobbyCommand {
    Apply(model) {
        const update = new LobbyUpdate_1.LobbyUpdate();
        update.SetPlayerCount(model, 1);
        return update;
    }
};
TheyLeftLobby = __decorate([
    (0, TypeDecorator_1.AddTypeString)('TheyLeftLobby')
], TheyLeftLobby);
exports.TheyLeftLobby = TheyLeftLobby;
//# sourceMappingURL=MenuCommands.js.map