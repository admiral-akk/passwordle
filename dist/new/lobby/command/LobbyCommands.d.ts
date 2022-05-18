import { CreatedLobby, JoinedLobby, TheyJoinedLobby, TheyLeftLobby } from './MenuCommands';
import { RematchRejected, RematchRequested, TheyRejectedRematch, TheyRequestedRematch } from './RematchCommands';
import { GameComplete, LobbyDesynced } from './TransitionCommands';
declare const _default: (typeof CreatedLobby | typeof LobbyDesynced | typeof RematchRejected | typeof TheyLeftLobby | typeof JoinedLobby | typeof RematchRequested | typeof TheyJoinedLobby | typeof GameComplete | typeof TheyRequestedRematch | typeof TheyRejectedRematch)[];
export default _default;
