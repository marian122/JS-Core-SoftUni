function solve() {
  function clickEvent() {
    if (this.textContent === correctAnswers[section - 1]){
        points++;
    }
    
    if (section === sectionElements.length - 2){
        let h1Element = document.getElementsByTagName('h1')[1];

        if (points === sectionElements.length - 2){
            h1Element.textContent = "You are recognized as top JavaScript fan!";
        }else {
            h1Element.textContent = `You have ${points} right answers`;
        }
    }
      
      
    sectionElements[section].style.display = 'none';
    sectionElements[section + 1].style.display = 'block';
    section++;
  }

  let sectionElements = document.getElementById('quizzie').children;
  let section = 1;
  let points = 0;

  let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];

  let options = document.getElementsByTagName('p');

  for(let option of options){
      option.addEventListener('click', clickEvent);
  }
}
