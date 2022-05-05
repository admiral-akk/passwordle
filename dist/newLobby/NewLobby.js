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
class NewLobby {
    constructor(view, server) {
        this.view = view;
        this.server = server;
        this.state = State.Loading;
        view.Loading();
    }
    GameEnded() {
        this.state = State.EndGame;
        this.view.GameEnded();
        setTimeout(() => {
            this.EnterMenu('');
        }, 1000);
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
        this.state = State.InMenu;
        this.view.Menu(() => { }, () => this.FindMatch());
    }
    FindMatch() {
        this.state = State.FindingMatch;
        this.view.FindingMatch();
        this.server.FindMatch();
    }
}
exports.NewLobby = NewLobby;
//# sourceMappingURL=NewLobby.js.map