function scrollToPlans() {
    var pricingSection = document.getElementById('pricing');
    pricingSection.scrollIntoView({ behavior: 'smooth' });
  }



  function validateForm() {
    // Example: Check if email and password are filled
    var email = document.getElementById('email-address').value.trim();
    var password = document.getElementById('password').value.trim();

    if (email === '' || password === '') {
      alert('Please enter both email and password.');
      return false; // Prevent form submission
    }

    // If validation passed, redirect to join.html
    
    return true; // Allow form submission
  }