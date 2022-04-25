"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = require("./board");
const keyboard_1 = require("./keyboard");
const network_event_handler_1 = require("./network_event_handler");
const wordle_1 = require("./wordle");
const NUMBER_OF_GUESSES = 6;
const WORD_LENGTH = 5;
const wordle = new wordle_1.Wordle();
const board = new board_1.Board(NUMBER_OF_GUESSES, WORD_LENGTH);
const keyboard = new keyboard_1.Keyboard();
const networking = new network_event_handler_1.NetworkEventHandler();
//# sourceMappingURL=app.js.map