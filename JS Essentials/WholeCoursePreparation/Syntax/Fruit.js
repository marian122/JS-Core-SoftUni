function solve(fruit, grams, price) {
    let gram = (grams / 1000).toFixed(2);
    let money = ((grams/1000) * price).toFixed(2);

    console.log(`I need $${money} to buy ${gram} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80);