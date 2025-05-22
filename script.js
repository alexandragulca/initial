document.addEventListener('DOMContentLoaded', function() {
  // Testimonial Slider Functionality
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;

  function showTestimonial(index) {
    // Hide all testimonials
    testimonialCards.forEach(card => {
      card.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    
    // Show the selected testimonial and activate corresponding dot
    testimonialCards[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
  }

  // Event listeners for dots
  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      const index = parseInt(this.getAttribute('data-index'));
      showTestimonial(index);
    });
  });

  // Event listeners for prev/next buttons
  prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentIndex);
  });

  nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % testimonialCards.length;
    showTestimonial(currentIndex);
  });

  // Auto-rotate testimonials every 5 seconds
  setInterval(function() {
    currentIndex = (currentIndex + 1) % testimonialCards.length;
    showTestimonial(currentIndex);
  }, 5000);

  // Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // In a real application, you would send this data to a server
      // Since we're working without a backend, we'll just show a success message
      
      // Create success message
      const successMessage = document.createElement('div');
      successMessage.className = 'success-message';
      successMessage.innerHTML = `
        <h3>Thank you for your message, ${name}!</h3>
        <p>I'll get back to you as soon as possible.</p>
      `;
      successMessage.style.padding = '20px';
      successMessage.style.backgroundColor = '#e8f5e9';
      successMessage.style.color = '#2e7d32';
      successMessage.style.borderRadius = '5px';
      successMessage.style.marginTop = '20px';
      
      // Replace form with success message
      contactForm.innerHTML = '';
      contactForm.appendChild(successMessage);
      
      // Log the form data to console (for demonstration)
      console.log({
        name,
        email,
        subject,
        message
      });
    });
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('header nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId.startsWith('#')) {
        e.preventDefault();
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
      header.style.padding = '10px 0';
    } else {
      header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
      header.style.padding = '15px 0';
    }
  });
});
