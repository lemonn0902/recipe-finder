const API_KEY = 'a6827efe987348c48a8092c8f74f19c0';  // Replace 'YOUR_API_KEY' with your Spoonacular or Edamam API key

async function fetchRecipes() {
  const query = document.getElementById('search-input').value;
  const mealType = document.getElementById('meal-type').value;
  const dietType = document.getElementById('diet-type').value;
  
  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&type=${mealType}&diet=${dietType}&number=12`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayRecipes(data.results);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    alert('Failed to fetch recipes. Please try again later.');
  }
}

function displayRecipes(recipes) {
  const recipeList = document.getElementById('recipe-list');
  recipeList.innerHTML = '';  // Clear previous results

  recipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    
    recipeCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <h3>${recipe.title}</h3>
      <p><a href="https://spoonacular.com/recipes/${recipe.title.replace(/\s+/g, '-').toLowerCase()}-${recipe.id}" target="_blank">View Recipe</a></p>
    `;
    
    recipeList.appendChild(recipeCard);
  });
}
