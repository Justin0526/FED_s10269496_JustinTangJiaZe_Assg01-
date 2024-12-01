// -------------------- Not Home Page -------------------- //
document.addEventListener("DOMContentLoaded", function() {
  // Check if the body has an id of 'homePage'
  if (document.body.id !== "homePage") {
    console.log("Slideshow script skipped for this page.");

    // Select all elements with the class 'HomeLink'
    const HomeURL = document.querySelectorAll(".HomeLink");

    HomeURL.forEach(function(homeLink){
      // Set the href attribute of each 'HomeLink' to the specified Home URL
      homeLink.setAttribute("href", "http://127.0.0.1:5501/index.html");
    })
    return;
  }
  
  // ----- Slideshow ----- //
  // Initialize the slide index to 1 (first slide)
  let slideNum = 1;

  // Call the showSlides function to display the first slide
  showSlides(slideNum);

  // Function to change slides by a given number 'n' (next or previous)
  window.plusSlides = function(n) {
    showSlides(slideNum += n);
  }
  
  // Function to set the current slide based on a specific index 'n'
  window.currentSlide = function(n) {
    showSlides(slideNum = n);
  }

  // Function to display the slide corresponding to the current 'slideNum'
  function showSlides(n) {
    let num;

    // Get all elements with the class 'mySlides' (all slides)
    let slides = document.getElementsByClassName("mySlides");

    // Get all elements with the class 'dot' (navigation dots)
    let dots = document.getElementsByClassName("dot");

    // If the slide index is greater than the number of slides, reset it to 1
    if (n > slides.length) {
      slideNum = 1;
    } 
    // If the slide index is less than 1, set it to the last slide   
    if (n < 1) {
      slideNum = slides.length;
    }

    // Hide all slides by setting their display to "none"
    for (num = 0; num < slides.length; num++) {
      slides[num].style.display = "none";  
    }

    // Remove the "active" class from all dots (used for navigation highlight)
    for (num = 0; num < dots.length; num++) {
      dots[num].className = dots[num].className.replace(" active", "");
    }

    // Display the current slide by setting its display to "block"
    slides[slideNum-1].style.display = "block";  

    // Add the "active" class to the dot corresponding to the current slide
    dots[slideNum-1].className += " active";
  };
  
});

// -------------------- Is LTSkidsPage -------------------- //
document.addEventListener("DOMContentLoaded", function(){
  if (document.body.id !== "LTSkidsPage"){
    // Check if the body has an id of 'LTSkidsPage'
    console.log("No registration form here!");
    const KidsURL = document.querySelectorAll(".child");

    // Select all elements with the class 'child'
    KidsURL.forEach(function(kidsLink){
      // Set the href attribute of each 'child' to the specified Kids URL
      kidsLink.setAttribute("href", "http://127.0.0.1:5501/LTSkids.html");
    })
    return;
  }
  function GoToRegister(){
    //Get the element with the id 'signupForm'
    const formSection = document.getElementById('SignUpForms');

    // Scroll to the form section smoothly
    formSection.scrollIntoView({behavior: 'smooth'});
  }

  // add event listener
  const registerButton = document.querySelector(".register");

  if (registerButton){
    registerButton.addEventListener("click", GoToRegister);
  }
})

// -------------------- Not Program Page -------------------- //
document.addEventListener("DOMContentLoaded", function(){
  // Check if the body has an id of 'programPage'
  if (document.body.id === "programPage"){
    return;
  }
  // Select all elements with the class 'programLink'
  const ProgramURL = document.querySelectorAll(".programLink");

  // Iterate through each 'programLink' element
  ProgramURL.forEach(function(programLink){
    // Set the href attribute of each 'programLink' to the specified ProgramPage URL
    programLink.setAttribute("href","http://127.0.0.1:5501/ProgramPage.html");
  })
})

// -------------------- Submit successful message for Home Page and LTSkidsPage -------------------- //
// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function(){
  // Check if the body has an id of 'homePage' and 'LTSkidsPage', otherwise exit
  if (document.body.id !== "homePage" && document.body.id !== "LTSkidsPage"){
    console.log("No form in this page");
    return;
  }

  // Determine which form to select based on the body id
  const formId = (document.body.id === "homePage") ? "contactForm" : "RegistrationForm";

  // Get the form element by its ID
  const form = document.getElementById(formId);

  // Get the modal and the close button elements
  const modal = document.getElementById('successModal');
  const closeButton = document.querySelector('.close-button');

  // Add an event listener to handle form submission
  form.addEventListener('submit', function (event) {
      event.preventDefault();  // Prevent form from submitting normally
      modal.style.display = 'flex';  // Show the success modal
      this.reset();  // reset the form
  });

  // Add an event listener to close the modal when the close button is clicked
  closeButton.addEventListener('click', function () {
      modal.style.display = 'none';  // Hide the modal when the close button is clicked
  });

  // Close the modal if the user clicks outside the modal content
  window.addEventListener('click', function (event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });
})

// ---- Scroll Progress bar ---- // 
// When the user scrolls, call both the scroll function and update the progress bar
window.onscroll = function() {
  scrollFunction();
  updateProgressBar();};

// Get the progress bar element
let progress = document.getElementById('progressbar');

// Calculate the total scrollable height (entire document height - visible window height)
let totalHeight = document.body.scrollHeight - window.innerHeight;

// Get the 'Back to Top' button element
let mybutton = document.getElementById("BckToTopButn");

// ---- Back to Top Button ---- //
function scrollFunction() {
  // When the user scrolls down 30px from the top of the document, show the button
  if ( document.documentElement.scrollTop > 30 || document.body.scrollTop > 30) {
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
   // Calculate the scroll percentage based on the current scroll position
  let progressHeight = (window.pageYOffset / totalHeight) * 100;

  // Set the height of the progress bar based on the calculated percentage
  progress.style.height = progressHeight + "%"
}

// Get elements
let searchIcon = document.getElementById('searchIcon');
let searchBar = document.getElementById('searchBar');
let menuIcon = document.getElementById('menuIcon');

// Add click event listener to the search icon
searchIcon.addEventListener('click', function() {
    // Toggle visibility of the search bar
    event.stopPropagation(); // Prevent click from propagating to the document

    // Check if the search bar is hidden or not
    if (searchBar.style.display === "none" || searchBar.style.display === "") {
       // If hidden, show the search bar and hide the search and menu icons
        searchBar.style.display = "block";
        menuIcon.style.display = "none";
        searchIcon.style.display = "none";
        searchBar.focus(); // Automatically focus on the search bar
    } else {
      // If visible, hide the search bar
        searchBar.style.display = "none";
    }
});

// Add click event listener to close the search bar when clicking outside of it
document.addEventListener('click', function(event){
  if(!searchBar.contains(event.target) && event.target !==searchIcon){
    // Hide the search bar and restore visibility of the icons
    searchBar.style.display = "none";
    menuIcon.style.display = "block";
    searchIcon.style.display = "block";
  }
})

// Get the body element
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
