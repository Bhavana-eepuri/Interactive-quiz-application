const quizData = [
    {
        question: "JavaScript is the programming language of the-----?",
        answers: ["A] Desktop", "B] Mobile", "C] Web", "D] Server"],
        correct: "C] Web"
    },
    {
        question: "Which type of JavaScript language is----?",
        answers: ["A] Object-oriented", "B] Object-based", "C] Functional programming", "D] All of the above"],
        correct: "B] Object-based"
    },
    {
        question: "JavaScript code can be written in---?",
        answers: ["A] JavaScript file(.js file)", "B] HTML document directly", "C] JavaScript file and in HTML document diretly", "D] In style sheets(.css file)"],
        correct: "C] JavaScript file and in HTML document diretly"
    },
    {
        question: "Which symbol is used separate JavaScript statements?",
        answers: ["A] Comma(,)", "B] Colon(:)", "C] Hyphen(_)", "D] Semicolon(;)"],
        correct: "D] Semicolon(;)"
    },
    {
        question: "JavaScript ignores",
        answers: ["A] newlines", "B] tabs", "C] spaces", "D] All of the above"],
        correct: "D] All of the above"
    },
    {
        question: "Which JavaScript method is used to access an HTML element by id?",
        answers: ["A] getElementById()", "B] getElement(id)", "C] getElementById(id)", "D] elementById(id)"],
        correct: "C] getElementById(id)"
    },
    {
        question: "Which property is used to define the HTML content to an HTML element with a specific id?",
        answers: ["A] innerText", "B] innerContent", "C] elementText", "D] innerHTML"],
        correct:"D] innerHTML"
    },
    {
        question: "Which JavaScript method is used to write HTML output?",
        answers: ["A] document.write()", "B] document.output()", "C] console.log()", "D] document.writeHTML()"],
        correct: "A] document.write()"
    },
    {
        question: "Which JavaScript method is used to write on browser's console?",
        answers: ["A] console.write()", "B] console.output()", "C] console.log()", "D] console.writeHTML()"],
        correct: "C] console.log()"
    },
    {
        question: "In JavaScript , single line comment begins with---?",
        answers: ["A] #", "B] /* ", "C] $", "D] //"],
        correct: "D] //"
    },
    
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
const quizTimeInSeconds = 500; 

document.addEventListener('DOMContentLoaded', startQuiz);

function startQuiz() {
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    const answersContainer = document.getElementById('answers-container');
    const feedback = document.getElementById('feedback');

    feedback.textContent = '';
    const currentQuestion = quizData[currentQuestionIndex];

    questionContainer.textContent = currentQuestion.question;
    answersContainer.innerHTML = '';

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.onclick = function () {
            checkAnswer(answer);
        };

        answersContainer.appendChild(button);
    });

    updateTimerDisplay();
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correct) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    const feedback = document.getElementById('feedback');
    const timerContainer = document.getElementById('timer-container');

    clearInterval(timer);
    quizContainer.innerHTML = `<h2>Quiz Completed!</h2>
                               <p>Your Score: ${score} out of ${quizData.length}</p>`;
    
    if (score === quizData.length) {
        feedback.textContent = "Congratulations! You got all questions correct!";
    } else {
        feedback.textContent = "Keep practicing! You can do better!";
    }

    timerContainer.innerHTML = ''; 
}

function startTimer() {
    let timeRemaining = quizTimeInSeconds;
    const timerContainer = document.getElementById('timer-container');

    timer = setInterval(() => {
        updateTimerDisplay(timeRemaining);

        if (timeRemaining <= 0) {
            clearInterval(timer);
            endQuiz();
        }

        timeRemaining--;
    }, 1000);
}

function updateTimerDisplay(timeRemaining) {
    const timerContainer = document.getElementById('timer-container');
    timerContainer.textContent = `Time Remaining: ${timeRemaining} seconds`;
}
