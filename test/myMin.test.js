var expect = require('chai').expect;
var functions = require('../functions.js');

describe('myMin', function() {
	it('should exist', function() {
		expect(functions.myMin).not.to.be.undefined;
	});
	it('should throw an error if input is not a number', function() {
		expect(function() {functions.myMin('this is a string')}).to.throw('Invalid Input');
	});
	it('should return the smaller of the two numbers passed in', function() {
		expect(functions.myMin(3,2)).to.equal(2);
	});
	it('should return the smaller of the two numbers passed in, even when they\'re negative', function() {
		expect(functions.myMin(-3,-2)).to.equal(-3);
	});
});