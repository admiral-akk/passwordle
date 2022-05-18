"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheyRejectedRematch = exports.TheyRequestedRematch = exports.RematchRejected = exports.RematchRequested = exports.TheyLeftLobby = exports.TheyJoinedLobby = exports.JoinedLobby = exports.CreatedLobby = void 0;
const Command_1 = require("./Command");
class CreatedLobby extends Command_1.Command {
    constructor(lobby) {
        super(CreatedLobby.name);
        this.lobby = lobby;
    }
}
exports.CreatedLobby = CreatedLobby;
class JoinedLobby extends Command_1.Command {
    constructor(lobby) {
        super(JoinedLobby.name);
        this.lobby = lobby;
    }
}
exports.JoinedLobby = JoinedLobby;
class TheyJoinedLobby extends Command_1.Command {
    constructor(lobby) {
        super(TheyJoinedLobby.name);
        this.lobby = lobby;
    }
}
exports.TheyJoinedLobby = TheyJoinedLobby;
class TheyLeftLobby extends Command_1.Command {
    constructor(lobby) {
        super(TheyLeftLobby.name);
        this.lobby = lobby;
    }
}
exports.TheyLeftLobby = TheyLeftLobby;
class RematchRequested extends Command_1.Command {
    constructor(lobby) {
        super(RematchRequested.name);
        this.lobby = lobby;
    }
}
exports.RematchRequested = RematchRequested;
class RematchRejected extends Command_1.Command {
    constructor(lobby) {
        super(RematchRejected.name);
        this.lobby = lobby;
    }
}
exports.RematchRejected = RematchRejected;
class TheyRequestedRematch extends Command_1.Command {
    constructor(lobby) {
        super(TheyRequestedRematch.name);
        this.lobby = lobby;
    }
}
exports.TheyRequestedRematch = TheyRequestedRematch;
class TheyRejectedRematch extends Command_1.Command {
    constructor(lobby) {
        super(TheyRejectedRematch.name);
        this.lobby = lobby;
    }
}
exports.TheyRejectedRematch = TheyRejectedRematch;
//# sourceMappingURL=LobbyCommands.js.map