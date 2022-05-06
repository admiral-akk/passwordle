import {GetSocket} from './ClientNetworking';
import {ClientGame} from '../game/network/ClientGame';
import {NewLobbyManager} from '../lobby/client/LobbyManager';

const socket = GetSocket();
new NewLobbyManager(socket);
new ClientGame(socket);
