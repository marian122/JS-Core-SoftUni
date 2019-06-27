(function () {

    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this.toString();
        }

        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this.toString() + str;
        }

        return this.toString();
    };

    String.prototype.isEmpty = function () {
        return this.length === 0;
    };

    String.prototype.truncate = function (n) {
        let ellipsis = '...';

        if (this.length <= n) {
            return this.toString();
        }

        if (!this.toString().includes(' ')) {
            return this.toString().slice(0, n - 3) + ellipsis;
        }

        if (this.length < 4) {
            return ellipsis.slice(0, n);
        }

        let string = this.toString();

        while (string.length + ellipsis.length > n) {
            let word = string.split(' ');
            word.pop();
            string = word.join(' ');

        }

        return string + ellipsis;
    };

    String.format = function (str, ...params) {

        for (let i = 0; i < params.length; i++) {
            str = str.replace(`{${i}}`, params[i]);

        }

        return str;
    };

}) ();