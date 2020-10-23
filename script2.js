var questionObject = [
    {question:"Commonly use data type Do Not Include", 
    choices: ["Strings", "Booleans","Alerts","Numbers"] , 
    answer: "Alerts"},
    {question:"The condition in an if / else statement is eclosed within __.:", 
    choices: ["quotes", "curlybraces","parenthises","square Brackets"] , 
    answer: "parenthises"},
    {question:"Arrays on JavaScript can be used to store ___.", 
    choices: ["numbers and strings", "others arrays","booleans","all of the above"] , 
    answer: "parenthises"},
    {question:"String values must be closed within when being assigned to a veriables. ", 
    choices: ["commas", "curlybraces","quotes","parenthises"] , 
    answer: "parenthises"},
    {question:"String values must be closed within when being assigned to a veriables. ", 
    choices: ["JavaScript", "git terminal","for loops","consol.log"] , 
    answer: "console.log"}
];

var currentQuestionIndex = 0;
var currentAnswer = 0;
var currentHighScore = 0;
var amountofQuestions = questionObject.length;

var buttonArray = new Array();


console.log(amountofQuestions);

document.getElementById("startButton").addEventListener("click", function(event){

        event.preventDefault();
    
       document.getElementById("startButton").setAttribute('class','hide');
       document.getElementById("instructions").setAttribute('class','hide');
       document.getElementById("questionText").setAttribute('class',"");
        $('#startButton').hide();
        $('#instructions').hide();
        // $('#instructions').attr('class',"hide");
        // $('#questionsText').attr('class',"");
        
        
        getQuestions();
        currentQuestionIndex++;
        
});

function getQuestions(){

    var questionGoingToBeAsked = $('#questionText');
    console.log(questionObject[currentQuestionIndex].question);
    var currentQuestionObj = questionObject[currentQuestionIndex];
    questionGoingToBeAsked.text(questionObject[currentQuestionIndex].question + ": ");
    console.log(buttonArray);
    if(buttonArray.length >0){
        //We know there's something in the array
        console.log("Buttons are already populated");
            for(var choice in currentQuestionObj.choices){
                var currentPossibleAnswer = currentQuestionObj.choices[choice];
                buttonArray[choice].textContent = currentPossibleAnswer;
                
            }
    


    }else {
        //Start the array
        for(var choice in currentQuestionObj.choices){
            var currentPossibleAnswer = currentQuestionObj.choices[choice];
           // var possibleAnswerListEl = document.getElementById("possibleAnswerList");
    
            var btn = document.createElement("button");
            btn.classList.add("option-button");
            btn.setAttribute('choice', choice);
           // var t = document.createTextNode(currentPossibleAnswer);
           var t = currentPossibleAnswer;

            btn.addEventListener('click', function(){
                currentQuestionIndex++;
                if(currentQuestionIndex<amountofQuestions){
                    getQuestions();
                }else {
                    console.log(currentQuestionIndex);
                    console.log("Reached the last question");
                    populateBanner();
                }
                
            });

            //btn.appendChild(t);
            btn.textContent = t;
            buttonArray[choice] = btn;
        }
    
         for(var i in buttonArray){
             document.body.appendChild(buttonArray[i]);
        }

    }


    function populateBanner(){
        $('#questionText').text("Here are your results:  ");
        $('.option-button').hide();

        //Create a text that provides the score.
        //getScore();
    }

    function getScore(){
        //This function will get the points addup from all the correct ones.
        //We'll give the user 5 seconds per question, for each second in the timer after a correct answer the user will get an additional 0.2 points, 
    }


}
