// Function to fetch existing spots from the server
async function fetchExistingSpots() {
    try {
        const response = await fetch('/api/spots');
        const spots = await response.json();
        displayExistingSpots(spots);
    } catch (error) {
        console.error('Error fetching existing spots:', error);
    }
}

// Function to display existing spots in the UI
function displayExistingSpots(spots) {
    const existingSpotsList = document.getElementById('existing-spots').querySelector('ul');
    existingSpotsList.innerHTML = '';

    spots.forEach(spot => {
        const listItem = document.createElement('li');
        listItem.textContent = spot.name;
        listItem.dataset.latitude = spot.latitude;
        listItem.dataset.longitude = spot.longitude;
        listItem.addEventListener('click', () => {
            selectSpot(spot);
        });
        existingSpotsList.appendChild(listItem);
    });
}

// Function to select a spot and add it to the selected spots list
function selectSpot(spot) {
    const selectedSpotsList = document.getElementById('selected-spots').querySelector('ul');
    const listItem = document.createElement('li');
    listItem.textContent = spot.name;
    listItem.dataset.latitude = spot.latitude;
    listItem.dataset.longitude = spot.longitude;
    selectedSpotsList.appendChild(listItem);
}

// Event listener for the create path form submission
document.querySelector('#path-details form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const pathName = document.getElementById('path-name').value;
    const startSpot = document.getElementById('start-spot').value;
    const endSpot = document.getElementById('end-spot').value;
    const selectedSpots = Array.from(document.querySelectorAll('#selected-spots li'));

    const spots = selectedSpots.map(spot => ({
        name: spot.textContent,
        latitude: spot.dataset.latitude,
        longitude: spot.dataset.longitude
    }));

    await createPath(pathName, startSpot, endSpot, spots);
});

// Fetch existing spots when the page loads
fetchExistingSpots();
