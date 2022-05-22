![project banner](https://project-banner.phamn23.repl.co/?title=Periodic%20Table&description=A%20parser%20for%20chemistry&stack=node)

# Periodic Table

A parser for chemistry. Huge props to [robertwb for editing the dataset](https://gist.github.com/robertwb/22aa4dbfb6bcecd94f2176caa912b952).

## Usage

Start by importing the periodic table into your project. This module provides two exports:

1. elements: array of elements, parsed from `periodicTableData.csv`
2. utils: contains a wide array of interesting functions

```js
import * as periodicTable from "./periodicTable/index.js";
```

## Utilities

### findBy

Find an element by heading (see csv datatable for types of data you can query)

```js
periodicTable.utils.findBy("Symbol", "H");

// =>
// {
//   AtomicNumber: '1',
//   Element: 'Hydrogen',
//   Symbol: 'H',
//   ...
// }
```

### getMass

Gets the molar mass of a chemical expression

```js
periodicTable.utils.getMass("NaOH");
// => 39.99
```

### parseExpression

Expand expression into a full list of elements (use `flat(Infinity)` for a 1D list)

```js
periodicTable.utils.parseExpression("NaOH Na2(Cr2O7)");

// =>
// [
//     ["Na"],
//     ["O"],
//     ["H"],
//     ["Na"],
//     ["Na"],
//     [["Cr"], ["Cr"], ["O"], ["O"], ["O"], ["O"], ["O"], ["O"], ["O"]],
// ];
```
