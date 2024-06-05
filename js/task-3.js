const elements = {
  input: document.querySelector('#name-input'),
  article: document.querySelector('#name-output'),
};

// console.log(document.querySelector('#name-output'));

elements.input.addEventListener('input', onUsernameInput);

function onUsernameInput() {
  const userValue = elements.input.value.trim();
  elements.article.textContent = userValue;
}
