var questionObject = [
    {question:"Commonly use data type Do Not Include", 
    choices: ["Strings", "Booleans","Alerts","Numbers"] , 
    answer: 2},
    {question:"What is the name of the variable that has a scope of the entire script?", 
    choices: ["World Variable", "Var","Local Variable","Global Variable"] , 
    answer: 3},
    {question:"Which of the following would check data type comparison", 
    choices: ["=", "isEqualTo()","===","type.matches"] , 
    answer: 2},
    {question:"Can you send functions as variables?", 
    choices: ["No", "Maybe","Yes","Not Sure"] , 
    answer: 2},
    {question:"What is the most popular programming language for Web Development?", 
    choices: ["Cobol", "LISP","Assemply","Javascript"] , 
    answer: 3}
];

var currentQuestionIndex = 0;
var currentAnswer = 0;
var currentHighScore = 0;
var amountofQuestions = questionObject.length;
var score = 0;

var buttonArray = new Array();


$('#timerContainer').hide();

document.getElementById("startButton").addEventListener("click", function(event){

        event.preventDefault();
    
       document.getElementById("startButton").setAttribute('class','hide');
       document.getElementById("instructions").setAttribute('class','hide');
       document.getElementById("questionText").setAttribute('class',"");
        $('#startButton').hide();
        $('#instructions').hide();
        $('#timerContainer').show();

     
        
        
        getQuestions();
        startTimer();
        
});

function getQuestions(){

    var questionGoingToBeAsked = $('#questionText');
    console.log(questionObject[currentQuestionIndex].question);
    var currentQuestionObj = questionObject[currentQuestionIndex];
    questionGoingToBeAsked.text(questionObject[currentQuestionIndex].question + ": ");
    console.log(buttonArray);
    if(buttonArray.length >0){
        
            for(var choice in currentQuestionObj.choices){
                var currentPossibleAnswer = currentQuestionObj.choices[choice];
                buttonArray[choice].textContent = currentPossibleAnswer;
                buttonArray[choice].setAttribute("answer", currentQuestionObj.answer);
                buttonArray[choice].setAttribute("id", choice);
            }
    }else {
        //Start the array
        for(var choice in currentQuestionObj.choices){
            var currentPossibleAnswer = currentQuestionObj.choices[choice];
            var btn = document.createElement("button");
            btn.classList.add("option-button");
            btn.setAttribute("answer", currentQuestionObj.answer);
            btn.setAttribute("id", choice);
           var t = currentPossibleAnswer;

            btn.addEventListener('click', function(){
                currentQuestionIndex++;
                if(currentQuestionIndex<amountofQuestions){
                    if(this.getAttribute('answer') == this.getAttribute('id')){
                        console.log("Answer is the same as this button");
                        score+=10;
                    }

                    getQuestions();
                }else{
                    if(this.getAttribute('answer') == this.getAttribute('id')){
                        
                        score+=10;
                    }
                   
                    
                    populateBanner();
                }
                
            });

            //btn.appendChild(t);
            btn.textContent = t;
            buttonArray[choice] = btn;
        }
        //var answerList = $('possibleAnswerList');
        var answerList = document.getElementById('possibleAnswerList');
         for(var i in buttonArray){
             answerList.appendChild(buttonArray[i]);
        }

    }


    function populateBanner(){
        $('.option-button').hide();
        $('#questionText').text("Here are your results:  ");

        var scoreDiv = $('<div>');
        scoreDiv.text(score);
        $('#gameContainer').append(scoreDiv);
        

        //Create a text that provides the score.
        //getScore();
    }

    function getScore(){
        //This function will get the points addup from all the correct ones.
        //We'll give the user 5 seconds per question, for each second in the timer after a correct answer the user will get an additional 0.2 points, 
    }





    function getFormattedMinutes() {
        //
        var secondsLeft = totalSeconds - secondsElapsed;
      
        var minutesLeft = Math.floor(secondsLeft / 60);
      
        var formattedMinutes;
      
        if (minutesLeft < 10) {
          formattedMinutes = "0" + minutesLeft;
        } else {
          formattedMinutes = minutesLeft;
        }
      
        return formattedMinutes;
      }
      
      function getFormattedSeconds() {
        var secondsLeft = (totalSeconds - secondsElapsed) % 60;
      
        var formattedSeconds;
      
        if (secondsLeft < 10) {
          formattedSeconds = "0" + secondsLeft;
        } else {
          formattedSeconds = secondsLeft;
        }
      
        return formattedSeconds;
      }



/* This function retrieves the values from the html input elements; Sort of
   getting run in the background, it sets the totalSeconds variable which
   is used in getFormattedMinutes/Seconds() and the renderTime() function.
   It essentially resets our timer */
   function setTime() {
    var minutes;
  
    if (status === "Working") {
      minutes = workMinutesInput.value.trim();
    } else {
      minutes = restMinutesInput.value.trim();
    }
  
    clearInterval(interval);
    totalSeconds = minutes * 60;
  }

  // This function does 2 things. displays the time and checks to see if time is up.
function renderTime() {
    // When renderTime is called it sets the textContent for the timer html...
    minutesDisplay.textContent = getFormattedMinutes();
    secondsDisplay.textContent = getFormattedSeconds();
  
   // ..and then checks to see if the time has run out
    if (secondsElapsed >= totalSeconds) {
      if (status === "Working") {
        alert("Time for a break!");
      } else {
        alert("Time to get back to work!");
      }
  
      stopTimer();
    }
  }

  // This function is where the "time" aspect of the timer runs
// Notice no settings are changed other than to increment the secondsElapsed var
function startTimer() {
    setTime();
  
    // We only want to start the timer if totalSeconds is > 0
    if (totalSeconds > 0) {
      /* The "interval" variable here using "setInterval()" begins the recurring increment of the
         secondsElapsed variable which is used to check if the time is up */
        interval = setInterval(function() {
          secondsElapsed++;
  
          // So renderTime() is called here once every second.
          renderTime();
        }, 1000);
    } else {
      alert("Minutes of work/rest must be greater than 0.")
    }
  }

  function stopTimer() {
    secondsElapsed = 0;
    setTime();
    renderTime();
  }

  /* Our timer is fancy enough to handle 2 different settings at once this toggle
   function basically just specifies which of our 2 timer settings to use. */
function toggleStatus(event) {
    var checked = event.target.checked;
  
    if (checked) {
      status = "Working";
    } else {
      status = "Resting";
    }
  
    statusSpan.textContent = status;
  
    secondsElapsed = 0;
    setTime();
    renderTime();
  }
  



}
