"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkManager = void 0;
class NetworkManager {
}
exports.NetworkManager = NetworkManager;
var NetworkState;
(function (NetworkState) {
    NetworkState[NetworkState["None"] = 0] = "None";
    NetworkState[NetworkState["Free"] = 1] = "Free";
    NetworkState[NetworkState["WaitingForResponse"] = 2] = "WaitingForResponse";
    NetworkState[NetworkState["RecievedResponse"] = 3] = "RecievedResponse";
})(NetworkState || (NetworkState = {}));
//# sourceMappingURL=NetworkManager.js.map