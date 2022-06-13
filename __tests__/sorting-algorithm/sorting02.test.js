/**
 * The cartesian product of test data is the way to create complete tests, to test any possible test case.
 * The branch coverage is 100%
 * Branch coverage provides more precise results than code coverage because it helps cope with code coverage’s shortcomings.
 */

require('lodash.product');
const _ = require('lodash');
const sortingAlgorithm = require('../../sorting-algorithm/sorting02');

test('sorting algorithm', () => {
	// Proper order
	const productTypes = ['Product', 'BoM', 'Component'];
	// Cartesian Product
	let testCases = _.product(productTypes, productTypes, productTypes);
    // Filter test cases with repeated elements
	testCases = testCases.filter(
		(productCombination) => _.uniq(productCombination).length === 3
	);
    // Assertion inside a forEach to assess each test case
	testCases.forEach((products) =>
		expect(products.sort(sortingAlgorithm)).toEqual(productTypes)
	);
});
