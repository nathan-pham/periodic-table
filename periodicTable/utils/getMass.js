import parseExpression from "./parseExpression.js";
import findBy from "./findBy.js";

const getMass = (elements) => (equation) => {
    const masses = parseExpression(elements)(equation)
        .flat(Infinity)
        .map((el) => parseFloat(findBy(elements)("Symbol", el)["AtomicMass"]));

    return masses.reduce((acc, curr) => acc + curr, 0);
};

export default getMass;
