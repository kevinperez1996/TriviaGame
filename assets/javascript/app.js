
$(document).ready(function () {
    clockStop();
    //--------------------QUESTIONS--------------------//
    var questions = [
        "Which car manufacturer is from Germany?",
        `What car manufacturer's slogan is "The ultimate driving machine"?`,
        "Which car manufacturer is from France?",
        "What car manufacturer currently holds the top speed world record?",
        "Which of the following car manufacturers have a prancing horse as their logo?",
        "What car manufacturer is the luxury division of Honda?",
        'What car manufacturer has specific models named "Ghost" and "Phantom"?',
        'What country does "Land Rover" originate from?',
        "What super car sat the driver in the middle and a passanger on either side?",
        'What car manufacturer currently owns "Audi", "Porsche", "Lamborghini" and "Bugatti"?'
    
    ];

    //-------QUESTIONS-------//

    $("#question1").text(questions[0]);
    $("#question2").text(questions[1]);
    $("#question3").text(questions[2]);
    $("#question4").text(questions[3]);
    $("#question5").text(questions[4]);
    $("#question6").text(questions[5]);
    $("#question7").text(questions[6]);
    $("#question8").text(questions[7]);
    $("#question9").text(questions[8]);
    $("#question10").text(questions[9]);


    var correct = 0;

    function checker() {
        var a1 = document.trivia.q1.value
        var a2 = document.trivia.q2.value
        var a3 = document.trivia.q3.value
        var a4 = document.trivia.q4.value
        var a5 = document.trivia.q5.value
        var a6 = document.trivia.q6.value
        var a7 = document.trivia.q7.value
        var a8 = document.trivia.q8.value
        var a9 = document.trivia.q9.value
        var a10 = document.trivia.q10.value


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
        if (a5 === "Ferrari") {
            correct++;
        }
        if (a6 === "Acura") {
            correct++;
        }
        if (a7 === "RollsRoyce") {
            correct++;
        }
        if (a8 === "England") {
            correct++;
        }
        if (a9 === "McLarenF1") {
            correct++;
        }
        if (a10 === "Volkswagen") {
            correct++;
        }
    };

    $("#submit").on("click", function (event) {

        event.preventDefault();
        $("#smallContainer").hide();
        clockStop();
        checker();
        gameOver();

    });


    //---------------GAMEOVER--------------------//

    function gameOver() {
        var imageURL;

        if (correct <= 3) {
            imageURL = "https://media.giphy.com/media/jUwpNzg9IcyrK/giphy.gif";
        }
        else if (correct <= 6) {
            imageURL = "https://media.giphy.com/media/9xijGdDIMovchalhxN/giphy.gif";
        }
        else if (correct <= 9) {
            imageURL = "https://media.giphy.com/media/Lcn0yF1RcLANG/giphy.gif";
        }
        else if (correct = 10) {
            imageURL = "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif";
        }

        $("#allDone").text("ALL DONE!!");
        $("#pointCounter").text("You got " + correct + " of the 10 questions correct.");
        $("#doneImg").prepend($("<img>").attr("src", imageURL));


    };

    $("#start").on("click", function () {
        $("#smallContainer").show();
        $("#start").hide();
        clockStart();
    })



    //----------------COUNTER----------------------//
    //Variables to hold values for countdown timer
    var timeKeep;
    var time;
    var countingDown = false;



    //Function to start the clock 
    function clockStart() {
        time = 60;
        if (!countingDown) {
            timeKeep = setInterval(count, 1000);
            countingDown = true;
        }

    };

    function count() {
        time--;
        if (time === 0) {
            $("#smallContainer").hide();
            clockStop();
            checker();
            gameOver();
        }
        $("#clock").text(time);
    };

    function clockStop() {
        clearInterval(timeKeep);
        countingDown = false;
    };
});
