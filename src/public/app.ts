import {GetSocket} from './ClientNetworking';
import {ClientGame} from '../game/client/ClientGame';
import {NewLobbyManager} from '../lobby/client/LobbyManager';

const socket = GetSocket();
const lobby = new NewLobbyManager(socket);
new ClientGame(socket, () => lobby.ShowMenu());
