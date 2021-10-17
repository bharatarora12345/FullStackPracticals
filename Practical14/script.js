var count = 0;
var counter = document.getElementById("counter");
var negative = document.getElementById("negative");
var positive = document.getElementById("positive");

positive.addEventListener("click", function() {
    count = count + 1;
    counter.innerHTML = count;
    disablebutton();
})
negative.addEventListener("click", function() {
    if (count > 0) {
        count = count - 1;
        counter.innerHTML = count;
    }
    if (count == 0) {
        disablebutton();
    }
})

function disablebutton() {
    negative.disabled = false;
    if (count == 0) {
        negative.disabled = true;
    }
}