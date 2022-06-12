const sortingAlgorithm = require('../../sorting-algorithm/sorting01');

describe('sorting algorithm', () => {
	test(`(productTypeA === 'Product' && productTypeB === 'BoM') result = -1;`, () => {
		const productTypeA = 'Product';
		const productTypeB = 'BoM';
		expect(sortingAlgorithm(productTypeA, productTypeB)).toBe(-1);
	});
	test(`(productTypeA === 'BoM' && productTypeB === 'Product') result = 1`, () => {
		const productTypeA = 'BoM';
		const productTypeB = 'Product';
		expect(sortingAlgorithm(productTypeA, productTypeB)).toBe(1);
	});
	test(`(productTypeA === 'Product' && productTypeB === 'Component') result = -1;`, () => {
		const productTypeA = 'Product';
		const productTypeB = 'Component';
		expect(sortingAlgorithm(productTypeA, productTypeB)).toBe(-1);
	});
	test(`(productTypeA === 'Component' && productTypeB === 'Product') result = 1`, () => {
		const productTypeA = 'Component';
		const productTypeB = 'Product';
		expect(sortingAlgorithm(productTypeA, productTypeB)).toBe(1);
	});
	test(`(productTypeA === 'BoM' && productTypeB === 'Component') result = -1`, () => {
		const productTypeA = 'BoM';
		const productTypeB = 'Component';
		expect(sortingAlgorithm(productTypeA, productTypeB)).toBe(-1);
	});
	test(`(productTypeA === 'Component' && productTypeB === 'BoM') result = 1`, () => {
		const productTypeA = 'Component';
		const productTypeB = 'BoM';
		expect(sortingAlgorithm(productTypeA, productTypeB)).toBe(1);
	});
});
