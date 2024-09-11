// Call()
const fullName = function (city, country) {
  console.log(this.firstName + " " + this.lastName, city, country);
};

const person1 = {
  firstName: "John",
  lastName: "Smith",
};

fullName.call(person1, "Oslo", "Norway");

// Apply()
const fullName2 = function (city, country) {
  console.log(this.firstName + " " + this.lastName, city, country);
};

const person2 = {
  firstName: "John",
  lastName: "Smith",
};

fullName2.apply(person2, ["Oslo", "Norway"]);

// Bind()
function func(language) {
  if (language === "kor") {
    console.log(`language: ${this.korGreeting}`);
  } else {
    console.log(`language: ${this.engGreeting}`);
  }
}

const greeting = {
  korGreeting: "안녕 ",
  engGreeting: "Hello ",
};

const boundFunc = func.bind(greeting);
boundFunc("kor");
boundFunc("eng");
