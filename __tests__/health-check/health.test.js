jest.mock('../../health-check/implementation');

const healthCheck = require('../../health-check/health3');
const { states } = require('../../health-check/constants');
const { isCanaryUp, isStale } = require('../../health-check/implementation');

describe('health check', () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	test('Initial state, till checking', async () => {
		expect(healthCheck()).toEqual({ name: 'canary check', ...states.INIT });
	});
	test('There is no canary deployment', async () => {
		isCanaryUp.mockResolvedValue(false);
		await setTimeout(() => {
			expect(healthCheck()).toEqual({
				name: 'canary check',
				...states.NO_CANARY,
			});
		}, 1000);
	});
	test(`There is canary deployment and it's not staled`, async () => {
		isCanaryUp.mockResolvedValue(true);
		isStale.mockResolvedValue(false);
		await setTimeout(() => {
			expect(healthCheck()).toEqual({
				name: 'canary check',
				...states.CANARY_OK,
			});
		}, 1000);
	});
	test(`There is canary deployment and it's staled`, async () => {
		isCanaryUp.mockResolvedValue(true);
		isStale.mockResolvedValue(true);
		await setTimeout(() => {
			expect(healthCheck()).toEqual({
				name: 'canary check',
				...states.CANARY_STALE,
			});
		}, 1000);
	});
});
