import {LetterState} from '../structs/Knowledge';
import {AnnotatedMove} from '../structs/AnnotatedMove';

export class BoardView {
  protected letterBoxes: HTMLDivElement[][];
  constructor(guessCount: number, wordLength: number) {
    this.letterBoxes = [];
    const top = document.getElementById('game');
    const gameboard = document.createElement('div');
    gameboard.className = 'game-board';
    for (let i = 0; i < guessCount; i++) {
      const rowArray = [];
      const row = document.createElement('div');
      row.className = 'letter-row';
      for (let j = 0; j < wordLength; j++) {
        const box = document.createElement('div');
        box.className = 'letter-box';
        row.appendChild(box);
        rowArray.push(box);
      }
      gameboard?.appendChild(row);
      this.letterBoxes.push(rowArray);
    }
    top?.appendChild(gameboard);
    this.Clear();
  }

  UpdateWords(annotatedMoves: AnnotatedMove[]) {
    for (let i = 0; i < annotatedMoves.length; i++) {
      const row = this.letterBoxes[i];
      const guess = annotatedMoves[i].knowledge.guess;
      const knowledge = annotatedMoves[i].knowledge.letterKnowledge;
      for (let j = 0; j < row.length; j++) {
        const letter = row[j];
        this.UpdateColor(letter, knowledge[j]);
        letter.innerText = guess[j];
      }
    }
  }

  UpdateGuess(guess: string, guessCount: number) {
    const row = this.letterBoxes[guessCount];
    for (let i = 0; i < row.length; i++) {
      if (i < guess.length) {
        row[i].innerText = guess[i];
      } else {
        row[i].innerText = '';
      }
    }
  }

  Clear() {
    this.letterBoxes.forEach(row => {
      row.forEach(letter => {
        letter.innerText = '';
        this.UpdateColor(letter, LetterState.None);
      });
    });
  }

  private UpdateColor(letter: HTMLDivElement, knowledge: LetterState) {
    switch (knowledge) {
      case LetterState.None:
        letter.style.backgroundColor = 'white';
        break;
      case LetterState.Yellow:
        letter.style.backgroundColor = 'yellow';
        break;
      case LetterState.Green:
        letter.style.backgroundColor = 'green';
        break;
      case LetterState.Grey:
        letter.style.backgroundColor = 'grey';
        break;
    }
  }
}
