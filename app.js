
var questions = [
    {
        "question":"Who is the top Scorer of All time?",
        "option1":"Marcus Rashford",
        "option2":"Wayne Rooney",
        "option3":"Ruud Van Nistelrooy",
        "option4":"Andy Cole",
        "answer":"2"
    },
    {
        "question":"Who is the most succcessful head coach?",
        "option1":"Sir Alex Ferguson",
        "option2":"Sir Bobby Charlton",
        "option3":"Jose Mourinho",
        "option4":"Louis Val Gaal",
        "answer":"1"
    },
    {
        "question":"Who is the most recent receiver Golden Ball player?",
        "option1":"Wayne Rooney",
        "option2":"David Beckham",
        "option3":"Cristiano Ronaldo",
        "option4":"Nemaja Vidic",
        "answer":"3"
    },
    {
        "question":"Who is the most value defender?",
        "option1":"Patrick Evra",
        "option2":"Rio Ferdinand",
        "option3":"Gabriel Heinze",
        "option4":"Phil Jones",
        "answer":"2"
    },
    {
        "question":"What year the club won Champions League?",
        "option1":"1999 & 2008",
        "option2":"2003",
        "option3":"2009 & 2011",
        "option4":"2000",
        "answer":"1"
    },
    {
        "question":"What is home ground stadium?",
        "option1":"High Bury",
        "option2":"Old Trafford",
        "option3":"Anfield",
        "option4":"Cadiff",
        "answer":"2"
    },
    {
        "question":"How many English Cup Title club has won?",
        "option1":"10",
        "option2":"22",
        "option3":"20",
        "option4":"13",
        "answer":"4"
    },
    {
        "question":"Who is current first team head coach?",
        "option1":"Jose Mourinho",
        "option2":"David moyes",
        "option3":"Ole Gunnar Solkjear",
        "option4":"Edward Wood",
        "answer":"3"
    },
    {
        "question":"Which player is the last contract sir Alex signed before retired?",
        "option1":"Robin Van Persie",
        "option2":"David De Gea",
        "option3":"Alan Smith",
        "option4":"Juan Mata",
        "answer":"2"
    },
    {
        "question":"Who is first team captain?",
        "option1":"Hary Maguire",
        "option2":"Juan Mata",
        "option3":"Paul Pogba",
        "option4":"Phil Jones",
        "answer":"1"
    }
]





var currentQuestion = 0
var score = 0
var totQuestion = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var finishButton = document.getElementById('finishQuestion')
var resultCont = document.getElementById('result'); 

function loadQuestion(questionIndex){
    var q = questions[questionIndex]
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question
    opt1.textContent = q.option1
    opt2.textContent = q.option2
    opt3.textContent = q.option3
    opt4.textContent = q.option4
    
}







// var buttons = document.querySelectorAll('.option')
// buttons.forEach(button => button.addEventListener('click', function(){
   
//     button.style.backgroundColor = "green"
//     buttons.forEach(remove => remove.removeEventListener('click', function(){
//         remove.style.backgroundColor = "green"
//     }));
   
   
   
    
    
// }))


//     // event.preventDefault();
//     console.log("click");
//     // if you want to remove event listener 
//     // button.removeEventListener("click", fn);

//     // if you don't want to remove it
//     // button.disabled = true;

//     // using css (this also don't removes listener)
//     // button.style.backgroundColor = "none";

//     button.style.backgroundColor = "green"

// function changeToGreen(){
//     selectedOption.style.backgroundColor = 'green'
//     //  if(!selectedOption){
//     //     style.backgroundColor = 'none'
//     //  }
//   }

function loadNextQuestion(){
    var selectedOption = document.querySelector('input[type=radio]:checked')
    // selectedOption.style.backgroundColor = "green"
    // console.log(selectedOption)
    
      
    if(!selectedOption){
        alert('Please select your answer')
        return
    }
    var answer = selectedOption.value
    if(questions[currentQuestion].answer == answer){
        score += 10
        alert(`you made ${score}`)
    }
    if(questions[currentQuestion].answer != answer){
        score += 0
        alert(`you wrong and made no point`)
    }
    selectedOption.checked = false
    currentQuestion++
    if(currentQuestion == totQuestion - 1 ){
        nextButton.textContent = "Finish"
        // nextButton.style.visibility = "hidden"
        // finishButton.style.visibility = "visible"
    }
    if(currentQuestion == totQuestion){
        container.style.visibility = 'hidden';
        resultCont.style.visibility = 'visible';
        resultCont.textContent = 'Your Score ' + score;
        // finishQuestion
        if ( score >= 100 ){
            resultCont.textContent = 'Your Score ' + score + '. You Are Legend Fan!!';
        
        }
        else if ( score > 50 ){
            resultCont.textContent = 'Your Score ' + score + '. Great knowledge keep it up!!';
        
        }
        if ( score <= 50 ){
            resultCont.textContent = 'Your Score ' + score + '. You still young keep learning!!!';
        
        }

        
        return;
    }
    loadQuestion(currentQuestion);


  
}
loadQuestion(currentQuestion)



