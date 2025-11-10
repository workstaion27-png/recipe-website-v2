// Geo and Weather Data
let geoSettings = {
    userLocation: null,
    currentWeather: null,
    temperatureUnit: localStorage.getItem('temperatureUnit') || 'celsius',
    weightUnit: localStorage.getItem('weightUnit') || 'metric',
    recipePreference: localStorage.getItem('recipePreference') || 'global',
    enableAlternatives: localStorage.getItem('enableAlternatives') !== 'false'
};

// Weather-based recipe categories
const weatherCategories = {
    hot: ['cold', 'salad', 'grilled', 'summer'],
    cold: ['warm', 'stew', 'soup', 'winter'],
    rainy: ['comfort', 'soup', 'warm', 'baking'],
    sunny: ['fresh', 'grilled', 'barbecue', 'light'],
    cloudy: ['moderate', 'casserole', 'pasta', 'baking']
};

// Local cuisine preferences by region
const regionalPreferences = {
    'US': { cuisines: ['american', 'mexican'], popular: ['pizza', 'burger', 'tacos'] },
    'GB': { cuisines: ['british'], popular: ['fish', 'roast', 'pie'] },
    'IT': { cuisines: ['italian'], popular: ['pasta', 'pizza', 'risotto'] },
    'FR': { cuisines: ['french'], popular: ['croissant', 'baguette', 'coq'] },
    'DE': { cuisines: ['german'], popular: ['sausage', 'pretzel', 'schnitzel'] },
    'JP': { cuisines: ['japanese'], popular: ['sushi', 'ramen', 'tempura'] },
    'CN': { cuisines: ['chinese'], popular: ['dumpling', 'noodles', 'rice'] },
    'IN': { cuisines: ['indian'], popular: ['curry', 'tandoori', 'naan'] },
    'BR': { cuisines: ['brazilian'], popular: ['feijoada', 'pão', 'açaí'] },
    'AR': { cuisines: ['argentinian'], popular: ['asado', 'empanada', 'mate'] },
    'RU': { cuisines: ['russian'], popular: ['borscht', 'pelmeni', 'blini'] },
    'ES': { cuisines: ['spanish'], popular: ['paella', 'tapas', 'jamón'] },
    'MX': { cuisines: ['mexican'], popular: ['taco', 'enchilada', 'guacamole'] },
    'TH': { cuisines: ['thai'], popular: ['pad-thai', 'curry', 'som-tam'] },
    'KR': { cuisines: ['korean'], popular: ['kimchi', 'bulgogi', 'bibimbap'] }
};

// Ingredient alternatives by region
const ingredientAlternatives = {
    'US': {
        'coriander': 'parsley',
        'aubergine': 'eggplant',
        'courgette': 'zucchini',
        'chickpea': 'garbanzo bean',
        'broad bean': 'fava bean'
    },
    'GB': {
        'zucchini': 'courgette',
        'eggplant': 'aubergine',
        'garbanzo bean': 'chickpea'
    },
    'AU': {
        'coriander': 'cilantro',
        'zucchini': 'courgette',
        'eggplant': 'aubergine'
    },
    'default': {}
};

// Sample Recipe Data
const recipes = [
    {
        id: 1,
        title: "Italian Spaghetti Carbonara",
        description: "Classic creamy pasta dish from Italian cuisine",
        cuisine: "italian",
        difficulty: "easy",
        prepTime: 10,
        cookTime: 20,
        totalTime: 30,
        servings: 4,
        rating: 4.8,
        calories: 450,
        ingredients: [
            { name: "Spaghetti pasta", amount: "400g" },
            { name: "Eggs", amount: "4 eggs" },
            { name: "Pancetta or bacon", amount: "200g" },
            { name: "Parmesan cheese, grated", amount: "100g" },
            { name: "Black pepper", amount: "To taste" },
            { name: "Salt", amount: "To taste" }
        ],
        instructions: [
            "Cook the pasta in salted water according to package instructions",
            "Cut the bacon into small pieces and fry until crispy",
            "Mix eggs with grated cheese and black pepper",
            "Drain the pasta and reserve some pasta water",
            "Add hot pasta to the egg mixture and stir quickly",
            "Add the bacon and a little pasta water to get a creamy texture",
            "Serve hot with more grated cheese"
        ]
    },
    {
        id: 2,
        title: "Mexican Beef Tacos",
        description: "Delicious tacos with seasoned beef and fresh vegetables",
        cuisine: "mexican",
        difficulty: "easy",
        prepTime: 15,
        cookTime: 20,
        totalTime: 35,
        servings: 6,
        rating: 4.6,
        calories: 380,
        ingredients: [
            { name: "Ground beef", amount: "500g" },
            { name: "Tortilla bread", amount: "12 pieces" },
            { name: "Chopped onion", amount: "1 onion" },
            { name: "Diced tomatoes", amount: "2 tomatoes" },
            { name: "Shredded lettuce", amount: "1 cup" },
            { name: "Shredded cheddar cheese", amount: "1 cup" },
            { name: "Taco seasoning", amount: "3 tbsp" },
            { name: "Sour cream", amount: "For garnish" }
        ],
        instructions: [
            "Heat a pan over medium heat and add chopped onion",
            "Add ground beef and cook until fully browned",
            "Add taco seasoning and mix well with the meat",
            "Heat tortillas in the pan or microwave",
            "Place seasoned meat in the tortillas",
            "Add lettuce, tomatoes, and cheese",
            "Garnish with sour cream and serve immediately"
        ]
    },
    {
        id: 3,
        title: "Japanese Teriyaki Chicken",
        description: "Grilled chicken with sweet and savory teriyaki sauce",
        cuisine: "asian",
        difficulty: "medium",
        prepTime: 20,
        cookTime: 25,
        totalTime: 45,
        servings: 4,
        rating: 4.9,
        calories: 420,
        ingredients: [
            { name: "Chicken breasts", amount: "600g" },
            { name: "Soy sauce", amount: "1/2 cup" },
            { name: "Honey", amount: "1/4 cup" },
            { name: "Brown sugar", amount: "2 tbsp" },
            { name: "Minced garlic", amount: "3 cloves" },
            { name: "Fresh grated ginger", amount: "1 tsp" },
            { name: "Rice vinegar", amount: "1 tbsp" },
            { name: "Sesame seeds for garnish", amount: "As desired" }
        ],
        instructions: [
            "Mix soy sauce, honey, sugar, garlic, ginger, and vinegar",
            "Cut chicken breasts into medium-sized pieces",
            "Marinate chicken with half the sauce and let sit for 15 minutes",
            "Heat a pan and add a little oil",
            "Cook chicken until done and browned on all sides",
            "Add remaining sauce and let it thicken for 5 minutes",
            "Serve with rice and sprinkle sesame seeds on top"
        ]
    },
    {
        id: 4,
        title: "French Onion Soup",
        description: "Classic onion soup with melted cheese",
        cuisine: "french",
        difficulty: "medium",
        prepTime: 15,
        cookTime: 50,
        totalTime: 65,
        servings: 6,
        rating: 4.7,
        calories: 320,
        ingredients: [
            { name: "Large onions, sliced", amount: "6 onions" },
            { name: "Butter", amount: "50g" },
            { name: "Beef broth", amount: "6 cups" },
            { name: "Dry white wine", amount: "1/2 cup" },
            { name: "Bay leaves", amount: "2 leaves" },
            { name: "French bread", amount: "6 slices" },
            { name: "Gruyere cheese, grated", amount: "1.5 cups" },
            { name: "Salt and pepper", amount: "To taste" }
        ],
        instructions: [
            "Melt butter in a large pot over medium heat",
            "Add onions and cook for 30-40 minutes until caramelized",
            "Add wine and let it evaporate for 5 minutes",
            "Add broth and bay leaves and bring to a boil",
            "Reduce heat and simmer for 20 minutes",
            "Toast bread slices in the oven until crispy",
            "Pour soup into bowls, top with bread and cheese",
            "Place under the broiler until cheese melts and browns"
        ]
    },
    {
        id: 5,
        title: "Crispy Falafel",
        description: "Crispy falafel patties made from seasoned chickpeas",
        cuisine: "arabic",
        difficulty: "medium",
        prepTime: 30,
        cookTime: 20,
        totalTime: 50,
        servings: 6,
        rating: 4.8,
        calories: 280,
        ingredients: [
            { name: "Dried chickpeas, soaked", amount: "2 cups" },
            { name: "Chopped onion", amount: "1 onion" },
            { name: "Minced garlic", amount: "4 cloves" },
            { name: "Fresh parsley", amount: "1 cup" },
            { name: "Fresh cilantro", amount: "1/2 cup" },
            { name: "Cumin", amount: "1 tsp" },
            { name: "Ground coriander", amount: "1 tsp" },
            { name: "Baking powder", amount: "1/2 tsp" },
            { name: "Salt and pepper", amount: "To taste" },
            { name: "Oil for frying", amount: "As needed" }
        ],
        instructions: [
            "Soak dried chickpeas in water for 12-24 hours",
            "Drain chickpeas and place in food processor",
            "Add onion, garlic, parsley, and cilantro",
            "Blend until you get a coarse mixture",
            "Add spices, salt, pepper, and baking powder",
            "Shape mixture into small patties",
            "Heat oil over medium-high heat",
            "Fry falafel until golden on all sides",
            "Drain on paper towels and serve hot"
        ]
    },
    {
        id: 6,
        title: "Margherita Pizza",
        description: "Classic Italian pizza with tomatoes and mozzarella",
        cuisine: "italian",
        difficulty: "hard",
        prepTime: 90,
        cookTime: 15,
        totalTime: 105,
        servings: 4,
        rating: 4.9,
        calories: 520,
        ingredients: [
            { name: "Strong flour", amount: "500g" },
            { name: "Instant yeast", amount: "7g" },
            { name: "Warm water", amount: "300ml" },
            { name: "Salt", amount: "1 tsp" },
            { name: "Olive oil", amount: "2 tbsp" },
            { name: "Tomato sauce", amount: "1 cup" },
            { name: "Mozzarella cheese", amount: "300g" },
            { name: "Fresh basil", amount: "Handful" }
        ],
        instructions: [
            "Mix flour with yeast and salt",
            "Add warm water and olive oil and knead for 10 minutes",
            "Cover the dough and let it rise for 1 hour",
            "Preheat oven to the highest possible temperature",
            "Roll out dough into a thin circle",
            "Spread tomato sauce on the dough",
            "Add mozzarella slices and basil leaves",
            "Bake for 10-15 minutes until edges are golden",
            "Serve hot with more fresh basil"
        ]
    },
    {
        id: 7,
        title: "American Pancakes",
        description: "Fluffy American breakfast pancakes",
        cuisine: "american",
        difficulty: "easy",
        prepTime: 10,
        cookTime: 15,
        totalTime: 25,
        servings: 4,
        rating: 4.7,
        calories: 350,
        ingredients: [
            { name: "All-purpose flour", amount: "2 cups" },
            { name: "Milk", amount: "1.5 cups" },
            { name: "Eggs", amount: "2 eggs" },
            { name: "Sugar", amount: "3 tbsp" },
            { name: "Baking powder", amount: "2 tsp" },
            { name: "Vanilla extract", amount: "1 tsp" },
            { name: "Melted butter", amount: "3 tbsp" },
            { name: "Honey or maple syrup", amount: "For serving" }
        ],
        instructions: [
            "Mix dry ingredients: flour, sugar, and baking powder",
            "In another bowl, mix eggs, milk, and vanilla",
            "Add wet ingredients to dry and mix gently",
            "Add melted butter and stir until combined",
            "Heat a non-stick pan over medium heat",
            "Pour a ladle of batter for each pancake",
            "Flip when bubbles appear on the surface",
            "Serve hot with honey or maple syrup"
        ]
    },
    {
        id: 8,
        title: "Indian Chicken Curry",
        description: "Creamy chicken curry with Indian spices",
        cuisine: "asian",
        difficulty: "medium",
        prepTime: 20,
        cookTime: 35,
        totalTime: 55,
        servings: 6,
        rating: 4.8,
        calories: 480,
        ingredients: [
            { name: "Chicken breast, diced", amount: "800g" },
            { name: "Chopped onion", amount: "2 onions" },
            { name: "Minced garlic", amount: "4 cloves" },
            { name: "Grated ginger", amount: "1 tbsp" },
            { name: "Curry powder", amount: "3 tbsp" },
            { name: "Diced tomatoes", amount: "3 tomatoes" },
            { name: "Coconut milk", amount: "400ml" },
            { name: "Yogurt", amount: "1/2 cup" },
            { name: "Fresh cilantro", amount: "For garnish" }
        ],
        instructions: [
            "Heat oil in a large pot",
            "Add onion and cook until golden",
            "Add garlic and ginger and stir for 1 minute",
            "Add chicken and brown on all sides",
            "Add curry powder and tomatoes",
            "Add coconut milk and bring to a boil",
            "Reduce heat and cook for 25 minutes",
            "Add yogurt and stir gently",
            "Serve with basmati rice and fresh cilantro"
        ]
    }
];

// Global variables
let filteredRecipes = [...recipes];

// Initialize the page
async function init() {
    // Check daily limit on startup
    checkDailyLimit();
    
    // Load data from local storage first
    loadLocalData();
    
    // Display current recipes
    displayRecipes(recipes);
    filteredRecipes = [...recipes];
    
    // Update UI
    updateLoadButton();
    updateLastUpdatedDisplay();
    updateHeroStats();
    
    // Show storage info if limit is reached
    if (recipes.length >= MAX_TOTAL_RECIPES) {
        showNotification('📚 Storage full! Clear data to add more recipes.', 'info');
    }
    
    // Load trending recipes automatically if conditions are met
    if (canLoadMoreToday() && recipes.length < MAX_TOTAL_RECIPES) {
        setTimeout(async () => {
            try {
                await loadTrendingRecipes();
            } catch (error) {
                console.log('Auto-load failed, user can click button manually');
            }
        }, 2000);
    }
}

// Update hero statistics
function updateHeroStats() {
    const heroTotalRecipes = document.getElementById('heroTotalRecipes');
    if (heroTotalRecipes) {
        heroTotalRecipes.textContent = recipes.length;
    }
    
    const dailyCount = document.getElementById('dailyCount');
    if (dailyCount) {
        dailyCount.textContent = `${getTodaysRecipeCount()} recipes loaded today`;
    }
    
    const totalCount = document.getElementById('totalCount');
    if (totalCount) {
        totalCount.textContent = `${recipes.length} total recipes`;
    }
}

// Update button text and state
function updateLoadButton() {
    const loadButton = document.getElementById('loadTrendingBtn');
    if (loadButton) {
        loadButton.textContent = getLoadButtonText();
        loadButton.disabled = hasReachedDailyLimit() || recipes.length >= MAX_TOTAL_RECIPES;
    }
    updateHeroStats();
}

// Auto-refresh daily limit check
function checkDailyLimit() {
    const now = new Date();
    const lastCheck = localStorage.getItem('last_daily_check');
    
    if (!lastCheck) {
        localStorage.setItem('last_daily_check', now.toDateString());
        return;
    }
    
    const lastCheckDate = new Date(lastCheck);
    const daysDiff = Math.floor((now - lastCheckDate) / (1000 * 60 * 60 * 24));
    
    if (daysDiff >= 1) {
        // Reset daily limit
        localStorage.setItem('last_daily_check', now.toDateString());
        localStorage.removeItem(DAILY_RECIPES_KEY);
        updateLoadButton();
        showNotification('🌅 Daily limit reset! New recipes available.', 'success');
    }
}

// Call check on page load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(checkDailyLimit, 1000);
});

// Display recipes in the grid
function displayRecipes(recipesToDisplay) {
    const grid = document.getElementById('recipesGrid');
    
    if (recipesToDisplay.length === 0) {
        grid.innerHTML = '<div class="text-center" style="grid-column: 1/-1; padding: 3rem;"><p style="font-size: 1.2rem; color: var(--text-gray);">No recipes found matching your search</p></div>';
        return;
    }
    
    grid.innerHTML = recipesToDisplay.map(recipe => {
        // Check if recipe has an image from API
        const hasApiImage = recipe.image && recipe.image.startsWith('https://');
        const imageUrl = hasApiImage ? recipe.image : '';
        const fallbackImage = 'data:image/svg+xml;base64,' + btoa(`
            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
                <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#f0f0f0;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#e0e0e0;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect width="300" height="200" fill="url(#grad)"/>
                <g transform="translate(150,100)">
                    <circle cx="0" cy="-10" r="25" fill="#ddd" stroke="#bbb" stroke-width="2"/>
                    <rect x="-30" y="5" width="60" height="4" rx="2" fill="#ccc"/>
                    <rect x="-25" y="12" width="50" height="4" rx="2" fill="#c0c0c0"/>
                    <rect x="-20" y="19" width="40" height="4" rx="2" fill="#b8b8b8"/>
                    <text x="0" y="40" text-anchor="middle" font-family="Arial" font-size="14" fill="#888">Recipe Image</text>
                </g>
            </svg>
        `);
        const apiBadge = hasApiImage ? '<div class="api-recipe-badge">🌟 Trending</div>' : '';
        
        // Add geo features
        const geoBadge = recipe.cuisine ? `<div class="geo-badge">🌍 ${getCuisineFlag(recipe.cuisine)}</div>` : '';
        const tempIndicator = geoSettings.currentWeather ? 
            `<div class="temp-indicator">${getTempIcon(geoSettings.currentWeather.temperature)}</div>` : '';
        
        // Convert units if needed
        const convertedCalories = convertWeight(recipe.calories, 'metric', geoSettings.weightUnit, 'g');
        const displayCalories = geoSettings.weightUnit === 'imperial' ? 
            Math.round(convertedCalories.value) + ' cal' : recipe.calories + ' cal';
        
        return `
        <div class="recipe-card" onclick="showRecipeDetail(${recipe.id})">
            <div class="recipe-image">
                ${imageUrl ? `<img src="${imageUrl}" alt="${recipe.title}" onerror="this.src='${fallbackImage}'" style="width: 100%; height: 100%; object-fit: cover;" />` : `<img src="${fallbackImage}" alt="${recipe.title}" style="width: 100%; height: 100%; object-fit: cover;" />`}
                ${apiBadge}
                ${geoBadge}
                ${tempIndicator}
            </div>
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta">
                    <div class="recipe-info">
                        <div class="info-item">
                            <span>⏱️</span>
                            <span>${recipe.totalTime} min</span>
                        </div>
                        <div class="info-item">
                            <span>👨‍🍳</span>
                            <span class="difficulty-${recipe.difficulty}">${getDifficultyText(recipe.difficulty)}</span>
                        </div>
                        <div class="info-item">
                            <span>👥</span>
                            <span>${recipe.servings} servings</span>
                        </div>
                        <div class="info-item">
                            <span>🔥</span>
                            <span>${displayCalories}</span>
                        </div>
                    </div>
                    <div class="recipe-rating">
                        ★ ${recipe.rating.toFixed(1)}
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');
}

// Get difficulty text
function getDifficultyText(difficulty) {
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
}

// Get cuisine flag emoji
function getCuisineFlag(cuisine) {
    const flags = {
        'italian': '🇮🇹',
        'mexican': '🇲🇽', 
        'chinese': '🇨🇳',
        'japanese': '🇯🇵',
        'french': '🇫🇷',
        'thai': '🇹🇭',
        'indian': '🇮🇳',
        'american': '🇺🇸',
        'spanish': '🇪🇸',
        'korean': '🇰🇷',
        'german': '🇩🇪',
        'british': '🇬🇧',
        'brazilian': '🇧🇷',
        'argentinian': '🇦🇷',
        'russian': '🇷🇺'
    };
    return flags[cuisine] || '🌍';
}

// Get temperature icon
function getTempIcon(temperature) {
    if (temperature > 30) return '🔥';
    if (temperature > 20) return '☀️';
    if (temperature > 10) return '🌤️';
    if (temperature > 0) return '🌥️';
    return '❄️';
}

// Convert ingredient amounts based on unit preferences
function convertIngredientAmount(amount) {
    // Simple conversion for common measurements
    let convertedAmount = amount;
    
    if (geoSettings.weightUnit === 'imperial' && amount.includes('g')) {
        const grams = parseFloat(amount.replace(/[^\d.]/g, ''));
        if (grams >= 454) {
            const pounds = (grams / 454).toFixed(1);
            convertedAmount = `${pounds} lb`;
        } else {
            const ounces = (grams / 28.35).toFixed(1);
            convertedAmount = `${ounces} oz`;
        }
    } else if (geoSettings.weightUnit === 'metric' && (amount.includes('lb') || amount.includes('oz'))) {
        if (amount.includes('lb')) {
            const pounds = parseFloat(amount.replace(/[^\d.]/g, ''));
            const kg = (pounds * 0.454).toFixed(1);
            convertedAmount = `${kg} kg`;
        } else {
            const ounces = parseFloat(amount.replace(/[^\d.]/g, ''));
            const grams = Math.round(ounces * 28.35);
            convertedAmount = `${grams} g`;
        }
    }
    
    return convertedAmount;
}

// Filter recipes
function filterRecipes() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const cuisine = document.getElementById('cuisineFilter').value;
    const difficulty = document.getElementById('difficultyFilter').value;
    
    filteredRecipes = recipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(searchTerm) || 
                            recipe.description.toLowerCase().includes(searchTerm);
        const matchesCuisine = !cuisine || recipe.cuisine === cuisine;
        const matchesDifficulty = !difficulty || recipe.difficulty === difficulty;
        
        return matchesSearch && matchesCuisine && matchesDifficulty;
    });
    
    displayRecipes(filteredRecipes);
}

// Show recipe detail in modal
function showRecipeDetail(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    const modal = document.getElementById('recipeModal');
    const detailsDiv = document.getElementById('recipeDetails');
    
    // Check if recipe has an image from API
    const hasApiImage = recipe.image && recipe.image.startsWith('https://');
    const imageStyle = hasApiImage ? `background-image: url('${recipe.image}'); background-size: cover; background-position: center;` : '';
    
    // Add structured data for SEO
    if (recipe.structuredData) {
        let existingScript = document.getElementById('recipe-structured-data');
        if (existingScript) {
            existingScript.remove();
        }
        
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'recipe-structured-data';
        script.textContent = JSON.stringify(recipe.structuredData, null, 2);
        document.head.appendChild(script);
    }
    
    // Format added date
    let addedDateInfo = '';
    if (recipe.addedDate) {
        const addedDate = new Date(recipe.addedDate);
        const now = new Date();
        const daysDiff = Math.floor((now - addedDate) / (1000 * 60 * 60 * 24));
        
        if (daysDiff === 0) {
            addedDateInfo = '<span class="new-recipe-badge">🆕 Added Today</span>';
        } else if (daysDiff === 1) {
            addedDateInfo = '<span class="new-recipe-badge">🆕 Added Yesterday</span>';
        } else if (daysDiff <= 7) {
            addedDateInfo = `<span class="new-recipe-badge">⭐ ${daysDiff} days ago</span>`;
        }
    }
    
    detailsDiv.innerHTML = `
        <div class="recipe-detail-image" style="${imageStyle}">
            ${recipe.isApiRecipe ? '<div class="api-recipe-badge">🌟 Trending</div>' : ''}
        </div>
        <h2 class="recipe-detail-title">${recipe.title} ${addedDateInfo}</h2>
        <p class="recipe-description" style="margin-bottom: 1.5rem;">${recipe.description}</p>
        
        <div class="recipe-detail-meta">
            <div class="detail-meta-item">
                <span>⏱️</span>
                <span><strong>Total Time:</strong> ${recipe.totalTime} minutes</span>
            </div>
            <div class="detail-meta-item">
                <span>👨‍🍳</span>
                <span><strong>Difficulty:</strong> ${getDifficultyText(recipe.difficulty)}</span>
            </div>
            <div class="detail-meta-item">
                <span>👥</span>
                <span><strong>Servings:</strong> ${recipe.servings}</span>
            </div>
            <div class="detail-meta-item">
                <span>🔥</span>
                <span><strong>Calories:</strong> ${Math.round(recipe.calories)} kcal</span>
            </div>
            <div class="detail-meta-item">
                <span>📊</span>
                <span><strong>Rating:</strong> ★ ${recipe.rating.toFixed(1)}</span>
            </div>
            <div class="detail-meta-item">
                <span>🍽️</span>
                <span><strong>Cuisine:</strong> ${recipe.cuisine.charAt(0).toUpperCase() + recipe.cuisine.slice(1)}</span>
            </div>
        </div>
        
        <div class="recipe-section">
            <h3>Ingredients (${recipe.ingredients.length} items)</h3>
            <ul class="ingredients-list">
                ${recipe.ingredients.map(ing => {
                    // Check for ingredient alternatives
                    const alternative = showIngredientAlternatives(ing.name);
                    const convertedAmount = convertIngredientAmount(ing.amount);
                    
                    return `
                    <li>
                        <span class="ingredient-name">${ing.name}</span> - 
                        <span class="ingredient-amount">${convertedAmount}</span>
                        ${alternative ? `
                            <div class="ingredient-alternative">
                                <span class="original">Original: ${ing.name}</span><br>
                                <span class="alternative">Local alternative: ${alternative}</span>
                            </div>
                        ` : ''}
                    </li>`;
                }).join('')}
            </ul>
            
            ${geoSettings.temperatureUnit === 'fahrenheit' || geoSettings.weightUnit === 'imperial' ? `
                <div class="conversion-info">
                    <h4>🔄 Unit Conversions</h4>
                    <p>Values shown in your preferred units (${geoSettings.temperatureUnit === 'fahrenheit' ? '°F' : '°C'}, ${geoSettings.weightUnit === 'imperial' ? 'Imperial' : 'Metric'})</p>
                </div>
            ` : ''}
        </div>
        
        <!-- Geographic Information Section -->
        <div class="geo-info">
            <h3>🌍 Geographic & Local Information</h3>
            <div class="geo-details">
                <div class="geo-item">
                    <strong>🏠 Origin:</strong> ${recipe.cuisine.charAt(0).toUpperCase() + recipe.cuisine.slice(1)} cuisine ${getCuisineFlag(recipe.cuisine)}
                </div>
                ${geoSettings.currentWeather ? `
                <div class="geo-item">
                    <strong>🌡️ Weather Match:</strong> ${getTempIcon(geoSettings.currentWeather.temperature)} ${geoSettings.currentWeather.temperature}°${geoSettings.temperatureUnit === 'fahrenheit' ? 'F' : 'C'} - Perfect for this recipe!
                </div>
                ` : ''}
                <div class="geo-item">
                    <strong>📍 Your Location:</strong> <span id="modalUserLocation">Detecting...</span>
                </div>
                ${geoSettings.enableAlternatives ? `
                <div class="geo-item">
                    <strong>🛒 Local Shopping:</strong> Ingredient alternatives available for your region
                </div>
                ` : ''}
            </div>
        </div>
        
        <div class="recipe-section">
            <h3>Instructions (${recipe.instructions.length} steps)</h3>
            <ol class="instructions-list">
                ${recipe.instructions.map((instruction, index) => `
                    <li><span class="step-number">${index + 1}.</span> ${instruction}</li>
                `).join('')}
            </ol>
        </div>
        
        <div class="recipe-section">
            <h3>Recipe Information</h3>
            <div class="recipe-info-grid">
                <div class="info-card">
                    <strong>Prep Time:</strong><br>${recipe.prepTime} min
                </div>
                <div class="info-card">
                    <strong>Cook Time:</strong><br>${recipe.cookTime} min
                </div>
                <div class="info-card">
                    <strong>Ingredients:</strong><br>${recipe.ingredients.length} items
                </div>
                <div class="info-card">
                    <strong>Steps:</strong><br>${recipe.instructions.length} steps
                </div>
            </div>
        </div>
        
        ${recipe.tags && recipe.tags.length > 0 ? `
            <div class="recipe-section">
                <h3>Tags</h3>
                <div class="recipe-tags">
                    ${recipe.tags.map(tag => `<span class="tag">#${tag.trim()}</span>`).join('')}
                </div>
            </div>
        ` : ''}
        
        ${recipe.source ? `
            <div class="recipe-section">
                <h3>Source</h3>
                <p><a href="${recipe.source}" target="_blank" rel="noopener noreferrer" class="source-link">📖 View Original Recipe</a></p>
            </div>
        ` : ''}
        
        <div class="recipe-actions">
            <button onclick="printRecipe(${recipe.id})" class="btn btn-secondary">🖨️ Print Recipe</button>
            <button onclick="shareRecipe(${recipe.id})" class="btn btn-secondary">🔗 Share</button>
            ${recipe.isApiRecipe ? '<button onclick="showApiInfo()" class="btn btn-secondary">ℹ️ API Info</button>' : ''}
        </div>
    `;
    
    modal.style.display = 'block';
    
    // Update user location in modal
    updateModalUserLocation();
    
    // Trigger modal ad loading
    if (typeof loadModalAd === 'function') {
        setTimeout(loadModalAd, 500);
    }
    
    // Dispatch event for ad tracking
    const event = new CustomEvent('recipeModalOpen', {
        detail: { recipeId: recipeId, recipeTitle: recipe.title }
    });
    window.dispatchEvent(event);
}

// Update user location display in modal
function updateModalUserLocation() {
    const modalLocation = document.getElementById('modalUserLocation');
    const mainLocation = document.getElementById('userLocation');
    
    if (modalLocation && mainLocation) {
        modalLocation.textContent = mainLocation.textContent;
    }
}

// Additional utility functions
function printRecipe(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Recipe: ${recipe.title}</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1, h2 { color: #333; }
                .meta { background: #f5f5f5; padding: 10px; margin: 10px 0; }
                .ingredient { margin: 5px 0; }
                .instruction { margin: 10px 0; padding: 5px; border-left: 3px solid #ff6b6b; }
            </style>
        </head>
        <body>
            <h1>${recipe.title}</h1>
            <div class="meta">
                <strong>Cuisine:</strong> ${recipe.cuisine} | 
                <strong>Difficulty:</strong> ${recipe.difficulty} | 
                <strong>Time:</strong> ${recipe.totalTime} min | 
                <strong>Servings:</strong> ${recipe.servings}
            </div>
            <h2>Ingredients</h2>
            ${recipe.ingredients.map(ing => `<div class="ingredient">• ${ing.name} - ${ing.amount}</div>`).join('')}
            <h2>Instructions</h2>
            ${recipe.instructions.map((instr, i) => `<div class="instruction">${i + 1}. ${instr}</div>`).join('')}
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

function shareRecipe(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    if (navigator.share) {
        navigator.share({
            title: recipe.title,
            text: `Check out this ${recipe.cuisine} recipe: ${recipe.title}`,
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        const shareText = `Check out this ${recipe.cuisine} recipe: ${recipe.title} - ${window.location.href}`;
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('📋 Recipe link copied to clipboard!', 'success');
        });
    }
}

function showApiInfo() {
    showNotification('ℹ️ This recipe is loaded from TheMealDB.com API - a free recipe database with community-contributed content.', 'info');
}

// Close modal
function closeModal() {
    const modal = document.getElementById('recipeModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('recipeModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Smooth scroll to recipes section
function scrollToRecipes() {
    document.getElementById('recipes').scrollIntoView({ behavior: 'smooth' });
}

// Trending Recipes API Integration
const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';
const STORAGE_KEY = 'recipeHub_data';
const DAILY_RECIPES_KEY = 'daily_recipes_dates';
const MAX_RECIPES_PER_DAY = 6;
const MAX_TOTAL_RECIPES = 200; // Limit to prevent storage overflow

// Local Storage Management
function loadLocalData() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const data = JSON.parse(stored);
            recipes.length = 0; // Clear existing recipes
            recipes.push(...data.recipes || []);
            updateLastUpdatedDisplay();
        }
    } catch (error) {
        console.warn('Error loading local data:', error);
    }
}

function saveLocalData() {
    try {
        const data = {
            recipes: recipes,
            lastUpdated: new Date().toISOString(),
            version: '2.0'
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        
        // Update daily tracking
        const today = new Date().toDateString();
        const dailyDates = JSON.parse(localStorage.getItem(DAILY_RECIPES_KEY) || '[]');
        if (!dailyDates.includes(today)) {
            dailyDates.push(today);
            localStorage.setItem(DAILY_RECIPES_KEY, JSON.stringify(dailyDates));
        }
        
        updateLastUpdatedDisplay();
    } catch (error) {
        console.warn('Error saving local data:', error);
    }
}

function updateLastUpdatedDisplay() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        const data = JSON.parse(stored);
        const lastUpdated = new Date(data.lastUpdated);
        const now = new Date();
        const diffTime = Math.abs(now - lastUpdated);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        const updatedInfo = document.getElementById('lastUpdatedInfo');
        if (updatedInfo) {
            updatedInfo.textContent = `Last updated: ${diffDays === 1 ? 'today' : diffDays + ' days ago'}`;
        }
    }
}

function getTodaysRecipeCount() {
    const today = new Date().toDateString();
    const dailyDates = JSON.parse(localStorage.getItem(DAILY_RECIPES_KEY) || '[]');
    return dailyDates.filter(date => date === today).length;
}

function canLoadMoreToday() {
    return getTodaysRecipeCount() < MAX_RECIPES_PER_DAY;
}

function hasReachedDailyLimit() {
    return !canLoadMoreToday();
}

// Check if recipe already exists
function recipeExists(mealId) {
    return recipes.some(recipe => recipe.apiId === mealId);
}

// Load trending recipes from API
async function loadTrendingRecipes() {
    const loadingElement = document.getElementById('loadingIndicator');
    const loadButton = document.getElementById('loadTrendingBtn');
    
    try {
        // Check daily limits
        if (hasReachedDailyLimit()) {
            showNotification('📅 Daily limit reached! Come back tomorrow for more recipes.', 'info');
            updateLoadButton();
            return;
        }
        
        // Check total recipe limit
        if (recipes.length >= MAX_TOTAL_RECIPES) {
            showNotification('📚 Maximum recipe limit reached! Please clear storage to add more.', 'info');
            updateLoadButton();
            return;
        }
        
        // Show loading state
        loadingElement.style.display = 'block';
        loadButton.textContent = 'Loading...';
        loadButton.disabled = true;
        
        // Calculate how many recipes to load
        const remainingToday = MAX_RECIPES_PER_DAY - getTodaysRecipeCount();
        const remainingSlot = MAX_TOTAL_RECIPES - recipes.length;
        const recipesToLoad = Math.min(remainingToday, remainingSlot, 6);
        
        // Fetch unique random meals
        const randomMeals = [];
        const attempts = 0;
        const maxAttempts = recipesToLoad * 3; // Prevent infinite loop
        
        while (randomMeals.length < recipesToLoad && attempts < maxAttempts) {
            try {
                const response = await fetch(`${API_BASE_URL}/random.php`);
                const data = await response.json();
                
                if (data.meals && data.meals[0] && !recipeExists(data.meals[0].idMeal)) {
                    randomMeals.push(data.meals[0]);
                }
            } catch (err) {
                console.warn('Failed to fetch recipe:', err);
            }
        }
        
        if (randomMeals.length === 0) {
            showNotification('🎯 All available recipes have been loaded!', 'info');
            return;
        }
        
        // Convert API data to our format
        const apiRecipes = randomMeals.map((meal, index) => convertApiRecipe(meal, Date.now() + index));
        
        // Add to existing recipes
        const beforeCount = recipes.length;
        recipes.push(...apiRecipes);
        
        // Save to local storage
        saveLocalData();
        
        // Update display
        displayRecipes(recipes);
        filteredRecipes = [...recipes];
        
        // Update stats
        updateHeroStats();
        
        // Show success message
        const newCount = recipes.length - beforeCount;
        showNotification(`✅ Loaded ${newCount} new trending recipes!`, 'success');
        updateLoadButton();
        
    } catch (error) {
        console.error('Error loading trending recipes:', error);
        showNotification('❌ Failed to load recipes. Please check your connection.', 'error');
    } finally {
        // Hide loading state
        loadingElement.style.display = 'none';
        loadButton.textContent = getLoadButtonText();
        loadButton.disabled = hasReachedDailyLimit() || recipes.length >= MAX_TOTAL_RECIPES;
    }
}

function updateLoadButton() {
    const loadButton = document.getElementById('loadTrendingBtn');
    if (loadButton) {
        loadButton.textContent = getLoadButtonText();
        loadButton.disabled = hasReachedDailyLimit() || recipes.length >= MAX_TOTAL_RECIPES;
    }
}

function getLoadButtonText() {
    if (hasReachedDailyLimit()) {
        return '📅 Daily Limit Reached';
    }
    if (recipes.length >= MAX_TOTAL_RECIPES) {
        return '📚 Storage Full';
    }
    const remaining = MAX_RECIPES_PER_DAY - getTodaysRecipeCount();
    return `🔥 Load More Recipes (${remaining} left today)`;
}

function clearAllData() {
    if (confirm('This will clear all saved recipes and reset the website. Continue?')) {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(DAILY_RECIPES_KEY);
        location.reload();
    }
}

// Convert TheMealDB API format to our recipe format
function convertApiRecipe(apiMeal, id) {
    // Extract ingredients and measures
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = apiMeal[`strIngredient${i}`];
        const measure = apiMeal[`strMeasure${i}`];
        
        if (ingredient && ingredient.trim()) {
            ingredients.push({
                name: ingredient,
                amount: measure ? measure.trim() : 'As needed'
            });
        }
    }
    
    // Extract instructions as array
    const instructions = apiMeal.strInstructions
        ? apiMeal.strInstructions
            .split(/\r?\n/)
            .map(instr => instr.trim())
            .filter(instr => instr.length > 0)
            .map(instr => instr.replace(/^\d+\.\s*/, '')) // Remove leading numbers
        : ['Follow the traditional recipe steps'];
    
    // Get cuisine from category and area
    let cuisine = 'international';
    if (apiMeal.strArea) {
        const area = apiMeal.strArea.toLowerCase();
        if (['italian', 'french', 'chinese', 'japanese', 'thai', 'indian', 'mexican', 'american', 'greek', 'spanish'].includes(area)) {
            cuisine = area;
        }
    }
    
    if (apiMeal.strCategory) {
        const category = apiMeal.strCategory.toLowerCase();
        if (category.includes('vegetarian') || category.includes('vegan')) {
            cuisine = 'vegetarian';
        }
    }
    
    // Estimate difficulty based on ingredients count and instructions
    const instructionCount = instructions.length;
    const ingredientCount = ingredients.length;
    const complexity = instructionCount + (ingredientCount * 0.5);
    
    let difficulty = 'easy';
    if (complexity > 15) {
        difficulty = 'hard';
    } else if (complexity > 8) {
        difficulty = 'medium';
    }
    
    // Estimate times based on difficulty and cuisine
    const timeMultiplier = {
        'easy': 1,
        'medium': 1.3,
        'hard': 1.6
    };
    
    const basePrepTime = cuisine === 'italian' || cuisine === 'french' ? 20 : 15;
    const baseCookTime = cuisine === 'italian' || cuisine === 'indian' ? 35 : 25;
    
    const prepTime = Math.round(basePrepTime * timeMultiplier[difficulty]);
    const cookTime = Math.round(baseCookTime * timeMultiplier[difficulty]);
    const totalTime = prepTime + cookTime;
    
    // Generate realistic rating and calories
    const rating = 4.0 + Math.random() * 1.0; // 4.0 - 5.0
    const calories = 250 + Math.random() * 300; // 250 - 550
    
    return {
        id: id,
        apiId: apiMeal.idMeal, // Store original API ID for deduplication
        title: apiMeal.strMeal || 'Delicious Recipe',
        description: generateDescription(apiMeal, cuisine, difficulty),
        cuisine: cuisine,
        difficulty: difficulty,
        prepTime: prepTime,
        cookTime: cookTime,
        totalTime: totalTime,
        servings: estimateServings(apiMeal),
        rating: Math.round(rating * 10) / 10,
        calories: Math.round(calories),
        ingredients: ingredients,
        instructions: instructions,
        image: apiMeal.strMealThumb,
        source: apiMeal.strSource || '',
        tags: apiMeal.strTags ? apiMeal.strTags.split(',').map(tag => tag.trim()) : [],
        addedDate: new Date().toISOString(),
        isApiRecipe: true,
        structuredData: generateStructuredData(apiMeal, cuisine, difficulty, ingredients, instructions)
    };
}

function generateDescription(apiMeal, cuisine, difficulty) {
    const adjectives = {
        'easy': ['simple', 'quick', 'delicious', 'tasty'],
        'medium': ['flavorful', 'satisfying', 'traditional', 'homestyle'],
        'hard': ['sophisticated', 'elegant', 'gourmet', 'artisanal']
    };
    
    const cuisineDescriptions = {
        'italian': 'Italian cuisine',
        'french': 'French gastronomy',
        'chinese': 'Chinese cooking',
        'japanese': 'Japanese cuisine',
        'thai': 'Thai cuisine',
        'indian': 'Indian cuisine',
        'mexican': 'Mexican cuisine',
        'american': 'American cooking',
        'greek': 'Greek cuisine',
        'spanish': 'Spanish cuisine',
        'vegetarian': 'vegetarian cooking',
        'international': 'world cuisine'
    };
    
    const adjective = adjectives[difficulty][Math.floor(Math.random() * adjectives[difficulty].length)];
    const cuisineDesc = cuisineDescriptions[cuisine] || 'world cuisine';
    
    const base = `A ${adjective} recipe featuring traditional ${cuisineDesc}`;
    const details = apiMeal.strInstructions ? 
        apiMeal.strInstructions.substring(0, 80) + '...' : 
        'with authentic flavors and cooking techniques';
    
    return `${base} ${details}`;
}

function estimateServings(apiMeal) {
    // Look for serving hints in the recipe
    const text = (apiMeal.strInstructions + ' ' + apiMeal.strMeal).toLowerCase();
    
    if (text.includes('serves') || text.includes('serving')) {
        const match = text.match(/serves?\s+(\d+)/);
        if (match) return parseInt(match[1]);
    }
    
    if (text.includes('4 people') || text.includes('4 servings')) return 4;
    if (text.includes('6 people') || text.includes('6 servings')) return 6;
    if (text.includes('2 people') || text.includes('2 servings')) return 2;
    
    return 4; // Default
}

function generateStructuredData(apiMeal, cuisine, difficulty, ingredients, instructions) {
    return {
        "@context": "https://schema.org",
        "@type": "Recipe",
        "name": apiMeal.strMeal,
        "description": `A ${difficulty} ${cuisine} recipe with ${ingredients.length} ingredients and step-by-step instructions.`,
        "image": apiMeal.strMealThumb,
        "recipeCuisine": cuisine.charAt(0).toUpperCase() + cuisine.slice(1),
        "recipeCategory": "Main Course",
        "keywords": `${cuisine} recipe, ${difficulty} cooking, ${apiMeal.strCategory || 'food'}`,
        "author": {
            "@type": "Organization",
            "name": "Recipe Website"
        },
        "datePublished": new Date().toISOString().split('T')[0],
        "prepTime": `PT${15}M`,
        "cookTime": `PT${30}M`,
        "totalTime": `PT${45}M`,
        "recipeYield": `${estimateServings(apiMeal)} servings`,
        "recipeIngredient": ingredients.map(ing => ing.amount + ' ' + ing.name),
        "recipeInstructions": instructions.map(instr => ({
            "@type": "HowToStep",
            "text": instr
        })),
        "nutrition": {
            "@type": "NutritionInformation",
            "calories": `${Math.round(300 + Math.random() * 200)} calories`
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": (4.0 + Math.random() * 1.0).toFixed(1),
            "reviewCount": Math.floor(Math.random() * 100) + 10
        }
    };
}

// Show notification to user
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1000;
        font-weight: 500;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease-out;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 4000);
}

// AdSense Management
let adsInitialized = false;
const AD_SLOTS = {
    hero: 'XXXXXXXXXX',
    sidebar: 'XXXXXXXXXX', 
    modal: 'XXXXXXXXXX',
    footer: 'XXXXXXXXXX'
};

// Initialize AdSense
function initializeAds() {
    if (adsInitialized) return;
    
    try {
        // Auto-load all ad slots
        (adsbygoogle = window.adsbygoogle || []).push({});
        adsInitialized = true;
        console.log('✅ AdSense initialized successfully');
    } catch (error) {
        console.warn('⚠️ AdSense initialization failed:', error);
        // Hide ad containers if AdSense fails
        hideAdContainers();
    }
}

// Hide ad containers gracefully
function hideAdContainers() {
    const adContainers = document.querySelectorAll('.ad-container');
    adContainers.forEach(container => {
        container.style.display = 'none';
    });
}

// Load ads with delay to improve page performance
function loadAdsWithDelay() {
    // Load hero ad immediately
    setTimeout(() => {
        loadAdSlot('hero');
    }, 1000);
    
    // Load other ads after page content
    setTimeout(() => {
        loadAdSlot('sidebar');
        loadAdSlot('footer');
    }, 3000);
    
    // Load modal ads when needed
    window.loadModalAd = function() {
        loadAdSlot('modal');
    };
}

// Load specific ad slot
function loadAdSlot(slotName) {
    try {
        if (typeof adsbygoogle !== 'undefined') {
            (adsbygoogle = window.adsbygoogle || []).push({});
            console.log(`📢 Loaded AdSense slot: ${slotName}`);
        }
    } catch (error) {
        console.warn(`⚠️ Failed to load ad slot ${slotName}:`, error);
    }
}

// Track ad performance (for analytics)
function trackAdEvent(event, slotName) {
    // This would integrate with Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'ad_impression', {
            'ad_slot': slotName,
            'event_category': 'adsense',
            'event_label': event
        });
    }
}

// Ad Blocking Detection
function detectAdBlocker() {
    const testAd = document.createElement('div');
    testAd.innerHTML = '&nbsp;';
    testAd.className = 'adsbox pub_300x250 ad-banner ad-300x250';
    testAd.style.width = '300px';
    testAd.style.height = '250px';
    testAd.style.position = 'absolute';
    testAd.style.left = '-1000px';
    testAd.style.top = '-1000px';
    
    document.body.appendChild(testAd);
    
    setTimeout(() => {
        if (testAd.offsetHeight === 0) {
            // Ad blocker detected
            showAdBlockerMessage();
        }
        document.body.removeChild(testAd);
    }, 100);
}

// Show message to users with ad blockers
function showAdBlockerMessage() {
    const message = document.createElement('div');
    message.className = 'ad-blocker-notice';
    message.innerHTML = `
        <div class="ad-blocker-content">
            <h3>💡 Support Our Content</h3>
            <p>Please disable your ad blocker or whitelist our site to help us continue providing free recipes and content.</p>
            <p>Your support allows us to maintain and improve the Recipe Website experience.</p>
        </div>
    `;
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #fff3cd;
        border: 1px solid #ffeaa7;
        border-radius: 8px;
        padding: 1rem;
        max-width: 300px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        z-index: 10000;
        font-size: 0.9rem;
    `;
    
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '×';
    closeButton.style.cssText = `
        position: absolute;
        top: 5px;
        right: 10px;
        background: none;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        color: #666;
    `;
    closeButton.onclick = () => message.remove();
    message.appendChild(closeButton);
    
    document.body.appendChild(message);
    
    // Auto-remove after 10 seconds
    setTimeout(() => {
        if (message.parentNode) message.remove();
    }, 10000);
}

// Initialize ads when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Delay ad initialization to improve page performance
    setTimeout(() => {
        initializeAds();
        loadAdsWithDelay();
        detectAdBlocker();
    }, 2000);
});

// Re-initialize ads when modal opens
window.addEventListener('recipeModalOpen', () => {
    if (typeof loadModalAd === 'function') {
        loadModalAd();
    }
});

// Export functions for manual use
window.RecipeHubAds = {
    initialize: initializeAds,
    loadSlot: loadAdSlot,
    track: trackAdEvent,
    detectBlocker: detectAdBlocker
};

// =======================
// GEOGRAPHIC FEATURES
// =======================

// Initialize geo features
function initializeGeoFeatures() {
    // Load saved settings
    loadGeoSettings();
    
    // Set initial unit displays
    updateUnitDisplay();
    
    // Detect user location
    detectUserLocation();
    
    // Load weather and recommendations
    setTimeout(() => {
        loadWeatherData();
        updateLocalRecommendations();
    }, 1000);
}

// Load geo settings from localStorage
function loadGeoSettings() {
    // Load temperature unit
    const tempUnit = localStorage.getItem('temperatureUnit') || 'celsius';
    document.getElementById('tempUnit').value = tempUnit;
    
    // Load weight unit  
    const weightUnit = localStorage.getItem('weightUnit') || 'metric';
    document.getElementById('weightUnit').value = weightUnit;
    
    // Load recipe preference
    const recipePref = localStorage.getItem('recipePreference') || 'global';
    document.getElementById('recipePreference').value = recipePref;
    
    // Load alternatives setting
    const enableAlts = localStorage.getItem('enableAlternatives') !== 'false';
    document.getElementById('enableAlternatives').checked = enableAlts;
    
    geoSettings.temperatureUnit = tempUnit;
    geoSettings.weightUnit = weightUnit;
    geoSettings.recipePreference = recipePref;
    geoSettings.enableAlternatives = enableAlts;
}

// Detect user location using browser geolocation
function detectUserLocation() {
    const locationElement = document.getElementById('userLocation');
    
    if (!navigator.geolocation) {
        locationElement.textContent = 'Location detection not supported';
        return;
    }
    
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            geoSettings.userLocation = { lat: latitude, lng: longitude };
            
            // Get location name using reverse geocoding
            getLocationName(latitude, longitude);
            
            // Load weather for this location
            loadWeatherData(latitude, longitude);
        },
        (error) => {
            locationElement.textContent = 'Location access denied - using default';
            // Use default location (New York)
            geoSettings.userLocation = { lat: 40.7128, lng: -74.0060 };
            getLocationName(40.7128, -74.0060);
        },
        { 
            enableHighAccuracy: true, 
            timeout: 10000, 
            maximumAge: 300000 
        }
    );
}

// Get location name using a free geocoding service
function getLocationName(lat, lng) {
    const locationElement = document.getElementById('userLocation');
    
    // Using a simple reverse geocoding approach
    // In production, you'd use a proper geocoding API
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`)
        .then(response => response.json())
        .then(data => {
            const city = data.city || data.locality || 'Unknown';
            const country = data.countryName || 'Unknown';
            locationElement.textContent = `${city}, ${country}`;
        })
        .catch(() => {
            // Fallback to coordinates
            locationElement.textContent = `${lat.toFixed(2)}, ${lng.toFixed(2)}`;
        });
}

// Load weather data
function loadWeatherData(lat = null, lng = null) {
    const weatherInfo = document.getElementById('weatherInfo');
    const weatherRec = document.getElementById('weatherRec');
    
    // If no coordinates, use stored location
    if (!lat || !lng) {
        if (geoSettings.userLocation) {
            lat = geoSettings.userLocation.lat;
            lng = geoSettings.userLocation.lng;
        } else {
            lat = 40.7128; // New York default
            lng = -74.0060;
        }
    }
    
    // Using Open-Meteo (free weather API)
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,weather_code,wind_speed_10m&hourly=temperature_2m&forecast_days=1`)
        .then(response => response.json())
        .then(data => {
            const temp = Math.round(data.current.temperature_2m);
            const weatherCode = data.current.weather_code;
            const windSpeed = data.current.wind_speed_10m;
            
            geoSettings.currentWeather = {
                temperature: temp,
                code: weatherCode,
                windSpeed: windSpeed,
                unit: 'celsius'
            };
            
            // Update display
            updateWeatherDisplay(weatherCode, temp, windSpeed);
            
            // Update weather-based recommendations
            updateWeatherRecommendations(weatherCode, temp);
        })
        .catch(error => {
            console.log('Weather API error:', error);
            weatherInfo.innerHTML = '<span class="weather-text">Weather unavailable</span>';
            weatherRec.innerHTML = '<p>Weather data unavailable - showing global recipes</p>';
        });
}

// Update weather display
function updateWeatherDisplay(weatherCode, temperature, windSpeed) {
    const weatherInfo = document.getElementById('weatherInfo');
    const tempUnit = geoSettings.temperatureUnit === 'fahrenheit' ? '°F' : '°C';
    const displayTemp = geoSettings.temperatureUnit === 'fahrenheit' ? 
        Math.round((temperature * 9/5) + 32) : temperature;
    
    const weatherIcons = {
        0: '☀️',   // Clear sky
        1: '🌤️',  // Mainly clear  
        2: '⛅',   // Partly cloudy
        3: '☁️',   // Overcast
        45: '🌫️',  // Fog
        48: '🌫️',  // Depositing rime fog
        51: '🌦️',  // Light drizzle
        53: '🌦️',  // Moderate drizzle
        55: '🌧️',  // Dense drizzle
        61: '🌧️',  // Slight rain
        63: '🌧️',  // Moderate rain
        65: '🌧️',  // Heavy rain
        71: '❄️',  // Slight snow fall
        73: '❄️',  // Moderate snow fall
        75: '❄️',  // Heavy snow fall
        80: '🌦️',  // Slight rain showers
        81: '🌧️',  // Moderate rain showers
        82: '🌧️',  // Violent rain showers
        95: '⛈️'   // Thunderstorm
    };
    
    const icon = weatherIcons[weatherCode] || '⛅';
    const windText = windSpeed > 15 ? ` | Windy ${Math.round(windSpeed)}km/h` : '';
    
    weatherInfo.innerHTML = `
        <span class="weather-icon">${icon}</span>
        <span class="weather-text">${displayTemp}${tempUnit} ${windText}</span>
    `;
}

// Update weather-based recommendations
function updateWeatherRecommendations(weatherCode, temperature) {
    const weatherRec = document.getElementById('weatherRec');
    
    // Determine weather category
    let category = 'moderate';
    if (temperature > 25) category = 'hot';
    else if (temperature < 10) category = 'cold';
    else if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(weatherCode)) category = 'rainy';
    else if (weatherCode === 0 || weatherCode === 1) category = 'sunny';
    else if (weatherCode === 2 || weatherCode === 3) category = 'cloudy';
    
    // Get weather-based recipe types
    const recipeTypes = weatherCategories[category] || weatherCategories.cloudy;
    
    // Find matching recipes from our database
    const matchingRecipes = recipes.filter(recipe => 
        recipeTypes.some(type => 
            recipe.ingredients.some(ing => 
                ing.name.toLowerCase().includes(type)
            ) || recipe.description.toLowerCase().includes(type)
        )
    );
    
    if (matchingRecipes.length > 0) {
        const randomRecipe = matchingRecipes[Math.floor(Math.random() * matchingRecipes.length)];
        weatherRec.innerHTML = `
            <div class="rec-item">
                <h4>${randomRecipe.title}</h4>
                <p>${randomRecipe.description}</p>
                <div class="rec-meta">
                    <span>⏱️ ${randomRecipe.totalTime} min</span>
                    <span>🔥 ${randomRecipe.calories} cal</span>
                    <span>⭐ ${randomRecipe.rating}</span>
                </div>
            </div>
        `;
    } else {
        weatherRec.innerHTML = '<p>Perfect for any weather - check out our global collection!</p>';
    }
}

// Update local recommendations
function updateLocalRecommendations() {
    const localRec = document.getElementById('localRec');
    const seasonalRec = document.getElementById('seasonalRec');
    
    // For now, show some curated recipes
    // In a real app, this would use the user's detected location
    
    // Local favorites (simulated)
    const localRecipes = recipes.filter(recipe => 
        recipe.cuisine === 'italian' || recipe.cuisine === 'mexican'
    );
    
    if (localRecipes.length > 0) {
        const randomLocal = localRecipes[Math.floor(Math.random() * localRecipes.length)];
        localRec.innerHTML = `
            <div class="rec-item">
                <h4>${randomLocal.title}</h4>
                <p>${randomLocal.description}</p>
                <div class="rec-meta">
                    <span>🌍 ${randomLocal.cuisine} cuisine</span>
                    <span>⏱️ ${randomLocal.totalTime} min</span>
                </div>
            </div>
        `;
    }
    
    // Seasonal recommendations (current month: November 2025)
    const seasonalRecipes = recipes.filter(recipe => 
        recipe.title.toLowerCase().includes('warm') || 
        recipe.title.toLowerCase().includes('soup') ||
        recipe.title.toLowerCase().includes('stew')
    );
    
    if (seasonalRecipes.length > 0) {
        const randomSeasonal = seasonalRecipes[Math.floor(Math.random() * seasonalRecipes.length)];
        seasonalRec.innerHTML = `
            <div class="rec-item">
                <h4>${randomSeasonal.title}</h4>
                <p>${randomSeasonal.description}</p>
                <div class="rec-meta">
                    <span>🍂 November special</span>
                    <span>⏱️ ${randomSeasonal.totalTime} min</span>
                </div>
            </div>
        `;
    } else {
        // Fallback to a hearty recipe
        const fallback = recipes.find(r => r.id === 3) || recipes[0];
        seasonalRec.innerHTML = `
            <div class="rec-item">
                <h4>${fallback.title}</h4>
                <p>${fallback.description}</p>
                <div class="rec-meta">
                    <span>🍂 November special</span>
                    <span>⏱️ ${fallback.totalTime} min</span>
                </div>
            </div>
        `;
    }
}

// Convert temperature between units
function convertTemperature(value, fromUnit, toUnit) {
    if (fromUnit === toUnit) return value;
    
    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        return (value * 9/5) + 32;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        return (value - 32) * 5/9;
    }
    return value;
}

// Convert weight between units
function convertWeight(value, fromUnit, toUnit, unitType = 'g') {
    if (fromUnit === toUnit) return { value, unit: unitType };
    
    if (fromUnit === 'metric' && toUnit === 'imperial') {
        if (unitType === 'g') {
            return { value: value / 28.35, unit: 'oz' };
        } else { // kg
            return { value: value * 2.205, unit: 'lb' };
        }
    } else if (fromUnit === 'imperial' && toUnit === 'metric') {
        if (unitType === 'oz') {
            return { value: value * 28.35, unit: 'g' };
        } else { // lb
            return { value: value / 2.205, unit: 'kg' };
        }
    }
    return { value, unit: unitType };
}

// Update unit displays
function updateUnitDisplay() {
    const unitBtn = document.getElementById('unitToggleBtn');
    const tempUnit = geoSettings.temperatureUnit === 'fahrenheit' ? '°F' : '°C';
    const weightUnit = geoSettings.weightUnit === 'imperial' ? 'lb' : 'kg';
    
    unitBtn.querySelector('.temp-unit').textContent = tempUnit;
    unitBtn.querySelector('.weight-unit').textContent = weightUnit;
    
    // Update any displayed temperatures
    if (geoSettings.currentWeather) {
        const newTemp = convertTemperature(
            geoSettings.currentWeather.temperature,
            'celsius',
            geoSettings.temperatureUnit
        );
        geoSettings.currentWeather.displayTemp = Math.round(newTemp);
        updateWeatherDisplay(
            geoSettings.currentWeather.code,
            newTemp,
            geoSettings.currentWeather.windSpeed
        );
    }
    
    // Update recipe displays
    updateRecipeUnitDisplays();
}

// Update recipe unit displays
function updateRecipeUnitDisplays() {
    const recipeCards = document.querySelectorAll('.recipe-card');
    recipeCards.forEach(card => {
        // Update calories if needed (could add calorie unit conversion here)
        // Update prep/cook times (could add time zone adjustments here)
    });
}

// Toggle units button
function toggleUnits() {
    geoSettings.temperatureUnit = geoSettings.temperatureUnit === 'celsius' ? 'fahrenheit' : 'celsius';
    geoSettings.weightUnit = geoSettings.weightUnit === 'metric' ? 'imperial' : 'metric';
    
    // Save to localStorage
    localStorage.setItem('temperatureUnit', geoSettings.temperatureUnit);
    localStorage.setItem('weightUnit', geoSettings.weightUnit);
    
    // Update display
    updateUnitDisplay();
}

// Update units from settings panel
function updateUnits() {
    geoSettings.temperatureUnit = document.getElementById('tempUnit').value;
    geoSettings.weightUnit = document.getElementById('weightUnit').value;
    
    // Save to localStorage
    localStorage.setItem('temperatureUnit', geoSettings.temperatureUnit);
    localStorage.setItem('weightUnit', geoSettings.weightUnit);
    
    updateUnitDisplay();
}

// Update recipe preference
function updateRecipePreference() {
    geoSettings.recipePreference = document.getElementById('recipePreference').value;
    localStorage.setItem('recipePreference', geoSettings.recipePreference);
    
    // Refresh recommendations
    updateLocalRecommendations();
}

// Update alternatives setting
function updateAlternatives() {
    geoSettings.enableAlternatives = document.getElementById('enableAlternatives').checked;
    localStorage.setItem('enableAlternatives', geoSettings.enableAlternatives);
}

// Toggle settings panel
function toggleSettings() {
    const panel = document.getElementById('settingsPanel');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

// Save settings
function saveSettings() {
    // All settings are already saved in their respective update functions
    toggleSettings();
    showMessage('Settings saved successfully! ✅');
}

// Change location function (for manual location setting)
function changeLocation() {
    const newLocation = prompt('Enter your city name (e.g., "London, UK" or "New York, US"):');
    if (newLocation) {
        // In a real app, you'd geocode the location name
        document.getElementById('userLocation').textContent = newLocation;
        showMessage('Location updated! 🌟');
    }
}

// Show ingredient alternatives for local ingredients
function showIngredientAlternatives(ingredient) {
    if (!geoSettings.enableAlternatives) return null;
    
    const alternatives = ingredientAlternatives[getUserCountry()] || ingredientAlternatives.default;
    return alternatives[ingredient.toLowerCase()];
}

// Get user's country code (simplified - in real app would use detected location)
function getUserCountry() {
    // This would be determined from the geolocation data
    // For demo purposes, return a default
    return 'US';
}

// Apply ingredient alternatives to recipe display
function applyIngredientAlternatives(recipe) {
    if (!geoSettings.enableAlternatives) return recipe;
    
    const country = getUserCountry();
    const alternatives = ingredientAlternatives[country] || ingredientAlternatives.default;
    
    const modifiedRecipe = { ...recipe };
    modifiedRecipe.ingredients = recipe.ingredients.map(ingredient => {
        const alternative = alternatives[ingredient.name.toLowerCase()];
        if (alternative) {
            return {
                ...ingredient,
                alternative: alternative,
                name: `${ingredient.name} (or ${alternative})`
            };
        }
        return ingredient;
    });
    
    return modifiedRecipe;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    init();
    // Initialize geo features after main init
    setTimeout(initializeGeoFeatures, 500);
});
