// JavaScript for page2.html (Photo and Video Gallery)

document.addEventListener('DOMContentLoaded', () => {
    console.log('Page 2 (Photo & Video Gallery) loaded successfully!');

    // You can add more JavaScript logic here for gallery features
    // For example, if you wanted to implement:
    // - A modal/lightbox for full-screen viewing of photos/videos
    // - Dynamic loading of more media as the user scrolls
    // - Search or filtering functionality
    // - Interactive elements for the header icons (e.g., the back arrow)

    // Example: Add an event listener for the back arrow (optional)
    const backArrow = document.querySelector('.header-section .icon:first-child');
    if (backArrow) {
        backArrow.addEventListener('click', () => {
            window.history.back(); // Go back to the previous page (login page)
        });
    }
});
