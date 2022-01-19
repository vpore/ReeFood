import { Link } from "react-router-dom";
import '../assets/Recipe.css';
import useHttp from '../hooks/use-http';
import { getAllRecipes } from '../lib/api';
import { useEffect } from "react";

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
            <h1>Loading...</h1>
        );
    }

    var recipeTiles = [];
    for (let eachRecData of loadedAllRecipes) {
        recipeTiles.push(

            <Link to={`/recipe/recipeinfo/${eachRecData.id}`} className="recipe">

                <div className="recipeA">
                <img src={eachRecData.image} alt="Foood" className="img recipe-img" />
                <h5>{eachRecData.title}</h5>
                </div>
            </Link>
        );
    }

    return (
        <>
        <h1 style={{marginTop: "25px", marginLeft:"25px", fontFamily: "Poppins"}} className="d-flex justify-content-center">Recipes According to Fridge Items</h1>
            <main className="page">
                <section className="recipes-container">
                    <div className="recipes-list">{recipeTiles}</div>
                </section>
            </main>

        </>
    );

};

export default Recipe;