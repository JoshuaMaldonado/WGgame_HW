let answerpool = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let guesses = [];
let guessesRemaining  = 9;
let dubs = 0;
let losses = 0;

var randomIndex = Math.floor(Math.random() * answerpool.length);
var randomletter = answerpool[randomIndex];

console.log(randomletter);

document.onkeyup = function(event) {
  var userLetter = event.key;
  // makes sure the user selects a letter
  var checkforletter = /[a-z]/gi;
    if (!checkforletter.test(userLetter)) {
      alert("please enter a letter");
    }
    else {
      console.log(userLetter);
    }

// resets the random letter if the user loses
if (guessesRemaining < 0) {
  losses++;
  document.getElementById("losses").innerHTML = losses++;
  console.log("You lost!");
  alert("You lost!");
  guessesRemaining = 9;
  guesses = [];
  document.getElementById("guesses").innerHTML = guesses;
  document.getElementById("guessesRemaining").innerHTML = 9;
  randomIndex = Math.floor(Math.random() * answerpool.length);
  randomletter = answerpool[randomIndex];
  console.log(randomletter);
}

  // compares the random letter and user letter
  if (randomletter === userLetter) {
    console.log("You won!");
    alert("You won!");
    document.getElementById("dubs").innerHTML = dubs++;
    guesses = [];
    document.getElementById("guesses").innerHTML = guesses;
    randomIndex = Math.floor(Math.random() * answerpool.length);
    randomletter = answerpool[randomIndex];
    console.log(computerChoice);
    guessesRemaining = 9;
    document.getElementById("guessesRemaining").innerHTML = 9;
  } else {
    console.log("Guess again!");
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining--;
    guesses.push(userLetter);
    document.getElementById("guesses").innerHTML = guesses;
  }
};