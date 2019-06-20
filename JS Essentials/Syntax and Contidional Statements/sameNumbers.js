function sameNumbers(a) {
    a = String(a);
    let sum = 0;
    let firstDigit = a[0];
    let result = true;

    for (let i = 0; i < a.length; i++) {
        sum += +a[i];
        
        if (a[i] !== firstDigit) {
            result = false;
        }

        
    }

    console.log(result);
    console.log(sum);
    
}

sameNumbers(2222222);