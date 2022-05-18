"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MenuCommands_1 = require("./MenuCommands");
const RematchCommands_1 = require("./RematchCommands");
const TransitionCommands_1 = require("./TransitionCommands");
exports.default = [
    MenuCommands_1.CreatedLobby,
    TransitionCommands_1.LobbyDesynced,
    RematchCommands_1.RematchRejected,
    MenuCommands_1.TheyLeftLobby,
    MenuCommands_1.JoinedLobby,
    RematchCommands_1.RematchRequested,
    MenuCommands_1.TheyJoinedLobby,
    TransitionCommands_1.GameComplete,
    RematchCommands_1.TheyRequestedRematch,
    RematchCommands_1.TheyRejectedRematch,
];
//# sourceMappingURL=LobbyCommands.js.map