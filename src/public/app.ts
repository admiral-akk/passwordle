import {GetSocket} from './ClientNetworking';
import {ClientGame} from '../game/network/ClientGame';
import {NewLobbyManager} from '../newLobby/NewLobbyManager';

const socket = GetSocket();
new NewLobbyManager(socket);
new ClientGame(socket);
