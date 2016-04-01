var expect = require('chai').expect;
var functions = require('../functions.js');

describe('sortLetters', function() {
	it('should exist', function() {
		expect(functions.sortLetters).not.to.be.undefined;
	});
	it('should throw an error if input is not a string', function() {
		expect(function() {functions.sortLetters([1, 2, 3])}).to.throw('Invalid Input');
	});
	it('should return a string if the input is a string', function() {
		expect(functions.sortLetters('dog')).to.be.a('string');
	});
	it('should return the input string in alphabetical order', function() {
		expect(functions.sortLetters('cat')).to.equal('act');
	});
});