document.addEventListener("DOMContentLoaded", function () {
    async function loadHeader() {
        try {
            // Fetch the header.html file
            const response = await fetch('header.html'); // Assuming header.html is in the same directory
            const headerContent = await response.text(); // Get the raw HTML content

            // Get the <div> with id="header"
            const headerDiv = document.getElementById('header');

            if (headerDiv) {
                // Replace the content of <div id="header"></div> with the loaded HTML
                headerDiv.innerHTML = headerContent;
            }
        } catch (error) {
            console.error('Error loading header:', error);
        }
    }

    // Call the loadHeader function to load the header when the page is loaded
    window.onload = loadHeader;
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }

    function loadDarkModePreference() {
        const darkMode = getCookie('dark-mode') === 'true';
        if (darkMode) {
            document.body.classList.add('dark-mode');
        }
    }
    
    // Toggle dark mode on button click
    document.getElementById('dark-mode-toggle').addEventListener('click', function () {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        setCookie('dark-mode', isDarkMode, 365);  // Save preference for 1 year
    });
    
    // Load dark mode preference when page loads
    loadDarkModePreference();
});