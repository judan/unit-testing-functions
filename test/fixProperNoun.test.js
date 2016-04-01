var expect = require('chai').expect;
var functions = require('../functions.js');

describe('fixProperNoun', function() {
	it('should exist', function() {
		expect(functions.fixProperNoun).not.to.be.undefined;
	});
	it('should throw an error if input is not a string', function() {
		expect(function() {functions.fixProperNoun(9)}).to.throw('Invalid Input');
	});
	it('should return true if string starts with capital letter', function() {
		expect(functions.fixProperNoun('London')).to.be.true;
	});
	it('should return false if string doesn\'t start with a capital letter', function() {
		expect(functions.fixProperNoun('london')).to.be.false;
	});
});