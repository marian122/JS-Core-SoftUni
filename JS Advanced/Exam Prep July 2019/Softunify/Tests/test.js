const assert = require("chai").assert;
const Softunify = require('../03. Softunify_Ресурси');

describe('softunify tests', function () {
    let softunify;

    beforeEach(function () {
        softunify = new Softunify();
    });

    it('should contain allSongs property that is initialized as an empty object', function () {
        const expected = 0;
        const actual = Object.keys(softunify.allSongs).length;

        assert.equal(actual, expected);
    });

    it('should contain allSongs property that is initialized as an empty object', function () {
        softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');

        const expected = 'Venom - Knock, Knock let the devil in...';
        const actual = softunify.songsList;
        assert.equal(actual, expected);
    });

    it('should return error when trying to play incorrect song', function () {
        const expected = `You have not downloaded a Venom song yet. Use SoftUniFy's function downloadSong() to change that!`;
        const actual = softunify.playSong('Venom');

        assert.equal(actual, expected);
    });

    it('should return the correct song if it is found', function () {
        softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');

        const expected = 'Eminem:\nVenom - Knock, Knock let the devil in...\n';
        const actual = softunify.playSong('Venom');

        assert.equal(actual, expected);
    });

    it('should throw string when we have no songs in our list', function () {
        const expected = 'Your song list is empty';
        const actual = softunify.songsList;

        assert.equal(actual, expected);
    });

    it('should list songs if we have ones', function () {
        softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        const expected = 'Venom - Knock, Knock let the devil in...';
        const actual = softunify.songsList;

        assert.equal(actual, expected);
    });

    it('should return the correct strign where is not on the list', function () {
        const expected = `The Eminem is not on your artist list.`;
        const actual = softunify.rateArtist('Eminem');

        assert.equal(actual, expected);
    });

    it('rateArtist should return 0 when the second argument is NaN', function () {
        softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');

        const expected = 0;
        const actual = softunify.rateArtist('Eminem', []);

        assert.equal(actual, expected);
    });

    it('rateArtist should calculate the rate of the artist correctly', function () {
        softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');

        const expected = 50;
        const actual = softunify.rateArtist('Eminem', 50);

        assert.equal(actual, expected);
    });
});
