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
const GameServerManager_1 = require("./GameServerManager");
const LobbyServer_1 = require("./lobby/server/LobbyServer");
const NetworkTypes_1 = require("./NetworkTypes");
const SocketManager_1 = require("./SocketManager");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
const lobbyServer = new LobbyServer_1.NewLobbyServer(EnterGame);
const gameServer = new GameServerManager_1.GameServerManager(ExitGame);
const socketManager = new SocketManager_1.SocketManager();
(0, NetworkTypes_1.GetServer)(app, socketManager, lobbyServer);
function EnterGame(players) {
    const gameSockets = socketManager.GetSockets(players);
    gameServer.EnterGame(gameSockets);
}
function ExitGame(players, ending) {
    const lobbySockets = socketManager.GetSockets(players);
    lobbyServer.EndGame(lobbySockets, ending);
}
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Return the articles to the rendering engine
    res.render('index');
}));
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
//# sourceMappingURL=index.js.map