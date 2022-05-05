"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lobby = void 0;
var State;
(function (State) {
    State[State["Loading"] = 0] = "Loading";
    State[State["MainMenu"] = 1] = "MainMenu";
    State[State["LookingForMatch"] = 2] = "LookingForMatch";
    State[State["OpponentJoined"] = 3] = "OpponentJoined";
    State[State["InGame"] = 4] = "InGame";
    State[State["GameOver"] = 5] = "GameOver";
})(State || (State = {}));
class Lobby {
    constructor(view = null, startMatchmakingCallback = () => { }) {
        this.view = view;
        this.startMatchmakingCallback = startMatchmakingCallback;
        this.state = State.Loading;
        this.lobbyId = '';
    }
    StartingGame() { }
    RequestMainMenu() {
        var _a;
        this.state = State.Loading;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Loading();
    }
    LobbyCreated(lobbyId) {
        var _a;
        this.state = State.MainMenu;
        this.lobbyId = lobbyId;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Menu(() => this.StartMatchmaking(), () => this.StartMatchmaking());
    }
    MatchFound(lobbyId) {
        var _a;
        this.state = State.OpponentJoined;
        this.lobbyId = lobbyId;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.LobbyReady();
    }
    StartGame() {
        var _a;
        this.state = State.InGame;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.InGame();
    }
    StartMatchmaking() {
        var _a;
        this.state = State.LookingForMatch;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.FindingMatch();
        this.startMatchmakingCallback();
    }
    ReturnToMainMenu() {
        this.state = State.MainMenu;
    }
}
exports.Lobby = Lobby;
//# sourceMappingURL=Lobby.js.map