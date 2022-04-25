import {WordKnowledge} from './knowledge';

export class SubmitWordEvent extends CustomEvent<string> {
  constructor(guess: string) {
    super('submit', {detail: guess});
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
