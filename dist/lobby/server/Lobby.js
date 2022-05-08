"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lobby = void 0;
const LobbyId_1 = require("../LobbyId");
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
class Lobby {
    constructor(view, server) {
        this.view = view;
        this.server = server;
        this.state = State.Loading;
        view.Loading();
    }
    FindingMatch() {
        this.state = State.FindingMatch;
        this.view.FindingMatch();
    }
    GameEnded(ending) {
        this.state = State.EndGame;
        this.view.GameEnded(ending);
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
        const url = (0, LobbyId_1.GenerateLobbyLink)(lobbyId);
        this.state = State.InMenu;
        this.view.Menu(() => CopyToClipboard(url), () => this.server.FindMatch());
    }
}
exports.Lobby = Lobby;
function CopyToClipboard(url) {
    navigator.clipboard.writeText(url);
}
//# sourceMappingURL=Lobby.js.map