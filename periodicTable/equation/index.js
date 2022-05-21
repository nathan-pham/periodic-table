import Lexer from "./Lexer.js";
import Parser from "./Parser.js";

const evaluate = (equation) => {
    const lexer = new Lexer(equation);
    const parser = new Parser(lexer.tokens);
};

evaluate("(Na2 (OH)2) Br4");
