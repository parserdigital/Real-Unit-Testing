/*
 * If the error query param is older than 10 sec redirect without the error
 */

function removeErrorFromUrl(error, url) {
	// eslint-disable-next-line no-useless-escape
	const regex = new RegExp(`(\\?|\&)(error\=${error})(\&?)`);
	const matches = url.match(regex);
	const replacement = matches && matches[1] === '?' && matches[3] ? '?' : '';

	return url.replace(regex, replacement);
}

module.exports = (req, res, next) => {
	const error = req.query.error;
	const notValidDate = isNaN(Date.parse(new Date(parseInt(error))));
	const errorThreshold = new Date().getTime() - 10 * 1000;

	res.locals.showError = false;

	if (error && (notValidDate || error < errorThreshold)) {
		return res.redirect(removeErrorFromUrl(error, req.originalUrl));
	} else if (error && error > errorThreshold) {
		res.locals.showError = true;
	}

	next();
};
