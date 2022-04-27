"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const LobbyId_1 = require("./public/structs/LobbyId");
const PlayerId_1 = require("./public/structs/PlayerId");
const ServerManager_1 = require("./ServerManager");
const app = (0, express_1.default)();
const port = 3000;
const server = new ServerManager_1.ServerManager();
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
AddGetEndpoint(app, '/start_lobby', (req, res) => res.json(server.StartLobby()));
AddGetEndpoint(app, '/join_lobby/:lobbyId', (req, res) => {
    const lobbyId = req.params.lobbyId;
    res.json(server.JoinLobby((0, LobbyId_1.ToLobbyId)(lobbyId)));
});
AddGetEndpoint(app, '/get_state/:lobbyId/:playerId', (req, res) => {
    const lobbyId = req.params.lobbyId;
    const playerId = req.params.playerId;
    res.json(server.GetState((0, LobbyId_1.ToLobbyId)(lobbyId), (0, PlayerId_1.ToPlayerId)(playerId)));
});
app.post('/submit_move/:lobbyId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lobbyId = req.params.lobbyId;
        const move = req.body;
        server.SubmitMove(lobbyId, move);
        res.sendStatus(200);
    }
    catch (err) {
        console.error(err);
    }
}));
app.listen(port, () => console.log(`Listening on port ${port}`));
function AddGetEndpoint(app, path, handler) {
    app.get(path, (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            handler(req, res);
        }
        catch (err) {
            console.error(err);
        }
    }));
}
//# sourceMappingURL=Server.js.map