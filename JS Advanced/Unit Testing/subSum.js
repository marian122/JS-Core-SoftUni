function solve(arr, startIndex, endIndex) {

    if (!Array.isArray(arr)){
        return NaN;
    } 
    if (arr.length === 0){
        return 0;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex >= arr.length) {
        endIndex = arr.length - 1;
    }

    const sum = arr
        .slice(startIndex, endIndex + 1)
        .reduce((a, b) => a + b);

    return sum;
}