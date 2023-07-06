// Define the quiz questions and answers
const questions = [
    {
        question: 'Which planet in our solar system is known as the "Red Planet"?',
        answers: ['Pluto', 'Earth', 'Mars','Jupiter'],
        correctAnswer: 'Mars'
       
    },
    {
        question: 'What is the capital of France?',
        answers: ['Madrid', 'Berlin','Paris','London'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: ['Michelangelo', 'Raphael', 'Donatello','Leonardo da Vinci'],
        correctAnswer: 'Leonardo da Vinci'
    },
    {
       question:'In what year did the first successful flight of the Wright brothers sairplane take place?',
       answers:['1903','1908','1910','1920'],
       correctAnswer:'1903'

    }
];

// Get quiz elements
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const submitButton = document.getElementById('submit');
const scoreElement = document.getElementById('score');

// Initialize quiz
let currentQuestion = 0;
let score = 0;
showQuestion();

// Show current question
function showQuestion() {
    // Get current question
    const question = questions[currentQuestion];
    // Set question text
    questionElement.textContent = question.question;
    // Clear answers
    answersElement.innerHTML = '';
    // Add answer options
    question.answers.forEach(answer => {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'answer';
        radio.value = answer;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(answer));
        answersElement.appendChild(label);
    });
}

// Handle submit button click
submitButton.addEventListener('click', function() {
    // Get selected answer
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    // Check if answer is correct
    if (selectedAnswer && selectedAnswer.value === questions[currentQuestion].correctAnswer) {
        // Increment score if answer is correct
        score+=2;
        // Move to next question
        currentQuestion++;
        // Show next question or end quiz if all questions have been answered
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    } else {
        // Alert user if no answer is selected
        if (!selectedAnswer) {
            alert('Please select an answer before proceeding to the next question.');
        }
    }
});

        
        // End quiz and show score
        function endQuiz() {
        // Hide quiz elements
        
        // Show score
        
        if(score<score*100/30)
        {
            scoreElement.textContent='Congratulation you have cleared the quiz';
            scoreElement.textContent = 'You scored  '+score+' out of ' +questions.length*2;
        }
        else
        {
            scoreElement.textContent='Ooops failed in quiz';
            scoreElement.textContent = 'You scored  '+score+' out of ' +questions.length*2;
        }
        
        
        };
