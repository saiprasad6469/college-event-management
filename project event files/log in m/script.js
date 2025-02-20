const formTitle = document.getElementById('formTitle');
const formContainer = document.getElementById('formContainer');
const authForm = document.getElementById('authForm');
const codeGroup = document.getElementById('codeGroup');
const submitBtn = document.getElementById('submitBtn');
const toggleLink = document.getElementById('toggleForm');

let isRegistering = false;

// Toggle between Login and Registration form
toggleLink.addEventListener('click', () => {
    isRegistering = !isRegistering;
    if (isRegistering) {
        formTitle.textContent = 'Register';
        codeGroup.style.display = 'block';
        submitBtn.textContent = 'Register';
        toggleLink.textContent = 'Already have an account? Login here.';
    } else {
        formTitle.textContent = 'Login';
        codeGroup.style.display = 'none';
        submitBtn.textContent = 'Login';
        toggleLink.textContent = 'Don\'t have an account? Register here.';
    }
});

// Handle form submission
authForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const regCode = document.getElementById('regCode').value.trim();

    if (!email || !password || (isRegistering && !regCode)) {
        alert('Please fill in all required fields.');
        return;
    }

    if (isRegistering) {
        // Simulate registration logic
        alert(`Account registered successfully!\nEmail: ${email}\nCode: ${regCode}`);
    } else {
        // Simulate login logic
        alert(`Welcome back, ${email}! Login successful.`);
    }

    // Clear form fields
    authForm.reset();
});
