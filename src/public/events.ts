import {History} from './game_history';
import {WordKnowledge} from '../game/logic/Knowledge';

export class SubmitWordEvent extends CustomEvent<string> {
  constructor(guess: string) {
    super('submit', {detail: guess});
  }
}

export class SubmitCommand extends CustomEvent<null> {
  constructor() {
    super('submit_command');
  }
}

export class DeleteEvent extends CustomEvent<null> {
  constructor() {
    super('delete');
  }
}

export class AddCharEvent extends CustomEvent<string> {
  constructor(char: string) {
    super('add_key', {detail: char});
  }
}

export class KnowledgeUpdateEvent extends CustomEvent<WordKnowledge> {
  constructor(knowledge: WordKnowledge) {
    super('update_knowledge', {detail: knowledge});
  }
}

export class NewGameEvent extends CustomEvent<null> {
  constructor() {
    super('new_game');
  }
}

export class GameStartedEvent extends CustomEvent<null> {
  constructor() {
    super('game_started');
  }
}

export class GameHistoryEvent extends CustomEvent<History> {
  constructor(gameHistory: History) {
    super('game_history', {detail: gameHistory});
  }
}
