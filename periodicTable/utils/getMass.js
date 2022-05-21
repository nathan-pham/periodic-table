const createToken = (element, count = 0) => ({
    element,
    count,
});

const parseEquation = (equation) => {
    const tokens = [];

    let currentPos = 0;
    let currentChar = equation[currentPos];

    // let element = "";
    // let i = 0;
    // while (i < equation.length) {
    //     const next = equation[i + 1] || "";
    //     const isSingle = next === next.toUpperCase();

    //     if (isSingle) {
    //         tokens.push(equation[i]);
    //     } else {
    //         tokens.push(equation.substring(i, i + 2));
    //         i++;
    //     }

    //     i++;
    // }

    console.log(tokens);

    return tokens;
};

const getMass = (elements) => (equation) => {
    parseEquation(equation);
};

export default getMass;
