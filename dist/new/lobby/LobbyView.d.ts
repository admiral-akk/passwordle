import { LobbyModel } from './LobbyModel';
import { LobbyUpdate } from './LobbyUpdate';
export declare class LobbyView extends LobbyModel {
    protected Apply(update: LobbyUpdate): void;
    protected Undo(update: LobbyUpdate): void;
}
