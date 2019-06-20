function solve(input) {
    function reducer(inp, operate, initial) {
        let myArr = input.slice(0);
        let result = initial;

        if (result === undefined){
            result = myArr.shift();
        }

        for(let el of myArr){
            result = operate(result, el);
        }
        return result;
    }

    console.log(`Sum = ${reducer(input, (a,b) => a + b)}`);
    console.log(`Min = ${reducer(input, (a,b) => Math.min(a,b))}`);
    console.log(`Max = ${reducer(input, (a,b) => Math.max(a,b))}`);
    console.log(`Product = ${reducer(input, (a,b) => a * b)}`);
    console.log(`Join = ${reducer(input, () => input.join(''))}`);
}

solve([2, 3, 10, 5]);