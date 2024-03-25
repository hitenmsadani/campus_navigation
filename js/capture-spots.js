// Function to save a captured spot
async function saveSpot(name, description, category, imageSrc, latitude, longitude) {
    try {
        const response = await fetch('/api/spots', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, description, category, imageSrc, latitude, longitude })
        });

        if (response.ok) {
            // Spot saved successfully
            console.log('Spot saved');
            displayCapturedSpot(name, imageSrc, latitude, longitude);
        } else {
            console.error('Error saving spot');
        }
    } catch (error) {
        console.error('Error saving spot:', error);
    }
}

// Function to display a captured spot in the UI
function displayCapturedSpot(name, imageSrc, latitude, longitude) {
    const capturedSpotsList = document.getElementById('captured-spots').querySelector('ul');
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <img src="${imageSrc}" alt="Captured Spot">
        <p>${name}</p>
    `;
    listItem.dataset.latitude = latitude;
    listItem.dataset.longitude = longitude;
    capturedSpotsList.appendChild(listItem);
}

// Event listener for the capture spot button
document.getElementById('capture-btn').addEventListener('click', async () => {
    const imageSrc = captureImage();
    const location = await getCurrentLocation();

    if (isAccurateLocation(location)) {
        const { latitude, longitude } = location;
        const spotName = document.getElementById('spot-name').value;
        const spotDescription = document.getElementById('spot-description').value;
        const spotCategory = document.getElementById('spot-category').value;

        await saveSpot(spotName, spotDescription, spotCategory, imageSrc, latitude, longitude);
    } else {
        console.error('GPS accuracy is not sufficient');
        // Display an error message to the user
    }
});
