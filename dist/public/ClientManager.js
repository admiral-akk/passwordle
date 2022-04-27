"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientManager = void 0;
class ClientManager {
    constructor() {
        this.lobbyId = '';
        this.playerId = '';
        this.state = State.LoggedOut;
    }
    StartLobby() {
        if (this.state !== State.LoggedOut) {
            throw 'Already connected to server!';
        }
        Get('/start_lobby').then(clientId => {
            this.lobbyId = clientId.lobbyId;
            this.playerId = clientId.playerId;
            this.state = State.LoggedIn;
            console.log(`client id: ${clientId}`);
        });
    }
    JoinLobby(lobbyId) {
        if (this.state !== State.LoggedOut) {
            throw 'Already connected to server!';
        }
        Get(`/join_lobby/${lobbyId}`).then(clientId => {
            this.lobbyId = clientId.lobbyId;
            this.playerId = clientId.playerId;
            this.state = State.LoggedIn;
            console.log(`client id: ${clientId}`);
        });
    }
    GetState() {
        if (this.state !== State.LoggedIn) {
            throw 'Not connected to server!';
        }
        Get(`/get_state/${this.lobbyId}/${this.playerId}`).then(gameState => {
            console.log(`game state: ${gameState}`);
        });
    }
    SubmitMove(move) {
        if (this.state !== State.LoggedIn) {
            throw 'Not connected to server!';
        }
        Post(`/submit_move/${this.lobbyId}`, move);
    }
}
exports.ClientManager = ClientManager;
var State;
(function (State) {
    State[State["None"] = 0] = "None";
    State[State["LoggedOut"] = 1] = "LoggedOut";
    State[State["LoggedIn"] = 2] = "LoggedIn";
})(State || (State = {}));
function Post(path, data) {
    return window.fetch(path, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}
function Get(path) {
    return window
        .fetch(`${path}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json());
}
//# sourceMappingURL=ClientManager.js.map