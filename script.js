/* comprehsnion questions quiz bank */

const questions= [
    {
        question: "What is the first step in the perfume making process?", 
        answers: [
            {text:" Extracting the oil from the ingredients", correct: false},
            {text:" Blending the oils", correct: false},
            {text:" Aging the perfume oils", correct: false},
            {text:" Collecting the ingredients", correct: true},
        ]
    }, 
    {
        question: "Where are some animal-based perfume ingredients sourced from?", 
        answers: [
            {text:" North America and Russia", correct: false},
            {text:" Tibet and China", correct: true},
            {text:" Africa and South America", correct: false},
            {text:" Europe and Australia", correct: false},
        ]
    },
    {
        question: "Which method of extraction involves pressing the plant ingredient manually by hand or with a machine?", 
        answers: [
            {text:" Steam distillation", correct: false},
            {text:" Boiling in water", correct: false},
            {text:" Expression", correct: true},
            {text:" Infusion", correct: false},
        ]
    },
    {
        question: "What is the role of a perfume expert in the blending process?", 
        answers: [
            {text:" Mixing the oils with water", correct: false},
            {text:" Determining the specific formula", correct: true},
            {text:" Extracting the oil from the ingredients", correct: false},
            {text:" Aging the perfume oils", correct: false},
        ]
    },
    {
        question: "What is the typical percentage of perfume oil in Eau De Parfums?", 
        answers: [
            {text:" 30-40%", correct: false},
            {text:" 5%", correct: false},
            {text:" 2%", correct: false},
            {text:" 10-20%", correct: true},
        ]
    },
    {
        question: "How long can perfume be aged after blending?", 
        answers: [
            {text:" Several months", correct: false},
            {text:" Indefinitely", correct: false},
            {text:" Several years", correct: true},
            {text:" Several weeks", correct: false},
        ]
    },
    {
        question: "What are the 'notes de tete' in a perfume?", 
        answers: [
            {text:" Base notes", correct: false},
            {text:" Top notes", correct: true},
            {text:" Heart notes", correct: false},
            {text:" Middle notes", correct: false},
        ]
    },
    {
        question: "Which fragrance provides a lingering scent that lasts long?", 
        answers: [
            {text:" Amber and myrrh", correct: true},
            {text:" Citrus and tangy", correct: false},
            {text:" Musky and woody", correct: false},
            {text:" Jasmine and rose", correct: false},
        ]
    },
];
/* manipulating the DOM using javascript*/
const questionElement= document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0,
    nextButton.innerHTML= "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;


    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function  resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}
 
function selectAnswer(e) {
    const selectedBtn= e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        // increase the score by one
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // check the dataset if the answer is correct and if it is correct it will display the correct or incorrect answer
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });

    // display the next button once the question is completed

    nextButton.style.display = "block";

}

// this function will show the score

function showScore(){
resetState();
questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;

nextButton.innerHTML="Retry quiz";
nextButton.style.display = "block";
}

// when you check on next button ti will show next question. If there is no question, it will score the score 

function handleNextButton(){
    currentQuestionIndex++; 
    if(currentQuestionIndex < questions.length){
          showQuestion();  
} else{
    showScore();
}
}

// function to bring us to the next question 

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
       
        } else{
        startQuiz();
    }
});

startQuiz();
