function validate(event) {
  event.preventDefault(); // Prevent form submission if validation fails

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const projectInput = document.getElementById("project");
  const messageInput = document.getElementById("message");

  if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || projectInput.value.trim() === "" || messageInput.value.trim() === "" ) {
    // Empty field(s) found, show toast message
    showToast("Please fill in all fields");
  } else {
    // Form is valid, submit it
    showToast("Thank you for connecting. \n I will get back to you shortly...");
    document.getElementById("myForm").submit();
  }
}

function showToast(message) {
  // Display toast message using a library like Toastify
  Toastify({
    text: message,
    duration: 3000,
    close: true,
    stopOnFocus: true,
    gravity: "top", // Display at the top of the page
    position: "right", // Center horizontally
    backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)", // Custom background color
    style: {
              width: "30rem"
            },
  }).showToast();
}



// toggle Menu and Scroll Top Button
$(document).ready(function () {

  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', function () {

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click', function (e) {

    e.preventDefault();

    $('html, body').animate({

      scrollTop: $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });
});

