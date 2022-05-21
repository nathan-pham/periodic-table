// types
const types = Object.freeze({
    NUMBER: "NUMBER",
    LPAREN: "LPAREN",
    RPAREN: "RPAREN",
    ELEMENT: "ELEMENT",
});

export default types;

// detect types
export const isNumber = (char) => !isNaN(parseInt(char));
export const isParen = (char) => ["(", ")"].includes(char);
export const isLower = (char) => char && char === char.toLowerCase();
