// script.js

// Add click event to each register button
document.querySelectorAll('.register-btn').forEach(button => {
    button.addEventListener('click', () => {
        const eventName = button.parentElement.querySelector('h3').innerText;
        alert(You have registered for the ${eventName}! 🎉);
    });
});