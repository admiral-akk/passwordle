import {WordKnowledge} from './knowledge';

export abstract class NetworkMessage<T> {
  public type: string;
  public detail: T;
  public id: string;
  constructor(type: string, id: string, detail: T) {
    this.type = type;
    this.detail = detail;
    this.id = id;
  }
}

export class SubmitWordMessage extends NetworkMessage<string> {
  constructor(guess: string, id: string) {
    super('submit', id, guess);
  }
}

export class KnowledgeUpdateMessage extends NetworkMessage<WordKnowledge> {
  constructor(knowledge: WordKnowledge, id: string) {
    super('update_knowledge', id, knowledge);
  }
}

export class NewGameMessage extends NetworkMessage<boolean> {
  constructor() {
    super('new_game', '0', true);
  }
}

export class GameStartedMessage extends NetworkMessage<boolean> {
  constructor(id: string) {
    super('game_started', id, true);
  }
}
