import {Board} from './board';
import {Keyboard} from './keyboard';
import {ClientNetworking} from './client_networking';
import {Wordle} from './wordle';

const NUMBER_OF_GUESSES = 6;
const WORD_LENGTH = 5;

//const wordle = new Wordle();
const board = new Board(NUMBER_OF_GUESSES, WORD_LENGTH);
const keyboard = new Keyboard();
const networking = new ClientNetworking();
