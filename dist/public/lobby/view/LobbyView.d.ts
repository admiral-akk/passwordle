export declare class LobbyView {
    private root;
    private background;
    private modal;
    private currentModal;
    constructor();
    private SetModal;
    Menu(hostLobby: () => void, matchmake: () => void): void;
    HostingMatch(link: string): void;
}
