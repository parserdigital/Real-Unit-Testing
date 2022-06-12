const DataBase = {};
DataBase.submitAsync = async function (query, args) {
    console.log(`${query}:${args}`);
};

module.exports = DataBase;
