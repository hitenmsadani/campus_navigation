// Function to fetch path details from the server
async function fetchPathDetails(pathId) {
    try {
        const response = await fetch(`/api/paths/${pathId}`);
        const path = await response.json();
        displayPathDetails(path);
    } catch (error) {
        console.error('Error fetching path details:', error);
    }
}

// Function to display path details in the UI
function displayPathDetails(path) {
    document.querySelector('#path-name').value = path.name;
    document.querySelector('#start-spot').value = path.startSpot;
    document.querySelector('#end-spot').value = path.endSpot;
    // Display path on the map
    displayPathOnMap(path);
}

// Function to handle form submission for updating path details
async function handleUpdatePath(event) {
    event.preventDefault();

    const pathId = getPathIdFromURL();
    const pathName = document.querySelector('#path-name').value;
    const startSpot = document.querySelector('#start-spot').value;
    const endSpot = document.querySelector('#end-spot').value;

    try {
        const response = await fetch(`/api/paths/${pathId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: pathName,
                startSpot: startSpot,
                endSpot: endSpot
            })
        });

        if (response.ok) {
            alert('Path updated successfully');
        } else {
            console.error('Error updating path');
        }
    } catch (error) {
        console.error('Error updating path:', error);
    }
}

// Function to get the path ID from the URL
function getPathIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Event listener for form submission
document.querySelector('#path-details form').addEventListener('submit', handleUpdatePath);

// Fetch path details when the page loads
const pathId = getPathIdFromURL();
fetchPathDetails(pathId);
