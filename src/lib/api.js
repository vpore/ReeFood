const API_DOMAIN = 'https://api.spoonacular.com'; //57b8d608a3a44fe0a0bc6b53ea785082 - 021f5840660c411aa1cb7aa4882d976a

export async function getAllRecipes() {
    const response = await fetch(`${API_DOMAIN}/recipes/findByIngredients?ingredients=eggs,onions,tomato&number=10&ranking=1&ignorePantry=true&apiKey=57b8d608a3a44fe0a0bc6b53ea785082`);

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
    const response = await fetch(`${API_DOMAIN}/recipes/${recipeid}/information?includeNutrition=false&apiKey=57b8d608a3a44fe0a0bc6b53ea785082`);
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

export async function getNutritionLabel(recipeid) {
    const url = `${API_DOMAIN}/recipes/${recipeid}/nutritionLabel.png?showOptionalNutrients=false&showZeroValues=false&showIngredients=false&apiKey=57b8d608a3a44fe0a0bc6b53ea785082`;
   
    return url;
};

export async function getRandomTrivia() {
    const response = await fetch(`${API_DOMAIN}/food/trivia/random?apiKey=57b8d608a3a44fe0a0bc6b53ea785082`);
    const data = await response.json();

    const trivia = data.text;
    return trivia;
};

export async function getQuickAns(ques) {
    const response = await fetch(`${API_DOMAIN}/recipes/quickAnswer?q=${ques}&apiKey=57b8d608a3a44fe0a0bc6b53ea785082`);
    const data = await response.json();

    const ans = data.answer;
    return ans;
};

export async function getIngSub(ing) {
    const response = await fetch(`${API_DOMAIN}/food/ingredients/substitutes?ingredientName=${ing}&apiKey=57b8d608a3a44fe0a0bc6b53ea785082`);
    const data = await response.json();
    let subsArr = [];
    let allSubs = data.substitutes;
    // allSubs.forEach((eachSub) => {
    //     subsArr.push(eachSub);
    // });
    let notFoundMsg='';
    let message = data.message;
    if(message === 'Could not find any substitutes for that ingredient.'){
        notFoundMsg=message
    }

    const subs = {
        subIng: allSubs,
        msg: notFoundMsg
    }
    return subs;
}