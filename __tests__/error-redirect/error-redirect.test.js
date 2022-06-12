/* eslint-disable jest/no-focused-tests */
const sinon = require('sinon');
const middleware = require('../../error-redirect/error-redirect');

describe('Error URLs used for core experience', function () {

	let stubs;
	let req;
	let res;
	let now;

	beforeEach(() => {
		now = new Date().getTime();
		stubs = {
			redirect: sinon.stub(),
			query: sinon.stub(),
			next: sinon.stub()
		};
		res = {
			redirect: stubs.redirect,
			locals: {}
		};
		req = {
			query: {}
		};
	});

	afterEach(()=>{
		sinon.restore();
	});

	it('sets res.locals.showError to true is genuine errow message should be shown', () => {
		req.originalUrl = `/foo?error=${now}`;
		req.query.error = now;
		middleware(req, res, stubs.next);
		expect(res.locals.showError).toBe(true);
	});

	it('does not redirect the request if the error query param is less than 10 seconds ago', () => {
		req.originalUrl = `/foo?error=${now}`;
		req.query.error = now;
		middleware(req, res, stubs.next);
		expect(res.redirect.notCalled).toBeTruthy();
		expect(stubs.next.calledOnce).toBeTruthy();
	});

	it('does not redirect the request if the error query param does not exist', () => {
		req.originalUrl = '/foo';
		req.query = {};
		middleware(req, res, stubs.next);

		expect(res.redirect.notCalled).toBeTruthy();
		expect(stubs.next.calledOnce).toBeTruthy();
	});

	it('redirects the request if the error query param is not a valid date', () => {
		req.originalUrl = '/foo?error=bar';
		req.query.error = 'bar';
		middleware(req, res, () => {});

		expect(res.redirect.calledWith('/foo')).toBeTruthy();
		expect(res.locals.showError).toBe(false);
	});

	it('redirects the request if the error query param is longer than 10 seconds ago', () => {
		req.originalUrl = '/foo?error=1497544780648'; // Thu Jun 15 2017 17:39:40 GMT+0100 (BST)
		req.query.error = '1497544780648';
		middleware(req, res, stubs.ext);

		expect(res.redirect.calledWith('/foo')).toBeTruthy();
		expect(res.locals.showError).toBe(false);
	});

	it('redirects the request and maintains other query params', () => {
		req.originalUrl = '/foo?error=1497544780648&foo=bar'; // Thu Jun 15 2017 17:39:40 GMT+0100 (BST)
		req.query.error = '1497544780648';
		middleware(req, res, stubs);

		expect(res.redirect.calledWith('/foo?foo=bar')).toBeTruthy();
		expect(res.locals.showError).toBe(false);
	});
});
