function fruit(food, weigth, price) {
    let grams = weigth/1000;
    let total = price * grams;
    console.log(`I need $${total.toFixed(2)} to buy ${grams.toFixed(2)} kilograms ${food}.`);
    
}
