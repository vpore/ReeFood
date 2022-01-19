import { Link } from "react-router-dom";
import '../assets/Recipe.css';
import useHttp from '../hooks/use-http';
import { getAllRecipes } from '../lib/api';
import { useEffect } from "react";

const Recipe = () => {

    const {sendRequest, status, data: loadedAllRecipes, error} = useHttp(
        getAllRecipes,
        true
    );

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if(status === 'pending'){
        return(
            <h1>Loading...</h1> 
        );
    }
    console.log(error);

    var recipeTiles = [];
    for(let eachRecData of loadedAllRecipes){
        recipeTiles.push(
            
                <Link to={`/recipe/recipeinfo/${eachRecData.id}`} className="recipe">
                    <img src={eachRecData.image} alt="Foood" className="img recipe-img"/>
                    <h5>{eachRecData.title}</h5>
                </Link>
            
            
        );
    } 

    return (
        <>
            <main className="page">
                <section className="recipes-container">
                    <div className="recipes-list">{recipeTiles}</div>
                </section>
            </main>
                
        </>
    );
    
};

export default Recipe;