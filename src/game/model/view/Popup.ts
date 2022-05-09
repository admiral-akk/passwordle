import {AnimateCSS, AnimationType} from './Animate';

export function AddPopup(
  target: HTMLElement,
  text: string,
  durationSeconds = 1.5
) {
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerText = text;
  target.appendChild(popup);
  AnimateCSS(popup, AnimationType.BounceIn, 0.5)
    .then(
      () =>
        new Promise(resolve =>
          setTimeout(resolve, 1000 * (durationSeconds - 1))
        )
    )
    .then(() => {
      AnimateCSS(popup, AnimationType.FadeOut, 0.5);
      return new Promise(resolve => setTimeout(resolve, 450));
    })
    .finally(() => popup.remove());
}
