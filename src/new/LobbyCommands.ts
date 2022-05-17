import {LobbyId} from '../structs/LobbyId';
import {Command} from './Command';

export class CreatedLobby extends Command {
  constructor(public lobby: LobbyId) {
    super(CreatedLobby.name);
  }
}
export class JoinedLobby extends Command {
  constructor(public lobby: LobbyId) {
    super(JoinedLobby.name);
  }
}
export class TheyJoinedLobby extends Command {
  constructor(public lobby: LobbyId) {
    super(TheyJoinedLobby.name);
  }
}
export class TheyLeftLobby extends Command {
  constructor(public lobby: LobbyId) {
    super(TheyLeftLobby.name);
  }
}
export class RematchRequested extends Command {
  constructor(public lobby: LobbyId) {
    super(RematchRequested.name);
  }
}
export class RematchRejected extends Command {
  constructor(public lobby: LobbyId) {
    super(RematchRejected.name);
  }
}
export class TheyRequestedRematch extends Command {
  constructor(public lobby: LobbyId) {
    super(TheyRequestedRematch.name);
  }
}
export class TheyRejectedRematch extends Command {
  constructor(public lobby: LobbyId) {
    super(TheyRejectedRematch.name);
  }
}
