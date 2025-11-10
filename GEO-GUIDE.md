# 🌍 Geographic Features Guide

## Table of Contents
1. [Overview](#overview)
2. [How Geographic Features Work](#how-geographic-features-work)
3. [Setting Up Geographic Features](#setting-up-geographic-features)
4. [API Integrations](#api-integrations)
5. [Customization Guide](#customization-guide)
6. [Troubleshooting](#troubleshooting)

## Overview

The PlateUp website now includes advanced geographic features that personalize the cooking experience based on your location, weather, and regional preferences. These features help users discover recipes that are more relevant to their local context.

### Key Benefits
- **Personalized Experience**: Recipes matched to your local climate and cuisine preferences
- **Practical Cooking**: Ingredient alternatives available in your region
- **Universal Usability**: Automatic unit conversions for different measurement systems
- **Weather Integration**: Recipe recommendations based on current weather conditions

## How Geographic Features Work

### 1. Location Detection
```javascript
// Automatic detection using browser geolocation
navigator.geolocation.getCurrentPosition(
    (position) => {
        const { latitude, longitude } = position.coords;
        // Store location and load relevant data
    },
    (error) => {
        // Fallback to default location (New York)
    }
);
```

**Process Flow:**
1. User visits website
2. Browser requests location permission
3. If granted: Detect coordinates and get location name
4. If denied: Use default location
5. Load weather data for detected location
6. Update recommendations based on location

### 2. Weather Integration
```javascript
// Weather-based recipe categorization
const weatherCategories = {
    hot: ['cold', 'salad', 'grilled', 'summer'],
    cold: ['warm', 'stew', 'soup', 'winter'],
    rainy: ['comfort', 'soup', 'warm', 'baking'],
    sunny: ['fresh', 'grilled', 'barbecue', 'light']
};
```

**Weather Mapping:**
- **Hot Weather (>25°C)**: Cold dishes, salads, grilled items
- **Cold Weather (<10°C)**: Warm stews, soups, comfort foods
- **Rainy Weather**: Cozy baked goods, warm meals
- **Sunny Weather**: Fresh, light dishes, barbecues

### 3. Unit Conversion System
```javascript
// Temperature conversion
function convertTemperature(value, fromUnit, toUnit) {
    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        return (value * 9/5) + 32;
    }
    // ... other conversions
}

// Weight conversion
function convertWeight(value, fromUnit, toUnit) {
    if (fromUnit === 'metric' && toUnit === 'imperial') {
        if (unitType === 'g') {
            return { value: value / 28.35, unit: 'oz' };
        }
    }
}
```

**Supported Conversions:**
- **Temperature**: Celsius (°C) ↔ Fahrenheit (°F)
- **Weight**: Metric (kg/g) ↔ Imperial (lb/oz)
- **Automatic Detection**: User preferences saved and applied

### 4. Regional Ingredient Alternatives
```javascript
const ingredientAlternatives = {
    'US': {
        'coriander': 'parsley',
        'aubergine': 'eggplant',
        'courgette': 'zucchini'
    },
    'GB': {
        'zucchini': 'courgette',
        'eggplant': 'aubergine'
    }
};
```

**How It Works:**
1. Detect user's country/region
2. Check if ingredient has local alternative
3. Display alternative in recipe details
4. Help with local shopping

## Setting Up Geographic Features

### 1. Enable Location Services
```html
<!-- Browser will request location permission automatically -->
<div class="location-bar">
    <span class="location-text" id="userLocation">
        Detecting your location...
    </span>
</div>
```

**Requirements:**
- HTTPS connection (required by browsers)
- User consent for location access
- JavaScript enabled

### 2. Configure API Keys
No API keys required! The features use free services:
- **Open-Meteo**: Weather data (no key needed)
- **BigDataCloud**: Location names (no key needed)
- **Browser Geolocation**: Native browser feature

### 3. Customize Regional Data
```javascript
// Add new regional preferences
const regionalPreferences = {
    'YOUR_COUNTRY': {
        cuisines: ['local_cuisine1', 'local_cuisine2'],
        popular: ['dish1', 'dish2', 'dish3']
    }
};

// Add ingredient alternatives
const ingredientAlternatives = {
    'YOUR_COUNTRY': {
        'foreign_ingredient': 'local_alternative'
    }
};
```

### 4. Set Unit Preferences
```javascript
// Default settings (can be overridden by user)
geoSettings = {
    temperatureUnit: 'celsius',    // or 'fahrenheit'
    weightUnit: 'metric',          // or 'imperial'
    recipePreference: 'global',     // or 'local' or 'weather'
    enableAlternatives: true        // show ingredient alternatives
};
```

## API Integrations

### 1. Open-Meteo Weather API
```javascript
// Free weather API (no key required)
const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,weather_code&forecast_days=1`;

// Returns: temperature, weather code, wind speed
{
    "current": {
        "temperature_2m": 22.5,
        "weather_code": 2,  // Cloudy
        "wind_speed_10m": 12.3
    }
}
```

### 2. BigDataCloud Reverse Geocoding
```javascript
// Convert coordinates to location name
const locationUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`;

// Returns: city, country, region
{
    "city": "New York",
    "countryName": "United States",
    "locality": "Manhattan"
}
```

### 3. Browser Geolocation API
```javascript
// Native browser feature
navigator.geolocation.getCurrentPosition(
    successCallback,
    errorCallback,
    {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000
    }
);
```

## Customization Guide

### 1. Adding New Weather Categories
```javascript
// Extend weather categorization
const customWeatherCategories = {
    humid: ['fresh', 'salad', 'light', 'grilled'],
    dry: ['moist', 'soup', 'stew', 'baking'],
    windy: ['substantial', 'heavy', 'comfort', 'warming']
};
```

### 2. Creating Regional Recipe Filters
```javascript
// Add seasonal preferences by region
const seasonalPreferences = {
    'US': {
        winter: ['soup', 'stew', 'comfort'],
        summer: ['grill', 'salad', 'cold'],
        spring: ['fresh', 'light', 'green'],
        fall: ['warm', 'baking', 'seasonal']
    }
};
```

### 3. Customizing Unit Conversion Rules
```javascript
// Add custom conversion rules
const customConversions = {
    temperature: {
        celsius: {
            custom_formula: (celsius) => (celsius * 9/5) + 32
        }
    },
    volume: {
        metric: ['ml', 'l'],
        imperial: ['fl_oz', 'cup', 'pint']
    }
};
```

### 4. Extending Ingredient Alternatives
```javascript
// Add more regional ingredient mappings
const extendedAlternatives = {
    'CA': {  // Canada
        'cilantro': 'coriander',
        'zucchini': 'courgette',
        'eggplant': 'aubergine'
    },
    'IN': {  // India
        'basil': 'holy basil (tulsi)',
        'oregano': 'carom seeds (ajwain)'
    }
};
```

### 5. Custom Weather API Integration
```javascript
// Replace Open-Meteo with your preferred weather service
async function loadWeatherDataCustom(lat, lng) {
    try {
        const response = await fetch(
            `YOUR_WEATHER_API_ENDPOINT?lat=${lat}&lon=${lng}&key=YOUR_API_KEY`
        );
        const data = await response.json();
        
        // Map to our format
        return {
            temperature: data.temp,
            condition: data.condition,
            windSpeed: data.wind_speed
        };
    } catch (error) {
        console.error('Weather API error:', error);
        return null;
    }
}
```

## Troubleshooting

### Common Issues and Solutions

#### 1. Location Not Detected
**Symptoms:** Shows "Location detection not supported" or default location
**Solutions:**
```javascript
// Check geolocation support
if (navigator.geolocation) {
    console.log('Geolocation supported');
} else {
    console.log('Geolocation not supported');
}

// Manual location input
function changeLocation() {
    const newLocation = prompt('Enter your city name:');
    if (newLocation) {
        document.getElementById('userLocation').textContent = newLocation;
    }
}
```

#### 2. Weather Data Not Loading
**Symptoms:** Shows "Weather unavailable" message
**Solutions:**
- Check internet connection
- Verify HTTPS connection (required for weather APIs)
- Check browser console for API errors
- Weather service may be temporarily down

```javascript
// Debug weather API
async function debugWeather() {
    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();
        console.log('Weather API response:', data);
    } catch (error) {
        console.error('Weather API error:', error);
    }
}
```

#### 3. Unit Conversions Not Working
**Symptoms:** Temperatures/weights not converting properly
**Solutions:**
- Check if settings are saved in localStorage
- Verify conversion functions are called
- Check browser console for JavaScript errors

```javascript
// Debug unit settings
function debugUnits() {
    console.log('Current settings:', geoSettings);
    console.log('Temperature unit:', geoSettings.temperatureUnit);
    console.log('Weight unit:', geoSettings.weightUnit);
}
```

#### 4. Ingredient Alternatives Not Showing
**Symptoms:** No local alternatives displayed
**Solutions:**
- Check if alternatives are enabled in settings
- Verify regional detection is working
- Confirm ingredient is in alternatives database

```javascript
// Debug ingredient alternatives
function debugAlternatives(ingredient) {
    const alternatives = ingredientAlternatives[getUserCountry()] || {};
    console.log('Available alternatives for', ingredient, ':', alternatives[ingredient]);
}
```

#### 5. Performance Issues
**Symptoms:** Slow loading, multiple API calls
**Solutions:**
- Cache location and weather data
- Implement loading indicators
- Add request timeouts

```javascript
// Implement caching
const locationCache = {
    data: null,
    timestamp: 0,
    maxAge: 300000 // 5 minutes
};

function getCachedLocation() {
    const now = Date.now();
    if (locationCache.data && (now - locationCache.timestamp) < locationCache.maxAge) {
        return locationCache.data;
    }
    return null;
}
```

### Advanced Debugging

#### 1. Enable Debug Mode
```javascript
// Add to script.js for debugging
const DEBUG_GEO = true;

function geoDebug(message, data = null) {
    if (DEBUG_GEO) {
        console.log('[GEO DEBUG]', message, data);
    }
}
```

#### 2. Test Individual Components
```javascript
// Test location detection
function testLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => geoDebug('Location detected', pos.coords),
            (err) => geoDebug('Location error', err),
            { timeout: 5000 }
        );
    }
}

// Test weather API
function testWeather() {
    if (geoSettings.userLocation) {
        loadWeatherData(
            geoSettings.userLocation.lat,
            geoSettings.userLocation.lng
        );
    }
}
```

#### 3. Monitor API Usage
```javascript
// Track API calls
let apiCallCount = 0;

function trackApiCall(apiName) {
    apiCallCount++;
    console.log(`[API] ${apiName} call #${apiCallCount}`);
}
```

## Best Practices

### 1. Performance
- Cache location and weather data
- Use loading indicators
- Implement request timeouts
- Handle API failures gracefully

### 2. Privacy
- Only request location when needed
- Provide clear privacy information
- Allow manual location input as alternative
- Don't store precise coordinates unnecessarily

### 3. User Experience
- Provide clear feedback for all actions
- Show loading states during API calls
- Fallback gracefully when services unavailable
- Allow users to disable features they don't want

### 4. Reliability
- Test with different browsers and devices
- Provide manual alternatives for automated features
- Handle edge cases (denied permissions, no internet, etc.)
- Log errors for monitoring and debugging

## Future Enhancements

### Planned Features
- **Multi-language Support**: Translate ingredient names by region
- **Seasonal Adjustments**: Recipe recommendations based on local seasons
- **Price Integration**: Show ingredient prices from local stores
- **Delivery Integration**: Link to local grocery delivery services
- **Social Features**: Share location-based recipe discoveries

### API Improvements
- **More Weather Services**: Integration with additional weather providers
- **Local Events**: Recipe recommendations for local food events
- **Cultural Calendar**: Recipe suggestions for local holidays and celebrations
- **Grocery Store Integration**: Link to local supermarket websites

---

*This guide covers the geographic features implementation. For technical questions or feature requests, please refer to the main project documentation or create an issue in the project repository.*