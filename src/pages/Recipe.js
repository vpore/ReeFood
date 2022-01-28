import { Link } from "react-router-dom";
import '../assets/Recipe.css';
import useHttp from '../hooks/use-http';
import { getAllRecipes } from '../lib/api';
import { useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";

const Recipe = (props) => {

    const ingredients = props.items;
    const { sendRequest, status, data: loadedAllRecipes, error } = useHttp(
        getAllRecipes,
        true
    );

    useEffect(() => {
        sendRequest(ingredients);
    }, [sendRequest, ingredients]);

    if (status === 'pending') {
        return (
                <LoadingSpinner/>
            
        );
    }

    var recipeTiles = [];
    for (let eachRecData of loadedAllRecipes) {
        recipeTiles.push(
            <div className="col shadow p-3 mb-5 me-3 bg-white rounded text-center" style={{width: "290px"}}>
            <img src={eachRecData.image} alt="Foood" className="img recipe-img" />
                <Link to={`/recipe/recipeinfo/${eachRecData.id}`} className="recipe mt-2">
                        <samp>{eachRecData.title}</samp>
                </Link>
            </div>
        );
    }

    return (
        <>
            <h1 style={{marginTop: "25px", marginLeft:"25px", fontFamily: "Poppins"}} className="d-flex justify-content-center">Recommended Recipes</h1>
            <div className="text-center">  
                <div className="search">
                        <input type="text" className="search-box" placeholder="search items , recipes , and many more..."></input>
                        <button className="search-btn">search</button>
                </div>
            </div>
            
            <div className="row ms-3 mt-5">
                {recipeTiles}
            </div>
        </>
    );

};

export default Recipe;