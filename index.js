import * as periodicTable from "./periodicTable/index.js";
import prompt from "./prompt.js";

const expression = await prompt("enter chemical expression to get mass > ");
console.log(periodicTable.utils.getMass(expression));
