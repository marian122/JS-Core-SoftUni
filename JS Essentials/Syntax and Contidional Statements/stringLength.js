function solve(arr1, arr2, arr3) {
    let sumLength;
    let averageLength;

    sumLength = arr1.length + arr2.length + arr3.length;
    averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
    
    
}

solve('chocolate', 'ice cream', 'cake');