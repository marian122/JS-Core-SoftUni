function solve(arr) {
    let last = arr[arr.length - 1];
    arr.pop();
    let count = +last;

    for (let j = 0; j < count; j++) {
        let moveElement = arr[arr.length - 1];
        arr.pop();
        arr.unshift(moveElement);
    }


    console.log(arr.join(' '));
}

solve(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']
);