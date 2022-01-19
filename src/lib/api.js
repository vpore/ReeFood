const API_DOMAIN = 'https://api.spoonacular.com'; //57b8d608a3a44fe0a0bc6b53ea785082 - 021f5840660c411aa1cb7aa4882d976a - 4c125a07172c45129b5e2b4e707f465f - 07ac8d4c16684aec84cd98489780ab44
const DB_DOMAIN = 'https://reefood-1dc84-default-rtdb.firebaseio.com';
const k='9b5faa12d2d844a6bc980390131e54a0';
const API_KEY = `apiKey=${k}`;

export async function getAllItems() {
    const response = await fetch(`${DB_DOMAIN}/items.json`);
    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch quotes.');
    }

    const loadedItems = [];

    for(const key in data){
        const itemObj = {
            id: key,
            ...data[key]
        };

        loadedItems.push(itemObj);
    }

    return loadedItems;
};

export async function addItem(itemData) {
    const response = await fetch(`${DB_DOMAIN}/items.json`, {
        method: 'POST',
        body: JSON.stringify(itemData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data.message || 'Could not create quote.');
    }

    return null;
};

export async function getAllRecipes(ingredients) {
    const response = await fetch(`${API_DOMAIN}/recipes/findByIngredients?ingredients=${ingredients}&number=10&ranking=1&ignorePantry=true&${API_KEY}`);

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
    const response = await fetch(`${API_DOMAIN}/recipes/${recipeid}/information?includeNutrition=false&${API_KEY}`);
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
    const url = `${API_DOMAIN}/recipes/${recipeid}/nutritionLabel.png?showOptionalNutrients=false&showZeroValues=false&showIngredients=false&${API_KEY}`;
   
    return url;
};

export async function getRandomTrivia() {
    const response = await fetch(`${API_DOMAIN}/food/trivia/random?${API_KEY}`);
    const data = await response.json();

    const trivia = data.text;
    return trivia;
};

export async function getQuickAns(ques) {
    const response = await fetch(`${API_DOMAIN}/recipes/quickAnswer?q=${ques}&${API_KEY}`);
    const data = await response.json();

    const ans = data.answer;
    return ans;
};

export async function getIngSub(ing) {
    const response = await fetch(`${API_DOMAIN}/food/ingredients/substitutes?ingredientName=${ing}&${API_KEY}`);
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