function solve() {
   function clickEvent() {
       let divElement = document.createElement('div');
       divElement.textContent = chatInputElement.value;
       divElement.setAttribute('class', 'message my-message');
       chatMessagesElement.appendChild(divElement);
       chatInputElement.value = '';
   }
   let chatInputElement = document.getElementById('chat_input');
   let chatMessagesElement = document.getElementById('chat_messages');
   let buttonSendElement = document.getElementById('send');
   buttonSendElement.addEventListener("click", clickEvent);


}


