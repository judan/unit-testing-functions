var expect = require('chai').expect;
var functions = require('../functions.js');

describe('getMonth', function() {
	it('should exist', function() {
		expect(functions.getMonth).not.to.be.undefined;
	});
});