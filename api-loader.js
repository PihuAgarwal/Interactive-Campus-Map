// API Key Loader - This script loads the API key dynamically
(function() {
    'use strict';
    
    // Function to load Google Maps API with the key from config
    function loadGoogleMapsAPI() {
        if (typeof CONFIG === 'undefined' || !CONFIG.GOOGLE_MAPS_API_KEY || CONFIG.GOOGLE_MAPS_API_KEY === 'YOUR_API_KEY_HERE') {
            console.error('Google Maps API key not configured. Please update config.js with your API key.');
            document.body.innerHTML = `
                <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
                    <h2 style="color: #e74c3c;">⚠️ Configuration Required</h2>
                    <p>Please update the <code>config.js</code> file with your Google Maps API key.</p>
                    <p>Replace <code>YOUR_API_KEY_HERE</code> with your actual API key.</p>
                    <a href="SETUP-GUIDE.md" style="color: #3498db;">View Setup Guide</a>
                </div>
            `;
            return;
        }
        
        // Create script tag to load Google Maps API
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${CONFIG.GOOGLE_MAPS_API_KEY}&callback=initMap&libraries=places`;
        script.async = true;
        script.defer = true;
        
        // Add error handling
        script.onerror = function() {
            console.error('Failed to load Google Maps API. Please check your API key.');
            document.body.innerHTML = `
                <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
                    <h2 style="color: #e74c3c;">❌ API Error</h2>
                    <p>Failed to load Google Maps API. Please check your API key in <code>config.js</code>.</p>
                    <a href="SETUP-GUIDE.md" style="color: #3498db;">View Setup Guide</a>
                </div>
            `;
        };
        
        document.head.appendChild(script);
    }
    
    // Load the API when the page is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadGoogleMapsAPI);
    } else {
        loadGoogleMapsAPI();
    }
})();
