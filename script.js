document.addEventListener("DOMContentLoaded", function() {
  if (document.body.id !== "homePage") {
    console.log("Slideshow script skipped for this page.");
    return;
  }
  
  // Slideshow logic here...
  let slideIndex = 1;
  showSlides(slideIndex);

  window.plusSlides = function(n) {
    showSlides(slideIndex += n);
  }

  window.currentSlide = function(n) {
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


// Get elements
let searchIcon = document.getElementById('searchIcon');
let searchBar = document.getElementById('searchBar');
let menuIcon = document.getElementById('menuIcon');

// Add click event listener to the search icon
searchIcon.addEventListener('click', function() {
    // Toggle visibility of the search bar
    event.stopPropagation();

    if (searchBar.style.display === "none" || searchBar.style.display === "") {
        searchBar.style.display = "block";
        menuIcon.style.display = "none";
        searchIcon.style.display = "none";
        searchBar.focus(); // Automatically focus on the search bar
    } else {
        searchBar.style.display = "none";
    }
});

document.addEventListener('click', function(event){
  if(!searchBar.contains(event.target) && event.target !==searchIcon){
    searchBar.style.display = "none";
    menuIcon.style.display = "block";
    searchIcon.style.display = "block";
  }
})

let body = document.body;

// When the user clicks the menu icon, toggle the visibility of the navbar
menuIcon.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    body.classList.toggle('menu-open'); // Toggle the "menu-open" class to show/hide the menu
});

// Close the menu if the user clicks anywhere outside the menu or menu icon
document.addEventListener('click', function(event) {
    if (!document.querySelector('.menuBtn').contains(event.target) && !menuIcon.contains(event.target)) {
        body.classList.remove('menu-open'); // Close the menu if the click is outside the menu
    }
});
