# Modern Recipe Website

A clean, modern, and responsive recipe website built with vanilla HTML, CSS, and JavaScript. Features both static sample recipes and dynamic recipes loaded from TheMealDB API with advanced SEO optimization and AdSense monetization.

## 🚀 Features

### Core Features
✅ **Simple & Fast** - No complex build tools (React, TypeScript, Vite)
✅ **Easy to Modify** - Just HTML, CSS, JavaScript files
✅ **No Installation Required** - Open the file directly in your browser
✅ **Responsive** - Works on all devices
✅ **Clean Design** - Modern and user-friendly interface

### Recipe Content
✅ **Static Recipes** - 8 pre-loaded sample recipes
✅ **Trending Recipes** - Dynamic recipes from TheMealDB API
✅ **Daily Limits** - 6 new recipes per day
✅ **Local Storage** - Saves recipes offline

### 🌍 **NEW: Geographic Features**
✅ **Auto Location Detection** - Automatically detects user's location
✅ **Weather-Based Recommendations** - Recipes based on current weather
✅ **Unit Conversion** - Temperature (°C/°F) and weight (kg/lb) conversion
✅ **Local Ingredient Alternatives** - Shows region-specific ingredient substitutes
✅ **Local Cuisine Preferences** - Curated recipes by geographic region
✅ **Personalized Settings** - Customizable unit preferences and recipe types
✅ **Regional Recipe Flags** - Visual indicators of recipe origins

### Technical Features
✅ **Advanced SEO** - Structured data, meta tags, sitemap
✅ **Print & Share** - Built-in recipe printing and sharing
✅ **AdSense Integration** - Monetization-ready with professional ad placements

## 💰 AdSense Integration

### Professional Ad Placements
The website includes strategically placed AdSense advertising areas:

1. **Hero Banner** (728x90 or responsive)
   - Position: Below hero section for maximum visibility
   - Impact: High-value impressions
   - Best for: Food brands and kitchen appliances

2. **Sidebar Skyscraper** (160x600)
   - Position: Sticky sidebar on desktop
   - Impact: Good for recipe content engagement
   - Best for: Cooking courses and food delivery

3. **Modal Rectangle** (300x250 or responsive)
   - Position: Within recipe detail modal
   - Impact: High engagement context
   - Best for: Ingredient shopping and kitchen tools

4. **Footer Banner** (728x90 or responsive)
   - Position: Footer section for brand awareness
   - Impact: Final impression before leaving
   - Best for: Newsletter signup and app promotion

### AdSense Features
- **Auto-responsive**: Ad units adapt to screen size
- **Performance optimized**: Delayed loading for better UX
- **Policy compliant**: Clear ad labels and safe placements
- **Ad blocker detection**: Graceful handling of blocked ads
- **Analytics ready**: Event tracking for revenue optimization

### Setup Requirements
- **AdSense account**: Google AdSense approval required
- **Content quality**: Original recipes and cooking content
- **Policy compliance**: AdSense policies must be followed
- **Performance monitoring**: Regular review of ad performance

### Revenue Optimization
- **High-value niches**: Food and cooking keywords perform well
- **Mobile optimization**: 70%+ traffic is mobile
- **User engagement**: Longer sessions = better ad performance
- **Seasonal content**: Holiday recipes drive higher RPM

See `ADSENSE-GUIDE.md` for detailed setup instructions and best practices.

## 🎯 SEO Optimization

### Meta Tags & Open Graph
- Comprehensive meta descriptions and keywords
- Open Graph tags for social media sharing
- Twitter Card optimization
- Structured data (Schema.org) for recipes
- Canonical URLs and proper heading structure

### Search Engine Features
- **XML Sitemap**: Search engines can index content easily
- **Robots.txt**: Proper crawling instructions
- **Structured Data**: Rich snippets for recipe results
- **Social Media Cards**: Enhanced sharing on social platforms

### Performance Optimization
- **Lazy Loading**: Images load only when needed
- **Local Storage**: Fast subsequent visits
- **Minimal Dependencies**: Faster loading times
- **Mobile-First Design**: Better mobile search rankings

## 📁 File Structure

```
simple-recipe-website/
├── index.html          # Main HTML page with SEO optimization
├── style.css           # All CSS styles and responsive design
├── script.js           # JavaScript functionality & API integration
├── sitemap.xml         # XML sitemap for search engines
├── robots.txt          # Search engine crawling instructions
├── ADSENSE-GUIDE.md    # Comprehensive AdSense setup guide
└── README.md           # This documentation file
```

## 🔄 Daily Recipe System

### Auto-Loading
- **Daily Limit**: Maximum 6 new recipes per day
- **Auto-Start**: Loads 6 trending recipes 2 seconds after page load
- **Storage Limit**: Maximum 200 recipes to prevent storage overflow
- **Deduplication**: No duplicate recipes from API

### Manual Controls
- **Load More**: Button to manually load additional recipes
- **Clear Data**: Reset all stored recipes
- **Daily Reset**: Limits reset automatically every day
- **Statistics**: Real-time count of loaded recipes

### Local Storage Features
- **Offline Access**: Recipes saved locally for offline viewing
- **Persistent Data**: Recipes remain after browser restart
- **Smart Storage**: Automatic cleanup when limit reached
- **Date Tracking**: Monitors daily loading activity

## 🌐 API Integration

### TheMealDB.com
- **Free Service**: No registration or API keys required
- **Real Recipes**: Authentic recipes from around the world
- **High Quality**: Professional food photography
- **Rich Data**: Complete ingredients, instructions, and metadata
- **Reliable**: 99.9% uptime with fair usage policies

### Rate Limiting & Ethics
- **Respectful Usage**: Maximum 6 requests per day
- **Error Handling**: Graceful fallbacks for API issues
- **Caching**: Local storage reduces API calls
- **Attribution**: Clear labeling of API-sourced content

## 🎨 Enhanced User Interface

### Modern Design Elements
- **Hero Section**: Compelling introduction with statistics
- **Recipe Cards**: Clean card design with high-quality images
- **Trending Badges**: Special badges for API-sourced recipes
- **New Recipe Indicators**: Visual cues for recently added content

### Interactive Features
- **Search & Filter**: Advanced filtering by cuisine, difficulty, and keywords
- **Recipe Details**: Comprehensive modal with print and share options
- **Statistics Dashboard**: Real-time counts and status information
- **Daily Progress**: Visual indicators of daily loading activity

### Mobile Optimization
- **Touch-Friendly**: Large buttons and easy navigation
- **Responsive Images**: Optimized for various screen sizes
- **Fast Loading**: Minimal resource usage for mobile networks
- **Offline Support**: Core functionality works without internet

## 📱 New Features

### Recipe Actions
- **Print Recipe**: Clean, formatted print layout
- **Share Recipe**: Native sharing or clipboard copy
- **Recipe Info**: Detailed metadata and nutritional information
- **Print-Friendly**: Optimized layouts for printing

### Enhanced Recipe Details
- **Structured Data**: Schema.org markup for rich snippets
- **Visual Indicators**: New recipe badges and trending labels
- **Extended Information**: Prep time, cook time, ingredient count
- **Tag System**: Recipe categorization and filtering

### Performance & Analytics
- **Real-time Stats**: Live counts of total and daily recipes
- **Storage Monitoring**: Alerts for storage limits
- **Error Recovery**: Automatic retries and fallback content
- **User Feedback**: Success and error notifications

## 🛠️ Technical Implementation

### SEO Best Practices
```html
<!-- Structured Data Example -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Recipe",
  "name": "Recipe Title",
  "recipeCuisine": "Italian",
  "prepTime": "PT15M",
  "recipeIngredient": ["Ingredient 1", "Ingredient 2"]
}
</script>
```

### Local Storage System
```javascript
// Storage keys
const STORAGE_KEY = 'plateup_data';
const DAILY_RECIPES_KEY = 'daily_recipes_dates';

// Data structure
{
  recipes: [...],
  lastUpdated: "2024-11-10T06:00:00.000Z",
  version: "2.0"
}
```

### API Integration
```javascript
// Rate-limited API calls
const recipesToLoad = Math.min(remainingToday, remainingSlot, 6);
const maxAttempts = recipesToLoad * 3; // Prevent infinite loops
```

## 🚀 Deployment & Hosting

### Recommended Platforms
1. **Netlify**: Drag-and-drop deployment with automatic HTTPS
2. **Vercel**: Git integration with global CDN
3. **GitHub Pages**: Free hosting for public repositories
4. **AWS S3**: Enterprise-grade static hosting

### SEO Setup
- **Custom Domain**: Configure for better search rankings
- **Google Search Console**: Submit sitemap for indexing
- **Social Media**: Set up Open Graph for better sharing
- **Analytics**: Add Google Analytics for traffic insights

### Performance Tips
- **Enable Compression**: Gzip/Brotli for faster loading
- **Set Cache Headers**: Optimize repeat visits
- **CDN Usage**: Use global content delivery networks
- **Image Optimization**: Compress and resize images

## 📊 Search Engine Benefits

### Rich Snippets
- **Recipe Schema**: Star ratings, cooking times, ingredients
- **Organization Data**: Business information and contact details
- **Website Data**: Site structure and navigation information
- **Breadcrumb Navigation**: Clear page hierarchy

### Social Media Optimization
- **Open Graph**: Rich Facebook and LinkedIn sharing
- **Twitter Cards**: Enhanced Twitter post previews
- **Pinterest Ready**: Optimized for recipe pinning
- **Instagram Integration**: Recipe story sharing

### Voice Search Ready
- **Semantic HTML**: Proper heading structure
- **Descriptive Content**: Clear recipe descriptions
- **Structured Data**: Machine-readable recipe information
- **FAQ Compatible**: Answer common cooking questions

## 🔧 Customization Guide

### Adding New Recipe Sources
1. **API Integration**: Add new endpoints to `script.js`
2. **Data Mapping**: Create conversion functions like `convertApiRecipe()`
3. **Rate Limiting**: Implement respectful usage patterns
4. **Error Handling**: Add fallback mechanisms

### Styling Customization
```css
/* Color scheme variables */
:root {
    --primary: #ff6b6b;        /* Main brand color */
    --secondary: #4ecdc4;      /* Secondary color */
    --success: #51cf66;        /* Success indicators */
    --warning: #ffd43b;        /* Warning messages */
}
```

### Feature Extensions
- **User Accounts**: Add login and favorites system
- **Recipe Reviews**: Enable user ratings and comments
- **Meal Planning**: Create weekly meal plans
- **Shopping Lists**: Generate ingredient lists
- **Nutrition Tracking**: Add calorie and macro tracking

## 📈 Analytics & Monitoring

### Key Metrics
- **Recipe Views**: Most popular recipes
- **API Usage**: Daily request patterns
- **User Engagement**: Time spent and bounce rates
- **Mobile Usage**: Device and browser statistics

### Search Performance
- **Keyword Rankings**: Track recipe search positions
- **Click-Through Rates**: Monitor search result performance
- **Featured Snippets**: Identify rich snippet opportunities
- **Local Search**: Track location-based recipe searches

## 🆘 Troubleshooting

### Common Issues
**Recipes not loading**: Check internet connection and API status
**Storage full**: Clear data using the "Clear All" button
**Mobile issues**: Ensure viewport meta tag is present
**SEO problems**: Verify sitemap submission to search engines

### Debug Tools
- **Browser Console**: Check for JavaScript errors
- **Network Tab**: Monitor API request status
- **Local Storage**: Verify data persistence
- **Search Console**: Monitor search engine indexing

## 📄 License & Credits

### Content Sources
- **TheMealDB.com**: Free recipe database and API
- **Community Contributors**: User-generated recipe content
- **Food Photography**: High-quality images from API
- **Unicode Icons**: Cross-platform emoji support

### Technical Stack
- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with custom properties
- **JavaScript ES6+**: Modern language features
- **Local Storage**: Client-side data persistence
- **Fetch API**: Modern HTTP requests

---

*This enhanced version combines simplicity with advanced features, providing both excellent user experience and optimal search engine visibility. The daily loading system ensures fresh content while the local storage provides offline functionality.*

## New Feature: Trending Recipes API

### Auto-Loading
- The website automatically loads 6 trending recipes from TheMealDB API after 2 seconds
- Visual loading indicators and success/error notifications
- Recipes appear with real food photography and "🌟 Trending" badges

### Manual Loading
- Click the "🔥 Load Trending Recipes" button to load 6 additional recipes
- Loading spinner and progress indicators
- Graceful error handling for network issues

### API Details
- **Source**: TheMealDB.com (free recipe API)
- **Endpoint**: `https://www.themealdb.com/api/json/v1/1/random.php`
- **Data**: Real recipes with images, ingredients, and instructions
- **No Registration**: Free API, no keys required
- **Rate Limiting**: Respectful usage with proper error handling

## How to Use

### 1. Open the Website
Simply open the `index.html` file in any web browser.

### 2. Automatic Loading
- The website loads 8 static recipes first
- After 2 seconds, it automatically loads 6 trending recipes
- You can click the trending button to load more

### 3. Add New Static Recipes
Open `script.js` and add a new recipe to the `recipes` array:

```javascript
{
    id: 9,
    title: "Recipe Name",
    description: "Brief description",
    cuisine: "italian", // italian, french, asian, mexican, arabic, american
    difficulty: "easy", // easy, medium, hard
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 4,
    rating: 4.5,
    calories: 400,
    ingredients: [
        { name: "Ingredient 1", amount: "Amount 1" },
        { name: "Ingredient 2", amount: "Amount 2" }
    ],
    instructions: [
        "Step 1",
        "Step 2",
        "Step 3"
    ]
}
```

### 4. Customize the Design
Open `style.css` to modify colors and fonts:

```css
:root {
    --primary: #ff6b6b;       /* Primary color */
    --secondary: #4ecdc4;     /* Secondary color */
    --success: #51cf66;       /* Success color */
    --warning: #ffd43b;       /* Warning color */
    /* ... */
}
```

## Available Features

### 1. Search and Filter
- 🔍 Search by name or description
- 🍽️ Filter by cuisine type
- 📊 Filter by difficulty level
- ✨ Works with both static and API recipes

### 2. Recipe Details
- Click any recipe to view full details
- Ingredients and amounts
- Detailed preparation steps
- Nutritional information
- **New**: High-quality food photography for API recipes
- **New**: Links to original recipe sources

### 3. Responsive Design
- Works on mobile devices
- Works on tablets
- Works on desktop computers

### 4. API Integration Features
- **Real-time Updates**: Fresh recipes from around the world
- **Visual Indicators**: "🌟 Trending" badges on API recipes
- **Loading States**: Spinner animations and progress feedback
- **Error Handling**: Graceful fallbacks when API is unavailable
- **Notifications**: Success/failure messages for user feedback

## Differences: Original vs Simplified vs API Enhanced

### Original Version (Complex):
- ❌ React + TypeScript
- ❌ Vite (build tool)
- ❌ Node.js required
- ❌ Package installation (npm install)
- ❌ Complex build process
- ❌ Multiple configuration files
- ❌ AdSense components
- ❌ Complex routing system

### Simplified Version (Previous):
- ✅ HTML + CSS + JavaScript only
- ✅ No build tools needed
- ✅ No Node.js required
- ✅ No installation needed
- ✅ Open file directly
- ✅ Just 3 files
- ✅ Clean and simple design
- ✅ Easy to understand and modify

### API Enhanced Version (Current):
- ✅ All simplified version features
- ✅ Dynamic recipe loading from TheMealDB API
- ✅ Real food photography
- ✅ Trending recipes with badges
- ✅ Loading indicators and notifications
- ✅ Error handling for network issues
- ✅ Automatic and manual recipe loading

## Deploying the Website

You can deploy this website on any free hosting service:

### 1. GitHub Pages
1. Upload files to a GitHub repository
2. Go to repository settings
3. Enable GitHub Pages
4. Your site will be available at: `username.github.io/repository-name`

### 2. Netlify
1. Sign up for a Netlify account
2. Drag and drop the folder into the dashboard
3. Your site will be deployed automatically

### 3. Vercel
1. Sign up for a Vercel account
2. Import the project
3. It will be deployed automatically

## API Usage and Rate Limits

### TheMealDB.com API
- **Free Service**: No registration required
- **Rate Limits**: Fair usage, no strict limits for normal use
- **Data Quality**: Community-sourced recipes with photos
- **Update Frequency**: Fresh content with every request
- **Reliability**: Generally stable, occasional maintenance downtime

### Error Handling
The website handles various error scenarios:
- Network connectivity issues
- API service unavailability
- Malformed API responses
- Timeout errors

Notifications will inform users of any issues, and the website continues to function with existing recipes.

## Advanced Customization

### Adding Recipe Images
1. Create an `images` folder in the same location
2. Place images inside it
3. In `style.css`, modify:
```css
.recipe-image {
    background-image: url('images/recipe-1.jpg');
}
```

Or add images dynamically in `script.js` by adding an `image` property to each recipe object.

### Changing Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary: #your-color;
    --secondary: #your-color;
}
```

### Modifying API Behavior
In `script.js`, you can:
- Change the number of recipes loaded
- Modify loading timeouts
- Customize error messages
- Add caching mechanisms

### Adding More Features
You can easily add:
- Recipe categories
- User ratings
- Comments section
- Print recipe functionality
- Share buttons
- Favorite recipes
- Offline storage for API recipes
- Recipe scaling calculator

## Browser Compatibility

This website works on all modern browsers:
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

**New API Features Require**:
- Fetch API support (built into all modern browsers)
- ES6+ JavaScript support
- CSS Grid support

## Sample Recipes Included

The website comes with 8 static sample recipes:
1. Italian Spaghetti Carbonara
2. Mexican Beef Tacos
3. Japanese Teriyaki Chicken
4. French Onion Soup
5. Crispy Falafel (Arabic)
6. Margherita Pizza (Italian)
7. American Pancakes
8. Indian Chicken Curry

**Plus unlimited trending recipes** from TheMealDB API!

## API Recipes Features

Trending recipes from the API include:
- **High-Quality Photos**: Professional food photography
- **Authentic Recipes**: Traditional dishes from around the world
- **Complete Information**: Ingredients, instructions, nutritional data
- **Source Links**: Links to original recipe sources when available
- **Cuisine Diversity**: International recipes from various cultures

## 🌍 Geographic & Weather Features

### Auto Location Detection
The website automatically detects your location using browser geolocation:
- **Privacy Respecting**: Only requests location when needed
- **Fallback System**: Uses default location if access denied
- **Real-time Updates**: Location updates automatically

### Weather-Based Recipe Recommendations
- **Current Weather Data**: Uses Open-Meteo free API
- **Smart Categorization**: Recipes matched to weather conditions
  - 🔥 Hot weather (>25°C): Cold dishes, salads, grilled foods
  - ❄️ Cold weather (<10°C): Warm stews, soups, comfort food
  - 🌧️ Rainy weather: Cozy baked goods and warm meals
  - ☀️ Sunny weather: Fresh, light dishes
- **Visual Indicators**: Weather icons in recipe cards
- **Personalized**: Recipes adapt to your local climate

### Unit Conversion System
- **Temperature Units**: 
  - Celsius (°C) ↔ Fahrenheit (°F)
  - Automatic conversion and display
- **Weight Units**:
  - Metric: kg/g
  - Imperial: lb/oz
  - Smart conversion for ingredient amounts
- **Toggle Button**: Quick switching in header
- **Settings Panel**: Detailed unit preferences

### Local Ingredient Alternatives
- **Regional Substitutions**: Shows local alternatives for rare ingredients
- **Smart Detection**: Identifies your region automatically
- **Examples**:
  - US users: "Coriander" → "Parsley"
  - UK users: "Zucchini" → "Courgette"
  - AU users: Standardized to international terms
- **Shopping Helper**: Makes grocery shopping easier locally

### Regional Recipe Preferences
- **Country-Specific Cuisines**: Prioritizes familiar local dishes
- **Cultural Adaptation**: Adapts recipes to local tastes
- **Popularity Indicators**: Shows regional favorites
- **Flag System**: Visual cuisine identification

### Geographic Settings Panel
- **Temperature Preference**: Choose °C or °F
- **Weight System**: Metric or Imperial measurements
- **Recipe Style**: Global, Local, or Weather-based preferences
- **Ingredient Alternatives**: Enable/disable local substitutes
- **Auto-Save**: Settings persist across visits

### API Integrations
- **Geolocation API**: Browser-based location detection
- **Open-Meteo**: Free weather data (no API key required)
- **BigDataCloud**: Reverse geocoding for location names
- **TheMealDB**: Recipe content with geographic metadata

## Troubleshooting

### Common Issues

**API Recipes Not Loading**:
- Check internet connection
- TheMealDB.com might be temporarily unavailable
- Try clicking the "Load Trending Recipes" button manually
- Check browser console for error messages

**Images Not Displaying**:
- API images load from external servers
- Some images might not load due to broken links
- Static recipes don't have images (by design)
- Try refreshing the page

**Performance Issues**:
- The website is optimized for performance
- API requests happen asynchronously
- Only 6 recipes are loaded at a time to prevent overwhelming the API
- Browser caching helps with repeat visits

### Geographic Features Issues

**Location Not Detected**:
- Ensure you allow location access when prompted
- Check if you're using HTTPS (required for geolocation)
- Some browsers block location in local files
- Use "Change" button to manually set location

**Weather Not Loading**:
- Check internet connection for weather API
- Weather service might be temporarily unavailable
- Location coordinates needed for weather data
- Fallback shows "Weather unavailable" message

**Unit Conversions Not Working**:
- Settings are saved in browser localStorage
- Clear browser cache if settings don't persist
- Check if JavaScript is enabled
- Unit toggle button in header should update immediately

**Ingredient Alternatives Not Showing**:
- Enable "Ingredient Alternatives" in Settings
- Regional detection is simplified (mainly US/UK/AU)
- Only shows alternatives for common regional differences
- Some ingredients don't have local alternatives

**Weather-Based Recommendations Inaccurate**:
- Weather API provides general conditions
- Recommendations are suggestions, not weather-dependent cooking rules
- Fallback to global recipes if weather data unavailable
- Check if location permissions are granted

## License

This project is open source and free to use and modify.

## Credits

- **API Source**: TheMealDB.com - Free recipe database and API
- **Icons**: Unicode emoji characters for cross-platform compatibility
- **Design**: Modern CSS Grid and Flexbox layout patterns
- **Images**: Food photography from TheMealDB API contributors

Created as an enhanced version of a simplified React-based recipe website with added API integration for dynamic content.

---

**Note**: This enhanced version combines the simplicity of vanilla JavaScript with the power of live API data. The static recipes ensure the website works offline, while API integration provides fresh, trending content.

## Tips for Developers

- The API integration is modular - you can easily swap TheMealDB for another API
- Error handling is built-in with user-friendly messages
- Loading states provide good user experience
- The code is well-commented for easy modification
- Consider adding caching for better performance in production

Enjoy cooking and coding! 🍳👨‍🍳
