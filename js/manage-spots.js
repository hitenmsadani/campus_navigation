// Function to fetch spots from the server
async function fetchSpots() {
    try {
        const response = await fetch('/api/spots');
        const spots = await response.json();
        displaySpots(spots);
    } catch (error) {
        console.error('Error fetching spots:', error);
    }
}

// Function to display spots in the UI
function displaySpots(spots) {
    const spotList = document.querySelector('#spot-list ul');
    spotList.innerHTML = '';

    spots.forEach(spot => {
        const listItem = document.createElement('li');
        listItem.textContent = spot.name;
        spotList.appendChild(listItem);
    });
}

// Function to handle form submission for adding a new spot
async function handleAddSpot(event) {
    event.preventDefault();

    const spotName = document.querySelector('#spot-name').value;
    const spotDescription = document.querySelector('#spot-description').value;
    const spotCategory = document.querySelector('#spot-category').value;
    const spotImage = document.querySelector('#spot-image').files[0];

    const formData = new FormData();
    formData.append('name', spotName);
    formData.append('description', spotDescription);
    formData.append('category', spotCategory);
    formData.append('image', spotImage);

    try {
        const response = await fetch('/api/spots', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            fetchSpots();
            event.target.reset();
        } else {
            console.error('Error adding spot');
        }
    } catch (error) {
        console.error('Error adding spot:', error);
    }
}

// Event listener for form submission
document.querySelector('#spot-form form').addEventListener('submit', handleAddSpot);

// Fetch spots when the page loads
fetchSpots();
