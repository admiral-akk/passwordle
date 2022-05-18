import {Command} from '../Command';
import {LobbyModel} from './LobbyModel';
import {LobbyUpdate} from './LobbyUpdate';

export abstract class LobbyCommand extends Command<LobbyModel, LobbyUpdate> {}
