import importCsv from "./importCsv.js";

import { __dirname } from "./node.js";

import * as path from "path";
import * as fs from "fs";

// import periodic table (csv)
// return array of elements
const importPeriodicTable = (filename) => {
    const { rows, headings } = importCsv(filename);
    const elements = [];

    for (const row of rows) {
        const element = {};

        for (let i = 0; i < headings.length; i++) {
            element[headings[i]] = row[i];
        }

        elements.push(element);
    }

    return elements;
};

const createUtils = async (elements) => {
    const utilsDir = "./utils";
    const modules = await fs
        .readdirSync(path.join(__dirname, utilsDir))
        .reduce(async (acc, curr) => {
            const moduleName = curr.split(".").shift();
            const module = await import(`${utilsDir}/${curr}`).then(
                (m) => m.default
            );

            return {
                ...(await acc),
                [moduleName]: module(elements),
            };
        }, {});

    return modules;
};

const elements = importPeriodicTable("./periodicTableData.csv");
const utils = await createUtils(elements);

utils.getMass("NaOH");

// console.log(utils.findBy("Symbol", "H"));
