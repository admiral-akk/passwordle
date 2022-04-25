"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = require("./board");
const keyboard_1 = require("./keyboard");
const client_networking_1 = require("./client_networking");
const NUMBER_OF_GUESSES = 6;
const WORD_LENGTH = 5;
//const wordle = new Wordle();
const board = new board_1.Board(NUMBER_OF_GUESSES, WORD_LENGTH);
const keyboard = new keyboard_1.Keyboard();
const networking = new client_networking_1.ClientNetworking();
//# sourceMappingURL=app.js.map