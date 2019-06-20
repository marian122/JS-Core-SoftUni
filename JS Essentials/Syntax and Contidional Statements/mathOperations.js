function solve(num1, num2, operator) {
    let firstNum = Number(num1);
    let secondNum = Number(num2);
    let sum;
    switch (operator) {
        case '+':
            sum = firstNum + secondNum;
            break;

        case '-':
            sum = firstNum - secondNum;
            break;
        
        case '*':
            sum = firstNum * secondNum;
            break;

        case '/':
            sum = firstNum / secondNum;
            break;

        case '%':
            sum = firstNum % secondNum;
            break;

        case '**':
            sum = firstNum ** secondNum;
            break;
        
    }
    console.log(sum);
    
}

