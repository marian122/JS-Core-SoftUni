function solve(input) {
    let total = 0;

    for (let i = 0; i < input.length; i++) {
        let order = input[i].split(`, `);
        let money = +order.shift();
        let orderType = order.shift();
        let coins = 0;

        if (orderType == `coffee`) {

            let coffeeType = order.shift();

            if (coffeeType == `caffeine`) {
                coins = 0.80;
            }

            else if (coffeeType == `decaf`) {
                coins = 0.90;
            }

        }

        else if (orderType == `tea`) {
            coins = 0.80;
        }

        let add = order.shift();

        if (add == `milk`) {
            let milkPrice = Math.round(coins) * 0.1;
            coins += milkPrice;
            add = order.shift();
        }

        if (add > 0) {

            coins += 0.1;
        }

        if (money >= coins) {
            total += coins;
            console.log(`You ordered ${orderType}. Price: ${coins.toFixed(2)}$ Change: ${(money - coins).toFixed(2)}$`)
        } else {
            console.log(`Not enough money for ${orderType}. Need ${(coins - money).toFixed(2)}$ more.`)
        }


    }
    console.log(`Income Report: ${total.toFixed(2)}$`);
}

// solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);