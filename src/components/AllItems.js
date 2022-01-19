import LoadingSpinner from "../UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllItems } from "../lib/api";
import { useEffect } from "react";
import FoodItemList from "./FoodItemList";

const AllItems = () => {
    let { sendRequest, status, data: loadedItems, error } = useHttp(
        getAllItems,
        true 
      );
      
      useEffect(() => {
        sendRequest();
      }, [sendRequest]);
    
      if (status === 'pending') {
        return (
          <div className='centered'>
            <LoadingSpinner />
          </div>
        );
      }
    
      if (error) {
        return <p className='centered focused'>{error}</p>;
      }

    return(
        <> 
            <FoodItemList list={loadedItems}/>
        </>
    );
};

export default AllItems;