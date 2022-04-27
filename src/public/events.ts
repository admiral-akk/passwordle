import {PlayerStates} from './structs/PlayerStates';

export class SubmitCommand extends CustomEvent<null> {
  constructor() {
    super(SubmitCommand.name);
  }
}
export class DeleteCommand extends CustomEvent<null> {
  constructor() {
    super(DeleteCommand.name);
  }
}
export class AddCharCommand extends CustomEvent<string> {
  constructor(char: string) {
    super(AddCharCommand.name, {detail: char});
  }
}
export class SubmitGuessEvent extends CustomEvent<string> {
  constructor(guess: string) {
    super(SubmitGuessEvent.name, {detail: guess});
  }
}
export class PlayerToMoveEvent extends CustomEvent<null> {
  constructor() {
    super(PlayerToMoveEvent.name);
  }
}

export class GameStateEvent extends CustomEvent<PlayerStates> {
  constructor(state: PlayerStates) {
    super(GameStateEvent.name, {detail: state});
  }
}
