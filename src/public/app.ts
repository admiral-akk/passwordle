import {Board} from './board';
import {Keyboard} from './keyboard';
import {ClientNetworking} from './client_networking';

const NUMBER_OF_GUESSES = 6;
const WORD_LENGTH = 5;

new Board(NUMBER_OF_GUESSES, WORD_LENGTH);
new Keyboard();
new ClientNetworking();
