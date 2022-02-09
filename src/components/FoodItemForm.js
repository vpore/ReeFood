import { Fragment, useRef, useState } from 'react';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from '../assets/FoodItemForm.module.css';
 
const FoodItemForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const dateInputRef = useRef();
  const itemInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredDate = dateInputRef.current.value;
    const enteredItem = itemInputRef.current.value;

    // optional: Could validate here

    props.onAddItem({ expiry: enteredDate, foodItem: enteredItem });
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
          <label htmlFor='expiryDate'>Expiry Date</label>
          <input type='date' id='expiryDate' ref={dateInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='foodItem'>Food Item</label>
          <input type='text' id='foodItem' ref={itemInputRef}></input>
        </div>
        <div className={classes.action}>
          <button onClick={finishEnteringHandler} className='btn btn-success'>Add Item</button>
        </div>
      </form>

    </Fragment>
  );
};

export default FoodItemForm;