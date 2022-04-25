import {Wordle} from './wordle';

export class SubmitWordEvent extends CustomEvent<null> {
  constructor() {
    super('submit');
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

export class BoardUpdatedEvent extends CustomEvent<Wordle> {
  constructor(game: Wordle) {
    super('update_board', {detail: game});
  }
}

export class KeyboardUpdatedEvent extends CustomEvent<Wordle> {
  constructor(game: Wordle) {
    super('update_keyboard', {detail: game});
  }
}
