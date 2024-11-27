function showAbout() {
    var aboutSection = document.getElementById("about");
    if (aboutSection.classList.contains("hidden")) {
        aboutSection.classList.remove("hidden");
        startSlideShow();
    } else {
        aboutSection.classList.add("hidden");
    }
}

var slideIndex = 0;
function startSlideShow() {
    var slides = document.getElementsByClassName("mySlides");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(startSlideShow, 2000); // Change image every 2 seconds
}
