function solve(arr) {
    let currentBiggestNumber = 0;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] >= currentBiggestNumber){

            newArr.push(arr[i]);

        }
        currentBiggestNumber = arr[i];


    }


    for (let numb of newArr) {
        console.log(numb);
    }
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);