const assert = require("chai").assert;
const FilmStudio = require('../filmStudio');

describe('Film Studio', function () {
    let filmStudio;

    beforeEach(function () {
        filmStudio = new FilmStudio('Studio');
    });

    it('should represent studio name', function () {
        assert.equal('Studio', filmStudio.name);
    });

    it('should represent studio films as empty array', function () {
        assert.equal(0, filmStudio.films.length);
    });

    it('makeMovie should make new movie', function () {
        const expected = {
            filmName: 'The Avengers',
            filmRoles: [
                {role: 'Iron-Man', actor: false},
                {role: 'Thor', actor: false},
                {role: 'Hulk', actor: false},
                {role: 'Arrow guy', actor: false}]
        };

        let actual = filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor' , 'Hulk', 'Arrow guy']);
        assert.equal(actual.toString(), expected.toString());
    });

    it('makeMovie should throw invalid arguments', function () {

        assert.throw(() => {filmStudio.makeMovie(12, ['Iron-Man', 'Thor' , 'Hulk', 'Arrow guy'])},
            'Invalid arguments');
    });
    it('makeMovie should throw invalid arguments count', function () {

        assert.throw(() => {filmStudio.makeMovie('The  Avengers')},
            'Invalid arguments count');
    });

    it('makeMovie function should make sequel if film\'s name exists', function () {
        filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);

        const expected = 'The Avengers 2';
        const actual = filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']).filmName;

        assert.equal(actual, expected);
    });

    it('casting should throw error when there is no free role', function () {
        filmStudio.makeMovie('The Avenger', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
        let expected = 'Johnny Dep, we cannot find a Jack Sparrow role...';
        let actual = filmStudio.casting('Johnny Dep', 'Jack Sparrow');

        assert.equal(actual, expected);
    });

    it('casting should throw error when there is no such a film', function () {
        let expected = 'There are no films yet in Studio.';
        let actual = filmStudio.casting('Johnny Dep', 'Jack Sparrow');

        assert.equal(actual, expected);
    });

    it('casting should throw string with correct role taken', function () {
        filmStudio.makeMovie('The Avenger', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
        let expected = 'You got the job! Mr. Johnny Dep you are next Thor in the The Avenger. Congratz!';
        let actual = filmStudio.casting('Johnny Dep', 'Thor');

        assert.equal(actual, expected);
    });

    it('lookForProducer should throw correct string', function () {
        assert.throw(()=> {filmStudio.lookForProducer('FastNFurious')},
            'FastNFurious do not exist yet, but we need the money...');
    });

    it('lookForProducer should return correct info', function () {
        filmStudio.makeMovie('The Avengers', ['Iron man', 'Thor']);
        filmStudio.casting('Johnny Dep', 'Thor');
        filmStudio.casting('Vin Diesel', 'Iron man');

        let expected = 'Film name: The Avengers\n';
        expected += 'Cast:\n';
        expected += 'Vin Diesel as Iron man\n';
        expected += 'Johnny Dep as Thor\n';


        let actual = filmStudio.lookForProducer('The Avengers');

        assert.equal(actual, expected);

    });
});