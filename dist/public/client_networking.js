"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientNetworking = void 0;
// Handles events to/from the server.
const events_1 = require("./events");
const network_events_1 = require("./network_events");
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
function Get(path, gameId) {
    return window.fetch(`${path}/${gameId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
}
class ClientNetworking {
    constructor() {
        this.urlParams = new URLSearchParams(window.location.search);
        document.addEventListener('submit', e => {
            const id = this.GetId();
            if (id === null) {
                return;
            }
            Post('/event', new network_events_1.SubmitWordMessage(e.detail, id))
                .then(response => response.json())
                .then(data => {
                const message = data;
                const knowledgeUpdate = new events_1.KnowledgeUpdateEvent(message.detail);
                document.dispatchEvent(knowledgeUpdate);
            });
        });
        document.addEventListener('new_game', () => {
            Post('/event', new network_events_1.NewGameMessage())
                .then(response => response.json())
                .then(data => {
                const searchParams = new URLSearchParams(window.location.search);
                searchParams.set('id', data.id);
                window.location.search = searchParams.toString();
                const gameStarted = new events_1.GameStartedEvent();
                document.dispatchEvent(gameStarted);
            });
        });
        if (this.urlParams.get('id') === null) {
            document.dispatchEvent(new events_1.NewGameEvent());
        }
        setInterval(() => {
            const id = this.GetId();
            if (id === null) {
                return;
            }
            Get('/poll', id)
                .then(response => response.json())
                .then(data => console.log(`Recieved polling response: ${JSON.stringify(data)}`));
        }, 1000);
    }
    GetId() {
        return this.urlParams.get('id');
    }
}
exports.ClientNetworking = ClientNetworking;
//# sourceMappingURL=client_networking.js.map