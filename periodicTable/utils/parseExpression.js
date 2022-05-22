import Lexer from "../equation/Lexer.js";
import Parser from "../equation/Parser.js";

const parseExpression = (_) => (equation) => {
    const lexer = new Lexer(equation);
    const parser = new Parser(lexer.tokens);

    return parser.equation;
};

export default parseExpression;
