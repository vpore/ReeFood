import "../assets/Dashboard.css"
import eggs from "../images/eggs.jpg";
import cauliflower from "../images/cauliflower.jpg";
import paneer from "../images/paneer.jpg";
import curd from "../images/curd.jpg";
import spinach from "../images/spinach.jpg";
import capsicum from "../images/capsicum.jpg";
import useHttp from '../hooks/use-http';
import { getQuickAns } from '../lib/api';
import { useEffect, useState } from "react";
import Trivia from "./Trivia";
import IngredientSubstitute from "./IngredientSubstitute";
import NewItem from "../components/NewItem";
import AllItems from "../components/AllItems";

const Dashboard = () => {
  const [enteredQues, setEnteredQues] = useState('');
  const quesChangeHandler = (event) => {
    setEnteredQues(event.target.value);
  };

  const ques = enteredQues;
  const { sendRequest, status, data: ans, error } = useHttp(
    getQuickAns,
    true
  );

  useEffect(() => {
    sendRequest(ques);
  }, [sendRequest, ques]);

  /*if(status === 'pending'){
      return(
          <h1>Loading...</h1>
      );
  }*/

  if (error) {
    return <h1>Error Occured:(</h1>
  }

  return (
    <>
      {/* <!-- hero section-- > */}
      <header className="hero-section">
        <div className="content">
          {/* <img src="/logo.jpeg" classNameName="logo" alt=""></img> */}
          <p className="heading">Eat.Think.Safe</p>
          {/* <br> */}
          <p className="sub-heading">Eat Everything You Buy</p>
        </div>
      </header>
      {/* <h1>Hello!</h1> */}

      <div>
        <h3>Items in your Fridge</h3>
        <AllItems />
      </div>

      <NewItem />

      <div>
        <h3>Food items that are expiring within 10 days</h3>
        <ul>
          <li>Item01</li>
          <li>Item02</li>
          <li>Item03</li>
        </ul>
        <button className="btn btn-danger">View More</button>
      </div>
      <Trivia />
      <div>
        <h3>Ask any food related question...</h3>
        <input
          type="text"
          placeholder="Eg: How much vitamin C is present in Apples?"
          value={enteredQues}
          onChange={quesChangeHandler}
        ></input>
        <p>{ans}</p>
      </div>
      <IngredientSubstitute />

    </>
  );
};

export default Dashboard;