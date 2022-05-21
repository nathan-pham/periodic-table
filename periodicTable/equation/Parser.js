import types from "./types.js";

export default class Parser {
    constructor(tokens) {
        this.tokens = tokens;
        console.log(this.parse(this.tokens));
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

            let elements = [currentToken().raw];

            if (currentToken().type === types.LPAREN) {
                const subTokens = [];

                while (peekToken() && peekToken().type !== types.RPAREN) {
                    subTokens.push(nextToken());
                }

                nextToken();
                elements = this.parse(subTokens);
            }

            let repeat =
                peekToken() && peekToken().type === types.NUMBER
                    ? nextToken().raw
                    : 1;

            for (const element of elements) {
                for (let j = 0; j < repeat; j++) {
                    equation.push(element);
                }
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
