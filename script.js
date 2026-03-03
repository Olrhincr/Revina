let FavoriteCity = "Abuja";
let currentyear = 2026;
let favoritFood = "Poundo";

console.log(
  "I live in " +
    FavoriteCity +
    " in " +
    currentyear +
    " and i love " +
    favoritFood
);

// can i get the PES for 150?

let game = "PES";
let price = 150;

console.log("can i get the " + game + " for " + price + "?");

let Name = "gabriel";
let town = "london";
let day = "Friday";
let date = 24;

console.log(
  Name +
    " is out of " +
    town +
    " and he will be back by " +
    day +
    " the " +
    date +
    "." +
    " Thank you" +
    "."
);

function greet() {
  console.log("Hello");
}
greet();

function addNumbers(a, b) {
  console.log(a + b);
}
addNumbers(5, 10);

function reply(name) {
  console.log("I am home!" + name);
}

reply("David");
reply("saheed");

// create a function called greetUser
// it should take one input - user's name
//it should print "Hello (name), welcome to my website!"

function greetUser(name) {
  console.log("Hello" + name + "," + " welcome to my website" + "!");
}

greetUser(" Gabriel");

//create a function that prints your favorite things.
//inside the funciton, define three variables;
//favoriteFood, favorite color, favorite number
//print a sentence using these variable

function favoriteThings() {
  let favoriteFood = "Poundo";
  let favoriteColor = "green";
  let favoriteNumber = 3;

  console.log(
    "my favorite food is" +
      favoriteFood +
      "and the color is " +
      favoriteColor +
      "number" +
      favoriteNumber +
      "on my list"
  );
}

favoriteThings();

function addTwoNumbers(a, b) {
  console.log(a + b);
}
addTwoNumbers(5, 7);

function addNumber(a, b, c) {
  console.log("the sum of the number is " + "=" + (a + b + c));
}

addNumber(3, 5, 2);

window.onload = function () {
  document.getElementById("greetBtn").onclick = function () {
    let userName = document.getElementById("nameImput").value;
    document.getElementById(greetingText).innerHTML =
      "Hello" + userName + ", welcome to my website!";
  };
};
