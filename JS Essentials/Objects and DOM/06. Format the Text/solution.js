function solve() {
  let textElement = document.getElementById('input');
  let textContent = textElement.textContent;

  let sentences = textContent.split(/[.]\s*/);
  let outputElement = document.getElementById('output');

  while (sentences.length > 0) {
    let paragraphCount = [];

    for (let i = 0; i < 3; i++) {
      paragraphCount.push(sentences.shift());

      if (sentences.length == 0) {
        
        break;
      }
      
    }

    let paragraphElement = document.createElement('p');
    paragraphElement.textContent = paragraphCount.join(". ");
    outputElement.appendChild(paragraphElement);

  }
}