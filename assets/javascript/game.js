
  // Creating an array that list out the possble options (Classic Movies)
  const  movie = ["casablanca", "pyscho","jaws","citizen kane"]


  // "citzen kane", "the wizard of oz", "singing in the rain", "rear window", "its a wonderful life",  "dr. strangelove", "it happened one night", "vertigo", "forest gump", "one flew over the cukoo's nest", "dazed and confused", "in the heat of the night"];

  // Global Variables
  // Choose word randomly
  let randomIndex = Math.floor(Math.random() * movie.length);
  let randomMovie = movie[randomIndex];
  console.log(randomMovie);
  let rightWord = [];
  let wrongWord =[];
  let spaces = " ";
  let wordString = [];



  //DOM manipulation
  let screenUnderscore = document.getElementsByClassName("underscore");
  let wrongGuessBox = document.getElementsByClassName("wrongGuess");

  let rightGuess = [];

  let underScore = [];

  for (i = 0; i < currentWord.length; i++) {
    wordString.push("_");
    document.getElementById("word-string").innerHTML = wordString.join(" ");


  // Create underscores based on length of word
let createUnderscore = () => {
  for(let i = 0; i < randomMovie.length; i++){
    underScore.push(" _ ")



  }
  screenUnderscore[0].innerHTML = underScore.join("");
  return underScore;

  // if(randomMovie.indexOf(spaces))
  //   underScore.replace(spaces);
  //   console.log(spaces)
}

createUnderscore()


  // Gets users guess
  document.addEventListener("keypress",(event) => {
   let keyword = event.key;
    console.log(event);

    // If users guess is right
    if(randomMovie.indexOf(keyword) !== -1){
      console.log(true);


      //add to rightWord array
      rightWord.push(keyword);
      console.log(rightWord);

      // replace underscore with correct letter
      for(var i =0; i < underScore.length; i++){
        console.log("randomMovie[i]:", randomMovie[i]);
        if (keyword === randomMovie[i]) {
          underScore[i] = randomMovie[i];
        } else {
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

    else  {
      wrongWord.push(keyword);
      console.log(wrongWord);
      wrongGuessBox [0].innerHTML = wrongWord;
    }
  });

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



//   // randomly chooses movie




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
