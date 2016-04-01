var expect = require('chai').expect;
var functions = require('../functions.js');

describe('myMax', function() {
	it('should exist', function() {
		expect(functions.myMax).not.to.be.undefined;
	});
	it('should throw an error if input is not an array', function() {
		expect(function() {functions.myMax('this is a string')}).to.throw('Invalid Input');
	});
	it('should return the largest number in the array', function() {
		expect(functions.myMax([1,2,3,4])).to.equal(4);
	});
});