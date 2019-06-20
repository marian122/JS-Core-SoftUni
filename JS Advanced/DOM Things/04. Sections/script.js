function create(words) {
   const SELECTORS = {
      generalDiv : '#content',
   };

   const generalDivElement = () => document.querySelector(SELECTORS.generalDiv);
   const createDivElement = () => document.createElement('div');

   const result = () => {
      let div = generalDivElement();
      for (let word of words){
         let newDivs = createDivElement();
         newDivs.innerHTML = `<p> ${word} </p>`;
         let p = newDivs.querySelector('p');
         p.style.display = 'none';
         newDivs.addEventListener('click', ()=> p.style.display = 'block');
         div.appendChild(newDivs);
      }

   };
   result();
}