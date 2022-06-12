const _ = require('lodash');

let ok, info;
const states = {
	INIT: { ok: 0, info: 'Waiting...' },
	NO_CANARY: { ok: 1, info: 'No canary' },
	CANARY_OK: { ok: 1, info: 'Canary up < 1h' },
	CANARY_STALE: { ok: 0, info: 'Canary up > 1h' },
};

function setState(state) {
	ok = state.ok;
	info = state.info;
}

async function isCanaryUp() {
	return _.sample([true, false]);
}

async function isStale() {
	return _.sample([true, false]);
}

async function businessLogic() {
	setState(states.INIT);
	if (await isCanaryUp()) {
		if (await isStale()) {
			setState(states.CANARY_STALE);
		} else {
			setState(states.CANARY_OK);
		}
	} else {
		setState(states.NO_CANARY);
	}
}
businessLogic();
setInterval(businessLogic, 1000 * 60);

module.exports = () => ({ name: 'canary check', ok, info });
