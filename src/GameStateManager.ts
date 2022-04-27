import {AnnotatedMove} from './public/structs/AnnotatedMove';
import {GameState} from './public/structs/GameState';
import {NewMove} from './public/structs/Move';
import {PlayerId} from './public/structs/PlayerId';

export class GameStateManager {
  private gameState: GameState;
  private player1Id: string;
  private player2Id: string;
  private answer1: string;
  private answer2: string;
  private state: State;

  private GenerateAnswer() {
    let answer: string;
    do {
      answer = WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
    } while (answer in [this.answer1, this.answer2]);
    return answer;
  }

  constructor(players: PlayerId[]) {
    this.player1Id = players[0];
    this.player2Id = players[1];
    this.answer1 = this.GenerateAnswer();
    this.answer2 = this.GenerateAnswer();
    this.state = State.Player1ToMove;
    this.gameState = new GameState(this.player1Id);
  }

  // We assume the move is legal.
  SubmitMove(move: NewMove) {
    if (move.player !== this.gameState.playerToMove) {
      throw "Not player's turn!";
    }

    let answer: string;
    switch (this.state) {
      case State.None:
        throw 'State not initialized!';
      case State.Player1ToMove:
        answer = this.answer1;
        this.state = State.Player2ToMove;
        break;
      case State.Player2ToMove:
        answer = this.answer2;
        this.state = State.Player1ToMove;
        break;
    }
    const knowledge = GetKnowledge(move.guess, answer);
    const annotatedMove = new AnnotatedMove(move, knowledge);
    this.gameState.moves.push(annotatedMove);
  }

  GetState(player: string): GameState {
    return this.gameState;
  }
}

enum State {
  None,
  Player1ToMove,
  Player2ToMove,
}

export enum PlayerActions {
  JoinLobby, // send lobby id, get game state
  StartLobby, // send blank, get lobby id
  EnterGuess, // send guess + id + player, get knowledge + player (Move)
  DeleteChar, // send blank
  AddChar, // send char
  CopyLobbyLink, //  send blank
}

export enum GameActions {
  SendState, //  send id + Move[]
  SendGameId, // send id
  SendResults, // send knowledge
  RequestState, // send id + player
}

import {LetterState, WordKnowledge} from './public/knowledge';
import {WORDS} from './public/words';

export function GetKnowledge(guess: string, answer: string): WordKnowledge {
  const answer_state: LetterState[] = [];
  for (let i = 0; i < guess.length; i++) {
    answer_state[i] = LetterState.None;
    if (guess[i] === answer[i]) {
      answer_state[i] = LetterState.Green;
    }
    if (!answer.includes(guess[i])) {
      answer_state[i] = LetterState.Grey;
    }
  }
  for (let i = 0; i < guess.length; i++) {
    if (answer_state[i] !== LetterState.None) {
      continue;
    }
    let matched = 0;
    for (let j = 0; j < guess.length; j++) {
      if (i === j) {
        continue;
      }
      if (
        answer_state[j] !== LetterState.Green &&
        answer_state[j] !== LetterState.Yellow
      ) {
        continue;
      }
      if (guess[j] !== guess[i]) {
        continue;
      }
      matched++;
    }
    const charCount = (answer.match(new RegExp(guess[i], 'g')) || []).length;
    if (charCount > matched) {
      answer_state[i] = LetterState.Yellow;
    } else {
      answer_state[i] = LetterState.Grey;
    }
  }
  return new WordKnowledge(answer_state, guess);
}
