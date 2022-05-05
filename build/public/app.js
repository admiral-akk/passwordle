"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClientNetworking_1 = require("./ClientNetworking");
const ClientGame_1 = require("../newGame/network/ClientGame");
const NewLobbyManager_1 = require("../newLobby/NewLobbyManager");
const socket = (0, ClientNetworking_1.GetSocket)();
new NewLobbyManager_1.NewLobbyManager(socket);
new ClientGame_1.ClientGame(socket);
//# sourceMappingURL=app.js.map