export declare enum AnimationType {
    Pulse = "pulse",
    Bounce = "bounce"
}
export declare function AnimateCSS(element: HTMLElement, animation: AnimationType, duration?: Number): Promise<string>;
