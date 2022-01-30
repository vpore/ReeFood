import { Fragment, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from '../assets/FoodItemForm.module.css';
 
const FoodItemForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddItem({ expiry: enteredAuthor, foodItem: enteredText });
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  return (
    <Fragment>


      <form
        onFocus={formFocusedHandler}
        className={classes.form}
        onSubmit={submitFormHandler}
      >
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}
        <h2 className='heading'>Add the food items</h2>
        <div className={classes.control}>
          <label htmlFor='author'>Expiry Date</label>
          <input type='date' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Food Item</label>
          <input type='text' id='text' ref={textInputRef}></input>
        </div>
        <div className={classes.action}>
          <button onClick={finishEnteringHandler} className='btn btn-success'>Add Item</button>
        </div>
      </form>
      <a href="http://localhost/CSI_RUBIX_/Github_folder/OCR/OCR/Tesseract-OCR/index.html" target={"_blank"}>
        <button className='btn btn-info' style={{ marginTop: "275px", marginLeft: "-90px", position: "absolute" }}>Scan Info</button>
      </a>

    </Fragment>
  );
};

export default FoodItemForm;