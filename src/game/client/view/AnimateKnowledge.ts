import {LetterState} from '../structs/LetterState';
import {WordKnowledge} from '../structs/WordKnowledge';
import {HintUpdate} from './HintUpdate';
import {AnswerView} from './subview/AnswerView';
import {BoardView} from './subview/BoardView';
import {TargetView} from './subview/TargetView';

export function AnimateHint(
  update: HintUpdate,
  charIndex: number,
  playerBoard: BoardView,
  opponentBoard: BoardView,
  answer: AnswerView,
  target: TargetView
) {
  if (charIndex >= 10) {
    return;
  }
  const nextCharIndex = charIndex + 1;
  // goal
  const targetProgress = update.hint.opponentProgress;
  // opponent's goal
  const playerProgress = update.hint.playerProgress;
  let knowledge: WordKnowledge;
  let board: BoardView;
  if (charIndex > 4) {
    // opponent
    knowledge = update.hint.opponentGuess;
    board = opponentBoard;
    charIndex -= 5;
  } else {
    knowledge = update.hint.playerGuess;
    board = playerBoard;
  }

  // Update the letter
  board.SetCharKnowledge(
    update.guessIndex,
    charIndex,
    knowledge.guess[charIndex],
    knowledge.letterKnowledge[charIndex]
  );

  let promise = Promise.resolve();
  if (knowledge.letterKnowledge[charIndex] === LetterState.Correct) {
    promise = promise
      .then(() => delay(500))
      .then(() => target.UpdateProgress(charIndex, knowledge.guess[charIndex]));
  }
  if (
    knowledge.guess[charIndex] === playerProgress.knownCharacters[charIndex]
  ) {
    promise = promise
      .then(() => delay(500))
      .then(() => answer.UpdateProgress(charIndex));
  }
  promise
    .then(() => delay(500))
    .then(() =>
      AnimateHint(
        update,
        nextCharIndex,
        playerBoard,
        opponentBoard,
        answer,
        target
      )
    );
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
}
