function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const selectors = {
  input: document.querySelector('input'),
  create: document.querySelector(' [data-create]'),
  destroy: document.querySelector('  [data-destroy]'),
  divBox: document.querySelector('#boxes'),
};

// console.log(selectors.divBox);

selectors.create.addEventListener('click', onCreateBtnClick);
selectors.destroy.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick(e) {
  const amount = selectors.input.value;
  if (amount <= 0 || amount >= 100)
    return alert('Number should be between 1 -100');
  onDestroyBtnClick();
  let divArr = createBoxes(amount);
  // selectors.divBox.prepend(...divArr);
  selectors.divBox.innerHTML = divArr;
}

function createBoxes(amount) {
  // const divArr = [];
  let divHTML = '';
  let pixel = 20;

  for (let index = 1; index <= amount; index++) {
    pixel += 10;
    // const myElem = document.createElement('div');
    // myElem.style.background = getRandomHexColor();
    // myElem.style.width = `${pixel}px`;
    // myElem.style.height = `${pixel}px`;
    // divArr.push(myElem);
    const color = getRandomHexColor();
    divHTML += `<div style="background: ${color}; width: ${pixel}px; height: ${pixel}px;"></div>`;
  }
  // return divArr;
  return divHTML;
}

function onDestroyBtnClick() {
  selectors.divBox.innerHTML = '';
  selectors.input.value = '';
}
