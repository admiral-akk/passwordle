"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClientNetworking_1 = require("./ClientNetworking");
const ClientGame_1 = require("../game/client/ClientGame");
const LobbyManager_1 = require("../lobby/client/LobbyManager");
const socket = (0, ClientNetworking_1.GetSocket)();
const lobby = new LobbyManager_1.NewLobbyManager(socket);
new ClientGame_1.ClientGame(socket, () => lobby.ShowMenu());
//# sourceMappingURL=app.js.map