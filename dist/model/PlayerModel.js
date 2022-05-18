"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnotatedWord = exports.Knowledge = exports.GameModel = exports.GameState = exports.LobbyModel = void 0;
var LobbyState;
(function (LobbyState) {
    LobbyState[LobbyState["None"] = 0] = "None";
    LobbyState[LobbyState["InLobby"] = 1] = "InLobby";
    LobbyState[LobbyState["InGame"] = 2] = "InGame";
})(LobbyState || (LobbyState = {}));
class LobbyModel {
    constructor() {
        this.state = LobbyState.None;
        this.playerCount = 0;
        this.rematchRequestCount = 0;
        this.requestedRematch = false;
    }
    CreatedLobby(lobbyId) {
        this.state = LobbyState.InLobby;
        this.lobbyId = lobbyId;
        this.playerCount = 1;
    }
    JoinedLobby(lobbyId) {
        this.state = LobbyState.InLobby;
        this.lobbyId = lobbyId;
        this.playerCount = 2;
    }
    TheyJoinedLobby() {
        this.playerCount = 2;
    }
    StartedGame() {
        this.state = LobbyState.InGame;
    }
    GameFinished(yourPassword, theirPassword) {
        this.state = LobbyState.InLobby;
        this.rematchRequestCount = 0;
        this.requestedRematch = false;
    }
    RequestedRematch() {
        this.requestedRematch = true;
        this.rematchRequestCount++;
    }
    TheyRequestedRematch() {
        this.rematchRequestCount++;
    }
    RematchRejected(lobbyId) {
        this.lobbyId = lobbyId;
        this.playerCount = 1;
        this.rematchRequestCount = 0;
        this.requestedRematch = false;
    }
}
exports.LobbyModel = LobbyModel;
var GameState;
(function (GameState) {
    GameState[GameState["None"] = 0] = "None";
    GameState[GameState["Empty"] = 1] = "Empty";
    GameState[GameState["CanSubmit"] = 2] = "CanSubmit";
    GameState[GameState["Waiting"] = 3] = "Waiting";
    GameState[GameState["Gameover"] = 4] = "Gameover";
})(GameState = exports.GameState || (exports.GameState = {}));
class GameModel {
    constructor() {
        this.state = GameState.None;
        this.currentGuess = '';
        this.theirCharCount = 0;
        this.yourGuesses = [];
        this.theirGuesses = [];
        this.theyLocked = false;
        this.yourPassword = '';
    }
    GameStart() {
        this.state = GameState.Empty;
    }
    Added(char) {
        this.currentGuess += char;
    }
    Deleted() {
        this.currentGuess = this.currentGuess.slice(0, -1);
    }
    Locked() {
        this.yourGuesses.push(new AnnotatedWord(this.currentGuess));
        this.currentGuess = '';
        this.state = GameState.Waiting;
    }
    TheyAdded() {
        this.theirCharCount++;
    }
    TheyDeleted() {
        this.theirCharCount--;
    }
    TheyLocked() {
        this.theyLocked = true;
    }
    ShowTheirGuess(theirGuess) {
        this.theirGuesses.push(new AnnotatedWord(theirGuess));
        this.theirCharCount = 0;
    }
    UpdateInformation(yourGuessKnowledge, theirGuessKnowledge) {
        this.yourGuesses[-1].annotation = yourGuessKnowledge;
        this.theirGuesses[-1].annotation = theirGuessKnowledge;
        this.state = GameState.CanSubmit;
    }
    RandomGuess(guess) {
        this.currentGuess = guess;
        this.Locked();
    }
    Gameover() {
        this.state = GameState.Gameover;
    }
    SetYourPassword(password) {
        this.yourPassword = password;
        this.state = GameState.CanSubmit;
    }
}
exports.GameModel = GameModel;
var Knowledge;
(function (Knowledge) {
    Knowledge[Knowledge["None"] = 0] = "None";
    Knowledge[Knowledge["NotInWord"] = 1] = "NotInWord";
    Knowledge[Knowledge["WrongPosition"] = 2] = "WrongPosition";
    Knowledge[Knowledge["Correct"] = 3] = "Correct";
})(Knowledge = exports.Knowledge || (exports.Knowledge = {}));
class AnnotatedWord {
    constructor(word, annotation = []) {
        this.word = word;
        this.annotation = annotation;
    }
}
exports.AnnotatedWord = AnnotatedWord;
//# sourceMappingURL=PlayerModel.js.map