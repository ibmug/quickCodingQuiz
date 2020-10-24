var questionObject = [
    {question:"Commonly use data type Do Not Include", 
    choices: ["Strings", "Booleans","Alerts","Numbers"] , 
    answer: 2},//Position of where the correct answer is in the array
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
        
});

function getQuestions(){

    var questionGoingToBeAsked = $('#questionText');
    console.log(questionObject[currentQuestionIndex].question);
    var currentQuestionObj = questionObject[currentQuestionIndex];
    questionGoingToBeAsked.text(questionObject[currentQuestionIndex].question + ": ");
    console.log(buttonArray);
    if(buttonArray.length >0){
        //We know there's something in the array
        //console.log("Buttons are already populated");
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
                        console.log("Answer is the same as this button");
                        score+=10;
                    }
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


}
