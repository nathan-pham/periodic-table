import types, { isNumber, isParen, isLower } from "./types.js";
import Token from "./Token.js";

export default class Lexer {
    currentPos = 0;

    constructor(equation) {
        this.equation = equation;
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

    tokenize(equation) {
        equation = equation.split(" ").join("");

        while (this.currentPos < equation.length) {
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
                        isLower(this.peekChar) && !isParen(this.peekChar)
                            ? this.currentChar + this.nextChar()
                            : this.currentChar,
                        types.ELEMENT
                    )
                );
            }

            // this.addToken()
            //     let element = currentChar;
            //     if (!isNaN(parseInt(peekChar))) {
            //         element = this.nextChar();
            //     } else if (peekChar === peekChar.toLowerCase()) {
            //         element += this.nextChar();
            //     }
            //     this.addToken(new Token(element));
            this.nextChar();
        }
    }
}

const lexer = new Lexer("Na(OH)253");
console.log(lexer.tokens);
