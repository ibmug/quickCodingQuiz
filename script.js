// has to have.
// option to view high score 
// timer cound down 
// Title:
// Coding quiz Challenge 
// Try to answer the following code-related questions within the time
// limit. Keep in mind that incorrect answers will penalized your scoretime
// by ten seconds 
// show final score 
// and input for initials submit button 
// show high score with initails 
// with  able to clear and go back ​

var questions = [
    {ask:"Commonly use data type Do Not Include:", 
    choices: ["Strings", "Booleans","Alerts","Numbers"] , 
    answersToQuestions: "Alerts"},
    {ask:"The condition in an if / else statement is eclosed within __.:", 
    choices: ["quotes", "curlybraces","parenthises","square Brackets"] , 
    answersToQuestions: "parenthises"},
    {ask:"Arrays on JavaScript can be used to store ___.", 
    choices: ["numbers and strings", "others arrays","booleans","all of the above"] , 
    answersToQuestions: "parenthises"},
    {ask:"String values must be closed within when being assigned to a veriables. ", 
    choices: ["commas", "curlybraces","quotes","parenthises"] , 
    answersToQuestions: "parenthises"},
    {ask:"String values must be closed within when being assigned to a veriables. ", 
    choices: ["JavaScript", "git terminal","for loops","consol.log"] , 
    answersToQuestions: "consol.log"}
];
var currentQuestionIndex = 0;
var currentAnswer = 0;
var CurrentHighScore =0 ;​
document.getElementById("startButton").addEventListener("click", function(event){    event.preventDefault();
// need to add timer
// setTimeout(timeRanOut, 5000);​
document.getElementById("startButton").setAttribute("class", "hide")
document.getElementById("instructions").setAttribute("class", "hide")
document.getElementById("questionsText").setAttribute("class", "")

getQuestions();

});
​
function getQuestions (){

    var questionGoingToBeAsked = document.getElementById("questionsText");
    var currentQuestion = questions[currentQuestionIndex];

    questionGoingToBeAsked.textContent = currentQuestion.ask;

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var currentPossiableAnswer = currentQuestion.choices[i];
        
        var possibleAnswersListEl = document.getElementById("possibleAnswersList")
        var liEl = document.createElement("li")
        var buttonEl = document.createElement("button");
        buttonEl.textContent = currentPossiableAnswer;
        possibleAnswersListEl.appendChild(liEl);
        liEl.appendChild(buttonEl);
    
​
buttonEl.addEventListener("click", function (event) {
    event.preventDefault()
​
    if (currentPossiableAnswer !== currentQuestion.ask,2) {
        alert("wrong")
        console.log(buttonEl)
        console.log(currentQuestion.choices,1)
    }
    
})
        // var getAnswers = questions[currentAnswer];
        // liEl.textContent = getAnswers.choices;
        // KNOW To know when user click event.listener for each button 
        // console.log(currentQuestion)
        // console.log(possibleAnswersListEl)
        // console.log(currentQuestion.choices,i)
    
    };
};
    
