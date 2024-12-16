const images = [
    "gymimages/img694.jpg", // Replace with your image paths
    "gymimages/img853.jpg",
    "gymimages/img439.jpg",
  ];
  
  const imageContainer = document.getElementById('image-container');
  let currentIndex = 0;
  
  function showImage() {
    imageContainer.src = images[currentIndex];
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
  }
  
  // Initial image display
  showImage();
  
  // Set up an interval to automatically change images (adjust interval as needed)
  setInterval(nextImage, 3000);