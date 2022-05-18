import { LobbyId } from '../structs/LobbyId';
import { PlayerId } from '../structs/PlayerId';
import { Word } from '../structs/Word';
import { AnnotatedWord } from './struct/AnnotatedWord';
import { CommandConfirmed } from './struct/CommandConfirmed';
import { CommandId } from './struct/CommandId';
export declare type UndoFunction = () => void;
export declare class CommandData {
    commandId?: CommandId | undefined;
    confirmed?: CommandConfirmed | undefined;
    player?: PlayerId | undefined;
    key?: string | undefined;
    guess?: Word | undefined;
    lobbyId?: LobbyId | undefined;
    yourAnnotation?: AnnotatedWord | undefined;
    theirAnnotation?: AnnotatedWord | undefined;
    constructor(commandId?: CommandId | undefined, confirmed?: CommandConfirmed | undefined, player?: PlayerId | undefined, key?: string | undefined, guess?: Word | undefined, lobbyId?: LobbyId | undefined, yourAnnotation?: AnnotatedWord | undefined, theirAnnotation?: AnnotatedWord | undefined);
}
export declare abstract class Command<ModelType, UpdateType> {
    data: CommandData;
    type?: string;
    update?: UpdateType;
    constructor(data: CommandData);
    Execute(model: ModelType): void;
    protected abstract Apply(model: ModelType): UpdateType;
}
