import {LetterState} from '../client/structs/LetterState';
import {WordKnowledge} from '../client/structs/WordKnowledge';
import {ModelState} from './ModelState';
import {KeyboardView} from './view/KeyboardView';

const ALPHABET = 'QWERTYUIOPASDFGHJKLZXCVBNM';

export class KeyboardState extends ModelState<KeyboardView> {
  Reset(): void {
    this.view?.Reset();
    this.keyState = {};
    for (let i = 0; i < ALPHABET.length; i++) {
      this.SetState(ALPHABET[i], LetterState.NoKnowledge);
    }
  }

  private SetState(key: string, state: LetterState) {
    if (key in this.keyState && this.keyState[key] === LetterState.Correct) {
      return;
    }
    this.keyState[key] = state;
    this.view?.SetColor(key, state);
  }

  private keyState: Record<string, LetterState> = {};

  constructor(hasView: boolean, input: (key: string) => void) {
    super(KeyboardView, hasView);
    this.view?.Initialize(input);
    this.Reset();
  }

  Update(knowledge: WordKnowledge[]) {
    knowledge.forEach(k => {
      for (let i = 0; i < k.guess.length; i++) {
        this.SetState(k.guess[i], k.letterKnowledge[i]);
      }
    });
  }
}
