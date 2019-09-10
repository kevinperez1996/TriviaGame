







//--------------------QUESTIONS--------------------
var questions = ["Which car manufacturer is from Germany?", "What is the slogan for BMW?", "Which was the first American auto manufacturer?"]

for (var i = 0; i < questions.length; i++){
    $("#question").text(questions[i]);
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
    if (time === 0){
        stop();
    }

    $("#clock").text(time);
};
function stop (){
    clearInterval(timeKeep);
}

clockStart();