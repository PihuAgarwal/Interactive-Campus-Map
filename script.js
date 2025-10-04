// Penn State University Park Building Data
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
    'HUB-Robeson Center': {
        coordinates: { lat: 40.7964, lng: -77.8608 },
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        description: 'Student union building with dining, meeting spaces, and student services.',
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
    'Rec Hall': {
        coordinates: { lat: 40.7978, lng: -77.8594 },
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        description: 'Recreation center with fitness equipment, courts, and recreational activities.',
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
    'Pollock Dining Commons': {
        coordinates: { lat: 40.7992, lng: -77.8578 },
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        description: 'All-you-can-eat dining hall with diverse menu options and dietary accommodations.',
        hours: 'Breakfast: 7:00 AM - 10:00 AM, Lunch: 11:00 AM - 2:00 PM, Dinner: 5:00 PM - 8:00 PM',
        contact: 'Phone: (814) 865-4444',
        accessibility: {
            wheelchair: true,
            bathrooms: true,
            elevator: true,
            accessibleEntrance: true
        },
        food: {
            available: true,
            options: ['All-You-Can-Eat Buffet', 'Grill Station', 'Pizza', 'Salad Bar', 'Desserts'],
            dietaryRestrictions: {
                vegetarian: true,
                vegan: true,
                glutenFree: true,
                halal: true,
                kosher: true
            }
        },
        rooms: ['Dining Hall', 'Private Dining Room', 'Kitchen', 'Storage Areas']
    },
    'West Halls': {
        coordinates: { lat: 40.8001, lng: -77.8589 },
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        description: 'Residence hall complex with modern amenities and community spaces.',
        hours: '24/7 Access with Student ID',
        contact: 'Residence Life: (814) 865-7500',
        accessibility: {
            wheelchair: true,
            bathrooms: true,
            elevator: true,
            accessibleEntrance: true
        },
        food: {
            available: false,
            options: [],
            dietaryRestrictions: {}
        },
        rooms: ['Single Rooms', 'Double Rooms', 'Common Areas', 'Laundry Rooms', 'Study Lounges', 'Kitchenettes']
    },
    'East Halls': {
        coordinates: { lat: 40.7989, lng: -77.8571 },
        image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        description: 'Traditional residence hall complex with community-focused living.',
        hours: '24/7 Access with Student ID',
        contact: 'Residence Life: (814) 865-7500',
        accessibility: {
            wheelchair: true,
            bathrooms: true,
            elevator: true,
            accessibleEntrance: true
        },
        food: {
            available: false,
            options: [],
            dietaryRestrictions: {}
        },
        rooms: ['Single Rooms', 'Double Rooms', 'Common Areas', 'Laundry Rooms', 'Study Lounges']
    },
    'Smeal College of Business': {
        coordinates: { lat: 40.7956, lng: -77.8623 },
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        description: 'Business school building with classrooms, offices, and study spaces.',
        hours: 'Monday-Friday: 7:00 AM - 10:00 PM, Saturday-Sunday: 8:00 AM - 6:00 PM',
        contact: 'Phone: (814) 865-3434',
        accessibility: {
            wheelchair: true,
            bathrooms: true,
            elevator: true,
            accessibleEntrance: true
        },
        food: {
            available: true,
            options: ['Coffee Shop', 'Vending Machines'],
            dietaryRestrictions: {
                vegetarian: true,
                vegan: true,
                glutenFree: true,
                halal: false,
                kosher: false
            }
        },
        rooms: ['Classrooms', 'Faculty Offices', 'Study Rooms', 'Computer Lab', 'Auditorium', 'Conference Rooms']
    },
    'Old Main': {
        coordinates: { lat: 40.7961, lng: -77.8612 },
        image: 'https://images.unsplash.com/photo-1529408632839-a54952c491e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        description: 'Historic administrative building and symbol of Penn State University.',
        hours: 'Monday-Friday: 8:00 AM - 5:00 PM',
        contact: 'Phone: (814) 865-4700',
        accessibility: {
            wheelchair: true,
            bathrooms: true,
            elevator: true,
            accessibleEntrance: true
        },
        food: {
            available: false,
            options: [],
            dietaryRestrictions: {}
        },
        rooms: ['Administrative Offices', 'President\'s Office', 'Board Room', 'Historical Displays']
    }
};

// Global variables
let map;
let markers = [];
let infoWindow;
let currentBuilding = null;

// Initialize Google Map
function initMap() {
    // Penn State University Park coordinates (centered on campus)
    const pennState = { lat: 40.7982, lng: -77.8599 };
    
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: pennState,
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
}

// Add markers for all buildings
function addBuildingMarkers() {
    Object.keys(pennStateBuildings).forEach(buildingName => {
        const building = pennStateBuildings[buildingName];
        
        const marker = new google.maps.Marker({
            position: building.coordinates,
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
    markers.forEach(marker => {
        marker.setIcon({
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: marker === selectedMarker ? '#ff6b6b' : '#667eea',
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
        map.setCenter({ lat: 40.7982, lng: -77.8599 });
        map.setZoom(16);
        document.getElementById('buildingInfoPanel').classList.remove('show');
        currentBuilding = null;
        
        // Reset marker colors
        markers.forEach(marker => {
            marker.setIcon({
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8,
                fillColor: '#667eea',
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
        markers.forEach(marker => {
            marker.setIcon({
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8,
                fillColor: '#667eea',
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

// Export for external use
window.PennStateMap = {
    addBuilding,
    showBuildingInfo,
    pennStateBuildings
};