document.addEventListener('DOMContentLoaded', function() {
  // Button elements
  const loginButton = document.querySelector('.btn2');
  const signUpButton = document.querySelector('.btn1.signup');
  const bookNowButton = document.querySelector('.btn1.book');
  const playVideoButton = document.querySelector('.play');
  const findDoctorButton = document.querySelector('.callToAction .bestDoctors .btn1');
  const bookAppointmentButton = document.querySelector('.callToAction .onlineCare .btn1');
  const submitHereButton = document.querySelector('.registerCta .btn1');

  // Add event listeners for the buttons
  if (loginButton) {
    loginButton.addEventListener('click', () => {
      alert('Login button clicked!');
    });
  }

  if (signUpButton) {
    signUpButton.addEventListener('click', () => {
      alert('Sign Up button clicked!');
    });
  }

  if (bookNowButton) {
    bookNowButton.addEventListener('click', () => {
      alert('Book Now button clicked!');
    });
  }

  if (playVideoButton) {
    playVideoButton.addEventListener('click', () => {
      alert('Play Video button clicked!');
      // Optionally, you could trigger video playback here
    });
  }

  if (findDoctorButton) {
    findDoctorButton.addEventListener('click', () => {
      alert('Find Doctor Now button clicked!');
    });
  }

  if (bookAppointmentButton) {
    bookAppointmentButton.addEventListener('click', () => {
      alert('Book Appointment button clicked!');
    });
  }

  if (submitHereButton) {
    submitHereButton.addEventListener('click', () => {
      alert('Submit Here button clicked!');
    });
  }

  // Handle navigation link clicks
  const navLinks = document.querySelectorAll('#navbar ul li');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
