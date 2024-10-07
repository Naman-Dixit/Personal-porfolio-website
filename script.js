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

//javascript mail function
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const btn = document.querySelector(".send-btn"); // Reference the send button
    btn.innerHTML = "Sending..."; // Change button text to "Sending..."
  
    const serviceID = "service_ajvq5ti"; // Your service ID
    const templateID = "template_klvy2ir"; // Your template ID
  
    // Send the form using EmailJS
    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.innerHTML = "Send Message"; // Reset button text after success
        alert("Email sent successfully!"); // Success message
        document.getElementById("contact-form").reset(); // Clear the form after sending
      },
      (err) => {
        btn.innerHTML = "Send Message"; // Reset button text in case of error
        alert("Failed to send email. Error: " + JSON.stringify(err)); // Show error message
      }
    );
  });
  