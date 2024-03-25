// Function to get the current GPS location
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                resolve({ latitude, longitude });
            },
            error => {
                reject(error);
            }
        );
    });
}

// Function to check the accuracy of the GPS location
function isAccurateLocation(position) {
    const { accuracy } = position.coords;
    // Set your desired accuracy threshold (in meters)
    const accuracyThreshold = 10;
    return accuracy <= accuracyThreshold;
}
