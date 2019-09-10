

var timeKeep;
var time = 30;
var countingDown = false;
$("#clock").text(time);


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