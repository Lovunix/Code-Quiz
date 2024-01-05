const startButton = document.getElementById("start-button");
const timerDisplay = document.getElementById("timer");
const feedbackEl= document.querySelector(".feedback-answer");
const feedbackResEl = document.querySelector(".feedback-result")
const answerButtons = document.querySelectorAll(".answer-button");
const collquestions = document.getElementById("collapsequestions");
const globalREl = document.querySelector(".global-results")
const nameEl = document.getElementById("name");
const namepEl = document.getElementById("namep");

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
let intervalId;


function startGame() {
    startButton.disabled = true;
    namepEl.textContent = '';
    displayQuestion();
    startTimer();
    addButtonListeners();
   }

function startTimer() {
    intervalId = setInterval(() => {
    timeRemaining--;
    timerDisplay.textContent = timeRemaining;
    if (timeRemaining === 0) {
        clearInterval(intervalId);
          timerDisplay.textContent = "Time's up!";
          quizEnd();
        }
    }, 1000); // 1000 milliseconds = 1 second
  
  }

  function addButtonListeners() {
    answerButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const selectedAnswer = button.textContent;
        checkAnswer(selectedAnswer);
      });
    });
  }

  function starover() {
    location.reload(true);
  }


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
      if (winCounter === 2 && timeRemaining > 0) {
        winGame();
      }

    } else {
      loseCounter++;  
      feedbackEl.textContent = "Incorrect";
      timeRemaining -= 15;
    }

    currentQuestion++;
  
    if (currentQuestion < questionsLocal.length) {
      displayQuestion();
    } else {
      quizEnd();
    }
}
function quizEnd() {
    clearInterval(intervalId); 
    if (winCounter === 2)
    winGame();

    else {
        loseGame();
    }
}

  // The winGame function is called when the win condition is met
  function winGame() {
    feedbackResEl.textContent = "YOU WON!!!🏆 ";
    clearInterval(intervalId);
    timerDisplay.textContent = "You Won";
    startButton.disabled = false;
    startButton.textContent = "Start Over";
    startButton.addEventListener('click', starover)
    feedbackEl.textContent = '';
    setRecord()
  }

  // The loseGame function is called when timer reaches 0
  function loseGame() {
    feedbackEl.textContent = '';
    clearInterval(intervalId);
    feedbackResEl.textContent = "GAME OVER";
    timerDisplay.textContent = "Try again";
    startButton.disabled = false;
    startButton.textContent = "Try Again";
    startButton.addEventListener('click', starover)
    setRecord()
  }


  // Updates win count on screen and sets win count to client storage
function setRecord() {
    collquestions.textContent = " ";
    name2record = nameEl.value;
    globalREl.textContent = name2record + "  Your results will be record like this" + " Correct Answers  " + winCounter + "   " + "  Incorrect Answers " + loseCounter;
    localStorage.setItem( name2record, name2record + " wins " +  winCounter + " losses " + loseCounter);

 }
// Event listener for the start button that will trigger displayquestion

startButton.addEventListener("click", startGame);

