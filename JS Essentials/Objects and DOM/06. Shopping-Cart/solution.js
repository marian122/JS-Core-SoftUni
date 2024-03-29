function solve() {
   function clickEventAdd(i) {
       let name = document.getElementsByClassName('product-title')[i].textContent;
       
       if (!productNames.some(n => n === name)) {
           productNames.push(name);
       }

       let price = +document.getElementsByClassName('product-line-price')[i].textContent;
       total += price;

       result += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
       let textArea = document.getElementsByTagName('textarea')[0];
       textArea.value = result;
   }

   function clickEvent() {
       result += `You bought ${productNames.join(', ')} for ${total.toFixed(2)}.`;
       let textArea = document.getElementsByTagName('textarea')[0];
       textArea.value = result;

       for (let button of buttons){
           button.disabled = true;
       }
   }

   let buttons = document.getElementsByTagName('button');
   let productNames = [];
   let total = 0;
   let result = '';
   
   for (let i = 0; i < buttons.length - 1; i++){
       buttons[i].addEventListener('click', function () {
           clickEventAdd(i)
       }, false);
   }

   let checkoutButton = document.getElementsByClassName('checkout')[0];
   checkoutButton.addEventListener('click', clickEvent);
}