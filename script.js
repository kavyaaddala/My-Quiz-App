const questions=[
    {
        question: "Which object in Javascript does not have a prototype?",
        answers:[
            
                {text: "Base object", correct:true},
                {text:"All Objects have prototype", correct:false},
                {text:"None of the objects have prototype", correct:false},
                {text:"none of the above",correct:false },
            
        ]
    },
    {

    question: "Which of the following is correct about the features of JavaScript?",
        answers:[
            
                {text: "JavaScript  is complementary to and integrated with HTML", correct:false},
                {text:"JavaScript is open and cross-platform.", correct:false},
                {text:"When an event occurs (when a user clicks a button)", correct:true},
                {text:"When you book a hall for a private function",correct:false },
            
        ]
    },
    {

        question: "Name two different ways to call a function.",
            answers:[
                
                    {text: "When the function is stored in the JavaScript Folder", correct:false},
                    {text:"When it is invoked from JavaScript code", correct:true},
                    {text:"None of the objects have prototype", correct:true},
                    {text:"none of the above",correct:false },
                
            ]
        },
        {

            question: "Which of the following is a server-side Java Script object?",
                answers:[
                    
                        {text: "function", correct:true},
                        {text:"File", correct:false},
                        {text:"FileUpload", correct:false},
                        {text:"Date",correct:false },
                    
                ]
            }
];
const questionElement= document.getElementById('question');
const answerButtons=document.getElementById('answer-buttons');
const nextButton=document.getElementById('next-btn');

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex]
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+'. '+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement('button');
        button.innerHTML=answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click',selectAnswer);
    })

}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}


function  selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct=='true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add('incorrect')
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==='true'){
            button.classList.add('correct'  )
        }

        button.disabled=true;
    })
    nextButton.style.display='block'
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML='Play Again';
    nextButton.style.display='block'
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
       showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
 startQuiz();