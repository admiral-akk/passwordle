import {LetterState, WordKnowledge} from './Knowledge';

export function GetKnowledge(guess: string, answer: string): WordKnowledge {
  const answer_state: LetterState[] = [];
  for (let i = 0; i < guess.length; i++) {
    answer_state[i] = LetterState.None;
    if (guess[i] === answer[i]) {
      answer_state[i] = LetterState.Green;
    }
    if (!answer.includes(guess[i])) {
      answer_state[i] = LetterState.Grey;
    }
  }
  for (let i = 0; i < guess.length; i++) {
    if (answer_state[i] !== LetterState.None) {
      continue;
    }
    let matched = 0;
    for (let j = 0; j < guess.length; j++) {
      if (i === j) {
        continue;
      }
      if (
        answer_state[j] !== LetterState.Green &&
        answer_state[j] !== LetterState.Yellow
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
      answer_state[i] = LetterState.Yellow;
    } else {
      answer_state[i] = LetterState.Grey;
    }
  }
  return new WordKnowledge(answer_state, guess);
}
