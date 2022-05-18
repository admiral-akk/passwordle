import {LobbyModel} from './LobbyModel';
import {LobbyUpdate} from './LobbyUpdate';

export class LobbyView extends LobbyModel {
  protected Apply(update: LobbyUpdate): void {
    super.Apply(update);
  }
  protected Undo(update: LobbyUpdate): void {
    super.Undo(update);
  }
}
