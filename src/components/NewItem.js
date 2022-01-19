import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import FoodItemForm from "../components/FoodItemForm";
import useHttp from '../hooks/use-http';
import { addItem } from '../lib/api';

const NewItem = () => {
  const { sendRequest, status } = useHttp(addItem);
  const history = useHistory();

  useEffect(() => {
    if (status === 'completed') {
      history.push('/dashboard');
    }
  }, [status, history]);

  const addItemHandler = (itemData) => {
    sendRequest(itemData);
  };

  return <FoodItemForm isLoading={status === 'pending'}  onAddQuote={addItemHandler} />;
};

export default NewItem;
