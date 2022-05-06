export declare enum AnimationType {
    Pulse = "pulse",
    BounceIn = "bounceIn",
    FlipInX = "flipInX",
    HeartBeat = "heartBeat",
    ShakeX = "shakeX"
}
export declare function AnimateCSS(element: HTMLElement, animation: AnimationType, duration?: Number): Promise<string>;
