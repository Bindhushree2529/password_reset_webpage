document.getElementById('reset-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const messageElement = document.getElementById('message');

    // Simulate an API call to send a reset link
    fetch('https://example.com/api/reset-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })
    .then(response => {
        if (response.ok) {
            messageElement.textContent = 'Reset link sent! Check your email.';
            messageElement.style.color = 'green';
        } else {
            messageElement.textContent = 'Error sending reset link. Please try again.';
            messageElement.style.color = 'red';
        }
    })
    .catch(error => {
        messageElement.textContent = 'Error: ' + error.message;
        messageElement.style.color = 'red';
    });
});
