import {WordKnowledge} from './knowledge';

export abstract class NetworkMessage<T> {
  public type: string;
  public detail: T;
  constructor(type: string, detail: T) {
    this.type = type;
    this.detail = detail;
  }
}

export class SubmitWordMessage extends NetworkMessage<string> {
  constructor(guess: string) {
    super('submit', guess);
  }
}

export class KnowledgeUpdateMessage extends NetworkMessage<WordKnowledge> {
  constructor(knowledge: WordKnowledge) {
    super('update_knowledge', knowledge);
  }
}

export class NewGameMessage extends NetworkMessage<boolean> {
  constructor() {
    super('new_game', true);
  }
}

export class GameStartedMessage extends NetworkMessage<boolean> {
  constructor() {
    super('game_started', true);
  }
}
