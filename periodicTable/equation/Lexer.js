import types, { isNumber, isParen, isLower, isLetter } from "./types.js";
import Token from "./Token.js";

export default class Lexer {
    currentPos = 0;

    constructor(equation) {
        this.equation = this.preprocess(equation);
        this.tokens = [];

        this.tokenize(this.equation);
    }

    get currentChar() {
        return this.equation[this.currentPos];
    }

    get peekChar() {
        return this.equation[this.currentPos + 1];
    }

    addToken(token) {
        this.tokens.push(token);
    }

    nextChar() {
        this.currentPos++;
        return this.equation[this.currentPos];
    }

    preprocess(equation) {
        return equation
            .split(" ")
            .map((t) => t.trim())
            .filter((t) => t.length)
            .join("");
    }

    tokenize() {
        while (this.currentPos < this.equation.length) {
            // handle digits
            if (isNumber(this.currentChar)) {
                let number = this.currentChar;

                while (isNumber(this.peekChar)) {
                    number += this.nextChar();
                }

                this.addToken(new Token(parseInt(number), types.NUMBER));
            }

            // handle parenthesis
            else if (isParen(this.currentChar)) {
                this.addToken(
                    new Token(
                        this.currentChar,
                        this.currentChar === "(" ? types.LPAREN : types.RPAREN
                    )
                );
            }

            // add elements
            else {
                this.addToken(
                    new Token(
                        isLower(this.peekChar) && isLetter(this.peekChar)
                            ? this.currentChar + this.nextChar()
                            : this.currentChar,
                        types.ELEMENT
                    )
                );
            }

            this.nextChar();
        }

        this.addToken(new Token("END", types.END));
    }
}
