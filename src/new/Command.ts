import {LobbyId} from '../structs/LobbyId';
import {PlayerId} from '../structs/PlayerId';
import {Word} from '../structs/Word';
import {AnnotatedWord} from './struct/AnnotatedWord';
import {CommandConfirmed} from './struct/CommandConfirmed';
import {CommandId} from './struct/CommandId';

export abstract class Command {
  commandId?: CommandId;
  confirmed?: CommandConfirmed;
  player?: PlayerId;
  key?: string;
  guess?: Word;
  lobby?: LobbyId;
  yourAnnotation?: AnnotatedWord;
  theirAnnotation?: AnnotatedWord;
  execute?: () => void;
  undo?: () => void;
  constructor(public type: string) {}
}
