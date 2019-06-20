function solve(num) {
    num = String(num);
    let total = 0;
    let result = true;
    let first = num[0];

    for (let i = 0; i < num.length; i++) {
        total += +num[i];

        if (num[i] !== first){
            result = false;
        }
    }

    console.log(result);
    console.log(total);
}

solve(222);