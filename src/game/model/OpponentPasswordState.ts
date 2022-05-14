import {TargetProgress} from '../../structs/TargetProgress';
import {ModelState} from './ModelState';
import {OpponentPasswordView} from './view/OpponentPasswordView';
import {LetterAnimation} from './view/struct/Animation';

export class OpponentPasswordState extends ModelState<OpponentPasswordView> {
  public password: string[] = ['', '', '', '', ''];

  Reset(): void {
    super.Reset();
    this.password = ['', '', '', '', ''];
  }

  Update(progress: TargetProgress, playerGuess: string): LetterAnimation[] {
    for (let i = 0; i < progress.knownCharacters.length; i++) {
      if (progress.knownCharacters[i] !== '') {
        this.password[i] = progress.knownCharacters[i];
      }
    }
    if (this.view) {
      return this.view.Update(progress, playerGuess);
    }
    return [];
  }

  GetProgress(): TargetProgress {
    return new TargetProgress(this.password);
  }

  Won(): boolean {
    return this.password.filter(c => c === '').length === 0;
  }
}
