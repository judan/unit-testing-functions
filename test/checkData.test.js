var expect = require('chai').expect;
var functions = require('../functions.js');

describe('checkData', function() {
	it('should exist', function() {
		expect(functions.checkData).not.to.be.undefined;
	});
	it('should return true when string.length equals 3', function() {
		expect(functions.checkData('cat')).to.be.true;
	});
	it('should return false when string.length does not equal 3', function() {
		expect(functions.checkData('alligator')).to.be.false;
	});
	it('should throw an error if argument isn\'t a string', function() {
		expect(function() {functions.checkData(5)}).to.throw('Input must be a string');
	});
});