import { Link } from "react-router-dom";

import useHttp from '../hooks/use-http';
import { getAllRecipes } from '../lib/api';
import { useEffect } from "react";

const Recipe = (props) => {

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

    var recipeTiles = [];
    for(let eachRecData of loadedAllRecipes){
        recipeTiles.push(
            <div>
                <img src={eachRecData.image} alt="Foood"/>
                <Link to={`/recipe/recipeinfo/${eachRecData.id}`}>{eachRecData.title}</Link>
            </div>
            
        );
    }

    return (
        <>
            <div>{recipeTiles}</div>
        </>
    );
    
};

export default Recipe;