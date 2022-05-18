import {LobbyId} from '../structs/LobbyId';
import {PlayerId} from '../structs/PlayerId';
import {Word} from '../structs/Word';
import {AnnotatedWord} from './struct/AnnotatedWord';
import {CommandConfirmed} from './struct/CommandConfirmed';
import {CommandId} from './struct/CommandId';

export type UndoFunction = () => void;

export class CommandData {
  constructor(
    public commandId?: CommandId,
    public confirmed?: CommandConfirmed,
    public player?: PlayerId,
    public key?: string,
    public guess?: Word,
    public lobbyId?: LobbyId,
    public yourAnnotation?: AnnotatedWord,
    public theirAnnotation?: AnnotatedWord
  ) {}
}

export abstract class Command<ModelType, UpdateType> {
  data: CommandData;
  type?: string;
  update?: UpdateType;

  constructor(data: CommandData) {
    this.data = data;
  }

  Execute(model: ModelType): void {
    this.update = this.Apply(model);
  }

  protected abstract Apply(model: ModelType): UpdateType;
  protected abstract ServerApply(
    playerId: PlayerId,
    models: Record<PlayerId, ModelType>
  ): void;
}
