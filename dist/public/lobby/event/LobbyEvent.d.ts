import { NetworkEvent } from "../../event/NetworkEvent";
import { ClientId } from "../../struct/ClientId";
export declare class LobbyEvent extends NetworkEvent {
    clientId: ClientId;
    constructor(clientId: ClientId);
}
