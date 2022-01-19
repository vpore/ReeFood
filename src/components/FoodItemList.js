

const FoodItemList = (props) => {

    let food = [];
      props.list.forEach(eachItem => {
          food.push(eachItem.foodItem);
          food.push(<br/>);
      });
    
    return(
        <>
            <div>{food}</div>
        </>
    );
};

export default FoodItemList;