const DataBase = require('./database');

/**
 * @description Get the sorted sfids by sortoption field for an array of salesforce ids
 * @param {TcontextUtils} contextUtils The contextUtils instance
 * @param {Array} productSfIds The salesfroce ids of the products
 * @param {string} sortOptionField Field name used to order the products
 * @return {Promise<sfid[ ]>} Array with sfid with structure: [{"sfid":"value"}, ...]
 */
async function getSortedSfIdsBySortOption(productSfIds, sortOptionField) {
    const query = `SELECT sfid
        FROM product__c
        WHERE sfid = ANY($1)
        ORDER BY ${sortOptionField} COLLATE "C"`;

    return DataBase.submitAsync(query, [productSfIds]);
};

module.exports = getSortedSfIdsBySortOption;