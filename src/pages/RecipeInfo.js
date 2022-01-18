import { useEffect } from "react";
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

    if(status === 'pending'){
        return(
            <h1>Loading...</h1>
        );
    }

    if(error){
        return <h1>Error Occured:(</h1>
    }

    /*const SpeechRecogni = window.SpeechRecognition || window.webkitSpeechRecognition;
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
        </>
    );
};

export default RecipeInfo;