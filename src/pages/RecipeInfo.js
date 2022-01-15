
const RecipeInfo = (props) => {
    var detRecipe = props.inst;
    var title = detRecipe.title;
    var instructions = [];
    var imgSrc = detRecipe.imageURL;
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
    speechRecog.lang="en";

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
    };

    return(
        <>
            <h1>{title}</h1>
            <img src={imgSrc} style={{width: "200px", height: "150px"}} alt="Foood"/>
            <h4>Ingredients</h4>
            <p>{ingredients}</p>
            <button onClick={startBtn}>Speak</button>
            <button onClick={stopBtn}>Stop Listening</button>
            <h4>Recipe</h4>
            <p>{instructions}</p>
        </>
    );
};

export default RecipeInfo;