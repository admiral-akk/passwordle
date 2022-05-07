import { Word } from '../structs/Word';
import { PlayerId } from '../../PlayerId';
import { UpdatedAnswerKnowledge } from './updates/Updates';
import { EndGameState } from '../client/view/subview/EndGameView';
export declare class KnowledgeExchangeServer {
    private players;
    private answers;
    private updateKnowledgeCallback;
    private GameEnded;
    private progress;
    private opponent;
    private currentGuess;
    constructor(players: PlayerId[], answers: Record<PlayerId, Word>, updateKnowledgeCallback: (playerId: PlayerId, update: UpdatedAnswerKnowledge) => void, GameEnded: (ending: Record<PlayerId, EndGameState>) => void);
    private SendUpdatedKnowledge;
    private GenerateEndgame;
    private CheckEndGame;
    private UpdateProgress;
    private SendKnowledge;
    private ClearGuesses;
    RegisterGuess(player: PlayerId, guess: Word): void;
}
