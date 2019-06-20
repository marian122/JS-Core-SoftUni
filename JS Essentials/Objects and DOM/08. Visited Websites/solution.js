function solve() {

  let siteElement = document.getElementsByClassName('link-1');
  
  for(const site of siteElement){
      site.addEventListener('click', (e) => {
      let currentTarget = e.currentTarget;
     
      let paragraphElement = currentTarget.getElementsByTagName('p')[0];
      let text = paragraphElement.textContent; 
      let textParts = text.split(' ');
      let clicks = +textParts[1];
      
      clicks++;

      textParts[1] = clicks;
      paragraphElement.textContent = textParts.join(' ');

    });
  }
}