var recipes = [
  {
    name: "Creamy Spaghetti Carbonara",
    description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    image:
      "gourmet spaghetti carbonara pasta dish, professional food photography, appetizing",
    imgCover:
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop",
    prepTime: "15 min",
    cookTime: "20 min",
    totalTime: 35,
    servings: "4 people",
    difficulty: "Easy",
    category: "Italian",
    ratingsAverage: 4.8,
    ratingsQuantity: 234,

    ingredients: [
      "400g spaghetti pasta",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "50g Parmesan cheese, grated",
      "Freshly ground black pepper",
      "Salt for pasta water",
    ],

    instructions: [
      "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
      "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
      "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
      "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
      "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
      "Serve immediately with extra cheese and black pepper on top.",
    ],

    nutrition: {
      calories: "520 kcal",
      protein: "28g",
      carbs: "62g",
      fat: "18g",
      fiber: "3g",
      sodium: "680mg",
    },

    tips: [
      "Use room temperature eggs.",
      "Work quickly when mixing eggs.",
      "Reserve extra pasta water.",
      "Freshly grate the cheese.",
      "Never add cream.",
    ],
  },
  {
    name: "Honey Garlic Salmon",
    description: "Pan-seared salmon with a sweet and savory glaze",
    image:
      "honey garlic salmon with vegetables, gourmet presentation, food photography",
    imgCover:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",
    prepTime: "10 min",
    cookTime: "15 min",
    totalTime: 25,
    servings: "2 people",
    difficulty: "Easy",
    category: "Seafood",
    ratingsAverage: 4.9,
    ratingsQuantity: 187,

    ingredients: [
      "2 salmon fillets (6oz each)",
      "3 tablespoons honey",
      "2 tablespoons soy sauce",
      "4 cloves garlic, minced",
      "1 tablespoon olive oil",
      "1 teaspoon fresh ginger, grated",
      "Sesame seeds for garnish",
      "Green onions, sliced",
    ],

    instructions: [
      "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
      "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
      "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
      "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
    ],

    nutrition: {
      calories: "380 kcal",
      protein: "35g",
      carbs: "28g",
      fat: "14g",
      fiber: "0g",
      sodium: "720mg",
    },

    tips: [
      "Don't overcook salmon.",
      "Use wild-caught salmon.",
      "Let the sauce caramelize.",
      "Serve with broccoli or asparagus.",
    ],
  },
  {
    name: "Thai Green Curry",
    description: "Vibrant and aromatic curry with vegetables and coconut milk",
    image:
      "thai green curry with vegetables, vibrant and aromatic, asian cuisine, food photography",
    imgCover:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=800&auto=format&fit=crop",
    prepTime: "15 min",
    cookTime: "25 min",
    totalTime: 40,
    servings: "4 people",
    difficulty: "Intermediate",
    category: "Asian",
    ratingsAverage: 4.7,
    ratingsQuantity: 312,

    ingredients: [
      "2 tablespoons green curry paste",
      "400ml coconut milk",
      "300g chicken breast, sliced",
      "1 red bell pepper, sliced",
      "100g green beans",
      "1 eggplant, cubed",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Fresh Thai basil leaves",
    ],

    instructions: [
      "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
      "Add half the coconut milk and stir to combine with the curry paste.",
      "Add sliced chicken and cook until no longer pink, about 5 minutes.",
      "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
      "Simmer for 15-20 minutes until vegetables are tender and the sauce has thickened.",
      "Stir in fresh Thai basil leaves and serve with jasmine rice.",
    ],

    nutrition: {
      calories: "420 kcal",
      protein: "26g",
      carbs: "22g",
      fat: "26g",
      fiber: "5g",
      sodium: "890mg",
    },

    tips: [
      "Adjust spice level with more or less curry paste.",
      "Add vegetables based on their cooking time.",
      "Fresh Thai basil gives the best flavor.",
      "Use full-fat coconut milk for a creamy curry.",
    ],
  },
  {
    name: "Margherita Pizza",
    description:
      "Classic Italian pizza with fresh mozzarella, tomatoes, and basil",
    image:
      "margherita pizza with fresh basil, melted mozzarella, wood fired, food photography",
    imgCover:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    prepTime: "20 min",
    cookTime: "15 min",
    totalTime: 35,
    servings: "4 people",
    difficulty: "Medium",
    category: "Italian",
    ratingsAverage: 4.9,
    ratingsQuantity: 421,

    ingredients: [
      "1 pizza dough",
      "150g fresh mozzarella",
      "2 tomatoes, sliced",
      "100ml tomato sauce",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "Salt",
      "Black pepper",
    ],

    instructions: [
      "Preheat the oven to 250°C.",
      "Roll out the pizza dough on a floured surface.",
      "Spread tomato sauce evenly over the dough.",
      "Arrange mozzarella slices and tomatoes on top.",
      "Bake for 12-15 minutes until the crust is golden.",
      "Top with fresh basil, drizzle with olive oil, and serve.",
    ],

    nutrition: {
      calories: "540 kcal",
      protein: "23g",
      carbs: "58g",
      fat: "24g",
      fiber: "4g",
      sodium: "760mg",
    },

    tips: [
      "Use fresh mozzarella for the best flavor.",
      "Preheat your pizza stone if available.",
      "Don't overload the pizza with toppings.",
      "Add basil after baking to keep it fresh.",
    ],
  },
  {
    name: "Chicken Caesar Salad",
    description:
      "Fresh romaine lettuce with grilled chicken, parmesan, and creamy Caesar dressing",
    image:
      "caesar salad with grilled chicken, parmesan cheese, croutons, food photography",
    imgCover:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=800&auto=format&fit=crop",
    prepTime: "15 min",
    cookTime: "10 min",
    totalTime: 25,
    servings: "2 people",
    difficulty: "Easy",
    category: "Salad",
    ratingsAverage: 4.6,
    ratingsQuantity: 198,

    ingredients: [
      "2 chicken breasts",
      "1 romaine lettuce",
      "50g parmesan cheese",
      "1 cup croutons",
      "4 tablespoons Caesar dressing",
      "1 tablespoon olive oil",
      "Salt",
      "Black pepper",
    ],

    instructions: [
      "Season chicken breasts with salt and pepper.",
      "Heat olive oil in a skillet and cook chicken for 5 minutes per side until fully cooked.",
      "Slice the chicken into thin strips.",
      "Wash and chop the romaine lettuce.",
      "Combine lettuce, croutons, parmesan cheese, and Caesar dressing.",
      "Top with sliced grilled chicken and serve immediately.",
    ],

    nutrition: {
      calories: "410 kcal",
      protein: "34g",
      carbs: "14g",
      fat: "22g",
      fiber: "3g",
      sodium: "640mg",
    },

    tips: [
      "Grill the chicken for extra flavor.",
      "Add dressing just before serving.",
      "Use freshly grated parmesan.",
      "Homemade croutons taste even better.",
    ],
  },
  {
    name: "Beef Tacos",
    description:
      "Mexican-style tacos filled with seasoned ground beef and fresh toppings",
    image:
      "beef tacos with lettuce, tomatoes, cheese, mexican food, food photography",
    imgCover:
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=800&auto=format&fit=crop",
    prepTime: "15 min",
    cookTime: "20 min",
    totalTime: 35,
    servings: "4 people",
    difficulty: "Easy",
    category: "Mexican",
    ratingsAverage: 4.8,
    ratingsQuantity: 276,

    ingredients: [
      "8 taco shells",
      "500g ground beef",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 packet taco seasoning",
      "1 tomato, diced",
      "Shredded lettuce",
      "100g cheddar cheese, grated",
      "Sour cream",
      "Salsa",
    ],

    instructions: [
      "Heat a skillet over medium heat and cook the chopped onion until soft.",
      "Add garlic and ground beef. Cook until browned.",
      "Stir in taco seasoning with a little water and simmer for 5 minutes.",
      "Warm the taco shells according to package directions.",
      "Fill each taco shell with seasoned beef.",
      "Top with lettuce, tomatoes, cheddar cheese, salsa, and sour cream before serving.",
    ],

    nutrition: {
      calories: "470 kcal",
      protein: "29g",
      carbs: "31g",
      fat: "24g",
      fiber: "4g",
      sodium: "810mg",
    },

    tips: [
      "Drain excess fat from the beef before adding seasoning.",
      "Warm taco shells to make them crispier.",
      "Add sliced avocado for extra creaminess.",
      "Serve with lime wedges for fresh flavor.",
    ],
  },
  {
    name: "Vegetable Stir Fry",
    description:
      "Colorful mixed vegetables stir-fried in a savory garlic soy sauce",
    image:
      "vegetable stir fry with broccoli, carrots, bell peppers, asian cuisine, food photography",
    imgCover:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop",
    prepTime: "15 min",
    cookTime: "10 min",
    totalTime: 25,
    servings: "4 people",
    difficulty: "Easy",
    category: "Vegetarian",
    ratingsAverage: 4.7,
    ratingsQuantity: 245,

    ingredients: [
      "2 cups broccoli florets",
      "1 red bell pepper, sliced",
      "1 carrot, julienned",
      "1 cup snap peas",
      "2 cloves garlic, minced",
      "2 tablespoons soy sauce",
      "1 tablespoon sesame oil",
      "1 teaspoon cornstarch",
      "2 tablespoons water",
      "Sesame seeds for garnish",
    ],

    instructions: [
      "Mix soy sauce, cornstarch, and water in a small bowl.",
      "Heat sesame oil in a large wok over high heat.",
      "Add garlic and cook for 30 seconds until fragrant.",
      "Add broccoli, carrots, bell pepper, and snap peas.",
      "Stir-fry for 5-6 minutes until vegetables are crisp-tender.",
      "Pour in the sauce and stir until it thickens.",
      "Garnish with sesame seeds and serve with steamed rice.",
    ],

    nutrition: {
      calories: "210 kcal",
      protein: "6g",
      carbs: "22g",
      fat: "10g",
      fiber: "6g",
      sodium: "540mg",
    },

    tips: [
      "Cook over high heat for the best texture.",
      "Don't overcook the vegetables.",
      "Add mushrooms or tofu for extra protein.",
      "Serve immediately while hot.",
    ],
  },
  {
    name: "Classic Beef Burger",
    description:
      "Juicy grilled beef burger with cheddar cheese, fresh vegetables, and a toasted bun",
    image:
      "classic beef burger with cheese lettuce tomato fries, food photography",
    imgCover:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    prepTime: "15 min",
    cookTime: "15 min",
    totalTime: 30,
    servings: "4 people",
    difficulty: "Easy",
    category: "American",
    ratingsAverage: 4.8,
    ratingsQuantity: 298,

    ingredients: [
      "500g ground beef",
      "4 burger buns",
      "4 cheddar cheese slices",
      "1 tomato, sliced",
      "Lettuce leaves",
      "1 onion, sliced",
      "Pickles",
      "Ketchup",
      "Mustard",
      "Salt and black pepper",
    ],

    instructions: [
      "Season the ground beef with salt and pepper, then shape into four patties.",
      "Heat a grill or skillet over medium-high heat.",
      "Cook the patties for about 4-5 minutes on each side.",
      "Add cheddar cheese during the last minute until melted.",
      "Toast the burger buns lightly.",
      "Assemble burgers with lettuce, tomato, onion, pickles, ketchup, and mustard.",
      "Serve hot with fries or salad.",
    ],

    nutrition: {
      calories: "610 kcal",
      protein: "36g",
      carbs: "38g",
      fat: "34g",
      fiber: "2g",
      sodium: "920mg",
    },

    tips: [
      "Don't press the patties while cooking.",
      "Toast the buns for better texture.",
      "Let the burgers rest for 2 minutes before serving.",
      "Use freshly ground beef for the juiciest burgers.",
    ],
  },
  {
    name: "Chocolate Lava Cake",
    description: "Rich chocolate cake with a warm, gooey molten center",
    image:
      "chocolate lava cake with molten center, dessert, gourmet food photography",
    imgCover:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
    prepTime: "15 min",
    cookTime: "12 min",
    totalTime: 27,
    servings: "4 people",
    difficulty: "Intermediate",
    category: "Dessert",
    ratingsAverage: 4.9,
    ratingsQuantity: 356,

    ingredients: [
      "100g dark chocolate",
      "100g unsalted butter",
      "2 eggs",
      "2 egg yolks",
      "50g sugar",
      "40g flour",
      "Butter for ramekins",
      "Cocoa powder for dusting",
    ],

    instructions: [
      "Preheat oven to 220°C and grease the ramekins with butter.",
      "Melt the chocolate and butter together until smooth.",
      "Whisk eggs, egg yolks, and sugar until light and fluffy.",
      "Fold the melted chocolate into the egg mixture.",
      "Add flour and mix gently until combined.",
      "Pour the batter into ramekins and bake for 10-12 minutes.",
      "Let rest for one minute before turning onto a plate.",
      "Serve immediately with vanilla ice cream.",
    ],

    nutrition: {
      calories: "430 kcal",
      protein: "7g",
      carbs: "35g",
      fat: "29g",
      fiber: "3g",
      sodium: "150mg",
    },

    tips: [
      "Do not overbake or the center won't stay molten.",
      "Use high-quality dark chocolate.",
      "Serve immediately after baking.",
      "Dust with powdered sugar for presentation.",
    ],
  },
  {
    name: "Berry Smoothie Bowl",
    description:
      "A refreshing smoothie bowl topped with fresh fruits, granola, and chia seeds",
    image:
      "berry smoothie bowl with strawberries blueberries granola healthy breakfast food photography",
    imgCover:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=800&auto=format&fit=crop",
    prepTime: "10 min",
    cookTime: "0 min",
    totalTime: 10,
    servings: "2 people",
    difficulty: "Easy",
    category: "Breakfast",
    ratingsAverage: 4.8,
    ratingsQuantity: 214,

    ingredients: [
      "1 frozen banana",
      "1 cup frozen mixed berries",
      "1/2 cup Greek yogurt",
      "1/4 cup milk",
      "Fresh strawberries",
      "Blueberries",
      "Granola",
      "Chia seeds",
      "Honey (optional)",
    ],

    instructions: [
      "Add frozen banana, mixed berries, Greek yogurt, and milk to a blender.",
      "Blend until thick and smooth.",
      "Pour the smoothie into a serving bowl.",
      "Arrange sliced strawberries, blueberries, and granola on top.",
      "Sprinkle with chia seeds.",
      "Drizzle with honey if desired and serve immediately.",
    ],

    nutrition: {
      calories: "290 kcal",
      protein: "11g",
      carbs: "42g",
      fat: "8g",
      fiber: "8g",
      sodium: "70mg",
    },

    tips: [
      "Use frozen fruit for a thicker consistency.",
      "Don't add too much milk.",
      "Top with your favorite fruits and nuts.",
      "Serve immediately before it melts.",
    ],
  },
];
var recipeName = document.getElementById("recipeName");
var recipeDescription = document.getElementById("recipeDescription");
var recipeImg = document.querySelector("recipeImg");

var prepTime = document.getElementById("prepTime");
var cookTime = document.getElementById("cockTime");
var people = document.getElementById("people");

var reviews = document.getElementById("reviews");
var reviewsNum = document.getElementById("reviewsNum");

var difficulty = document.getElementById("first-span");
var category = document.getElementById("second-span");


function randomRecipe() {
 var randomIndex = Math.floor(Math.random() * recipes.length);
    return recipes[randomIndex];
}
function displayRecipe(recipe) {

    document.getElementById("recipeImg").src = recipe.imgCover;

    document.getElementById("recipeName").innerHTML = recipe.name;
    document.getElementById("recipeDescription").innerHTML = recipe.description;


    document.getElementById("reviews").innerHTML = recipe.ratingsAverage;
    document.getElementById("reviewsNum").innerHTML =
        "(" + recipe.ratingsQuantity + " reviews)";

 
    document.getElementById("prepTime").innerHTML = recipe.prepTime;
    document.getElementById("cockTime").innerHTML = recipe.cookTime;
    document.getElementById("people").innerHTML = recipe.servings;

 
    document.getElementById("first-span").innerHTML = recipe.difficulty;
    document.getElementById("second-span").innerHTML = recipe.category;




 document.getElementById("ingredients").innerHTML = "";
for(var i=0; i< recipe.ingredients.length; i++){

    document.getElementById("ingredients").innerHTML += "<li><span>"+(i + 1)+"</span>" + recipe.ingredients[i] +"</li>";
    
    
}


document.getElementById("steps").innerHTML = "";
for(var i=0; i< recipe.instructions.length ; i++){
    
    document.getElementById("steps").innerHTML += 
         `<div class="step">
             <div class="number">${(i + 1)}</div>
             <p>${recipe.instructions[i]}</p>
      </div>`;

    
}
 

 

    document.getElementById("calories").innerHTML = recipe.nutrition.calories;
    document.getElementById("protein").innerHTML = recipe.nutrition.protein;
    document.getElementById("carbs").innerHTML = recipe.nutrition.carbs;
    document.getElementById("fat").innerHTML = recipe.nutrition.fat;
    document.getElementById("fiber").innerHTML = recipe.nutrition.fiber;
    document.getElementById("sodium").innerHTML = recipe.nutrition.sodium;

 

    document.getElementById("tips").innerHTML = "";

for(var i=0; i< recipe.tips.length ; i++){
document.getElementById("tips").innerHTML +=

         `<div class="tip">
             <i class="fa-solid fa-check"></i>
             <p>${recipe.tips[i]}</p>
        </div>`;
}

  
}
