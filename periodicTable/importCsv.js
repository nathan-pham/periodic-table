import { fileURLToPath } from "url";
import * as path from "path";
import * as fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url)).toString();

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
