import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NutritionLabel from "../components/NutritionLabel";
import '../assets/Recipe.css';
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

    const show = () => {
        document.getElementById('label').style.display='block';
        var modal = document.getElementById('label');
        window.onclick = function(event) {
            if (event.target === modal) { 
                modal.style.display = "none";
            }
        }
    };

    /*const SpeechRecogni = window.SpeechRecognition || window.webkitSpeechRecognition;
    const speechRecog = new SpeechRecogni();
    //let speechRecog = window.webkitSpeechRecognition;
    speechRecog.continuous=true;
    speechRecog.interimResults=true;
    speechRecog.lang = "en";*/

    /*let speechText = new SpeechSynthesisUtterance();
    speechText.lang = "en";
    const speekIns = loadedRecipe.instructions.filter(eachIns => {if(typeof eachIns === 'string'){return eachIns}});
    console.log(speekIns);
    const startBtn = () => {
        speechText.text = speekIns;
        window.speechSynthesis.speak(speechText);
        //speechRecog.start();
    };
    const pauseBtn = () => {
        window.speechSynthesis.cancel();
    };*/

    /*var Content = '';

    speechRecog.continuous = true;

    speechRecog.onresult = function(event) {

    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript;
    
        Content += transcript;
    };console.log(Content);
    if(Content === 'next'){
        i=i+1;
        startBtn();
    }
    else if(Content === 'previous'){
        i=i-1;
        startBtn();
    }
    else if(Content === 'repeat'){
        startBtn();
    }
    console.log(Content);
    --let final_transcript="";
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
        
    };--

    const stopBtn = () => {
        speechRecog.stop();
    };*/

    return(
        <>
            <h1 className="text-center" style={{fontFamily: "Raleway", marginTop: "25px", marginLeft: "15px"}}>{loadedRecipe.title}</h1>
            <div className="row">
                <img className="ms-5 mt-4 col col-md-auto" src={loadedRecipe.imageSrc} style={{width: "476px", height: "300px"}} alt="Foood"/>
                <div className="text-center col col-md-auto" style={{marginLeft: "100px", marginTop: "250px"}}>
                    <div className="position-absolute">
                        <i className="fas fa-stopwatch fa-3x" style={{color: "green"}}></i>
                        <p className="mt-1" style={{fontFamily: "Raleway"}}>{`${loadedRecipe.time} minutes`}</p>
                    </div>
                    <div style={{marginLeft: "200px"}} className="position-absolute">
                        <i className="fas fa-users fa-3x" style={{color: "green"}}></i>
                        <p className="mt-1" style={{fontFamily: "Raleway"}}>{`${loadedRecipe.servings} servings`}</p>
                    </div>
                    <div style={{marginLeft: "400px"}} id="nutri" onClick={show}>
                        <i className="fas fa-heartbeat fa-3x" style={{color: "green"}}></i>
                        <p className="mt-1" style={{fontFamily: "Raleway"}}>View Nutrition Label</p>
                    </div>
                </div>
            </div>
            <div id="label">
                <NutritionLabel/>
            </div>
            <div className="row">
                <div className="ms-5 px-0" style={{width: "1000px"}}>
                    <h4 className="mt-5"><strong>Recipe</strong></h4>
                    <div style={{fontFamily: "Poppins"}} className="mt-3">
                        {loadedRecipe.instructions}
                    </div>
                </div>
                <div className="col col-lg-auto px-0" style={{marginTop: "40px"}}>
                    <h4 className="ms-5"><strong>Ingredients</strong></h4>
                    <div className="ms-5" style={{fontFamily: "Poppins"}}>
                        {loadedRecipe.ingredients}
                    </div>
                    <h4 className="mt-5 ms-5"><strong>Equipments</strong></h4>
                    <div className="text-capitalize ms-5 mb-4" style={{fontFamily: "Poppins"}}>
                        {loadedRecipe.equipments}
                    </div>
                </div>
            {/* <button onClick={startBtn} className="btn btn-info">Speakk</button>
            <button onCLick={pauseBtn} className="btn btn-warning">Pause</button> */}
            {/* <button onClick={stopBtn}>Stop </button> */}
            </div>
        </>
    );
};

export default RecipeInfo;