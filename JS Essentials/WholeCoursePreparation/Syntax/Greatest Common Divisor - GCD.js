function solve(first, second) {
    first = Math.abs(first);
    second = Math.abs(second);

    while (second){
        let t = second;
        second = first % t;
        first = t;
    }

    console.log(first);
}
solve(15, 5);