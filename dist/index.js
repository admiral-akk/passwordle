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
const GameServer_1 = require("./game/GameServer");
const LobbyServer_1 = require("./lobby/LobbyServer");
const NetworkTypes_1 = require("./NetworkTypes");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
const lobbyServer = new LobbyServer_1.LobbyServer(HandoffLobby);
(0, NetworkTypes_1.GetServer)(app, lobbyServer);
function HandoffLobby(lobby) {
    const gameSockets = lobby.players.map(lobbyServerSocket => lobbyServerSocket);
    for (let i = 0; i < gameSockets.length; i++) {
        gameSockets[i].data.playerIndex = i;
    }
    const game = new GameServer_1.GameServer(gameSockets);
}
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Return the articles to the rendering engine
    res.render('index');
}));
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
//# sourceMappingURL=index.js.map