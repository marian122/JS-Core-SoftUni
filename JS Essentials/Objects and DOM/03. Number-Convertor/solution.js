function solve() {
    function clickEvent() {
        let selectMenuTo = document.getElementById('selectMenuTo').value;
        let decimalValue = document.getElementById('input').value;
        let resultElement = document.getElementById('result');

        if (selectMenuTo === 'binary'){
            resultElement.value = Number(decimalValue).toString(2);
        } else if (selectMenuTo === 'hexadecimal'){
            resultElement.value = Number(decimalValue).toString(16).toUpperCase();
        }

    }

    let selectMenu = document.querySelector('#selectMenuTo');
    let binaryOptionAdd = document.createElement('option');
    let hexadecimalOptionAdd = document.createElement('option');

    binaryOptionAdd.value = 'binary';
    binaryOptionAdd.text = 'Binary';

    hexadecimalOptionAdd.value = 'hexadecimal';
    hexadecimalOptionAdd.text = 'Hexadecimal';

    selectMenu.add(binaryOptionAdd);
    selectMenu.add(hexadecimalOptionAdd);

    document.getElementsByTagName('button')[0].addEventListener('click', clickEvent);



}