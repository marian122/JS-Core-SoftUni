function solve(input, vat) {
    console.log((input/(1+vat/100)).toFixed(2));
}
solve(120.00, 20.00);