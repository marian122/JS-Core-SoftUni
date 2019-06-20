function growingWord() {

  let p = document.querySelector('#exercise p');
  let currPx = p.style.fontSize.slice(0, -2) * 2 || 2;

  let blue = document.getElementById('blueDiv');
  let green = document.getElementById('greenDiv');
  let red = document.getElementById('redDiv');

  let isBlue = blue.getAttribute('active') === "true";
  let isGreen = green.getAttribute('active') === "true";
  let isRed = red.getAttribute('active') === "true";

  if (currPx === 2 || isBlue) {

    p.style.color = "blue";
    blue.setAttribute('active', false);
    green.setAttribute('active', true);
    
  }
  else if (isGreen) {
    
    p.style.color = "green";
    green.setAttribute('active', false);
    red.setAttribute('active', true);
  }
  else if (isRed) {

    p.style.color = "red";
    red.setAttribute('active', false);
    blue.setAttribute('active', true);
    
  }

  p.style.fontSize = `${currPx}px`;
}