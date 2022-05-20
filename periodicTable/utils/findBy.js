const findBy = (elements) => (type, query) =>
    elements.find((element) => element[type] === query);

export default findBy;
