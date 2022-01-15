import { NavLink } from "react-router-dom";

const Recipe = (props) => {
    var recTitle = props.inst;
    if(props.loading){
        recTitle='Loading...';
    }
    return (
        <>
            <button
                type="button"
                className="btn btn-outline-dark mt-4"
                onClick={props.onFetch}
            >
                Get Recipes
            </button>
            <NavLink to='/recipe/recipeinfo'>{recTitle.title}</NavLink>
        </>
    );
    
};

export default Recipe;