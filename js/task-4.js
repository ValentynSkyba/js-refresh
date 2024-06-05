const formElem = document.querySelector('.login-form');

// console.log(form);

formElem.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//   e.preventDefault();
//   console.log(formElem.elements);
//   const email = formElem.elements.email.value;
//   const password = formElem.elements.password.value;

//   const data = {
//     email,
//     password,
//   };
// }

function onSubmit(e) {
  e.preventDefault();
  //   console.log(formElem.elements);
  console.log(e.currentTarget);
  //   const { email, password } = e.currentTarget.elements;

  const data = {
    email: formElem.elements.email.value,
    password: formElem.elements.password.value,
  };

  //   if (data.email === '' || data.password === '') {
  //     alert('All form fields must be filled in');
  //   }
  if (!data.email || !data.password) {
    alert('All form fields must be filled in');
  }

  //   console.log(e.currentTarget.value);
  console.log(data);
  e.currentTarget.reset();
}
