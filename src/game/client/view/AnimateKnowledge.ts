import {TargetProgress} from '../structs/TargetProgress';
import {WordKnowledge} from '../structs/WordKnowledge';
import {HintUpdate} from './HintUpdate';
import {BoardView} from './subview/BoardView';
import {OpponentBoardView} from './subview/OpponentBoardView';
import {OpponentPasswordView} from './subview/OpponentPasswordView';
import {YourBoardView} from './subview/YourBoardView';
import {YourPasswordView} from './subview/YourPasswordView';

export function AnimateHint(
  update: HintUpdate,
  yourBoard: YourBoardView,
  opponentBoard: OpponentBoardView,
  yourPassword: YourPasswordView,
  opponentPassword: OpponentPasswordView,
  updateComplete: () => void
) {
  let animations = GenerateAnimations(
    yourBoard,
    update.hint.playerGuess,
    update.guessIndex,
    yourPassword,
    opponentPassword,
    update.hint.playerProgress,
    update.hint.opponentProgress
  );

  animations = animations.concat(
    GenerateAnimations(
      opponentBoard,
      update.hint.opponentGuess,
      update.guessIndex,
      yourPassword,
      opponentPassword,
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
  promise.then(() => delay(500)).then(() => updateComplete());
}

function GenerateAnimations(
  board: BoardView,
  guess: WordKnowledge,
  wordIndex: number,
  yourPassword: YourPasswordView,
  opponentPassword: OpponentPasswordView,
  playerProgress: TargetProgress,
  opponentProgress: TargetProgress
): ((() => void) | null)[] {
  const animations: ((() => void) | null)[] = [];
  const targetAnimations = opponentPassword.GetAnimations(
    guess.guess,
    opponentProgress
  );
  const answerAnimations = yourPassword.GetAnimations(
    guess.guess,
    playerProgress
  );

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
