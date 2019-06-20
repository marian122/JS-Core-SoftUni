let assert = require("chai").assert;
let expect = require("chai").expect;
const {lookupChar} = require("../Char Lookup");

describe('lookupChar', function () {
    it('should return undefined with a non-string first parameter', function () {
        expect(lookupChar(13, 0)).to.equal(undefined);
    });

    it('should return undefined with a non-string second parameter', function () {
        expect(lookupChar('Peter', 'George')).to.equal(undefined);
    });

    it('should return undefined with floating point second parameter', function () {
        expect(lookupChar('George', 3.12)).to.equal(undefined, 'The function did not return the correct result.')
    });

    it('should return undefined with invalid index', function () {
        expect(lookupChar('George', 7)).to.equal("Incorrect index", 'The function did not return the correct result.')
    });

    it('should return undefined with negative index', function () {
        expect(lookupChar('George', -2)).to.equal("Incorrect index", 'The function did not return the correct result.')
    });

    it('should return correct result', function () {
        expect(lookupChar('George', 4)).to.equal('g', 'The function did return the correct result.')
    });
});