import {BaseModal} from './Modal';

export class FindingMatchModal extends BaseModal {
  constructor(modal: HTMLDivElement) {
    super();
    this.AddDiv(modal, 'Finding Match...');
  }
}
