import { PlayerId } from '../../PlayerId';
import { AddedChar, UpdatedAnswerKnowledge } from '../network/updates/Updates';
export declare class ServerBoard {
    private answers;
    constructor(players: PlayerId[]);
    addedChar(player: PlayerId, update: AddedChar): void;
    generateKnowledge(player: PlayerId): UpdatedAnswerKnowledge;
}
