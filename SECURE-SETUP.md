# 🔐 Secure API Key Setup Instructions

## Overview
This project now uses a secure configuration system to keep your Google Maps API key private. The API key is stored in a separate configuration file that is excluded from version control.

## 🚀 Quick Setup

### 1. Get Your Google Maps API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the **Maps JavaScript API**
4. Go to **Credentials** → **Create Credentials** → **API Key**
5. Copy your API key

### 2. Configure Your API Key
1. Open the `config.js` file
2. Replace `YOUR_API_KEY_HERE` with your actual API key:

```javascript
const CONFIG = {
    GOOGLE_MAPS_API_KEY: 'AIzaSyYourActualAPIKeyHere',
    // ... other settings
};
```

### 3. Test Your Setup
1. Open `index.html` in your browser
2. The map should load with your API key
3. If you see an error, check that your API key is correct

## 🔒 Security Features

### What's Protected
- ✅ API key is stored in `config.js` (excluded from git)
- ✅ No hardcoded API keys in HTML or JavaScript
- ✅ Error handling for missing/invalid API keys
- ✅ User-friendly error messages

### Files Structure
```
Interactive-Campus-Map/
├── index.html          # Main HTML file
├── script.js           # Main JavaScript functionality
├── styles.css          # CSS styling
├── config.js           # 🔐 API key configuration (PRIVATE)
├── api-loader.js       # Dynamic API loading
├── .gitignore          # Excludes config.js from git
└── README.md           # Documentation
```

## 🛠️ Configuration Options

You can customize the map behavior by editing `config.js`:

```javascript
const CONFIG = {
    // Required: Your Google Maps API key
    GOOGLE_MAPS_API_KEY: 'your-api-key-here',
    
    // Optional: Map settings
    MAP_CENTER: {
        lat: 40.7982,    // Penn State campus center
        lng: -77.8599
    },
    MAP_ZOOM: 16,        // Initial zoom level
    
    // Optional: Marker colors
    MARKER_COLOR: '#667eea',           // Normal marker color
    MARKER_SELECTED_COLOR: '#ff6b6b'   // Selected marker color
};
```

## 🚨 Troubleshooting

### "Configuration Required" Error
- **Problem**: API key not configured
- **Solution**: Update `config.js` with your actual API key

### "API Error" Message
- **Problem**: Invalid API key or API not enabled
- **Solution**: 
  1. Check your API key in `config.js`
  2. Verify Maps JavaScript API is enabled in Google Cloud Console
  3. Check API key restrictions

### Map Not Loading
- **Problem**: Network or API issues
- **Solution**: 
  1. Check browser console for errors
  2. Verify internet connection
  3. Check API key billing settings

## 📝 Development Notes

### For Developers
- The `config.js` file is automatically excluded from git commits
- API key is loaded dynamically to prevent exposure
- All configuration is centralized in one file
- Fallback values are provided for all settings

### For Deployment
- Make sure `config.js` is deployed with your application
- Never commit `config.js` to version control
- Consider using environment variables for production

## 🔄 Updating Configuration

To update any settings:
1. Edit `config.js`
2. Refresh your browser
3. Changes take effect immediately

## 📞 Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify your API key is correct
3. Ensure Maps JavaScript API is enabled
4. Check the [Google Maps API documentation](https://developers.google.com/maps/documentation/javascript)

---

**Remember**: Keep your `config.js` file private and never commit it to version control!
