
/// logic take from the zoom class example 

// // The start Quiz Game
// function startGame() {
//     isWin = false;
//     timerCount = 60;
//     // Prevents start button from being clicked when round is in progress
//     startButton.disabled = true;
//     renderBlanks()
//     startTimer()
//   }

const startButton = document.getElementById("start-button");
const timerDisplay = document.getElementById("timer");
const feedbackEl= document.querySelector(".feedback-answer");


const questionsLocal = [
    {
      question: "What is the capital of France?",
      answers: {
        a: "London",
        b: "Paris",
        c: "Berlin",
        d: "Madrid",
      },
      correctAnswer: "Paris",  ///my index is not working not sure how to call it in this case
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: {
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
      },
      correctAnswer: "Jupiter",
    },
  ];

// Variables to track question number and score
let currentQuestion = 0;
let score = 0;
let timeRemaining = 60;
let winCounter = 0;
let loseCounter = 0;


// Function to display the questions for the quiz triggered by startbutton action
function displayQuestion() {
    const questionElement = document.getElementById("questions");  // this will open the space to display the questions on html
    const answerButtons = document.querySelectorAll(".answer-button"); // this open the space to display the answers on html
  
    questionElement.textContent = questionsLocal[currentQuestion].question; /// this will trigger hopofully my arrays with questions
  
    // Update answer options for the current question
    answerButtons.forEach((button, index) => {
      button.textContent = Object.values(questionsLocal[currentQuestion].answers)[index]; ///hopefully this will trigger my array with answers
    });
  }

// Function to check the answer and deduct time from wrong answer and save the wins and losses. 
function checkAnswer(answer) {
    if (answer === questionsLocal[currentQuestion].correctAnswer) { /// the values are correct and variables are passing but still give me incorrect mmmm
      winCounter++;
      feedbackEl.textContent = "Correct";
    } else {
      loseCounter++;  
      feedbackEl.textContent = "Incorrect";
      timeRemaining -= 15;
    }
    currentQuestion++;
  
    if (currentQuestion < questionsLocal.length) {
      displayQuestion();
    } else {
    //   quizEnd();
      alert("You finished the quiz! Your final score is: " + score);
    }
}
// function quizEnd() {
//     clearInterval(intervalId); 
//     if (winCounter = 2)
//     winGame();

//     else {
//         loseGame();
//     }
// }



//   // The winGame function is called when the win condition is met
// function winGame() {
//     feedbackEl.textContent = "YOU WON!!!🏆 ";
//     winCounter++
//     startButton.disabled = false;
//     setWins()
//   }
  
//   // The loseGame function is called when timer reaches 0
//   function loseGame() {
//     feedbackEl.textContent = "GAME OVER";
//     loseCounter++
//     startButton.disabled = false;
//     setLosses()
//   }


function startTimer() {
    const intervalId = setInterval(() => {
        // Decrement the time remaining
        timeRemaining--;
      
        // Update the display with the remaining time
        timerDisplay.textContent = timeRemaining;
      
        // If the timer reaches zero, clear the interval
        if (timeRemaining === 0) {
          clearInterval(intervalId);
          timerDisplay.textContent = "Time's up!";
        }
      }, 1000); // 1000 milliseconds = 1 second
  
  }

//   // Updates win count on screen and sets win count to client storage
// function setWins() {
//     win.textContent = winCounter;
//     localStorage.setItem("winCount", winCounter);
//   }
  
//   // Updates lose count on screen and sets lose count to client storage
//   function setLosses() {
//     lose.textContent = loseCounter;
//     localStorage.setItem("loseCount", loseCounter);
//   }


function startGame() {
   isWin = false;
   startButton.disabled = true;
   displayQuestion();
   startTimer()
  }



// Event listener for the start button that will trigger displayquestion

startButton.addEventListener("click", startGame);


  // Event listeners for the answer buttons


const answerButtons = document.querySelectorAll(".answer-button");
answerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedAnswer = button.textContent;
    checkAnswer(selectedAnswer);
  });
});
