// global variable

var imgCnt = 7;
var imgWidth = 300;
var lastImgPos = -((imgCnt - 1) * imgWidth);
var currentPosition = 0;

var nextImage = function() {
    if (currentPosition === lastImgPos ) { 
        return; 
    }
    //console.log("i work");
    currentPosition = currentPosition - imgWidth;
    showCurrentPositionValue();
    //document.getElementById('imageSliderJS').style.transform = 'translateX(' + currentPosition + 'px)';
    document.getElementById('imageSliderJS').style.transform = `translateX(${currentPosition}px)`;
}

var prevImage = function() {
    if (currentPosition === 0 ) { 
        return; 
    }
    currentPosition = currentPosition + imgWidth;
    showCurrentPositionValue();
    document.getElementById('imageSliderJS').style.transform = 'translateX(' + currentPosition + 'px)';
}

function showCurrentPositionValue() {
    // document.getElementById("currPosValue").innerHTML = currentPosition;
}