import { Word } from '../structs/Word';
import { BoardState } from '../model/BoardState';
export declare class YourPasswordState extends BoardState {
    private password;
    private state;
    private view;
    SetPassword(password: Word): void;
}
