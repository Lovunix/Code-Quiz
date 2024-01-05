
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

const questionsLocal = [
    {
      question: "What is the capital of France?",
      answers: {
        a: "London",
        b: "Paris",
        c: "Berlin",
        d: "Madrid",
      },
      correctAnswer: "b",
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: {
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
      },
      correctAnswer: "c",
    },
  ];

// Variables to track question number and score
let currentQuestion = 0;
let score = 0;

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

// Function to check the answer
function checkAnswer(answer) {
    if (answer === questionsLocal[currentQuestion].correctAnswer) { /// the values are correct and variables are passing but still give me incorrect mmmm
      score++;
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
  
    currentQuestion++;
  
    if (currentQuestion < questionsLocal.length) {
      displayQuestion();
    } else {
      alert("You finished the quiz! Your final score is: " + score);
    }
  }


// Event listener for the start button that will trigger displayquestion
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", () => {
  displayQuestion();
});


  // Event listeners for the answer buttons
const answerButtons = document.querySelectorAll(".answer-button");
answerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedAnswer = button.textContent;
    checkAnswer(selectedAnswer);
  });
});
