var imgNumber = 0;

function slideshow() {
    console.log(imgNumber);
    var imgCanvas = document.getElementById('visual');
    imgNumber++;
    
    if (imgNumber <= 7) {
        imgCanvas.setAttribute('src', 'img/slideshow/' + imgNumber + '.png');
    } else {
        imgNumber = 0;
    }
    
}

setInterval(slideshow, 3000);