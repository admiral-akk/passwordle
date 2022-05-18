"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const Command_1 = require("../new/Command");
const CommandNetwork_1 = require("../new/CommandNetwork");
const MenuCommands_1 = require("../new/lobby/command/MenuCommands");
const LobbyModel_1 = require("../new/lobby/LobbyModel");
const ClientNetworking_1 = require("./ClientNetworking");
class Player {
    constructor() {
        this.socket = (0, ClientNetworking_1.GetSocket)();
        this.lobbyModel = new LobbyModel_1.LobbyModel();
        this.lobbySocket = new CommandNetwork_1.LobbyClientWrapper(this.socket, (command) => {
            console.log(`Command type: ${command.type}`);
            this.lobbyModel.Input(command);
        });
        const command = new MenuCommands_1.CreatedLobby(new Command_1.CommandData());
        this.socket.emit('LobbyAction', command);
    }
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map