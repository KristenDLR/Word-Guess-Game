// Creating an array that list out the possble options (Classic Movies)
var movie = ["casablanca", "pyscho", "jaws", "citizen kane", "rear window", "the wizard of oz"];
// "citzen kane", "the wizard of oz", "singing in the rain", "rear window", "its a wonderful life",  "dr. strangelove", "it happened one night", "vertigo", "forest gump", "one flew over the cukoo's nest", "dazed and confused", "in the heat of the night"];

// Global Variables
// Choose word randomly
var randomIndex = Math.floor(Math.random() * movie.length);
console.log(randomIndex);
var randomMovie = movie[randomIndex];
console.log(randomMovie);
var rightWord = [];
var wrongWord = [];

//choose movies with no spaces
var space = " ";
var spaces

//DOM manipulation
var screenUnderscore = document.getElementsByClassName("underscore");
var wrongGuessBox = document.getElementsByClassName("wrongGuess");

var rightGuess = [];

var underScore = [];

var movieSpace

//function with for loop to run through array of movie 1st and replace spaces.
var findSpace = function(){
  for (let s = 0; s < randomMovie.length; s++) {
  if(randomMovie[s] === space){
    rightGuess.innerHTML = " ";
    spaces ++
  }
  movieSpace = parseInt(randomMovie.indexOf(" "));

  // var j = movieSpace
  // randomMovie[movieSpace] = innerHTML." ";
};console.log(movieSpace);
};
findSpace();
// console.log(randomMovie[movieSpace]);
// .innerHTML = space;
// if(movieSpace === randomMovie.indexOf(" "))

// console.log("check this out" + movieSpace.indexOf(randomMovie));
 // replace underscore with correct letter

// for(var s = 0; s < randomMovie.length; s++){
//   indexOf(" ") === s;
//   console.log(indexOf(" ") === s);
// }
// var spaces = movie.indexOf(" ");

//_________________________________
document.addEventListener("keypress", (event) => {
  var keyword = event.key;
  console.log(event);

  // spaces =  function () {
  //   // wordHolder = document.getElementById('hold');

  //   for (var s = 0; i < randomMovie.length; s++) {
  //     if (randomMovie[s] === "-") {
  //       ("-").innerHTML = s;
  //       space = 1;

  // randomMovieLength = randomMovie.length;

  // If users guess is right
  if (randomMovie.indexOf(keyword) !== -1) {
    console.log(true);

    //add to rightWord array
    rightWord.push(keyword);
    console.log(rightWord);

    // replace underscore with correct letter
    for (var i = 0; i < underScore.length; i++) {
      console.log("randomMovie[i]:", randomMovie[i]);
      if (keyword === randomMovie[i]) {
        underScore[i] = randomMovie[i];
      }
    }

    underScore[randomMovie.indexOf(keyword)] = keyword;

    console.log(underScore);
    screenUnderscore[0].innerHTML = underScore.join("");
    if (underScore.join("") == randomMovie) {
      alert("You Win!");
    }
  }
  // /add to wrongWord array
  else {
    wrongWord.push(keyword);
    console.log(wrongWord);
    wrongGuessBox[0].innerHTML = wrongWord;
  exitSign();


  }
});
//_____________________

var exitSign = function(){

  exit = document.getElementById("exit");
  exit.querySelector(".end").innerHTML = "EXIT"

};
// Create underscores based on length of word
var createUnderscore = () => {
  for (var i = 0; i < randomMovie.length; i++) {
    underScore.push(" _ ");
  }

  screenUnderscore[0].innerHTML = underScore.join("");
  // return underScore;
  // if(randomMovie.indexOf(spaces) !== -1){

  // if(randomMovie.indexOf(spaces))
  //   underScore.replace(spaces);
  //   console.log(spaces)
};

createUnderscore();

//___________________________________________

for (s = 0; s < randomMovie.length; s++) {
  if (randomMovie[s] === "-") {
    screenUnderscore[0].innerHTML = randomMovie[s].join("");
  }

  // var spaces = document.createElement("id");
  // s = spaces;
  // randomMovie = randomMovie.replace("_", " ");
}

// Gets users guess

//input box in a model, compare with randomMovie
//if input lenth is less than 2 then

// screenUnderscore[0].innerHTML = createUnderscore().join(" ");

// Check if guess is right
// if right push to right array
// if wrong push to wrong array

//will spaces and ' be a problem?

//creating variables to hold the number of wins, and guesses.

// var wins = 0;
// var guesses left = 9;

// Create variables that hold references
// var directionsText = document.getElementById("direction-text");
// var userChoiceText = document.getElementById("userchoice-text");
// var winsText = document.getElementById("wins-text");
// var randomMovie = document.getElementById("")

//     // "casablanca"()
//       document.write("_ _ _ _ _ _ _ _ _");

//       if ((userGuess ==="c") || (userGuess ==="a") || (userGuess ==="s") || (userGuess ==="b") || (userGuess ==="l") || (userGuess ==="n")){

//         if (userGuess ==="c")
//         document.write("c _ _ _ _ _ _ c _")

//         // Display the user and computer guesses, and wins/losses/ties.
//         userChoiceText.textContent = "You chose: " + userGuess;
//         randomMovie.textContent = "The computer chose: " + computerGuess;
//         winsText.textContent = "wins: " + wins;
//       }
//       console.log("User Guess" + document.onkeyup)
//     };
