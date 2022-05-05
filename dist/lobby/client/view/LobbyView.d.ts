export declare class LobbyView {
    private root;
    private background;
    private modal;
    private currentModal;
    constructor();
    private SetModal;
    Loading(): void;
    GameEnded(): void;
    Menu(hostLobby: () => void, matchmake: () => void): void;
    HostingMatch(link: string): void;
    FindingMatch(): void;
    LobbyReady(): void;
    RematchMenu(): void;
    InGame(): void;
}
