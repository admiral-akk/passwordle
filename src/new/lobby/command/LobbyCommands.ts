import {
  CreatedLobby,
  JoinedLobby,
  LookingForMatch,
  TheyJoinedLobby,
  TheyLeftLobby,
} from './MenuCommands';
import {
  RematchRejected,
  RematchRequested,
  TheyRejectedRematch,
  TheyRequestedRematch,
} from './RematchCommands';
import {GameComplete, LobbyDesynced} from './TransitionCommands';

export default [
  CreatedLobby,
  LobbyDesynced,
  RematchRejected,
  TheyLeftLobby,
  LookingForMatch,
  JoinedLobby,
  RematchRequested,
  TheyJoinedLobby,
  GameComplete,
  TheyRequestedRematch,
  TheyRejectedRematch,
];
