import {
  SubmitWordEvent,
  DeleteEvent,
  AddCharEvent,
  KnowledgeUpdateEvent,
} from '../public/events';

// Courtsey of: https://stackoverflow.com/questions/43001679/how-do-you-create-custom-event-in-typescript
interface CustomEventMap {
  submit: SubmitWordEvent;
  delete: DeleteEvent;
  add_key: AddCharEvent;
  update_knowledge: KnowledgeUpdateEvent;
}

declare global {
  interface Document {
    addEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEventMap[K]) => void
    ): void;
  }
  interface HTMLElement {
    addEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEventMap[K]) => void
    ): void;
  }
}
export {}; //keep that to TS compliler.
