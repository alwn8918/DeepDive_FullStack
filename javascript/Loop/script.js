// for
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    console.log("It's 3");
    continue;
  }

  if (i === 5) {
    console.log("5 Stop the loop");
    break;
  }

  console.log("Number " + i);
}

// for in
const user = {
  name: "Han",
  province: "경기도",
  city: "성남시",
};

for (let x in user) {
  console.log(`${x}: ${user[x]}`);
}

// while
let i = 0;

while (i < 10) {
  console.log("Number " + i);
  i++;
}

// do while
let j = 100;

do {
  console.log("Number " + j);
  j++;
} while (j < 10);

// Array
const locations = ["서울", "부산", "경기도", "대구"];

for (let i = 0; i < locations.length; i++) {
  console.log(locations[i]);
}

locations.forEach(function (locations, index, array) {
  console.log(`${index}:${locations}`);
  console.log(array);
});

locations.map(function (locations) {
  console.log(locations);
});
