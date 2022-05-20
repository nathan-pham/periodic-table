import importCsv from "./importCsv";

import findBy from "./utils/findBy";
import getMass from "./utils/getMass";

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

const createUtils = (elements) => {
    return {
        findBy: findBy(elements),
        getMass: getMass(elements),
    };
};

const elements = importPeriodicTable("./periodicTableData.csv");
const utils = createUtils(elements);

utils.getMass("NaOH");

// console.log(utils.findBy("Symbol", "H"));
