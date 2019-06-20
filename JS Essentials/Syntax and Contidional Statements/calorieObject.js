function solve(arr) {
    let input = {};
    
    for (let i = 0; i < arr.length; i+=2) {
        let food = arr[i];
        let calorie = +arr[i + 1];
        input[food] = calorie;
        
    }

    console.log(input);
    
}

solve(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);
