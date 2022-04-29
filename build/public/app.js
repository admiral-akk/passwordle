"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = require("./board");
const keyboard_1 = require("./keyboard");
const client_networking_1 = require("./client_networking");
const LobbyManager_1 = require("./lobby/LobbyManager");
const SocketManager_1 = require("./network/SocketManager");
const NUMBER_OF_GUESSES = 6;
const WORD_LENGTH = 5;
const socket = new SocketManager_1.SocketManager();
new LobbyManager_1.LobbyManager(socket.socket);
new board_1.Board(NUMBER_OF_GUESSES, WORD_LENGTH);
new keyboard_1.Keyboard();
new client_networking_1.ClientNetworking();
//# sourceMappingURL=app.js.map