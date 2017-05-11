//setting up words for hangman
var words = ["oars", "amrap", "deadlift", "namaste", "marathon"];

//set up how many guesses I have for a word
var remainGuess = 10;

//computer picks a random word
//TODO: Here you have hard-coded 5, but want a number bewtewen 0 and the number of items in your array. DO you remember how to get the number of items in your array?
var compPick = Math.floor(Math.random() *5) + 1;

//setting up an empty bucket for guesses
//TODO: Why is this an object, as opposed to an array? I think you maybe want an array here....
var entered_guesses = {}

//new var that picks a random word from words
//print out word
var compWords = words[compPick];
    console.log("sportWords",compWords);

//splits all od the values in words by the quote
var blankWordsArray = compWords.split("");
    console.log("Array of sports words name",blankWordsArray);

//length of the word
var wordsLength = blankWordsArray.length;
    console.log(wordsLength);
    //TODO: Fix indentation so you can see relationships between your code-lines visually.
    //TODO: Very nice work below!
    //sets up the underscore based on the word length
    for(var i = 0; i < wordsLength; i++) {
        blankWordsArray[i] = " _ ";
        document.getElementById("blanks").innerHTML += blankWordsArray[i];
       }

        //problem here?
        compWordsArray = compWords.split("");
        console.log("reset sport words array",compWordsArray);

        //prints out the key user pressed
        document.onkeyup = function(event) {
            console.log("Picked key", event.key);
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

            document.getElementById("userGuess").innerHTML += " " + userGuess;



            //if letter is guessed wrong, you loose a guess
            remainGuess--;

        //setting up max guesses to 10
        if(remainGuess < 0) {
            remainGuess = 10;
            }

        //shows remaining guesses
        document.getElementById("remaining").innerHTML = remainGuess;

        //
       for(var l = 0; l <= wordsLength; l++) {
            blankWordsArray[i] = " _ ";
          if(userGuess === compWordsArray[l]){
                // changed [l] to [i], = or ===
                blankWordsArray[i] === compWordsArray[l];

                //alert(entered_guesses);
                console.log("Picked key",userGuess);
                console.log("computer's sports words",compWordsArray);
                console.log("it's a match");

            }


            else {
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
