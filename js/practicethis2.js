// class Calculator {
//   constructor() {
//     this.result = 0;
//   }

//   number(num) {
//     this.result = num;
//     return this;
//   }

//   getResult() {
//     return this.result;
//   }

//   add(num) {
//     this.result += num;
//     return this;
//   }

//   add(num) {
//     this.result += num;
//     return this;
//   }

//   divide(num) {
//     this.result /= num;
//     return this;
//   }

//   multiply(num) {
//     this.result *= num;
//     return this;
//   }
// }

// const calculator = new Calculator();
// console.log(calculator);
// const result = calculator.number(10).add(2).multiply(3);
// console.log(result);

// class Client {
//   #email;
//   #login;

//   constructor(email, login) {
//     this.#email = email;
//     this.#login = login;
//   }

//   get getEmail() {
//     return console.log(this.#email);
//   }

//   set setEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client = new Client('dfd@gmail.com', 'iy88998');
// client.setEmail = '!!!!@.com';
// client.getEmail();

class Notes {
  static Priority() {
    return {
      LOW: 'low',
      HIGHT: 'hight',
    };
  }

  constructor() {
    this.items = [];
  }

  addNote(note) {
    this.items.push(note);
    console.log(this.items);
  }
  removeNote(noteName) {
    this.items = this.items.filter(el => el.text !== noteName);
  }

  updatePriority(text, newPriority) {
    const index = this.items.findIndex(el => el.text === text);
    if (index !== -1) {
      this.items[index].priority = newPriority;
    }
  }
}

const note = new Notes();
// console.log(note);
// console.log(Notes);

note.addNote({ text: 'Aaaaaa', priority: Notes.Priority().HIGHT });
note.addNote({ text: 'BBBBBBB', priority: Notes.Priority().LOW });
note.addNote({ text: 'VVVVVVVV', priority: Notes.Priority().LOW });

note.removeNote('BBBBBBB');

note.updatePriority('VVVVVVVV', Notes.Priority().HIGHT);

console.log(note.items);
