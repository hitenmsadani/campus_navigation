// Function to initialize the map
function initMap() {
    const mapContainer = document.getElementById('map');
    const map = new OpenStreetMap.Map(mapContainer);
    // Set the initial center and zoom level of the map
    map.setView([51.505, -0.09], 13);
}

// Function to display a path on the map
function displayPathOnMap(path) {
    // Clear existing path from the map
    clearPathFromMap();

    // Create markers for start and end spots
    const startMarker = L.marker([path.startSpot.latitude, path.startSpot.longitude]).addTo(map);
    const endMarker = L.marker([path.endSpot.latitude, path.endSpot.longitude]).addTo(map);

    // Create a polyline for the path
    const pathCoordinates = path.spots.map(spot => [spot.latitude, spot.longitude]);
    const pathPolyline = L.polyline(pathCoordinates).addTo(map);

    // Fit the map bounds to the path
    const bounds = L.latLngBounds([
        [path.startSpot.latitude, path.startSpot.longitude],
        [path.endSpot.latitude, path.endSpot.longitude]
    ]);
    map.fitBounds(bounds);
}

// Function to clear the path from the map
function clearPathFromMap() {
    map.eachLayer(layer => {
        if (layer instanceof L.Marker || layer instanceof L.Polyline) {
            map.removeLayer(layer);
        }
    });
}

// Initialize the map when the page loads
initMap();
