var expect = require('chai').expect;
var functions = require('../functions.js');

describe('concatenateArrays', function() {
	it('should exist', function() {
		expect(functions.concatenateArrays).not.to.be.undefined;
	});
	it('should return an array if the values are both arrays', function() {
		expect(functions.concatenateArrays([1,2,3], [4,5,6])).to.be.an('array');
	});
	it('should throw an error if one or more arguments isn\'t an array', function() {
		expect(function() {functions.concatenateArrays('a', 4)}).to.throw('Invalid Input');
	});
	it('should return a concatenated array with the same values from the argument arrays', function() {
		expect(functions.concatenateArrays([1,2,3], [4,5,6])[5]).to.equal(6);
	});
});