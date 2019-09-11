







//--------------------QUESTIONS--------------------
var questions = ["Which car manufacturer is from Germany?", "What is the slogan for BMW?", "Which was the first American auto manufacturer?",
    "What car manufacturer currently holds the top speed record?"];
var wins = 0;
var losses = 0;
var q1 = $("#c11").val();

//-------QUESTIONS-------//

$("#question1").text(questions[0]);

$("#question2").text(questions[1]);

$("#question3").text(questions[2]);

$("#question4").text(questions[3]);

$("#submit").on("click", check ());


function check() {
    if (q1 === "ford") {
        wins++;
        console.log(wins);
    }

}














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
clockStart();

//$("#begin").on("click", clockStart());
