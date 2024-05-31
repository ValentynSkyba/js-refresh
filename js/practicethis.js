// const user = {
//   userName: 'Milord',
//   lastName: 'Gof',
//   age: 18,
//   email: 'gof@gmail.com',
//   updateName(newName) {
//     this.userName = newName;
//   },
// };

// console.log(this);

// user.updateName('Bibi');
// console.log(user.userName);

// const user1 = Object.create(user);
// user1.updateName('Soda');
// user1.age = 222;
// user1.email = '';

// console.log(user1);

// function modifyEmail(newEmail) {
//   this.email = newEmail;
// }

// user1.modifyEmail = modifyEmail;

// // user1.modifyEmail = 'dfd@gmail.com';
// user1.modifyEmail('!!!!!!!!!!!!!!!!!@gmail.com');

// console.log(user1);

const user = {
  username: 'Volodka',
  lastname: 'Krakov',
  age: 18,
  email: 'dfd@gmail.com',

  showUser() {
    console.log(this);
  },

  modify(key, value) {
    if (key !== 'username' && key !== 'lastname') {
      return alert('Arguments is not vailid');
    }

    if (value[0] === value[0].toUpperCase() && value.length >= 3) {
      return (this[key] = value);
    }

    return alert('Ha ha');
  },
};

// user.modify('username', 'Oleg');
// user.modify('lastname', 'Oleg');
// user.modify('age', 18);
// console.log(user);

function addProperty(key, value) {
  this[key] = value;
}

user.addProperty = addProperty;

user.addProperty('sound', 'Bam bam');
console.log(user);

const obj = {
  userName: 'Wow',
  lastName: 'Gorky',
  age: 50,
  email: 'ggg@gn.ua',
};

user.showUser.call(obj);

user.showUser.bind(obj);

// ==============================

const product = {
  price: 5000,

  showPrice() {
    console.log(this.price);
  },
};

function callAction(callback) {
  callback();
}

callAction(product.showPrice.bind(product));
