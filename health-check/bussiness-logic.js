const { isCanaryUp, isStale } = require('./implementation');
const { states } = require('./constants');

function setState(state, newState) {
	Object.assign(state, newState);
}

async function businessLogic(state) {
	if (await isCanaryUp()) {
		if (await isStale()) {
			setState(state, states.CANARY_STALE);
		} else {
			setState(state, states.CANARY_OK);
		}
	} else {
		setState(state, states.NO_CANARY);
	}
}

module.exports = {
    businessLogic,
    setState
};
