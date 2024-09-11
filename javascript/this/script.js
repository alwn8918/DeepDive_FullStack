// Method -> Object

const audio = {
  title: "a",
  play() {
    console.log("play this", this);
  },
};

audio.play();

audio.stop = function () {
  console.log("stop this", this);
};

audio.stop();

// Function -> Window Object

function playAudio() {
  console.log(this);
}

playAudio();

// Constructor Function -> {}

function Audio(title) {
  this.title = title;
  console.log(this);
}

const audioo = new Audio("a");

//

const audiooo = {
  title: "audio",
  categories: ["rock", "pop", "hiphop"],
  displayCategories() {
    this.categories.forEach(function (category) {
      console.log(`title: ${this.title}, category: ${category}`);
    });
  },
};

audiooo.displayCategories();
// => title: undifined
// 함수 안에 있는 this => window object를 가리킴
// window 객체 안에는 title이 없기 때문에 undifined로 나옴

const audioooo = {
  title: "audio",
  categories: ["rock", "pop", "hiphop"],
  displayCategories() {
    this.categories.forEach(function (category) {
      console.log(`title: ${this.title}, category: ${category}`);
    }, this);
  },
};

audioooo.displayCategories();
// => title: audio

// 화살표 함수 -> 상위 스코프의 this
// -> Lexical this
