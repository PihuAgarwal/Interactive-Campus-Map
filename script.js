// Penn State University Park Building Data - Focused on Five Key Areas
const pennStateBuildings = {
    'Pattee Library': {
        coordinates: { lat: 40.7967, lng: -77.8619 },
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        description: 'Main library with extensive collections, study spaces, and research resources.',
        hours: 'Monday-Friday: 7:00 AM - 11:00 PM, Saturday-Sunday: 9:00 AM - 9:00 PM',
        contact: 'Phone: (814) 865-0400',
        accessibility: {
            wheelchair: true,
            bathrooms: true,
            elevator: true,
            accessibleEntrance: true
        },
        food: {
            available: true,
            options: ['Starbucks', 'Café', 'Vending Machines'],
            dietaryRestrictions: {
                vegetarian: true,
                vegan: true,
                glutenFree: true,
                halal: false,
                kosher: false
            }
        },
        rooms: ['Study Rooms', 'Computer Labs', 'Quiet Study Areas', 'Group Study Spaces', 'Special Collections']
    },
    'The HUB': {
        coordinates: { lat: 40.7964, lng: -77.8608 },
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        description: 'HUB-Robeson Center: Student union building with dining, meeting spaces, and student services.',
        hours: 'Monday-Friday: 6:00 AM - 12:00 AM, Saturday-Sunday: 8:00 AM - 12:00 AM',
        contact: 'Phone: (814) 865-9000',
        accessibility: {
            wheelchair: true,
            bathrooms: true,
            elevator: true,
            accessibleEntrance: true
        },
        food: {
            available: true,
            options: ['Burger King', 'Subway', 'Panda Express', 'Sushi', 'Salad Bar'],
            dietaryRestrictions: {
                vegetarian: true,
                vegan: true,
                glutenFree: true,
                halal: true,
                kosher: false
            }
        },
        rooms: ['Meeting Rooms', 'Event Spaces', 'Student Organization Offices', 'Computer Lab', 'Game Room']
    },
    'IM Building': {
        coordinates: { lat: 40.7967, lng: -77.8605 },
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        description: 'Intramural Building with fitness facilities, courts, and recreational activities.',
        hours: 'Monday-Friday: 6:00 AM - 11:00 PM, Saturday-Sunday: 8:00 AM - 10:00 PM',
        contact: 'Phone: (814) 865-4466',
        accessibility: {
            wheelchair: true,
            bathrooms: true,
            elevator: true,
            accessibleEntrance: true
        },
        food: {
            available: true,
            options: ['Smoothie Bar', 'Protein Shakes', 'Energy Bars', 'Vending Machines'],
            dietaryRestrictions: {
                vegetarian: true,
                vegan: true,
                glutenFree: true,
                halal: false,
                kosher: false
            }
        },
        rooms: ['Basketball Courts', 'Weight Room', 'Cardio Area', 'Racquetball Courts', 'Fitness Classes', 'Locker Rooms']
    },
    'White Building': {
        coordinates: { lat: 40.7971, lng: -77.8670 },
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        description: 'White Building recreation facility with gym equipment and fitness spaces.',
        hours: 'Monday-Friday: 6:00 AM - 11:00 PM, Saturday-Sunday: 8:00 AM - 10:00 PM',
        contact: 'Phone: (814) 865-4466',
        accessibility: {
            wheelchair: true,
            bathrooms: true,
            elevator: true,
            accessibleEntrance: true
        },
        food: {
            available: true,
            options: ['Smoothie Bar', 'Protein Shakes', 'Energy Bars'],
            dietaryRestrictions: {
                vegetarian: true,
                vegan: true,
                glutenFree: true,
                halal: false,
                kosher: false
            }
        },
        rooms: ['Fitness Equipment', 'Cardio Machines', 'Weight Training Area', 'Locker Rooms', 'Group Exercise Rooms']
    },
    'Rec Hall': {
        coordinates: { lat: 40.7978, lng: -77.8594 },
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        description: 'Recreation Hall with fitness equipment, courts, and recreational activities.',
        hours: 'Monday-Friday: 5:30 AM - 11:00 PM, Saturday-Sunday: 7:00 AM - 10:00 PM',
        contact: 'Phone: (814) 865-4466',
        accessibility: {
            wheelchair: true,
            bathrooms: true,
            elevator: true,
            accessibleEntrance: true
        },
        food: {
            available: true,
            options: ['Smoothie Bar', 'Protein Shakes', 'Energy Bars'],
            dietaryRestrictions: {
                vegetarian: true,
                vegan: true,
                glutenFree: true,
                halal: false,
                kosher: false
            }
        },
        rooms: ['Basketball Courts', 'Weight Room', 'Cardio Area', 'Swimming Pool', 'Racquetball Courts', 'Fitness Classes']
    },
    // Bus Stops on Campus
    'HUB Bus Stop': {
        coordinates: { lat: 40.7965, lng: -77.8609 },
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Bus stop at the HUB-Robeson Center. Serves multiple campus bus routes.',
        hours: '24/7',
        contact: 'CATA: (814) 238-2282',
        accessibility: {
            wheelchair: true,
            bathrooms: false,
            elevator: false,
            accessibleEntrance: true
        },
        food: {
            available: false,
            options: [],
            dietaryRestrictions: {}
        },
        rooms: ['Bus Shelter', 'Seating Area']
    },
    'Library Bus Stop': {
        coordinates: { lat: 40.7968, lng: -77.8620 },
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Bus stop near Pattee Library. Convenient access to library and surrounding buildings.',
        hours: '24/7',
        contact: 'CATA: (814) 238-2282',
        accessibility: {
            wheelchair: true,
            bathrooms: false,
            elevator: false,
            accessibleEntrance: true
        },
        food: {
            available: false,
            options: [],
            dietaryRestrictions: {}
        },
        rooms: ['Bus Shelter', 'Seating Area']
    },
    'Rec Hall Bus Stop': {
        coordinates: { lat: 40.7979, lng: -77.8595 },
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Bus stop at Recreation Hall. Access to gym facilities and nearby residence halls.',
        hours: '24/7',
        contact: 'CATA: (814) 238-2282',
        accessibility: {
            wheelchair: true,
            bathrooms: false,
            elevator: false,
            accessibleEntrance: true
        },
        food: {
            available: false,
            options: [],
            dietaryRestrictions: {}
        },
        rooms: ['Bus Shelter', 'Seating Area']
    },
    'IM Building Bus Stop': {
        coordinates: { lat: 40.7968, lng: -77.8606 },
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Bus stop near IM Building. Convenient access to intramural facilities.',
        hours: '24/7',
        contact: 'CATA: (814) 238-2282',
        accessibility: {
            wheelchair: true,
            bathrooms: false,
            elevator: false,
            accessibleEntrance: true
        },
        food: {
            available: false,
            options: [],
            dietaryRestrictions: {}
        },
        rooms: ['Bus Shelter', 'Seating Area']
    },
    'White Building Bus Stop': {
        coordinates: { lat: 40.7972, lng: -77.8671 },
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Bus stop near White Building. Access to recreation facilities.',
        hours: '24/7',
        contact: 'CATA: (814) 238-2282',
        accessibility: {
            wheelchair: true,
            bathrooms: false,
            elevator: false,
            accessibleEntrance: true
        },
        food: {
            available: false,
            options: [],
            dietaryRestrictions: {}
        },
        rooms: ['Bus Shelter', 'Seating Area']
    }
};

// Global variables
let map;
let markers = [];
let infoWindow;
let currentBuilding = null;

// Initialize Google Map
function initMap() {
    // Use configuration values or defaults
    const mapCenter = (typeof CONFIG !== 'undefined' && CONFIG.MAP_CENTER) ? CONFIG.MAP_CENTER : { lat: 40.7982, lng: -77.8599 };
    const mapZoom = (typeof CONFIG !== 'undefined' && CONFIG.MAP_ZOOM) ? CONFIG.MAP_ZOOM : 16;
    
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: mapZoom,
        center: mapCenter,
        mapTypeId: 'roadmap',
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            }
        ]
    });
    
    // Create info window
    infoWindow = new google.maps.InfoWindow();
    
    // Add building markers
    addBuildingMarkers();
    
    // Setup event listeners
    setupMapControls();
    setupBuildingPanel();
    setupSearchBar();
}

// Add markers for all buildings
function addBuildingMarkers() {
    Object.keys(pennStateBuildings).forEach(buildingName => {
        const building = pennStateBuildings[buildingName];
        
        // Different marker colors for bus stops vs buildings
        const isBusStop = buildingName.includes('Bus Stop');
        const markerColor = isBusStop ? '#28a745' : ((typeof CONFIG !== 'undefined' && CONFIG.MARKER_COLOR) ? CONFIG.MARKER_COLOR : '#667eea');
        const markerScale = isBusStop ? 6 : 8;
        
        const marker = new google.maps.Marker({
            position: building.coordinates,
            map: map,
            title: buildingName,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: markerScale,
                fillColor: markerColor,
                fillOpacity: 1,
                strokeColor: '#ffffff',
                strokeWeight: 2
            }
        });
        
        // Add click event listener
        marker.addListener('click', () => {
            showBuildingInfo(buildingName);
            highlightMarker(marker);
        });
        
        // Add hover event listener
        marker.addListener('mouseover', () => {
            showBuildingTooltip(buildingName);
        });
        
        marker.addListener('mouseout', () => {
            hideBuildingTooltip();
        });
        
        markers.push(marker);
    });
}

// Show building information in the side panel
function showBuildingInfo(buildingName) {
    const building = pennStateBuildings[buildingName];
    const panel = document.getElementById('buildingInfoPanel');
    const buildingNameEl = document.getElementById('buildingName');
    const buildingDetailsEl = document.getElementById('buildingDetails');
    
    currentBuilding = buildingName;
    
    // Update panel content
    buildingNameEl.textContent = buildingName;
    
    let detailsHTML = `
        <div class="building-detail">
            <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <img src="${building.image}" alt="${buildingName}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 10px; margin-right: 15px;">
                <div>
                    <h4 style="margin: 0 0 8px 0; color: #667eea; font-size: 18px;">${buildingName}</h4>
                    <p style="margin: 0; color: #666; font-size: 14px;">${building.description}</p>
                </div>
            </div>
        </div>
        
        <div class="building-detail">
            <h4>🕒 Hours</h4>
            <p>${building.hours}</p>
        </div>
        
        <div class="building-detail">
            <h4>📞 Contact</h4>
            <p>${building.contact}</p>
        </div>
    `;
    
    // Add accessibility information
    if (building.accessibility) {
        let accessibilityHTML = '<div class="building-detail"><h4>♿ Accessibility</h4><ul style="margin: 8px 0 0 0; padding-left: 20px;">';
        
        if (building.accessibility.wheelchair) {
            accessibilityHTML += '<li>♿ Wheelchair Accessible</li>';
        }
        if (building.accessibility.bathrooms) {
            accessibilityHTML += '<li>🚻 Restrooms Available</li>';
        }
        if (building.accessibility.elevator) {
            accessibilityHTML += '<li>🛗 Elevator Access</li>';
        }
        if (building.accessibility.accessibleEntrance) {
            accessibilityHTML += '<li>🚪 Accessible Entrance</li>';
        }
        
        accessibilityHTML += '</ul></div>';
        detailsHTML += accessibilityHTML;
    }
    
    // Add food information
    if (building.food && building.food.available) {
        let foodHTML = '<div class="building-detail"><h4>🍽️ Food Options</h4>';
        foodHTML += '<ul style="margin: 8px 0 0 0; padding-left: 20px;">';
        
        // List food options
        building.food.options.forEach(option => {
            foodHTML += `<li>${option}</li>`;
        });
        
        // Add dietary restrictions section
        if (building.food.dietaryRestrictions && Object.keys(building.food.dietaryRestrictions).length > 0) {
            foodHTML += '</ul><h4 style="margin-top: 12px; font-size: 0.95rem; color: #764ba2;">🥗 Dietary Options Available:</h4><ul style="margin: 4px 0 0 0; padding-left: 20px;">';
            
            const restrictions = building.food.dietaryRestrictions;
            
            if (restrictions.vegetarian) {
                foodHTML += '<li>✅ Vegetarian Options</li>';
            }
            if (restrictions.vegan) {
                foodHTML += '<li>✅ Vegan Options</li>';
            }
            if (restrictions.glutenFree) {
                foodHTML += '<li>✅ Gluten-Free Options</li>';
            }
            if (restrictions.halal) {
                foodHTML += '<li>✅ Halal Options</li>';
            }
            if (restrictions.kosher) {
                foodHTML += '<li>✅ Kosher Options</li>';
            }
            
            // Also show what's NOT available
            if (!restrictions.vegetarian) {
                foodHTML += '<li>❌ No Vegetarian Options</li>';
            }
            if (!restrictions.vegan) {
                foodHTML += '<li>❌ No Vegan Options</li>';
            }
            if (!restrictions.glutenFree) {
                foodHTML += '<li>❌ No Gluten-Free Options</li>';
            }
            if (!restrictions.halal) {
                foodHTML += '<li>❌ No Halal Options</li>';
            }
            if (!restrictions.kosher) {
                foodHTML += '<li>❌ No Kosher Options</li>';
            }
        }
        
        foodHTML += '</ul></div>';
        detailsHTML += foodHTML;
    }
    
    // Add rooms information
    if (building.rooms && building.rooms.length > 0) {
        let roomsHTML = '<div class="building-detail"><h4>🏢 Rooms & Facilities</h4><ul style="margin: 8px 0 0 0; padding-left: 20px;">';
        building.rooms.forEach(room => {
            roomsHTML += `<li>${room}</li>`;
        });
        roomsHTML += '</ul></div>';
        detailsHTML += roomsHTML;
    }
    
    buildingDetailsEl.innerHTML = detailsHTML;
    
    // Show panel
    panel.classList.add('show');
    
    // Center map on building
    map.setCenter(building.coordinates);
    map.setZoom(18);
}

// Show tooltip on hover
function showBuildingTooltip(buildingName) {
    const building = pennStateBuildings[buildingName];
    
    let tooltipContent = `
        <div style="padding: 15px; max-width: 450px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <div style="display: flex; align-items: center; margin-bottom: 12px;">
                <img src="${building.image}" alt="${buildingName}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px; margin-right: 12px;">
                <h4 style="margin: 0; color: #667eea; font-size: 16px; font-weight: 600;">${buildingName}</h4>
            </div>
            
            <div style="font-size: 13px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0; color: #333; font-weight: 500;">${building.description}</p>
                
                <div style="margin: 8px 0;">
                    <strong style="color: #667eea;">🕒 Hours:</strong><br>
                    <span style="color: #666;">${building.hours}</span>
                </div>
                
                <div style="margin: 8px 0;">
                    <strong style="color: #667eea;">📞 Contact:</strong><br>
                    <span style="color: #666;">${building.contact}</span>
                </div>
    `;
    
    // Add accessibility information
    if (building.accessibility) {
        tooltipContent += `
            <div style="margin: 8px 0;">
                <strong style="color: #667eea;">♿ Accessibility:</strong><br>
                <ul style="margin: 4px 0 0 0; padding-left: 16px; color: #666;">
        `;
        
        if (building.accessibility.wheelchair) {
            tooltipContent += '<li>♿ Wheelchair Accessible</li>';
        }
        if (building.accessibility.bathrooms) {
            tooltipContent += '<li>🚻 Restrooms Available</li>';
        }
        if (building.accessibility.elevator) {
            tooltipContent += '<li>🛗 Elevator Access</li>';
        }
        
        tooltipContent += '</ul></div>';
    }
    
    // Add food information
    if (building.food && building.food.available) {
        tooltipContent += `
            <div style="margin: 8px 0;">
                <strong style="color: #667eea;">🍽️ Food Options:</strong><br>
                <ul style="margin: 4px 0 0 0; padding-left: 16px; color: #666;">
        `;
        
        building.food.options.forEach(option => {
            tooltipContent += `<li>${option}</li>`;
        });
        
        // Add dietary restrictions
        if (building.food.dietaryRestrictions && Object.keys(building.food.dietaryRestrictions).length > 0) {
            tooltipContent += '</ul><strong style="color: #764ba2; font-size: 12px;">🥗 Dietary Options:</strong><ul style="margin: 2px 0 0 0; padding-left: 16px; color: #666;">';
            
            const restrictions = building.food.dietaryRestrictions;
            const availableOptions = [];
            
            if (restrictions.vegetarian) availableOptions.push('✅ Vegetarian');
            if (restrictions.vegan) availableOptions.push('✅ Vegan');
            if (restrictions.glutenFree) availableOptions.push('✅ Gluten-Free');
            if (restrictions.halal) availableOptions.push('✅ Halal');
            if (restrictions.kosher) availableOptions.push('✅ Kosher');
            
            availableOptions.forEach(option => {
                tooltipContent += `<li>${option}</li>`;
            });
        }
        
        tooltipContent += '</ul></div>';
    }
    
    // Add rooms information
    if (building.rooms && building.rooms.length > 0) {
        tooltipContent += `
            <div style="margin: 8px 0;">
                <strong style="color: #667eea;">🏢 Facilities:</strong><br>
                <ul style="margin: 4px 0 0 0; padding-left: 16px; color: #666;">
        `;
        
        building.rooms.slice(0, 4).forEach(room => {
            tooltipContent += `<li>${room}</li>`;
        });
        
        if (building.rooms.length > 4) {
            tooltipContent += `<li><em>...and ${building.rooms.length - 4} more</em></li>`;
        }
        
        tooltipContent += '</ul></div>';
    }
    
    tooltipContent += `
            </div>
            <div style="text-align: center; margin-top: 10px; padding-top: 8px; border-top: 1px solid #eee;">
                <span style="color: #999; font-size: 11px;">Click for detailed view</span>
            </div>
        </div>
    `;
    
    infoWindow.setContent(tooltipContent);
    infoWindow.open(map, markers.find(m => m.getTitle() === buildingName));
}

// Hide tooltip
function hideBuildingTooltip() {
    infoWindow.close();
}

// Highlight selected marker
function highlightMarker(selectedMarker) {
    const normalColor = (typeof CONFIG !== 'undefined' && CONFIG.MARKER_COLOR) ? CONFIG.MARKER_COLOR : '#667eea';
    const selectedColor = (typeof CONFIG !== 'undefined' && CONFIG.MARKER_SELECTED_COLOR) ? CONFIG.MARKER_SELECTED_COLOR : '#ff6b6b';
    
    markers.forEach(marker => {
        const buildingName = marker.getTitle();
        const isBusStop = buildingName && buildingName.includes('Bus Stop');
        const defaultColor = isBusStop ? '#28a745' : normalColor;
        const defaultScale = isBusStop ? 6 : 8;
        
        marker.setIcon({
            path: google.maps.SymbolPath.CIRCLE,
            scale: marker === selectedMarker ? (isBusStop ? 8 : 10) : defaultScale,
            fillColor: marker === selectedMarker ? selectedColor : defaultColor,
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 2
        });
    });
}

// Setup map controls
function setupMapControls() {
    const toggleSatelliteBtn = document.getElementById('toggleSatellite');
    const resetViewBtn = document.getElementById('resetView');
    
    let isSatellite = false;
    
    toggleSatelliteBtn.addEventListener('click', () => {
        isSatellite = !isSatellite;
        map.setMapTypeId(isSatellite ? 'satellite' : 'roadmap');
        toggleSatelliteBtn.textContent = isSatellite ? 'Map View' : 'Satellite View';
    });
    
    resetViewBtn.addEventListener('click', () => {
        const mapCenter = (typeof CONFIG !== 'undefined' && CONFIG.MAP_CENTER) ? CONFIG.MAP_CENTER : { lat: 40.7982, lng: -77.8599 };
        const mapZoom = (typeof CONFIG !== 'undefined' && CONFIG.MAP_ZOOM) ? CONFIG.MAP_ZOOM : 16;
        
        map.setCenter(mapCenter);
        map.setZoom(mapZoom);
        document.getElementById('buildingInfoPanel').classList.remove('show');
        currentBuilding = null;
        
        // Reset marker colors
        const normalColor = (typeof CONFIG !== 'undefined' && CONFIG.MARKER_COLOR) ? CONFIG.MARKER_COLOR : '#667eea';
        markers.forEach(marker => {
            const buildingName = marker.getTitle();
            const isBusStop = buildingName && buildingName.includes('Bus Stop');
            const markerColor = isBusStop ? '#28a745' : normalColor;
            const markerScale = isBusStop ? 6 : 8;
            
            marker.setIcon({
                path: google.maps.SymbolPath.CIRCLE,
                scale: markerScale,
                fillColor: markerColor,
                fillOpacity: 1,
                strokeColor: '#ffffff',
                strokeWeight: 2
            });
        });
    });
}

// Setup building panel controls
function setupBuildingPanel() {
    const closePanelBtn = document.getElementById('closePanel');
    
    closePanelBtn.addEventListener('click', () => {
        document.getElementById('buildingInfoPanel').classList.remove('show');
        currentBuilding = null;
        
        // Reset marker colors
        const normalColor = (typeof CONFIG !== 'undefined' && CONFIG.MARKER_COLOR) ? CONFIG.MARKER_COLOR : '#667eea';
        markers.forEach(marker => {
            const buildingName = marker.getTitle();
            const isBusStop = buildingName && buildingName.includes('Bus Stop');
            const markerColor = isBusStop ? '#28a745' : normalColor;
            const markerScale = isBusStop ? 6 : 8;
            
            marker.setIcon({
                path: google.maps.SymbolPath.CIRCLE,
                scale: markerScale,
                fillColor: markerColor,
                fillOpacity: 1,
                strokeColor: '#ffffff',
                strokeWeight: 2
            });
        });
    });
}

// Utility function to add new buildings
function addBuilding(buildingName, buildingData) {
    pennStateBuildings[buildingName] = buildingData;
    
    const marker = new google.maps.Marker({
        position: buildingData.coordinates,
        map: map,
        title: buildingName,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: '#667eea',
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 2
        }
    });
    
    marker.addListener('click', () => {
        showBuildingInfo(buildingName);
        highlightMarker(marker);
    });
    
    marker.addListener('mouseover', () => {
        showBuildingTooltip(buildingName);
    });
    
    marker.addListener('mouseout', () => {
        hideBuildingTooltip();
    });
    
    markers.push(marker);
}

// Setup search bar with Places Autocomplete
function setupSearchBar() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    // Create autocomplete instance
    const autocomplete = new google.maps.places.Autocomplete(searchInput, {
        fields: ['place_id', 'geometry', 'name', 'formatted_address'],
        types: ['establishment', 'point_of_interest'],
        componentRestrictions: { country: 'us' }
    });
    
    // Set bounds to focus on Penn State campus area
    const campusBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(40.7930, -77.8690), // Southwest corner
        new google.maps.LatLng(40.8030, -77.8570)  // Northeast corner
    );
    autocomplete.setBounds(campusBounds);
    
    // Bias results towards campus
    autocomplete.setComponentRestrictions({ country: 'us' });
    
    // Handle place selection
    autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        
        if (!place.geometry || !place.geometry.location) {
            // If place not found via Places API, try to match with our building data
            const searchTerm = searchInput.value.toLowerCase();
            const matchedBuilding = findBuildingByName(searchTerm);
            
            if (matchedBuilding) {
                const building = pennStateBuildings[matchedBuilding];
                map.setCenter(building.coordinates);
                map.setZoom(18);
                showBuildingInfo(matchedBuilding);
                
                // Highlight the marker
                const marker = markers.find(m => m.getTitle() === matchedBuilding);
                if (marker) {
                    highlightMarker(marker);
                }
            } else {
                alert('Location not found. Please try searching for: Pattee Library, The HUB, IM Building, White Building, Rec Hall, or bus stops.');
            }
            return;
        }
        
        // Center map on selected place
        map.setCenter(place.geometry.location);
        map.setZoom(17);
        
        // Check if this matches one of our buildings
        const buildingMatch = findBuildingByCoordinates(
            place.geometry.location.lat(),
            place.geometry.location.lng()
        );
        
        if (buildingMatch) {
            showBuildingInfo(buildingMatch);
            const marker = markers.find(m => m.getTitle() === buildingMatch);
            if (marker) {
                highlightMarker(marker);
            }
        }
    });
}

// Helper function to find building by name (fuzzy search)
function findBuildingByName(searchTerm) {
    const normalizedSearch = searchTerm.toLowerCase();
    
    for (const buildingName of Object.keys(pennStateBuildings)) {
        const normalizedName = buildingName.toLowerCase();
        
        // Exact match
        if (normalizedName === normalizedSearch) {
            return buildingName;
        }
        
        // Partial match
        if (normalizedName.includes(normalizedSearch) || normalizedSearch.includes(normalizedName)) {
            return buildingName;
        }
        
        // Check for common aliases
        const aliases = {
            'hub': 'The HUB',
            'library': 'Pattee Library',
            'pattee': 'Pattee Library',
            'rec hall': 'Rec Hall',
            'recreation hall': 'Rec Hall',
            'im building': 'IM Building',
            'intramural': 'IM Building',
            'white building': 'White Building'
        };
        
        if (aliases[normalizedSearch]) {
            return aliases[normalizedSearch];
        }
    }
    
    return null;
}

// Helper function to find building by coordinates (within 50 meters)
function findBuildingByCoordinates(lat, lng) {
    const threshold = 0.0005; // Approximately 50 meters
    
    for (const [buildingName, building] of Object.entries(pennStateBuildings)) {
        const latDiff = Math.abs(building.coordinates.lat - lat);
        const lngDiff = Math.abs(building.coordinates.lng - lng);
        
        if (latDiff < threshold && lngDiff < threshold) {
            return buildingName;
        }
    }
    
    return null;
}

// Export for external use
window.PennStateMap = {
    addBuilding,
    showBuildingInfo,
    pennStateBuildings
};