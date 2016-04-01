var expect = require('chai').expect;
var functions = require('../functions.js');

describe('randomElement', function() {
	it('should exist', function() {
		expect(functions.randomElement).not.to.be.undefined;
	});
});