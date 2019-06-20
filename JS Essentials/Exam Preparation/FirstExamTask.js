function solve(eachWagonCapacity, arr) {
    let remainingPassengers = 0;
    let helpArr = [];
    for (let i = 0; i < arr.length; i++) {
        let wagon = arr[i] + remainingPassengers;

        if (wagon  <= eachWagonCapacity){
            helpArr.push(wagon);
            remainingPassengers = 0;
        }else{
            helpArr.push(eachWagonCapacity);
            remainingPassengers = wagon - eachWagonCapacity;
        }
    }

    if (remainingPassengers === 0){
        console.log(helpArr);
        console.log(`All passengers aboard`);
    }
    else {
        console.log(helpArr);
        console.log(`Could not fit ${remainingPassengers} passengers`);
    }
}
solve(6, [5, 15, 2]);
solve(10, [9, 39, 1, 0, 0]);