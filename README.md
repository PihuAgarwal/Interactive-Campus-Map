# Interactive Campus Map

A simple, responsive campus map website built with HTML, CSS, and JavaScript.

## Features

- **Interactive Map**: Click on location markers to view details
- **Modal Popups**: Clean, informative popups with location details
- **Mobile Responsive**: Works great on all device sizes
- **QR Code Compatible**: Optimized for QR code scanning
- **Accessible**: Keyboard navigation and screen reader support
- **Easy to Customize**: Simple data structure for adding new locations

## Quick Start

1. Open `index.html` in your web browser
2. Click on any location marker (Library, Dorms, Dining Hall, Gym)
3. View location details in the modal popup

## Customization

### Adding New Locations

You can add new locations in two ways:

#### Method 1: Edit the JavaScript file
Open `script.js` and add to the `locations` object:

```javascript
const locations = {
    // ... existing locations ...
    newLocation: {
        title: "New Building",
        description: "Description of your new location...",
        image: "images/new-building.jpg",
        hours: "Monday-Friday: 8:00 AM - 6:00 PM",
        contact: "Phone: (555) 123-4571",
        services: "Service 1, Service 2, Service 3"
    }
};
```

Then add the HTML marker in `index.html`:

```html
<div class="location-marker" data-location="newLocation" style="top: 40%; left: 50%;">
    <div class="marker-icon">🏢</div>
    <span class="marker-label">New Building</span>
</div>
```

#### Method 2: Use the JavaScript API
```javascript
CampusMap.addLocation('newLocation', {
    title: "New Building",
    description: "Description...",
    image: "images/new-building.jpg",
    hours: "Monday-Friday: 8:00 AM - 6:00 PM",
    contact: "Phone: (555) 123-4571",
    services: "Service 1, Service 2, Service 3"
});
```

### Customizing Images

1. Replace `images/campus-map-bg.jpg` with your campus map image
2. Add location images to the `images/` folder
3. Update image paths in the `locations` object

### Styling

- Edit `styles.css` to change colors, fonts, and layout
- Modify marker positions by changing the `style` attributes in HTML
- Adjust modal appearance and animations

## File Structure

```
campus-map/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── images/             # Image assets
│   ├── campus-map-bg.jpg    # Background map image
│   ├── library.jpg          # Library image
│   ├── dorms.jpg            # Dorms image
│   ├── dining.jpg           # Dining hall image
│   └── gym.jpg              # Gym image
└── README.md           # This file
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## QR Code Compatibility

The website is optimized for QR code scanning with:
- Proper meta tags for social sharing
- Mobile-responsive design
- Fast loading times
- Touch-friendly interface

## License

This project is open source and available under the MIT License.
