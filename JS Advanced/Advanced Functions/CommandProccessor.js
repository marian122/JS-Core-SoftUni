function getCommand() {
    let string = '';

    function append(str) {
        string += str;
    }
    function removeStart(n) {
        string = string.slice(n);
    }
    function removeEnd(n) {
        string = string.slice(0, string.length - n);

    }
    function print() {
        console.log(string);
    }

    return{
        append,
        removeStart,
        removeEnd,
        print
    };
}
const myvar = getCommand();
myvar.append('hello');
myvar.print();
myvar.removeEnd(3);
myvar.removeStart(1);
myvar.print();


