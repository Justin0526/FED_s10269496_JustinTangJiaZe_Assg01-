
document.addEventListener("DOMContentLoaded", function() {
  if (document.body.id !== "homePage") {
    console.log("Slideshow script skipped for this page.");
    return;
  }
  
  // Slideshow logic here...
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }

});



let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {
  scrollFunction();
  updateProgressBar();};

// Back to Top Button 
function scrollFunction() {
  // When the user scrolls down 20px from the top of the document, show the button
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//progress bar
function updateProgressBar(){
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%"
}