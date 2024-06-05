function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const data = {
  color: document.querySelector('.color'),
  button: document.querySelector('button'),
  body: document.querySelector('body'),
};

data.button.addEventListener('click', onButtonColor);

// data.body.style.backgroundColor = 'yellow';
// data.color.textContent = 'Allo';

function onButtonColor(e) {
  const rendom = getRandomHexColor();
  data.body.style.backgroundColor = rendom;
  data.color.textContent = rendom;
}
