let ok = 0;
let info = 'Waiting...';
function updateCheck() {
	fetch('https://ws.com/__health')
		.then((canary) => {
			if (!canary) {
				ok = 1;
				info = 'No canary';
				return;
			}
			return fetch('https://ws.com/__timealive');
		})
		.then((deployTime) => {
			if (!deployTime) {
				return;
			} // No Canary app
			if (deployTime > 3600000) {
				ok = 0;
				info = 'Canary up > 1h';
			} else {
				ok = 1;
				info = 'Canary up < 1h';
			}
		})
		.catch((err) => {
			ok = 0;
			info = 'Error:' + err.message;
		});
}
updateCheck();
setInterval(updateCheck, 1000 * 60);

module.exports = () => ({ name: 'canary check', ok, info });
