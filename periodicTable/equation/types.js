// types
const types = Object.freeze({
    NUMBER: "NUMBER",
    LPAREN: "LPAREN",
    RPAREN: "RPAREN",
    ELEMENT: "ELEMENT",
    END: "END",
});

export default types;

// detect types
export const isNumber = (char) => !isNaN(parseInt(char));
export const isParen = (char) => ["(", ")"].includes(char);
export const isLower = (char) => char && char === char.toLowerCase();
export const isLetter = (char) => char.match(/[a-z]/i);
