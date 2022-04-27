"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetKnowledge = exports.GameActions = exports.PlayerActions = exports.GameStateManager = void 0;
const AnnotatedMove_1 = require("./public/structs/AnnotatedMove");
const GameState_1 = require("./public/structs/GameState");
class GameStateManager {
    constructor(players) {
        this.player1Id = players[0];
        this.player2Id = players[1];
        this.answer1 = this.GenerateAnswer();
        this.answer2 = this.GenerateAnswer();
        this.state = State.Player1ToMove;
        this.gameState = new GameState_1.GameState(this.player1Id);
    }
    GenerateAnswer() {
        let answer;
        do {
            answer = words_1.WORDS[Math.floor(Math.random() * words_1.WORDS.length)].toUpperCase();
        } while (answer in [this.answer1, this.answer2]);
        return answer;
    }
    // We assume the move is legal.
    SubmitMove(move) {
        if (move.player !== this.gameState.playerToMove) {
            throw "Not player's turn!";
        }
        let answer;
        switch (this.state) {
            case State.None:
                throw 'State not initialized!';
            case State.Player1ToMove:
                answer = this.answer1;
                this.state = State.Player2ToMove;
                break;
            case State.Player2ToMove:
                answer = this.answer2;
                this.state = State.Player1ToMove;
                break;
        }
        const knowledge = GetKnowledge(move.guess, answer);
        const annotatedMove = new AnnotatedMove_1.AnnotatedMove(move, knowledge);
        this.gameState.moves.push(annotatedMove);
    }
    GetState(player) {
        return this.gameState;
    }
}
exports.GameStateManager = GameStateManager;
var State;
(function (State) {
    State[State["None"] = 0] = "None";
    State[State["Player1ToMove"] = 1] = "Player1ToMove";
    State[State["Player2ToMove"] = 2] = "Player2ToMove";
})(State || (State = {}));
var PlayerActions;
(function (PlayerActions) {
    PlayerActions[PlayerActions["JoinLobby"] = 0] = "JoinLobby";
    PlayerActions[PlayerActions["StartLobby"] = 1] = "StartLobby";
    PlayerActions[PlayerActions["EnterGuess"] = 2] = "EnterGuess";
    PlayerActions[PlayerActions["DeleteChar"] = 3] = "DeleteChar";
    PlayerActions[PlayerActions["AddChar"] = 4] = "AddChar";
    PlayerActions[PlayerActions["CopyLobbyLink"] = 5] = "CopyLobbyLink";
})(PlayerActions = exports.PlayerActions || (exports.PlayerActions = {}));
var GameActions;
(function (GameActions) {
    GameActions[GameActions["SendState"] = 0] = "SendState";
    GameActions[GameActions["SendGameId"] = 1] = "SendGameId";
    GameActions[GameActions["SendResults"] = 2] = "SendResults";
    GameActions[GameActions["RequestState"] = 3] = "RequestState";
})(GameActions = exports.GameActions || (exports.GameActions = {}));
const knowledge_1 = require("./public/knowledge");
const words_1 = require("./public/words");
function GetKnowledge(guess, answer) {
    const answer_state = [];
    for (let i = 0; i < guess.length; i++) {
        answer_state[i] = knowledge_1.LetterState.None;
        if (guess[i] === answer[i]) {
            answer_state[i] = knowledge_1.LetterState.Green;
        }
        if (!answer.includes(guess[i])) {
            answer_state[i] = knowledge_1.LetterState.Grey;
        }
    }
    for (let i = 0; i < guess.length; i++) {
        if (answer_state[i] !== knowledge_1.LetterState.None) {
            continue;
        }
        let matched = 0;
        for (let j = 0; j < guess.length; j++) {
            if (i === j) {
                continue;
            }
            if (answer_state[j] !== knowledge_1.LetterState.Green &&
                answer_state[j] !== knowledge_1.LetterState.Yellow) {
                continue;
            }
            if (guess[j] !== guess[i]) {
                continue;
            }
            matched++;
        }
        const charCount = (answer.match(new RegExp(guess[i], 'g')) || []).length;
        if (charCount > matched) {
            answer_state[i] = knowledge_1.LetterState.Yellow;
        }
        else {
            answer_state[i] = knowledge_1.LetterState.Grey;
        }
    }
    return new knowledge_1.WordKnowledge(answer_state, guess);
}
exports.GetKnowledge = GetKnowledge;
//# sourceMappingURL=GameStateManager.js.map