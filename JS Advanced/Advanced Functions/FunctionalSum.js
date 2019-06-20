function getCommand(sum) {
    let num = sum;

    function add(number) {
        num += number;
        return add;
    }

    add.toString = () => {
        return num;
    };

    return add;
}
