import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useHttp from "../hooks/use-http";
import { getSingleRecipe } from "../lib/api";

const RecipeInfo = () => {

    const params = useParams();
    const {recipeid} = params;

    const {sendRequest, status, data: loadedRecipe, error} = useHttp(
        getSingleRecipe,
        true
    );

    useEffect(() => {
        sendRequest(recipeid);
    }, [sendRequest, recipeid]);

    console.log(loadedRecipe);

    if(status === 'pending'){
        return(
            <h1>Loading...</h1>
        );
    }

    /*const [recData, setRecData] = useState({});

    const params = useParams();
    const {recipeid} = params;

    const recResponse = await fetch(`https://api.spoonacular.com/recipes/${recipeid}/information?includeNutrition=false&apiKey=021f5840660c411aa1cb7aa4882d976a`);

    if(!recResponse.ok){
        throw new Error("Could not fetch Data!");
    }

    const detailedRecData = await recResponse.json();
    setRecData(detailedRecData);
    
    var title = recData.title;
    var imageSrc = recData.image;
    var ingredients = [];
    var instructions = [];

    var detailedIngr = recData.ingredients;
    detailedIngr.forEach(eachIngr => {
        ingredients.push(eachIngr.original);
        ingredients.push(<br/>);
    });

    var detailedInst = recData.analyzedInstructions;
    for(let i=0; i<detailedInst[0].steps.length; i++){
        instructions.push(detailedInst[0].steps[i].step);
        instructions.push(<br/>);
    }*/
    

    /*var detRecipe = props.inst;
    var title = detRecipe.title;
    var instructions = [];
    var imgSrc = detRecipe.image;
    var ingredients = [];
    var detailedIngr = detRecipe.ingredients;
    for(let i=0; i<detailedIngr.length; i++){
        ingredients.push(detailedIngr[i].original);
        ingredients.push(<br/>);
    }
    var detailedInst = detRecipe.detInstructions;
    for(let i=0; i<detailedInst[0].steps.length; i++){
        instructions.push(detailedInst[0].steps[i].step);
        instructions.push(<br/>);
    }

    const SpeechRecogni = window.SpeechRecognition || window.webkitSpeechRecognition;
    const speechRecog = new SpeechRecogni();
    //let speechRecog = window.webkitSpeechRecognition;
    speechRecog.continuous=true;
    speechRecog.interimResults=true;
    speechRecog.lang = "en";

    let speechText = new SpeechSynthesisUtterance();
    speechText.lang = "en";
    let i = 0;
    const speekIns = instructions.filter(eachIns => {if(typeof eachIns === 'string'){return eachIns}});
    const startBtn = () => {
        speechText.text = speekIns[i];
        window.speechSynthesis.speak(speechText);
        speechRecog.start();
    };

    let final_transcript="";
    speechRecog.onresult=(e) => {
        let interim_transcript="";
        for(let i=e.resultIndex; i<e.results.length; ++i){
            if(e.results[i].isFinal){
                final_transcript=e.results[i][0].transcript;
            }
            else{
                interim_transcript+=e.results[i][0].transcript;
            }
        }
        console.log(final_transcript);
        if(final_transcript === 'next'){
            i=i+1;
            startBtn();
        }
        else if(final_transcript === 'previous'){
            i=i-1;
            startBtn();
        }
        else if(final_transcript === 'repeat'){
            startBtn();
        }
    };

    const stopBtn = () => {
        speechRecog.stop();
    };*/

    return(
        <>
        <h1>{loadedRecipe.title}</h1>
        <img src={loadedRecipe.imageSrc} style={{width: "200px", height: "150px"}} alt="Foood"/>
        <h4>Ingredients</h4>
        <div>
            {loadedRecipe.ingredients}
        </div>
        <h4>Recipe</h4>
        <div>
            {loadedRecipe.instructions}
        </div>
            {/*<h1>{title}</h1>
            <img src={imageSrc} style={{width: "200px", height: "150px"}} alt="Foood"/>
            <h4>Ingredients</h4>
            <p>{ingredients}</p>
            <button onClick={startBtn}>Speak</button>
            <button onClick={stopBtn}>Stop Listening</button>
            <h4>Recipe</h4>
            <p>{instructions}</p>*/}
        </>
    );
};

export default RecipeInfo;