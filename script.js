// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//form contact

const appointmentForm = document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", function(event) {
    // Prevent form submission
    event.preventDefault();

    // Validate form input
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    let error = false;

    if (!nameInput.value) {
        document.getElementById("nameError").textContent = "Name is required";
        error = true;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    if (!emailInput.value) {
        document.getElementById("emailError").textContent = "Email is required";
        error = true;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (!phoneInput.value) {
        document.getElementById("phoneError").textContent = "Phone number is required";
        error = true;
    } else {
        document.getElementById("phoneError").textContent = "";
    }

    if (!error) {
        // Redirect to confirmation page if there are no errors
        window.location.href = "confirmation.html";
    }
});


 $(document).ready(function(){
    $('.reviews-carousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      adaptiveHeight: true
    });
  });