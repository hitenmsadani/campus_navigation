// Function to request camera permission
async function requestCameraPermission() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        // Camera permission granted
        console.log('Camera permission granted');
    } catch (error) {
        console.error('Error accessing camera:', error);
        // Handle camera permission denial
    }
}

// Function to request location permission
function requestLocationPermission() {
    navigator.geolocation.getCurrentPosition(
        position => {
            // Location permission granted
            console.log('Location permission granted');
        },
        error => {
            console.error('Error accessing location:', error);
            // Handle location permission denial
        }
    );
}

// Event listener for camera permission button
document.getElementById('camera-permission-btn').addEventListener('click', requestCameraPermission);

// Event listener for location permission button
document.getElementById('location-permission-btn').addEventListener('click', requestLocationPermission);
