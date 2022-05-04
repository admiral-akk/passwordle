import {LobbyManager} from '../lobby/client/LobbyManager';
import {GetSocket} from './ClientNetworking';
import {ClientGame} from '../newGame/network/ClientGame';

const socket = GetSocket();
new LobbyManager(socket);
new ClientGame(socket);
