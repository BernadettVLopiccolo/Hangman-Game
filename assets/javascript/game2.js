//setting up words for hangman
var words = ["oars", "amrap", "deadlift", "namaste", "marathon"];

//All the variables that you need for the game to start
var looses=0;
var wins=0;
var remaining_guesses = 10;
var wrong_guesses = [];

//Funtion to start game
function runGame() {
  //computer picks a word form your words array
  var compPick = Math.floor(Math.random() * words.length);
  //user types a letter
  document.onkeyup = function(event) {
    console.log("Picked key", event.key);
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  }
  //hand off your game to the checkGuess function by calling it below
  checkGuess();
}

function checkGuess() {
  //check to see if the word is not in the wordArray

    //if it's not in the wordArray, then add the letter to the wrong_guesses array, and decrement the number of guesses left

    //else the word IS in the wordArray, and you'll need to re-render your word by calling your renderWord function

  //this puts down blanks? not sure I'm follwing the code below
  for(var l = 0; l <= wordsLength; l++) {
        blankWordsArray[i] = " _ ";
      if(userGuess === compWordsArray[l]){
            // changed [l] to [i], = or ===
            blankWordsArray[i] === compWordsArray[l];

            //alert(entered_guesses);
            console.log("Picked key",userGuess);
            console.log("computer's sports words",compWordsArray);
            console.log("it's a match");

        } else {
            console.log(userGuess);
            //console.log(compWordsArray[l]);
        }
    }

    if(entered_guesses == [i]) {

      words += entered_guesses;
      }
      else {
       words += " ";
    }

  }
}

//Prints the blanks and the guessed letter(s) on the user interface(i.e, the web browser screen)
function renderWord() {

  //splits all of the values in words by letter
  var wordArray = compWords.split("");
  console.log("Array of sports words name",blankWordsArray);

  //length of the word
  var wordLength = blankWordsArray.length;
  console.log(wordLength);

  //Very nice work below!
  //sets up the underscore based on the word length
  for(var i = 0; i < wordsLength; i++) {
    wordArray[i] = " _ ";
    document.getElementById("blanks").innerHTML += blankWordsArray[i];
  }
}

renderWord();
runGame();


document.getElementById("userGuess").innerHTML += " " + userGuess;

//setting up max guesses to 10
if(remainGuess < 0) {
    remainGuess = 10;
    }

//shows remaining guesses
document.getElementById("remaining").innerHTML = remainGuess;
