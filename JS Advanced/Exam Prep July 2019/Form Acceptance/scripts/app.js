function acceptance() {
    let fields = document.querySelectorAll('#fields');

    let button = document.getElementById('acceptance');
    let warehouseItems = document.getElementById('warehouse');

    for (let i = 0; i < fields.length; i++) {
        let [companyElement, productElement, quantityElement, scrapeElement] = fields[i].querySelectorAll('input');

        button.addEventListener('click', function () {
            if (companyElement.value !== '' && productElement.value !== ''
                && !isNaN(+quantityElement.value) && !isNaN(+scrapeElement.value)
            ) {
                quantityElement.value -= scrapeElement.value;

                if (quantityElement.value > 0) {
                    let result = `[${companyElement.value}] ${productElement.value} - ${quantityElement.value} pieces`;

                    let div = document.createElement('div');
                    let p = document.createElement('p');
                    p.textContent = result;
                    warehouseItems.appendChild(div);

                    let button2 = document.createElement('button');
                    button2.textContent = 'Out of stock';


                    button2.addEventListener('click', function () {
                        warehouseItems.removeChild(div);
                        div.removeChild(button2);
                    })

                    div.appendChild(p);
                    div.appendChild(button2);
                    warehouseItems.appendChild(div);
                }

            }
            companyElement.value = '';
            productElement.value = '';
            quantityElement.value = '';
            scrapeElement.value = '';

        });
    }
}
