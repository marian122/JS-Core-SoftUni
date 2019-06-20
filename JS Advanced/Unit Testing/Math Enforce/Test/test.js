let expect = require("chai").expect;
let assert = require("chai").assert;

const mathEnforcer = require("../mathEnforce");

describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('should return undefined with a invalid parameter', function () {
            expect(mathEnforcer.addFive('2')).to.equal(undefined);
            expect(mathEnforcer.addFive(true)).to.equal(undefined);
            expect(mathEnforcer.addFive(false)).to.equal(undefined);
            expect(mathEnforcer.addFive([])).to.equal(undefined);
            expect(mathEnforcer.addFive({})).to.equal(undefined);
        });

        it('should return correct result', function () {
            expect(mathEnforcer.addFive(3)).to.equal(8);
            expect(mathEnforcer.addFive(15)).to.equal(20);
        });

        it('should return correct result with decimal', function () {
            expect(mathEnforcer.addFive(3.5)).to.equal(8.5);
            expect(mathEnforcer.addFive(15.5)).to.equal(20.5);
        });

        it('should return correct result with negative parameter', function () {
            expect(mathEnforcer.addFive(-3)).to.equal(2);
            expect(mathEnforcer.addFive(-15)).to.equal(-10);
        });
    });

    describe('subtractTen', function () {
        it('should return undefined with a invalid parameter', function () {
            expect(mathEnforcer.subtractTen('2')).to.equal(undefined);
            expect(mathEnforcer.subtractTen(true)).to.equal(undefined);
            expect(mathEnforcer.subtractTen(false)).to.equal(undefined);
            expect(mathEnforcer.subtractTen([])).to.equal(undefined);
            expect(mathEnforcer.subtractTen({})).to.equal(undefined);
        });

        it('should return correct result', function () {
            expect(mathEnforcer.subtractTen(11)).to.equal(1);
            expect(mathEnforcer.subtractTen(15)).to.equal(5);
            expect(mathEnforcer.subtractTen(355)).to.equal(345);
        });

        it('should return correct result with decimal', function () {
            expect(mathEnforcer.subtractTen(11.5)).to.equal(1.5);
            expect(mathEnforcer.subtractTen(15.5)).to.equal(5.5);
            expect(mathEnforcer.subtractTen(355.5)).to.equal(345.5);
        });

        it('should return correct result with negative parameter', function () {
            expect(mathEnforcer.subtractTen(-3)).to.equal(-13);
            expect(mathEnforcer.subtractTen(-15)).to.equal(-25);
            expect(mathEnforcer.subtractTen(-300)).to.equal(-310);

        });
    });

    describe('sum', function () {
        it('should return undefined with a first invalid parameter', function () {
            expect(mathEnforcer.sum('5', 5)).to.equal(undefined);
            expect(mathEnforcer.sum(true, 5)).to.equal(undefined);
            expect(mathEnforcer.sum([5], 5)).to.equal(undefined);

        });

        it('should return undefined with a second invalid parameter', function () {
            expect(mathEnforcer.sum(2, '5')).to.equal(undefined);
            expect(mathEnforcer.sum(15, [5])).to.equal(undefined);
            expect(mathEnforcer.sum(350, true)).to.equal(undefined);
        });

        it('should return correct result', function () {
            expect(mathEnforcer.sum(15, 25)).to.equal(40);
            expect(mathEnforcer.sum(120, 180)).to.equal(300);
            expect(mathEnforcer.sum(890, 10)).to.equal(900);
        });

        it('should return correct result with decimals', function () {
            expect(mathEnforcer.sum(15.5, 25)).to.equal(40.5);
            expect(mathEnforcer.sum(120, 180.5)).to.equal(300.5);
            expect(mathEnforcer.sum(890.5, 10)).to.equal(900.5);
            expect(mathEnforcer.sum(10, 10.5)).to.equal(20.5);
            expect(mathEnforcer.sum(10.5, 11.5)).to.equal(22);
            expect(mathEnforcer.sum(4.5, 5.5)).closeTo(10, 0.01);
            const firstNumber = 5.5;
            const secondNumber = 4.5;

            const expected = firstNumber + secondNumber;
            const actual = mathEnforcer.sum(firstNumber, secondNumber);

            assert.closeTo(actual, expected, 0.01);
        });

        it('should return correct result with negative parameter', function () {
            expect(mathEnforcer.sum(120, -20)).to.equal(100);
            expect(mathEnforcer.sum(820, -50)).to.equal(770);
            expect(mathEnforcer.sum(2, -1)).to.equal(1);
        });
    });
});