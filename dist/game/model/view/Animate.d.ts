export declare enum AnimationType {
    Pulse = "pulse",
    BounceIn = "bounceIn",
    FlipInX = "flipInX",
    HeartBeat = "heartBeat",
    ShakeX = "shakeX",
    ShakeY = "shakeY",
    FadeIn = "fadeIn",
    FadeOut = "fadeOut",
    Flash = "flash"
}
export declare function AnimateCSS(element: HTMLElement, animation: AnimationType, duration?: Number): Promise<string>;
export declare function AddPopup(target: HTMLElement, text: string, durationSeconds?: number): void;
