
$(document).ready(function () {
    clockStop();
    //--------------------QUESTIONS--------------------//
    var questions = ["Which car manufacturer is from Germany?", `What car manufacturer's slogan is "The ultimate driving machine"?`, "Which car manufacturer is from France?",
        "What car manufacturer currently holds the top speed record?", "What car manufacturer has a prancing horse as its logo?", "What car brand is the luxury division of Honda?",
    ];

    //-------QUESTIONS-------//

    $("#question1").text(questions[0]);

    $("#question2").text(questions[1]);

    $("#question3").text(questions[2]);

    $("#question4").text(questions[3]);

    $("#question5").text(questions[4]);

    $("#question6").text(questions[5]);


    var correct = 0;

    function checker() {
        var a1 = document.trivia.q1.value
        var a2 = document.trivia.q2.value
        var a3 = document.trivia.q3.value
        var a4 = document.trivia.q4.value
        var a5 = document.trivia.q5.value
        var a6 = document.trivia.q6.value

        //console.log(a1);
        //console.log(a2);
        //console.log(a3);
        //console.log(a4);

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

        if (correct <= 1) {
            imageURL = "https://media.giphy.com/media/jUwpNzg9IcyrK/giphy.gif";
        }
        else if (correct <= 2) {
            imageURL = "https://media.giphy.com/media/9xijGdDIMovchalhxN/giphy.gif";
        }
        else if (correct <= 3) {
            imageURL = "https://media.giphy.com/media/Lcn0yF1RcLANG/giphy.gif";
        }
        else if (correct = 4) {
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
        time = 10;
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
