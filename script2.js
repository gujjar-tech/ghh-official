// JavaScript for page2.html (Photo and Video Gallery)

document.addEventListener('DOMContentLoaded', () => {
    console.log('Page 2 (Photo & Video Gallery) loaded successfully!');

    // --- Header Back Arrow Functionality ---
    const backArrow = document.querySelector('.header-section .icon:first-child');
    if (backArrow) {
        backArrow.addEventListener('click', () => {
            window.history.back(); // Go back to the previous page (login page)
        });
    }

    // --- Image Zoom (Modal) Functionality ---
    const imageModal = document.getElementById('imageModal');
    const zoomedImage = document.getElementById('zoomedImage');
    const closeModalBtn = document.querySelector('.close-modal-btn');
    const galleryImages = document.querySelectorAll('.gallery-item img.zoomable-image'); // Select only zoomable images

    // Function to close the modal (reusable)
    function closeModal() {
        imageModal.classList.remove('show'); // Hide the modal
        document.body.style.overflow = 'auto'; // Re-enable scrolling on the main page
    }

    // Loop through all images and add click listener
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            zoomedImage.src = image.src; // Set the source of the zoomed image
            imageModal.classList.add('show'); // Show the modal
            document.body.style.overflow = 'hidden'; // Prevent scrolling on the main page
        });
    });

    // Close the modal when the close button is clicked
    closeModalBtn.addEventListener('click', () => {
        closeModal();
    });

    // Close the modal when clicking outside the image (on the overlay)
    imageModal.addEventListener('click', (event) => {
        if (event.target === imageModal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && imageModal.classList.contains('show')) {
            closeModal();
        }
    });

    // --- Page Load Animations (Staggered Gallery Item Fade-in) ---
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        // Apply the transition to make them animate from initial hidden state
        // The initial opacity: 0 and transform: translateY(20px) are now in style2.css
        // This setTimeout removes them after a stagger, allowing the CSS transition to play
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 80); // Slightly faster stagger delay for a snappier feel
    });
});
