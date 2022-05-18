import { Command } from '../Command';
import { LobbyModel } from './LobbyModel';
import { LobbyUpdate } from './LobbyUpdate';
export declare abstract class LobbyCommand extends Command<LobbyModel, LobbyUpdate> {
}
