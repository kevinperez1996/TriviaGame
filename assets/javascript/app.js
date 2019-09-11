







//--------------------QUESTIONS--------------------
var questions = ["Which car manufacturer is from Germany?", `What car manufacturer's slogan is "The ultimate driving machine"?`, "Which car manufacturer is from France?",
    "What car manufacturer currently holds the top speed record?"];

//-------QUESTIONS-------//

$("#question1").text(questions[0]);

$("#question2").text(questions[1]);

$("#question3").text(questions[2]);

$("#question4").text(questions[3]);



$("#submit").on("click", function(event){
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    
    //Answer Key/Checker

    var a1 = document.trivia.q1.value
    var a2 = document.trivia.q2.value
    var a3 = document.trivia.q3.value
    var a4 = document.trivia.q4.value

    event.preventDefault();
    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);
    
    if (a1 === "Audi") {
        correct++;
    }
    if (a2 === "BMW") {
        correct++;
    }
    if (a3 === "Peugeot") {
        correct++;
    }
    if (a4 === "Bugatti") {
        correct++;
    }
    console.log(correct);


    
});













//----------------COUNTER----------------------//
//Variables to hold values for countdown timer
var timeKeep;
var time = 30;
var countingDown = false;
$("#clock").text(time);

function clockReset() {
    time = 31;
};

//Function to start the clock 
function clockStart() {
    if (!countingDown) {
        timeKeep = setInterval(count, 1000);
        countingDown = true;
    }

};

function count() {
    time--;
    if (time === 0) {
        stop();
    }

    $("#clock").text(time);
};
function stop() {
    clearInterval(timeKeep);
};
//clockStart();

$("#begin").on("click", clockStart());
