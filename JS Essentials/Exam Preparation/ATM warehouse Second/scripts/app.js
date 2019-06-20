function coffeeStorage() {
    let input = JSON.parse(document.querySelector('textarea').value);
    let [report, inspection] = document.querySelectorAll('div p');

    let storage = {};

    for (let token of input){
        let [command, brand, type, expireDate, quantity] = token.split(', ');

        if (command === 'IN'){
            if (!storage.hasOwnProperty(brand)){
                storage[brand] = {};
            }
            if (!storage[brand].hasOwnProperty(type)){
                storage[brand][type] = {
                    type,
                    expireDate,
                    quantity
                };
            }else{
                let currentCoffee = storage[brand][type];

                if (currentCoffee.expireDate < expireDate) {
                    currentCoffee.expireDate = expireDate;
                    currentCoffee.quantity = quantity;
                }else if (currentCoffee.expireDate === expireDate) {
                    currentCoffee.quantity += quantity;
                }
            }
        }else if (command === 'OUT'){
            if (storage[brand] &&
                storage[brand][type] &&
                storage[brand][type].expireDate > expireDate &&
                storage[brand][type].quantity >= quantity){

                storage[brand][type].quantity -= quantity;
            }
        }else if (command === 'REPORT'){
            for (let brand in storage) {
                report.innerHTML += `${brand}:`;

                for (let coffee in storage[brand]) {
                    report.innerHTML += ` ${coffee} - ${storage[brand][coffee].expireDate} - ${storage[brand][coffee].quantity}.`;
                }
                report.innerHTML += '<br>';
            }
        }else if (command === 'INSPECTION') {
            let result = "";
            for (const brand of Object.keys(storage).sort((a, b) => a.localeCompare(b))){
                let result = `${brand}:`;

                for (let coffee of Object.keys(storage[brand])
                    .sort((a, b) => storage[brand][b].quantity - storage[brand][a].quantity)) {
                    result += ` ${coffee} - ${storage[brand][coffee].expireDate} - ${storage[brand][coffee].quantity}.`;
                }

                result += '<br>';
                inspection.innerHTML += result;
            }
        }

    }
}