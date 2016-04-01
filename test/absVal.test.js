var expect = require('chai').expect;
var functions = require('../functions.js');

describe('absVal', function() {
	it('should exist', function() {
		expect(functions.absVal).not.to.be.undefined;
	});
	it('should throw an error if input is not a number', function() {
		expect(function() {functions.absVal('this is a string')}).to.throw('Invalid Input');
	});
	it('should return a number if the input is a number', function() {
		expect(functions.absVal(5)).to.equal(5);
	});
		it('should return the absolute value of a number, including a negative number', function() {
		expect(functions.absVal (-12)).to.equal(12);
	});
});