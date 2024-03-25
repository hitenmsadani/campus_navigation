// Function to create a new path
async function createPath(name, startSpot, endSpot, spots) {
    try {
        const response = await fetch('/api/paths', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, startSpot, endSpot, spots })
        });

        if (response.ok) {
            // Path created successfully
            console.log('Path created');
            // Redirect to the dashboard or display a success message
        } else {
            console.error('Error creating path');
        }
    } catch (error) {
        console.error('Error creating path:', error);
    }
}

// Event listener for the create path form submission
document.querySelector('#path-details form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const pathName = document.getElementById('path-name').value;
    const startSpot = document.getElementById('start-spot').value;
    const endSpot = document.getElementById('end-spot').value;
    const capturedSpots = Array.from(document.querySelectorAll('#captured-spots li'));

    const spots = capturedSpots.map(spot => ({
        name: spot.dataset.name,
        latitude: spot.dataset.latitude,
        longitude: spot.dataset.longitude
    }));

    await createPath(pathName, startSpot, endSpot, spots);
});
