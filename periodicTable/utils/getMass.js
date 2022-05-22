import Lexer from "../equation/Lexer.js";
import Parser from "../equation/Parser.js";

import findBy from "./findBy.js";

const extract = (equation) => {
    const lexer = new Lexer(equation);
    const parser = new Parser(lexer.tokens);

    return parser.equation.flat(Infinity);
};

const getMass = (elements) => (equation) => {
    const masses = extract(equation).map((el) =>
        parseFloat(findBy(elements)("Symbol", el)["AtomicMass"])
    );

    return masses.reduce((acc, curr) => acc + curr, 0);
};

export default getMass;
