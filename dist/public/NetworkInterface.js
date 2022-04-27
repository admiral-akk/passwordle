"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkInterface = void 0;
const ClientManager_1 = require("./ClientManager");
const Events_1 = require("./Events");
const LobbyId_1 = require("./structs/LobbyId");
class NetworkInterface {
    constructor() {
        this.client = new ClientManager_1.ClientManager();
        this.RegisterListeners();
    }
    RegisterListeners() {
        document.addEventListener(Events_1.SubmitGuessEvent.name, e => {
            const event = e;
            this.client.SubmitMove(event.detail);
        });
    }
    Connect() {
        const lobbyId = (0, LobbyId_1.FetchLobbyId)();
        if (lobbyId === null) {
            this.client.StartLobby();
        }
        else {
            this.client.JoinLobby(lobbyId);
        }
    }
}
exports.NetworkInterface = NetworkInterface;
//# sourceMappingURL=NetworkInterface.js.map