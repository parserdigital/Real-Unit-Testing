const _ = require('lodash');

async function isCanaryUp() {
	return fetch();
}

async function isStale() {
	return fetch();
}

async function fetch(){
    return _.sample([true, false]);
}

module.exports = {
    isCanaryUp,
    isStale
};