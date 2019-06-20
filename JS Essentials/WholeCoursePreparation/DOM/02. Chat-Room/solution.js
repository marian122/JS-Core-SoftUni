function solve() {
    function clickEvent() {
        let newElement = document.createElement('div');

        newElement.textContent = input.value;
        newElement.setAttribute('class', 'message my-message');
        divElement.appendChild(newElement);
        input.value = '';
    }
    let input = document.getElementById('chat_input');
    let divElement = document.getElementById('chat_messages');
    let button = document.getElementById('send');
    button.addEventListener('click', clickEvent);
}


