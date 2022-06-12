function sortingProductType(productTypeA, productTypeB) {
	let result = 0;
	if (
		productTypeA === 'Product' &&
		productTypeB === 'BoM'
	) {
		result = -1;
	} else if (
		productTypeA === 'BoM' &&
		productTypeB === 'Product'
	) {
		result = 1;
	} else if (
		productTypeA === 'Product' &&
		productTypeB === 'Component'
	) {
		result = -1;
	} else if (
		productTypeA === 'Component' &&
		productTypeB === 'Product'
	) {
		result = 1;
	} else if (
		productTypeA === 'BoM' &&
		productTypeB === 'Component'
	) {
		result = -1;
	} else if (
		productTypeA === 'Component' &&
		productTypeB === 'BoM'
	) {
		result = 1;
	}
	return result;
}

module.exports = sortingProductType;
