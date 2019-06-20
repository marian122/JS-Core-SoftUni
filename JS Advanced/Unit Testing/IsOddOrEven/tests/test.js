let assert = require("chai").assert;
const {isOddOrEven} = require("../isOddOrEven");

describe('isOddOrEven', function () {
    it('should return undefined if input isn\'t string', function () {
        assert.isUndefined(isOddOrEven(true));
        assert.isUndefined(isOddOrEven(3));
        assert.isUndefined(isOddOrEven([]));
        assert.isUndefined(isOddOrEven({}));
    });

    it('should return correct result', function () {
        assert.equal(isOddOrEven('roar'), 'even');
        assert.equal(isOddOrEven('Peter'), 'odd');
        assert.equal(isOddOrEven('coldTea'), 'odd');
        assert.equal(isOddOrEven('bird'), 'even');
    });

});