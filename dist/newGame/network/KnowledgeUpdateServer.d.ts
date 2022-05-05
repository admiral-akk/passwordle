import { Word } from '../../game/structs/Word';
import { PlayerId } from '../../PlayerId';
import { UpdatedAnswerKnowledge } from './updates/Updates';
export declare class KnowledgeExchangeServer {
    private players;
    private answers;
    private updateKnowledgeCallback;
    private progress;
    private opponent;
    private currentGuess;
    constructor(players: PlayerId[], answers: Record<PlayerId, Word>, updateKnowledgeCallback: (playerId: PlayerId, update: UpdatedAnswerKnowledge) => void);
    private SendUpdatedKnowledge;
    private UpdateProgress;
    private SendKnowledge;
    private ClearGuesses;
    RegisterGuess(player: PlayerId, guess: Word): void;
}
