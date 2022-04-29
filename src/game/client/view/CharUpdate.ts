export class CharUpdate {
  char: string;
  wordIndex: number;
  charIndex: number;
  constructor(char: string, wordIndex: number, charIndex: number) {
    this.char = char;
    this.wordIndex = wordIndex;
    this.charIndex = charIndex;
  }
}
