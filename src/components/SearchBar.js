import { useState } from "react";

const SearchBar = (props) => {
    const [enteredQuery, setEnteredQuery] = useState('');

    const queryChangeHandler = (event) => {
        setEnteredQuery(event.target.value);
    };

    const submitFormHandler = () => {
        props.onSearch(enteredQuery);
    };

    return(
        <div className="text-center">  
            <input type="text" placeholder="search items , recipes , and many more..." value={enteredQuery} onChange={queryChangeHandler}></input>
            <button className="btn btn-warning" onClick={submitFormHandler}>Search</button>
        </div>
    );
};

export default SearchBar;