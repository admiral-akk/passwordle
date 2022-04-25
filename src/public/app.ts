import {Board} from './board';
import {NewGameEvent} from './events';
import {Keyboard} from './keyboard';
import {NetworkEventHandler} from './network_event_handler';
import {Wordle} from './wordle';

const NUMBER_OF_GUESSES = 6;
const WORD_LENGTH = 5;

const wordle = new Wordle();
const board = new Board(NUMBER_OF_GUESSES, WORD_LENGTH);
const keyboard = new Keyboard();
const networking = new NetworkEventHandler();
