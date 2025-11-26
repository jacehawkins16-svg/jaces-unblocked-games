/**
 * back.js
 * Generates a stylized "Back to Home" button in the top-right corner
 * of all pages except index.html.
 */

// Function to create and insert the back button element
function createBackButton() {
    // 1. Check if the current page is the index.html page
    // We check the last part of the pathname against common index names.
    const path = window.location.pathname.toLowerCase();
    const isHomePage = path === '/' || path.endsWith('/index.html') || path.endsWith('/index.htm');

    // Only proceed if it is NOT the home page
    if (isHomePage) {
        return;
    }

    // 2. Create the main button element
    const backButton = document.createElement('a');
    
    // Set the link target to the home page (index.html)
    backButton.href = 'index.html'; 
    
    // Set up Tailwind CSS classes for styling
    backButton.className = `
        fixed top-4 right-4 
        bg-emerald-600 hover:bg-emerald-500 
        text-white font-bold py-2 px-4 
        rounded-lg shadow-xl 
        transition-all duration-300 
        transform hover:scale-105 
        focus:outline-none focus:ring-4 focus:ring-emerald-400 focus:ring-opacity-75
        z-50
    `;

    // 3. Set the text content of the button
    backButton.textContent = '🏠 Back to Home';
    
    // You can also use a simple arrow icon if preferred:
    // backButton.textContent = '← Back'; 
    
    // 4. Append the button to the body of the document
    document.body.appendChild(backButton);
}

// Execute the function when the page finishes loading
document.addEventListener('DOMContentLoaded', createBackButton);
