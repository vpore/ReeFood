import useHttp from '../hooks/use-http';
import { getRandomTrivia } from '../lib/api';
import { useEffect } from "react";

const Trivia = () => {
    const {sendRequest, status, data: trivia, error} = useHttp(
        getRandomTrivia,
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

    return(
        <>
            <div>
                <h3>Foood Trivia</h3>
                <p>{trivia}</p>
            </div>
        </>
    );
};

export default Trivia;