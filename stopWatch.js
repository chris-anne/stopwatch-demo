//global varibales:
var interval;
var started = false; //initial value
var time = 0;

//execute functions:
setUp();

//function definitions: 
function setUp() {
    document.getElementById("toggle-time").addEventListener("click", function() {
        toggleTimer();
    });
    document.getElementById("restart").addEventListener("click", function() {
        location.reload();
    });
    document.getElementById("record").addEventListener("click", function() {
        recordTime();
    });
}

function toggleTimer() {
    if (started === false) {
        interval = setInterval(function() {
            time++;
            document.getElementById("show-time").innerHTML = ((time*10)/1000).toFixed(2);
        }, 10);
        started = true;
    } else {
        clearInterval(interval);
        started = false;
    } 
}

function recordTime() {
    var timeWhenClicked = (document.getElementById("past-times").innerHTML += ((time*10)/1000).toFixed(2) + "</br>");
    return pastTimes = timeWhenClicked;
}

document.addEventListener("keydown", function() {
    switch (event.key) {
        case "s":
            toggleTimer();
            break;
        case "t":
            recordTime();
            break;
        case "r":
            location.reload();
            break;
        default:
            break;            
    }
})