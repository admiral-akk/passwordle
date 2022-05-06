"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClientNetworking_1 = require("./ClientNetworking");
const ClientGame_1 = require("../game/network/ClientGame");
const LobbyManager_1 = require("../lobby/client/LobbyManager");
const socket = (0, ClientNetworking_1.GetSocket)();
new LobbyManager_1.NewLobbyManager(socket);
new ClientGame_1.ClientGame(socket);
//# sourceMappingURL=app.js.map