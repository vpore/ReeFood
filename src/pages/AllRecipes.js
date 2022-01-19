import Recipe from "./Recipe";

const AllRecipes = (props) => {

    let recName = [];
    for(let eachItem of props.items){
        recName.push(eachItem.foodItem);
    }

    return(
        <>
            <Recipe items={recName}/>
        </>
    );
        
};

export default AllRecipes;