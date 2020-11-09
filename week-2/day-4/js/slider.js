// global variable
var currentPosition = 0;

var nextImage = function() {
    if (currentPosition === -1800 ) { 
        return; 
    }
    currentPosition = currentPosition - 300;
    showCurrentPositionValue();
    document.getElementById('imageSliderJS').style.transform = 'translateX(' + currentPosition + 'px)';
}

var prevImage = function() {
    if (currentPosition === 0 ) { 
        return; 
    }
    currentPosition = currentPosition + 300;
    showCurrentPositionValue();
    document.getElementById('imageSliderJS').style.transform = 'translateX(' + currentPosition + 'px)';
}

function showCurrentPositionValue() {
    // document.getElementById("currPosValue").innerHTML = currentPosition;
}