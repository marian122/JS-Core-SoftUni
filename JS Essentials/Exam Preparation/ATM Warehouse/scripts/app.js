function coffeeStorage() {
    let input = JSON.parse(document.querySelector('textarea').value);
    let [report, inspection] = document.querySelectorAll('div p');

    let storage = {};

    for (let tokens of input) {
        let [command, brand, name, date, quantity] = tokens.split(', ');

        if (command === 'IN') {

            if (!storage.hasOwnProperty(brand)) {
                storage[brand] = {};
            }
            if (!storage[brand].hasOwnProperty(name)){
                storage[brand][name] = {
                    name,
                    date,
                    quantity
                };
            }else{
                let currentCoffee = storage[brand][name];
                if (currentCoffee.date < date) {
                    currentCoffee.date = date;
                    currentCoffee.quantity = quantity;
                } else if (currentCoffee.date === date) {
                    currentCoffee.quantity += quantity;
                }
            }

        } else if (command === 'OUT') {
            if (storage[brand] &&
                storage[brand][name] &&
                storage[brand][name].date > date &&
                storage[brand][name].quantity >= quantity) {

                storage[brand][name].quantity -= quantity;
            }
        } else if (command === 'REPORT') {
            for (let brand in storage) {
                report.innerHTML += `${brand}:`;

                for (let coffee in storage[brand]) {
                    report.innerHTML += ` ${coffee} - ${storage[brand][coffee].date} - ${storage[brand][coffee].quantity}.`;
                }
                report.innerHTML += '<br>';
            }
        } else if (command === 'INSPECTION') {

            let result = "";
            for (const brand of Object.keys(storage).sort((a, b) => a.localeCompare(b))) {
                let result = `${brand}:`;

                for (const coffee of Object.keys(storage[brand])
                    .sort((a, b) => storage[brand][b].quantity - storage[brand][a].quantity)) {
                    result += ` ${coffee} - ${storage[brand][coffee].date} - ${storage[brand][coffee].quantity}.`;
                }

                result += '<br>';
                inspection.innerHTML += result;
            }
        }
    }
}