import {WordKnowledge} from './knowledge';

export interface INetworkMessage {
  type: string;
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
