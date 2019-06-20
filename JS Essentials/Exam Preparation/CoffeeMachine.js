function solve(input) {
    let totalIncome = 0;

    for (let tokens of input) {
        let [coins, drink, type, milk, sugar] = tokens.split(', ');

        let price = 0.80;
        
        if (tokens.includes('milk')) {
            price += 0.10;
        }
        if (tokens.includes('decaf')){
            price += 0.10;
        }
        if (tokens.split(', ').pop() > 0){
            price += 0.10;
        }

        let difference = Math.abs(coins - price);

        if (+coins >= price){
            totalIncome += price;
            console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${difference.toFixed(2)}$`);
        }else{
            console.log(`Not enough money for ${drink}. Need ${difference.toFixed(2)}$ more.`);
        }

    }
    console.log(`Income Report: ${totalIncome.toFixed(2)}$`);
}

solve([
    '1.00, coffee, caffeine, milk, 4',
    '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0'
]);