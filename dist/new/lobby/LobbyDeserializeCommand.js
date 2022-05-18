"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deserialize = void 0;
const Command_1 = require("../Command");
const LobbyCommands_1 = __importDefault(require("./command/LobbyCommands"));
const TYPE_TO_COMMAND_CONSTRUCTOR = GenerateRegistry();
function GenerateRegistry() {
    const map = {};
    LobbyCommands_1.default.forEach(command => {
        const sample = new command(new Command_1.CommandData());
        map[sample.type] = (data) => new command(data);
    });
    return map;
}
function Deserialize(command) {
    return TYPE_TO_COMMAND_CONSTRUCTOR[command.type](command.data);
}
exports.Deserialize = Deserialize;
//# sourceMappingURL=LobbyDeserializeCommand.js.map