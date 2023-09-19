//Questions 1:  a: real Bill Turner Jeremy Henry Bill Gates 

var startTimerBtn = document.getElementById("StartTimer");
var submitBtn = document.getElementById("submitBtn");
var timeLeft = 60;
var timerText = document.getElementById("timerText");
var currentQ = document.getElementById("Current-Question");


function checkAnsr(){
    var quizInput = document.getElementById("quiz-input").value;
    if (quizInput == "c"){
        currentQ.innerHTML = "Correct!";
        
    } else {
        currentQ.innerHTML = "Incorrect!"
    }
    Qtwo()
}

function Qtwo(){
    currentQ.innerHTML = "Who invented the internet A) Alexander Graham Bell B) Bill Gates C) Vinton Cerf and Bob Kahn D) Elon Musk"
}

function startQuiz(){
    currentQ.innerHTML = "Who created bootstrap A) Bill Turner B) Bill Gates C) Mark Otto and Jacob Thornton D) Jeremy Henry (answer in lowecase)"
    
}

function timer(){

    startQuiz()

var timerInterval = setInterval(timerTextFinder, 1000)

function timerTextFinder(){
   
   if (timeLeft >= 0){
timerText.innerHTML = "You Have " + timeLeft + " Seconds Remaining"
   }else{
    clearTimeout(timerInterval)
    timerText.innerHTML = "Game Over!"
   }
   timeLeft--
}
}


submitBtn.addEventListener("click", checkAnsr)
startTimerBtn.addEventListener("click", timer)