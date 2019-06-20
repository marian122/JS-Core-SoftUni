function solve() {
    function objectGenerator(obj){
        let trElement = document.createElement('tr');
        let imgTdElement = document.createElement('td');

        imgTdElement.innerHTML = `<img src="${obj.img}">`;

        document.getElementsByTagName('tbody')[0].appendChild(trElement);

        trElement.appendChild(imgTdElement);

        let nameElementTd = document.createElement('td');
        let nameElementP = document.createElement('p');

        nameElementTd.textContent = obj.name;
        nameElementTd.appendChild(nameElementP);
        trElement.appendChild(nameElementTd);

        let priceElementTd = document.createElement('td');
        let priceElementP = document.createElement('p');

        priceElementTd.textContent = obj.price;
        priceElementTd.appendChild(priceElementP);
        trElement.appendChild(priceElementTd);

        let decFactorTd = document.createElement('td');
        let decFactorP = document.createElement('p');

        decFactorTd.textContent = obj.decFactor;
        decFactorTd.appendChild(decFactorP);
        trElement.appendChild(decFactorTd);

        let checkBoxTd = document.createElement('td');
        checkBoxTd.innerHTML = `<input type="checkbox">`;
        trElement.appendChild(checkBoxTd);
    }

    function generate() {
        let obj = JSON.parse(document.getElementsByTagName('textarea')[0].value)
        obj.forEach(function (obj) {objectGenerator(obj)});

    }

    function buy() {
        let bought = [];
        let total = 0;
        let avgDecFactor = 0;
        let count = 0;

        let allTrElements = Array.from(document
            .getElementsByTagName('tr'));

        for (let i = 1; i < allTrElements.length; i++) {
            
            if (allTrElements[i].children[4].children[0].checked){
                count += 1;
                bought.push(allTrElements[i].children[1].textContent.trim());
                total += +allTrElements[i].children[2].textContent;
                avgDecFactor += +allTrElements[i].children[3].textContent;
            }

        }

        avgDecFactor /= count;

        document.getElementsByTagName('textarea')[1].value =
            `Bought furniture: ${bought.join(', ')}\n` +
            `Total price: ${total.toFixed(2)}\n` +
            `Average decoration factor: ${avgDecFactor}`;

    }

    let firstCheckboxTd = document.getElementsByTagName('td')[4];
    firstCheckboxTd.innerHTML = '<input type="checkbox">';

    let generateButton = document.getElementsByTagName('button')[0];
    generateButton.addEventListener('click', generate);

    let buyButton = document.getElementsByTagName('button')[1];
    buyButton.addEventListener('click', buy);
}