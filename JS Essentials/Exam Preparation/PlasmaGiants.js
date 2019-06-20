function solve(arr, cutSize) {
    let [damagePerHit, stopNumber, rounds] = [
        Math.min(...arr),
        Math.max(...arr),
        1
    ];

    let [firstArr, secondArr] = [
        arr.slice(0, arr.length / 2),
        arr.slice(arr.length / 2),
    ];

    let [firstGiant, secondGiant] = [0,0];
    while(firstArr.length > 0 && secondArr.length > 0){
        firstGiant += firstArr.splice(0, cutSize).reduce((a, b) => a * b);
        secondGiant += secondArr.splice(-cutSize, cutSize).reduce((a, b) => a * b);

    }
    if (damagePerHit !== 0){
        while(firstGiant > stopNumber && secondGiant > stopNumber){
            firstGiant -= damagePerHit;
            secondGiant -= damagePerHit;
            rounds++;
        }
    }
    if (firstGiant === secondGiant){
        console.log(`Its a draw ${firstGiant} - ${secondGiant}`);
    }else if (firstGiant > secondGiant){
        console.log(`First Giant defeated Second Giant with result ${firstGiant} - ${secondGiant} in ${rounds} rounds`);
    }else{
        console.log(`Second Giant defeated First Giant with result ${secondGiant} - ${firstGiant} in ${rounds} rounds`);
    }
}
solve([3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2);