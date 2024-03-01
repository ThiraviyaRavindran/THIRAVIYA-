const questions =[{
    question: "How many liters of water to drink per day ?",
    answers : [
        {text:"3.7 liters", correct : true},{text:"5.7 liters", correct : false},
        {text:"1.7 liters", correct : false},
        {text:"6.7 liters", correct : false},

    ]
},
{
    question: "Who is the first richest person in the world?",
    answers : [
        {text:"Mukesh Amban", correct : false},{text:"Gautam Adani", correct : false},
        {text:"Bernard Arnault", correct : true},
        {text:"Thiraviya", correct : false},

    ]
},
{
    question: "Who found aptitude?",
    answers : [
        {text:"Mukesh sundaram", correct : false},{text:"France Mark", correct : false},
        {text:"Bernard Arnault", correct : false},
        {text:"Sir Francis Galton", correct : true},
    ]
    },

    ]

    const questionElement= document.getElementById("Q1");
    const answersButton= document.getElementById("quiz");
    const nextButton= document.getElementById("btnnext");

    let CurrentQuestionIndex = 0;
    let score = 0;          

    function startQuiz(){
        CurrentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML="Next";
        showquestion();
    }

    function showquestion(){
        resetState();
        let CurrentQuestion = questions[CurrentQuestionIndex];
        let QuestionNO = CurrentQuestionIndex + 1;
        questionElement.innerHTML = QuestionNO + ". " + CurrentQuestion.question;

        CurrentQuestion.answers.forEach(answers =>{
            const button = document.createElement("button");
            button.innerHTML =answers.text;
            button.classList.add
            ("btn");
            answersButton.appendChild(button);
            if(answers.correct){
                button.dataset.correct = answers.correct;
            }
            button.addEventListener("click", selectAnswer);
        });
    }

    function resetState(){
        nextButton.style.display = "none";
        while(answersButton.firstChild){
            answersButton.removeChild(answersButton.firstChild)
        }
    }
    function selectAnswer(e){
        const selecttedBtn = e.target;
        const isCorrect = selecttedBtn.dataset.correct === "true";
        if(isCorrect){
            selecttedBtn.classList.add("correct");
            score++;
        }else{
            selecttedBtn.classList.add("incorrect");
        }
        Array.from(answersButton.children).forEach(button =>{
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
        }
        function showScore(){
            resetState();
            questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
            nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block" 
           }
           function handleNextButton(){
            CurrentQuestionIndex++;
            if(CurrentQuestionIndex < questions.length){showquestion();
            }else{
                showScore();
            }
        }
        nextButton.addEventListener("click",()=>{
            if(CurrentQuestionIndex < questions.length){
                handleNextButton();
            }else{
                 startQuiz();
            }
            }
        );
    
    startQuiz();


