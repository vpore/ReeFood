import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useHttp from "../hooks/use-http";
import { getNutritionLabel } from "../lib/api";

const NutritionLabel = () => {
    
    const params = useParams();
    const {recipeid} = params;

    const {sendRequest, status, data: url, error } = useHttp(
        getNutritionLabel,
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

    return <img src={`${url}`} style={{width: "300px", height: "500px", marginTop: "25px", marginLeft: "25px"}}/>
};

export default NutritionLabel;