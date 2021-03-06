import {TargetProgress} from '../../structs/TargetProgress';
import {YourPasswordView} from './view/YourPasswordView';
import {Word} from '../../structs/Word';
import {LetterAnimation} from './view/struct/Animation';
import {ModelState} from './ModelState';

export class YourPasswordState extends ModelState<YourPasswordView> {
  public password?: Word;
  public knownCharacters: string[] = ['', '', '', '', ''];

  Reset(): void {
    super.Reset();
    this.knownCharacters = ['', '', '', '', ''];
    this.password = undefined;
  }

  SetPassword(password: Word) {
    this.password = password;
    this.view?.SetSecret(this.password);
  }

  GetPassword(): Word {
    return this.password!;
  }

  Update(target: TargetProgress, playerGuess: string): LetterAnimation[] {
    for (let i = 0; i < target.knownCharacters.length; i++) {
      if (target.knownCharacters[i] !== '') {
        this.knownCharacters[i] = target.knownCharacters[i];
      }
    }
    if (this.view) {
      return this.view.Update(target, playerGuess);
    }
    return [];
  }

  GetProgress(): TargetProgress {
    return new TargetProgress(this.knownCharacters);
  }

  Lost(): boolean {
    return this.knownCharacters.filter(c => c === '').length === 0;
  }
}
