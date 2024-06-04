// const listOfCategory = document.getElementById('categories');

// console.log(listOfCategory);

// const categories = document.querySelectorAll('h2');
// console.log(`Number of cotegories: ${categories.length}`);

// const category = document.querySelector('.item');

// console.log(`Category: ${category.textContent}`);

// const categories0 = document.querySelector('#categories');
// console.log(categories0.firstElementChild.childNodes[3]);
// const arr = categories0.firstElementChild.childNodes[3];
// console.log(arr);

// const categories2 = document.querySelector('#categories');
// // console.log(categories2.childNodes[3].childNodes[1].textContent);
// console.log(`Category: ${categories2.childNodes[3].childNodes[1].textContent}`);

// const categories3 = document.querySelector('#categories');
// // console.log(categories3.lastElementChild.childNodes[1].textContent);
// console.log(
//   `Category: ${categories3.lastElementChild.childNodes[1].textContent}`
// );

const listEl = document.querySelectorAll('.item');
// console.log(listEl);
console.log(`Number of categories: ${listEl.length}`);

listEl.forEach(element => {
  //   console.log(element.firstElementChild);

  console.log(
    `Category: ${element.firstElementChild.textContent}\n
      Elements: ${element.lastElementChild.children.length}`
  );
});
