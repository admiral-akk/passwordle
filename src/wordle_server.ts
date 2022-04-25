
import { GameStartedMessage, KnowledgeUpdateMessage, SubmitWordMessage } from './public/network_events';
import { GetKnowledge } from './public/wordle_logic';
import {WORDS} from './public/words';

export class WordleServer {
    constructor() {
        this._answer = ``;
    }
    private _answer : string;

    async HandleEvent(body : any) : Promise<any> {
        const event = body;
        switch (body.type) {
            case 'new_game':
                return this.NewGame();
            case `submit`:
                const submit = body as SubmitWordMessage;
                return this.Guess(submit.detail);
            default:
                console.log(`unknown event: ${JSON.stringify(body)}`)
                break;
        }
    }

    private NewGame() : Promise<any> {
        this._answer = WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
        return Promise.resolve(new GameStartedMessage());
    }

    private Guess(guess : string)  : Promise<any>  {
        const knowledge = GetKnowledge(guess, this._answer);
        return Promise.resolve(new KnowledgeUpdateMessage(knowledge));
    }
}