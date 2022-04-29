import {LobbyManager} from '../lobby/client/LobbyManager';
import {GameManager} from '../game/client/GameManager';
import {GetSocket} from './ClientNetworking';

const socket = GetSocket();
new LobbyManager(socket);
new GameManager(socket);
