import {
  AddCharCommand,
  DeleteCommand,
  GameStateEvent,
  PlayerToMoveEvent,
  SubmitCommand,
  SubmitGuessEvent,
} from '../public/Events';

// Courtsey of: https://stackoverflow.com/questions/43001679/how-do-you-create-custom-event-in-typescript
interface CustomEventMap {
  GameStateEvent: GameStateEvent;
  SubmitCommand: SubmitCommand;
  DeleteCommand: DeleteCommand;
  AddCharCommand: AddCharCommand;
  SubmitWordEvent: SubmitGuessEvent;
  PlayerToMoveEvent: PlayerToMoveEvent;
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
