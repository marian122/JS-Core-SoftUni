function solve(arr, cutSize) {

    let firstArray = arr.slice(0, arr.length / 2);
    let secondArray = arr.slice(arr.length / 2);

    let [firstGiant, secondGiant] = [0,0];
    while(firstArray.length > 0 && secondArray.length > 0){
        firstGiant += firstArray.splice(0, cutSize).reduce((a,b) => a * b);
        secondGiant += secondArray.splice(0, cutSize).reduce((a,b) => a * b);
    }

    let [damage, stopNumber, rounds] = [
        Math.min(...arr),
        Math.max(...arr),
        1
    ];

    if(damage !== 0){
        while(firstGiant > stopNumber && secondGiant > stopNumber){
            firstGiant -= damage;
            secondGiant -= damage;
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
solve([1,2,3,4,5,6,7,8,9,10,11,12] , 3);