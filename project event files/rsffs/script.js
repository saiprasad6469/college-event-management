document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const event = document.getElementById('event').value;

    if (!name || !email || !phone || !event) {
        alert('Please fill in all fields.');
        return;
    }

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simple phone number validation
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    // Success message
    alert(Thank you, ${name}! You have successfully registered for the ${event}.);
    
    // Reset the form
    this.reset();
});