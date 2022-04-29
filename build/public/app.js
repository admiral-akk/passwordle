"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LobbyManager_1 = require("../lobby/client/LobbyManager");
const GameManager_1 = require("../game/client/GameManager");
const ClientNetworking_1 = require("./ClientNetworking");
const socket = (0, ClientNetworking_1.GetSocket)();
new LobbyManager_1.LobbyManager(socket);
new GameManager_1.GameManager(socket);
//# sourceMappingURL=app.js.map