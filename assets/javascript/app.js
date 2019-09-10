







//--------------------QUESTIONS--------------------
var questions = ["Which car manufacturer is from Germany?", "What is the slogan for BMW?", "Which was the first American auto manufacturer?"]
//Choose a random
//var randQuestion = Math.floor(Math.random ()* questions.length);




var wins = 0;
var losses = 0;

//-------Q1-------
function firstQest() {

    $("#question").text(questions[0]);
    $("#C1").text("Ford");
    $("#C2").text("Cadilac");
    $("#C3").text("Toyota");
    $("#C4").text("BMW");

    $("#C1, #C2, #C3").on("click", function () {
        losses++;
        alert ("L");
        
    });

    $("#C4").on("click", function () {
        wins++;
        alert ("W");
        secondQuest();
        
    });
  
};
console.log(wins);
firstQest();

function secondQuest() {
    $("#question").text(questions[1]);
    $("#C1").text("Drive Fast");
    $("#C2").text("Ultimate driving Machine");
    $("#C3").text("Lets go Places");
    $("#C4").text("Drive further");

    $("#C1, #C3, #C4").on("click", function () {
        alert("YOu Loose");
    });

    $("#C2").on("click", function () {
        alert("YOu Winn");
        secondQuest();
    });
};

function thristQuest() {

    $("#question").text(questions[2]);

};











//----------------COUNTER---------------------------
//Variables to hold values for countdown timer
var timeKeep;
var time = 30;
var countingDown = false;
$("#clock").text(time);

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
}

clockStart();