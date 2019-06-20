function solve() {
    function clickEvent() {
        let inputElement = document.getElementById('input').value;
        let selectMenuTo = document.getElementById('selectMenuTo');
        let resultElement = document.getElementById('result');

        if (selectMenuTo.value === 'binary') {
            resultElement.value = (+inputElement).toString(2);
        } else if (selectMenuTo.value === 'hexadecimal') {
            resultElement.value = (+inputElement).toString(16).toUpperCase();
        }
    }
    let selectMenu = document.querySelector('#selectMenuTo');
    let binary = document.createElement('option');
    let hexadecimal = document.createElement('option');

    binary.value = 'binary';
    hexadecimal.value = 'hexadecimal';

    binary.text = 'Binary';
    hexadecimal.text = 'Hexadecimal';

    selectMenu.add(binary);
    selectMenu.add(hexadecimal);

    let button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', clickEvent);
}