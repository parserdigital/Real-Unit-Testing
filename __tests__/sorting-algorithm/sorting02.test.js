require('lodash.product');
const _ = require('lodash');
const sortingAlgorithm = require('../../sorting-algorithm/sorting02');

test('sorting algorithm', () => {
    // Proper order
	const productTypes = ['Product', 'BoM', 'Component' ];
    // Cartesian Product
	let testCases = _.product(productTypes, productTypes, productTypes);
	testCases = testCases.flatMap((list) => {
		const uniqueList = _.uniq(list);
		return uniqueList.length === 3 ? [list] : [];
	});
	testCases.forEach((products) => expect(products.sort(sortingAlgorithm)).toEqual(productTypes));
});
