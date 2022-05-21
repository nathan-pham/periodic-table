import { __dirname } from "./node.js";

import * as path from "path";
import * as fs from "fs";

const importCsv = (filename) => {
    // prettier-ignore
    const rows = fs
        .readFileSync(path.join(__dirname, filename), "utf8")       // read csv file
        .split("\n")                                                // split into rows
        .map((line) => line.split(",").map((item) => item.trim())); // split each row by space

    return {
        headings: rows.shift(),
        rows,
    };
};

export default importCsv;
