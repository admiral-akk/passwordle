import {TargetProgress} from '../structs/TargetProgress';
import {WordKnowledge} from '../structs/WordKnowledge';
import {HintUpdate} from './HintUpdate';
import {BoardView} from './subview/BoardView';
import {PasswordView} from './subview/PasswordView';

export function AnimateHint(
  update: HintUpdate,
  charIndex: number,
  playerBoard: BoardView,
  opponentBoard: BoardView,
  answer: PasswordView,
  target: PasswordView
) {
  if (charIndex >= 10) {
    return;
  }
  let animations = GenerateAnimations(
    playerBoard,
    update.hint.playerGuess,
    update.guessIndex,
    answer,
    target,
    update.hint.playerProgress,
    update.hint.opponentProgress
  );

  animations = animations.concat(
    GenerateAnimations(
      opponentBoard,
      update.hint.opponentGuess,
      update.guessIndex,
      answer,
      target,
      update.hint.playerProgress,
      update.hint.opponentProgress
    )
  );

  let promise = Promise.resolve();
  animations.forEach(animation => {
    if (animation) {
      promise = promise.then(() => delay(500)).then(() => animation!());
    }
  });
}

function GenerateAnimations(
  board: BoardView,
  guess: WordKnowledge,
  wordIndex: number,
  answer: PasswordView,
  target: PasswordView,
  playerProgress: TargetProgress,
  opponentProgress: TargetProgress
): ((() => void) | null)[] {
  const animations: ((() => void) | null)[] = [];
  const targetAnimations = target.GetAnimations(guess.guess, opponentProgress);
  const answerAnimations = answer.GetAnimations(guess.guess, playerProgress);

  for (let i = 0; i < 5; i++) {
    animations.push(() => {
      board.SetCharKnowledge(
        wordIndex,
        i,
        guess.guess[i],
        guess.letterKnowledge[i]
      );
    });
    animations.push(answerAnimations[i]);
    animations.push(targetAnimations[i]);
  }
  return animations;
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
}
