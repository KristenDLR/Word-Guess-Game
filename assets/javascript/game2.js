var movies =["casablanca", "pyscho","jaws","citizen kane"];

var randomMovie = movies[Math.floor(Math.random() * movies.length)];

var answerArray = [];
  for(var i = 0; i < randomMovie.length; i ++){
    answerArray[i] = "_";
  }

  var remainingLetters = randomMovie.length;

  while (remainingLetters > 0){
    //Game Code goes here
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if(guess === null){
      break;
    } else if (guess.length !== 1) {
      alert("Please enter a single letter.");
    } else {
      //update the game state with the guess
      for(var j = 0; j < randomMovie.length; j ++){
        if (randomMovie[j] === guess){
          answerArray[j] = guess;
          remainingLetters--;
        }
      }
    }

    //Show the player their progress
    alert(answerArray.join(" "));

    //Update answerArray and remainingLetters for every correct guess
  }
