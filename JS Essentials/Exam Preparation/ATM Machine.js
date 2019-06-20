function solve(input) {

    let totalBalance = [];
    for (let commandArray of input) {
        if (commandArray.length > 2) {
            totalBalance.push(...commandArray);
            console.log(`Service Report: ${getSum(commandArray)}$ inserted. Current balance: ${getSum(totalBalance)}$.`);
        }else if (commandArray.length === 2){
            let [balance, money] = commandArray;
            
            if (balance < money) {
                console.log(`Not enough money in your account. Account balance: ${balance}$.`);
            }else{
                withdraw(balance, money);
            }
        }else if (commandArray.length === 1){

            report(commandArray[0]);
        }


    }

    function getSum(banknotes) {
        return banknotes.reduce((a, b) => a+b, 0)
    }

    function withdraw(balance, money) {
        if (getSum(totalBalance) < money){
            console.log(`ATM machine is out of order!`);
        }else{
            totalBalance = totalBalance.sort((a, b) => b-a);

            let sum = 0;

            for (let i = 0; i < totalBalance.length; i++) {
                if (sum === money) {
                    break;
                }
                if (sum + totalBalance[i] <= money) {
                    sum += +totalBalance.splice(i, 1);
                    i--;
                }
            }

            console.log(`You get ${sum}$. Account balance: ${balance - sum}$. Thank you!`);
        }
    }

    function report(banknote) {
        let count = totalBalance.filter(x => x === banknote).length;

        console.log(`Service Report: Banknotes from ${banknote}$: ${count}.`);
    }
}

solve([[20, 5, 100, 20, 1],
        [457, 25],
        [1],
        [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
        [20, 85],
        [5000, 4500],
    ]
);