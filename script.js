document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  // Smooth scrolling
  navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);

          window.scrollTo({
              top: targetSection.offsetTop - 50, // Adjust based on nav height
              behavior: 'smooth'
          });
      });
  });

  // Highlight active link
  window.addEventListener('scroll', function() {
      let currentSection = '';

      sections.forEach(section => {
          const sectionTop = section.offsetTop - 60; // Adjust based on nav height
          if (pageYOffset >= sectionTop) {
              currentSection = section.getAttribute('id');
          }
      });

      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === currentSection) {
              link.classList.add('active');
          }
      });
  });
});

// Initialize EmailJS (Make sure script is included in HTML)
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("WWVCqQyS1QwCDNMkx"); // Your User ID

  document.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
          alert("Please fill in all fields before submitting.");
          return;
      }

      // Prepare the EmailJS parameters
      const templateParams = {
          user_name: name,
          user_email: email,
          user_message: message
      };

      // Debugging: Log to console before sending
      console.log("Sending email with params:", templateParams);

      // Send email using EmailJS
      emailjs.send("service_4plpo5j", "template_lq3e7gr", templateParams)
          .then(response => {
              console.log('Email sent successfully:', response);
              alert('Thank you for your feedback! Your message has been sent.');
              document.querySelector('form').reset();
          })
          .catch(error => {
              console.error('Email sending failed:', error);
              alert('Oops! Something went wrong. Please check the console for errors.');
          });
  });
});
