function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}
function solve(money) {
    function getDollarFormatter(formatter){
        function dollarFormatter(value) {
            return formatter(',', '$', true, value);
        }

        return dollarFormatter;
    }
    return getDollarFormatter(money);
}
