# Penn State University Park Interactive Campus Map

An interactive campus map using Google Maps API with detailed building information, accessibility features, and dining options.

## 🚀 Quick Setup

### 1. Get Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the **Maps JavaScript API**
4. Go to **Credentials** → **Create Credentials** → **API Key**
5. Copy your API key

### 2. Update API Key

Replace `YOUR_API_KEY` in `index.html` with your actual API key:

```html
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_ACTUAL_API_KEY&callback=initMap&libraries=places"></script>
```

### 3. Open the Map

Open `index.html` in your web browser and you'll see the interactive Penn State campus map!

## 🎯 Features

### Interactive Building Information
- **Hover** over any building marker to see a quick tooltip
- **Click** on any building marker to see detailed information in the side panel
- **Satellite View** toggle to see aerial imagery
- **Reset View** button to return to default campus view

### Building Details Include:
- 📋 **Description** - What the building is used for
- 🕒 **Hours** - Operating hours
- 📞 **Contact** - Phone numbers and contact info
- ♿ **Accessibility** - Wheelchair access, elevators, restrooms
- 🍽️ **Food Options** - Available dining and dietary accommodations
- 🏢 **Rooms & Facilities** - What's inside each building

### Accessibility Features
- **Wheelchair Accessible** - Buildings with full accessibility
- **Restrooms Available** - Bathroom facilities
- **Elevator Access** - Multi-story building access
- **Dietary Accommodations** - Vegetarian, vegan, gluten-free, halal, kosher options

## 🏢 Included Buildings

1. **Pattee Library** - Main library with study spaces
2. **HUB-Robeson Center** - Student union with dining
3. **Rec Hall** - Recreation center with fitness facilities
4. **Pollock Dining Commons** - All-you-can-eat dining hall
5. **West Halls** - Modern residence halls
6. **East Halls** - Traditional residence halls
7. **Smeal College of Business** - Business school building
8. **Old Main** - Historic administrative building

## 🔧 Customization

### Adding New Buildings

Use the JavaScript API to add new buildings:

```javascript
PennStateMap.addBuilding('New Building Name', {
    coordinates: { lat: 40.7967, lng: -77.8619 },
    description: 'Description of the building...',
    hours: 'Monday-Friday: 8:00 AM - 6:00 PM',
    contact: 'Phone: (814) 123-4567',
    accessibility: {
        wheelchair: true,
        bathrooms: true,
        elevator: true,
        accessibleEntrance: true
    },
    food: {
        available: true,
        options: ['Café', 'Vending Machines'],
        dietaryRestrictions: {
            vegetarian: true,
            vegan: false,
            glutenFree: true,
            halal: false,
            kosher: false
        }
    },
    rooms: ['Classrooms', 'Offices', 'Study Rooms']
});
```

### Modifying Existing Buildings

Edit the `pennStateBuildings` object in `script.js` to update building information.

### Styling Changes

- **Colors**: Edit CSS variables in `styles.css`
- **Map Style**: Modify the `styles` array in the `initMap()` function
- **Marker Appearance**: Change the `icon` properties in `addBuildingMarkers()`

## 📱 Mobile Features

- **Touch-friendly** interface for mobile devices
- **Responsive** building info panel
- **Optimized** for QR code scanning
- **Fast loading** on mobile networks

## 🔒 Security Note

For production use, consider:
- Restricting your API key to specific domains
- Setting up billing alerts
- Using environment variables for the API key

## 📞 Support

If you need help:
1. Check the browser console for any JavaScript errors
2. Verify your Google Maps API key is correct
3. Ensure the Maps JavaScript API is enabled in Google Cloud Console

## 🎓 Perfect for Students

This map helps students:
- Find buildings quickly
- Check accessibility before visiting
- Discover dining options that meet dietary needs
- Plan their campus navigation
- Access building hours and contact information

---

**Built with ❤️ for Penn State students**
