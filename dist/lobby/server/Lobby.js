"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewLobby = void 0;
var State;
(function (State) {
    State[State["Loading"] = 0] = "Loading";
    State[State["JoiningMatch"] = 1] = "JoiningMatch";
    State[State["MatchNotFound"] = 2] = "MatchNotFound";
    State[State["InMenu"] = 3] = "InMenu";
    State[State["FindingMatch"] = 4] = "FindingMatch";
    State[State["FoundMatch"] = 5] = "FoundMatch";
    State[State["InGame"] = 6] = "InGame";
    State[State["EndGame"] = 7] = "EndGame";
})(State || (State = {}));
const LOBBY_ID_QUERY_NAME = 'lobbyId';
class NewLobby {
    constructor(view, server) {
        this.view = view;
        this.server = server;
        this.state = State.Loading;
        view.Loading();
        if (FindLobbyIdInURL()) {
            server.JoinLobby(FindLobbyIdInURL());
        }
    }
    GameEnded(ending) {
        this.state = State.EndGame;
        this.view.GameEnded(ending);
        setTimeout(() => {
            this.EnterMenu('');
        }, 3000);
    }
    MatchFound(lobbyId) {
        this.state = State.FoundMatch;
        this.view.LobbyReady();
        setTimeout(() => {
            this.EnterGame();
        }, 1000);
    }
    EnterGame() {
        this.state = State.InGame;
        this.view.InGame();
    }
    EnterMenu(lobbyId) {
        const url = GenerateLobbyLink(lobbyId);
        this.state = State.InMenu;
        this.view.Menu(() => CopyToClipboard(url), () => this.FindMatch());
    }
    FindMatch() {
        this.state = State.FindingMatch;
        this.view.FindingMatch();
        this.server.FindMatch();
    }
}
exports.NewLobby = NewLobby;
function FindLobbyIdInURL() {
    return new URLSearchParams(window.location.search).get(LOBBY_ID_QUERY_NAME);
}
function GenerateLobbyLink(lobbyId) {
    const url = new URLSearchParams(window.location.search);
    url.append(LOBBY_ID_QUERY_NAME, lobbyId);
    return `${window.location.href}?${url.toString()}`;
}
function CopyToClipboard(url) {
    navigator.clipboard.writeText(url);
}
//# sourceMappingURL=Lobby.js.map