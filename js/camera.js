// Function to initialize the camera
async function initializeCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.getElementById('video');
        video.srcObject = stream;
    } catch (error) {
        console.error('Error accessing camera:', error);
    }
}

// Function to capture an image from the camera feed
function captureImage() {
    const video = document.getElementById('video');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/jpeg');
}

// Event listener for the capture button
document.getElementById('capture-btn').addEventListener('click', () => {
    const imageSrc = captureImage();
    // Do something with the captured image (e.g., display it, send it to the server)
    console.log('Captured image:', imageSrc);
});

// Initialize the camera when the page loads
initializeCamera();
