import { useState, useEffect } from "react";
import useHttp from "../hooks/use-http";
import { getIngSub } from "../lib/api";

const IngredientSubstitute = () => {

    const [enteredIng, setEnteredIng] = useState('');
    const ingChangeHandler = (event) => {
        setEnteredIng(event.target.value);
    };

    const ing = enteredIng;
    let {sendRequest, status, data: subs, error} = useHttp(
        getIngSub,
        true
    );

    if(status === 'pending'){
        subs = {
            subIng: '...',
            msg: ''
        }
    }
 
    useEffect(() => {
        sendRequest(ing);
    }, [sendRequest, ing]);

    return(
        <>
            <div>
                <h3>Get any Ingredient Substitute</h3>
                <input
                type="text"
                placeholder="Eg: Butter"
                value={enteredIng}
                onChange={ingChangeHandler}
                >
                </input>
                <p>{subs.subIng}</p>
                <p>{subs.msg}</p>
            </div>
        </>
    );
};

export default IngredientSubstitute;