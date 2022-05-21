import Lexer from "./Lexer.js";
import Parser from "./Parser.js";

const evaluate = (equation) => {
    const lexer = new Lexer(equation);
    console.log(lexer.tokens);
    const parser = new Parser(lexer.tokens);
};

evaluate("Na2(OH4)");
