import {BaseModal} from './Modal';

export class LoadingModal extends BaseModal {
  constructor(modal: HTMLDivElement) {
    super();
    this.AddDiv(modal, 'Loading...');
  }
}
