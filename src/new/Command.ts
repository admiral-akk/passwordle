import {AnnotatedWord} from '../model/PlayerModel';
import {LobbyId} from '../structs/LobbyId';
import {PlayerId} from '../structs/PlayerId';
import {Word} from '../structs/Word';

export abstract class Command {
  commandId?: number;
  player?: PlayerId;
  key?: string;
  guess?: Word;
  lobby?: LobbyId;
  yourAnnotation?: AnnotatedWord;
  theirAnnotation?: AnnotatedWord;
  constructor(public type: string) {}
}

export abstract class CommandHandler {
  private confirmedCommands: Command[] = [];
  private pendingCommands: Command[] = [];
}
