import types from "./types.js";

export default class Parser {
    constructor(tokens) {
        this.tokens = tokens;
        this.equation = this.parse(this.tokens);
    }

    // so here's the shit method:
    // just expand tokens (ie: Na2 => Na Na)
    parse(tokens) {
        const equation = [];

        let i = 0;
        while (i < tokens.length) {
            const currentToken = () => tokens[i];
            const peekToken = () => tokens[i + 1];
            const nextToken = () => {
                i++;
                return tokens[i];
            };

            let elements = [];

            if (currentToken().type === types.END) {
                break;
            } else if (currentToken().type === types.ELEMENT) {
                elements.push(currentToken().raw);
            } else if (currentToken().type === types.LPAREN) {
                let subTokens = [];
                let balanced = 0;

                while (peekToken()) {
                    if (currentToken().type === types.LPAREN) {
                        balanced--;
                    } else if (currentToken().type === types.RPAREN) {
                        balanced++;
                    }

                    subTokens.push(currentToken());
                    nextToken();

                    if (balanced === 0) {
                        break;
                    }
                }

                subTokens = subTokens.slice(1, -1);
                elements = this.parse(subTokens);

                i--;
            }

            let repeat = 1;

            if (peekToken() && peekToken().type === types.NUMBER) {
                repeat = nextToken().raw;
            }

            for (let j = 0; j < repeat; j++) {
                equation.push(elements);
            }

            nextToken();
        }

        return equation;
    }
}

/*
[
  Token { raw: 'Na', type: 'ELEMENT' },
  Token { raw: 2, type: 'NUMBER' },
  Token { raw: '(', type: 'LPAREN' },
  Token { raw: 'O', type: 'ELEMENT' },
  Token { raw: 'H', type: 'ELEMENT' },
  Token { raw: ')', type: 'RPAREN' },
  Token { raw: 2, type: 'NUMBER' }
]

[
  Token { raw: 'Na', type: 'ELEMENT' },
]

*/
