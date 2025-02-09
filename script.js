// script.js

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Get form data
  const formData = new FormData(event.target);

  // Process form data (e.g., send to server)
  fetch('/submit', {
    method: 'POST',
    body: formData,
  })
  .then(response => {
    if (response.ok) {
      // Handle successful submission (e.g., display a success message)
      console.log('Form submitted successfully!');
    } else {
      // Handle submission error (e.g., display an error message)
      console.error('Error submitting form!');
    }
  })
  .catch(error => {
    console.error('Error submitting form:', error);
  });
}

// Attach event listener to form
const form = document.getElementById('my-form');
if (form) {
  form.addEventListener('submit', handleSubmit);
}

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
      item.addEventListener('click', function() {
          const page = this.getAttribute('data-page');
          window.location.href = `${page}.html`;
      });
  });

  // Set active state based on current page
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
  navItems.forEach(item => {
      if (item.getAttribute('data-page') === currentPage) {
          item.classList.add('active');
      } else {
          item.classList.remove('active');
      }
  });
});