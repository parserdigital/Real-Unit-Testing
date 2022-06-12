const { businessLogic, setState } = require('./bussiness-logic');
const { states } = require('./constants');

const state = {};
setState(state, states.INIT);
setInterval(businessLogic, 1000 * 60, state);

module.exports = () => ({
	name: 'canary check',
	ok: state.ok,
	info: state.info,
});
