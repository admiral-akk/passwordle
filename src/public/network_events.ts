import {History, Move} from './game_history';
import {WordKnowledge} from './knowledge';

export interface INetworkMessage {
  type: string;
  id: string;
}
export interface INewNetworkMessage {
  playerName: string;
  id: string;
}

export abstract class BaseNetworkMessage<T> implements INetworkMessage {
  public type: string;
  public detail: T;
  public id: string;
  constructor(type: string, id: string, detail: T) {
    this.type = type;
    this.detail = detail;
    this.id = id;
  }
}

export abstract class BaseMessage implements INewNetworkMessage {
  public id: string;
  public playerName: string;
  constructor(id = '', playerName = '') {
    this.id = id;
    this.playerName = playerName;
  }
}

export class StartNewGameMessage extends BaseMessage {}
export class EnterGameMessage extends BaseMessage {}
export class GameStateMesssage extends BaseMessage {
  public history: History;
  constructor(id = '', playerName = '', history: History = new History()) {
    super(id, playerName);
    this.history = history;
  }
}
export class MoveMessage extends BaseMessage {
  public move: Move;
  constructor(id = '', playerName = '', move: Move) {
    super(id, playerName);
    this.move = move;
  }
}

export class SubmitWordMessage extends BaseNetworkMessage<string> {
  constructor(guess: string, id: string) {
    super('submit', id, guess);
  }
}

export class KnowledgeUpdateMessage extends BaseNetworkMessage<WordKnowledge> {
  constructor(knowledge: WordKnowledge, id: string) {
    super('update_knowledge', id, knowledge);
  }
}

export class NewGameMessage extends BaseNetworkMessage<boolean> {
  constructor() {
    super('new_game', '0', true);
  }
}

export class GameStartedMessage extends BaseNetworkMessage<boolean> {
  constructor(id: string) {
    super('game_started', id, true);
  }
}

export class PollingMessage extends BaseNetworkMessage<boolean> {
  constructor(id: string) {
    super('polling', id, true);
  }
}

export class GameStateMessage extends BaseNetworkMessage<History> {
  constructor(id: string, gameHistory: History) {
    super('polling', id, gameHistory);
  }
}
