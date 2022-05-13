import {Word} from '../../structs/Word';
import {WordKnowledge} from '../../structs/WordKnowledge';
import {LetterState} from '../../structs/LetterState';

export function GetKnowledge(guess: Word, answer: Word): WordKnowledge {
  const answer_state: LetterState[] = [];
  for (let i = 0; i < guess.length; i++) {
    answer_state[i] = LetterState.NoKnowledge;
    if (guess[i] === answer[i]) {
      answer_state[i] = LetterState.Correct;
    }
    if (!answer.includes(guess[i])) {
      answer_state[i] = LetterState.NotInWord;
    }
  }
  for (let i = 0; i < guess.length; i++) {
    if (answer_state[i] !== LetterState.NoKnowledge) {
      continue;
    }
    let matched = 0;
    for (let j = 0; j < guess.length; j++) {
      if (i === j) {
        continue;
      }
      if (
        answer_state[j] !== LetterState.Correct &&
        answer_state[j] !== LetterState.WrongPosition
      ) {
        continue;
      }
      if (guess[j] !== guess[i]) {
        continue;
      }
      matched++;
    }
    const charCount = (answer.match(new RegExp(guess[i], 'g')) || []).length;
    if (charCount > matched) {
      answer_state[i] = LetterState.WrongPosition;
    } else {
      answer_state[i] = LetterState.NotInWord;
    }
  }
  return new WordKnowledge(answer_state, guess);
}
