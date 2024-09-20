// class Person {
//   constructor(name, email, birthday) {
//     this.name = name;
//     this.email = email;
//     this.birthday = new Date(birthday);
//   }

//   introduce() {
//     return `Hello my name is ${this.name}`;
//   }

//   // this.name과 같은 것을 사용하지 않는 독립적인 것을 정의할 때 사용
//   static multipleNumbers(x, y) {
//     return x * y;
//   }
// }

// const john = new Person("john", "john@example.com", "7-10-91");
// console.log(john);

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  introduce() {
    return `Hello my name is ${this.name}`;
  }
}

class Client extends Person {
  constructor(name, email, phone, address) {
    super(name, email);

    this.phone = phone;
    this.address = address;
  }
}

const john = new Client("john", "john@example.com", "010-0000-0000", "서울");
console.log(john.introduce());
