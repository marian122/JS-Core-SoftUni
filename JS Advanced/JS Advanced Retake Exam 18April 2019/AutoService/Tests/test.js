const assert = require("chai").assert;
const AutoService = require('../02. Auto Service_Ресурси');

describe('Auto Service', function () {
    let autoService;

    beforeEach(function () {
        autoService = new AutoService(10);
    });

    it('should instance correct capacity', function () {
        assert.equal(autoService.garageCapacity, 10);
        assert.deepEqual(autoService.workInProgress, []);
        assert.deepEqual(autoService.backlogWork, []);
    });

    it('should set available space correctly', function () {

        assert.equal(autoService.availableSpace, 10);

    });

    it('signUpForReview should add current client to workInProgress if there is space', function () {
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});

        let currentClient = {
            plateNumber : 'Peter',
            clientName: 'CA1234CA',
            carInfo: {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'}
        };

        const expected = currentClient.toString();
        const actual = autoService.workInProgress[0].toString();

        assert.equal(actual, expected);

    });

    it('signUpForReview should add current client to blogLog if there is not enough space', function () {
        autoService = new AutoService(0);
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});

        let currentClient = {
            plateNumber : 'Peter',
            clientName: 'CA1234CA',
            carInfo: {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'}
        };

        const expected = currentClient.toString();
        const actual = autoService.backlogWork[0].toString();

        assert.equal(actual, expected);

    });

    it('should throw correct string when carInfo is not correct', function () {
        const expected = `There is no car with platenumber CB1111CB and owner Ogi.`;
        const actual = autoService.carInfo('CB1111CB', 'Ogi');

        assert.equal(actual, expected);
    });

    it('should checks if the given information exists in workInProgress', function () {
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});

        const expected = {
            plateNumber : 'Peter',
            clientName: 'CA1234CA',
            carInfo: {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'}
        };

        const actual = autoService.carInfo('CA1234CA', 'Peter');

        assert.equal(actual.toString(), expected.toString());
    });

    it('should checks if the given information exists in backLog', function () {
        autoService = new AutoService(0);
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});

        const expected = {
            plateNumber : 'Peter',
            clientName: 'CA1234CA',
            carInfo: {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'}
        };

        const actual = autoService.carInfo('CA1234CA', 'Peter');

        assert.equal(actual.toString(), expected.toString());
    });

    it('should repairCar throw correct string', function () {
        const actual = autoService.repairCar();
        const expected = 'No clients, we are just chilling...';

        assert.equal(actual, expected);

    });

    it('repairCar throw correct string when there are no broken parts.', function () {
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'pipe': 'AKRAPOVIC'});

        const actual = autoService.repairCar();
        const expected = 'Your car was fine, nothing was repaired.';

        assert.equal(actual, expected);

    });

    it('repairCar should repair correct part', function () {
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});

        const actual = autoService.repairCar();
        const expected = 'Your doors were repaired.';

        assert.equal(actual, expected);

    });
});