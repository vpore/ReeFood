const API_DOMAIN = 'https://api.spoonacular.com';

export async function getAllRecipes() {
    const response = await fetch(`${API_DOMAIN}/recipes/findByIngredients?ingredients=eggs,onions,tomato&number=10&ranking=1&ignorePantry=true&apiKey=021f5840660c411aa1cb7aa4882d976a`);

    if(!response.ok){
        throw new Error("Could not fetch Data!");
    }

    const data = await response.json();

    const loadedAllRecipes = [];

    for(const key in data){
        const recObj = {
            id: data[key].id,
            title: data[key].title,
            image: data[key].image
        };

        loadedAllRecipes.push(recObj);
    }
   
    return loadedAllRecipes;
}

export async function getSingleRecipe(recipeid) {
    const response = await fetch(`${API_DOMAIN}/recipes/${recipeid}/information?includeNutrition=false&apiKey=021f5840660c411aa1cb7aa4882d976a`);
    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || 'Could not fetch recipe.');
    }

    let ingredientsArr = [];
    let instructionsArr = [];

    let detailedIngr = data.extendedIngredients;
    detailedIngr.forEach(eachIngr => {
        ingredientsArr.push(eachIngr.original);
        ingredientsArr.push(<br/>);
    });

    let detailedInst = data.analyzedInstructions[0].steps;
    detailedInst.forEach(eachInst => {
        instructionsArr.push(eachInst.step);
        instructionsArr.push(<br/>);
    });
    
    const loadedRecipe = {
        id: recipeid,
        title: data.title,
        imageSrc: data.image,
        ingredients: ingredientsArr,
        instructions: instructionsArr
    }

    return loadedRecipe;
};