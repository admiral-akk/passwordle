import { ClientManager } from './ClientManager';
export declare class NetworkInterface {
    client: ClientManager;
    constructor();
    private RegisterListeners;
    Connect(): void;
}
