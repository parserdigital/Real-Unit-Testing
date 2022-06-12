const bomProductTypeOrder = {
	Product: 2,
	BoM: 1,
	Component: 0
};

/**
 * @description
 * If compareFunction(a, b) returns less than 0, leave a and b unchanged.
 * If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements
 * If compareFunction(a, b) returns greater than 0, sort b before a.
 *
 * @param {String} productTypeA
 * @param {String} productTypeB
 * @return {Number} result
 * @memberof DenormalizedSerializer
 */
function compareBomProductType(productTypeA, productTypeB) {
	return (
		bomProductTypeOrder[productTypeB] - bomProductTypeOrder[productTypeA]
	);
}

module.exports = compareBomProductType;
