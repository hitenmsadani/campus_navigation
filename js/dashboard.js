// Function to fetch paths from the server
async function fetchPaths() {
    try {
        const response = await fetch('/api/paths');
        const paths = await response.json();
        displayPaths(paths);
    } catch (error) {
        console.error('Error fetching paths:', error);
    }
}

// Function to display paths in the UI
function displayPaths(paths) {
    const pathList = document.getElementById('path-list').querySelector('ul');
    pathList.innerHTML = '';

    paths.forEach(path => {
        const listItem = document.createElement('li');
        listItem.textContent = path.name;
        listItem.addEventListener('click', () => {
            displayPathDetails(path);
        });
        pathList.appendChild(listItem);
    });
}

// Function to display path details in the UI
function displayPathDetails(path) {
    const pathInfo = document.getElementById('path-info');
    pathInfo.innerHTML = `
        <h3>${path.name}</h3>
        <p>Start: ${path.startSpot.name}</p>
        <p>End: ${path.endSpot.name}</p>
    `;

    // Display path on the map
    displayPathOnMap(path);
}

// Fetch paths when the page loads
fetchPaths();
