function solve(arr) {

    arr.sort((a, b) => {
        if (a.length > b.length) return 1;
        if (a.length < b.length) return -1;
        if (a > b) return 1;
        if (b < a) return -1;
    });
    arr.forEach(x => console.log(x));
}

solve(['test',
    'Deny',
    'omen',
    'Default']
);