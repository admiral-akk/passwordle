export enum AnimationType {
  Pulse = 'pulse',
  BounceIn = 'bounceIn',
  FlipInX = 'flipInX',
  HeartBeat = 'heartBeat',
  ShakeX = 'shakeX',
  ShakeY = 'shakeY',
  FadeIn = 'fadeIn',
  FadeOut = 'fadeOut',
}

const ANIMATION_DURATION_STR = '--animate-duration';
const ANIMATION_CLASS_STR = 'animate__animated';

// From https://animate.style/#javascript
export function AnimateCSS(
  element: HTMLElement,
  animation: AnimationType,
  duration: Number = 0.5
): Promise<string> {
  return new Promise(resolve => {
    const animationName = `animate__${animation.toString()}`;
    const node = element;
    node.style.setProperty(ANIMATION_DURATION_STR, `${duration.toFixed(2)}s`);
    node.classList.add(ANIMATION_CLASS_STR, animationName);

    function animationEnd(event: AnimationEvent) {
      event.stopPropagation();
      node.classList.remove(ANIMATION_CLASS_STR, animationName);
      resolve('Animation complete');
    }

    node.addEventListener('animationend', animationEnd, {once: true});
  });
}
