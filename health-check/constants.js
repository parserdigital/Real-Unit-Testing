const states = {
	INIT: { ok: 0, info: 'Waiting...' },
	NO_CANARY: { ok: 1, info: 'No canary' },
	CANARY_OK: { ok: 1, info: 'Canary up < 1h' },
	CANARY_STALE: { ok: 0, info: 'Canary up > 1h' },
};

module.exports = {
	states
};
