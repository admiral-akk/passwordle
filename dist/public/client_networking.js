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
    return window.fetch(`${path}/:${gameId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
}
class ClientNetworking {
    constructor() {
        this.id = '';
        this.urlParams = new URLSearchParams(window.location.search);
        for (const [key, value] of this.urlParams.entries()) {
            console.log(`param k: ${key}, v: ${value}`);
        }
        document.addEventListener('submit', e => {
            Post('/event', new network_events_1.SubmitWordMessage(e.detail, this.GetId()))
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
                this.id = data.id;
                const gameStarted = new events_1.GameStartedEvent();
                document.dispatchEvent(gameStarted);
            });
        });
        document.dispatchEvent(new events_1.NewGameEvent());
        setInterval(() => {
            if (this.GetId() === undefined) {
                return;
            }
            Get('/poll', this.GetId())
                .then(response => response.json())
                .then(data => console.log(`Recieved polling response: ${JSON.stringify(data)}`));
        }, 1000);
    }
    GetId() {
        return this.id;
    }
}
exports.ClientNetworking = ClientNetworking;
//# sourceMappingURL=client_networking.js.map