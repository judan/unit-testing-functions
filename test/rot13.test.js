var expect = require('chai').expect;
var functions = require('../functions.js');

describe('rot13', function() {
	it('should exist', function() {
		expect(functions.rot13).not.to.be.undefined;
	});
});