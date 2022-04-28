import {Board} from './board';
import {Keyboard} from './keyboard';
import {ClientNetworking} from './client_networking';
import {LobbyManager} from './lobby/LobbyManager';

const NUMBER_OF_GUESSES = 6;
const WORD_LENGTH = 5;

new LobbyManager();
new Board(NUMBER_OF_GUESSES, WORD_LENGTH);
new Keyboard();
new ClientNetworking();
