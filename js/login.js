// Function to handle login form submission
async function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            // Login successful, redirect to dashboard
            window.location.href = 'dashboard.html';
        } else {
            // Login failed, display error message
            console.error('Invalid username or password');
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
}

// Event listener for login form submission
document.querySelector('#login form').addEventListener('submit', handleLogin);
