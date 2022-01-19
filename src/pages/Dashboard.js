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

      <div className="DashSection2">
        <h3 className="hello">Items in your Fridge</h3>
        <section className="hello1">
          <div className="one">
            <img src={eggs} className="eggsitem" alt=""></img>
          </div>
          <div className="two">
            <li className="fridgeitem">Eggs</li>
            <a href="#">
              <li className="fridgeitem">Eggs Recipies</li>
            </a>
          </div>
        </section>

        <section className="hello1">
          <div className="one">
            <img src={paneer} className="eggsitem" alt=""></img>
          </div>
          <div className="two">
            <li className="fridgeitem">Panner</li>
            <a href="#">
              <li className="fridgeitem">Panner Recipies</li>
            </a>

          </div>
        </section>

        <section className="hello1">
          <div className="one">
            <img src={cauliflower} className="eggsitem" alt=""></img>
          </div>
          <div className="two">
            <li className="fridgeitem">Cauliflower</li>
            <a href="#">
              <li className="fridgeitem">Cauliflower Recipies</li>
            </a>
          </div>
        </section>

        {/* <section className="hello2">

        </section>

        <section className="hello3">

        </section> */}
      </div>
      <div>
        <h3 className="add">Add Food Info</h3>
        <div className="textitem">
          <label className="addA" htmlFor="foodItem">Add Food Item  :  </label>
          <input type="text" placeholder="Food Item" name="foodItem" />
        </div>

        <div className="textexpiry">
          <label className="date">Add its Expiry Date  :  </label>
          <input type="date" name="expiryDate" />
        </div>

        <button className="btn btn-danger">Add Item</button>
      </div>

      <div className="DashSection2">
        <h3 className="hello">Food items that are expiring within 10 days</h3>
        <section className="hello1">
          <div className="one">
            <img src={curd} className="eggsitem" alt=""></img>
          </div>
          <div className="two">
            <li className="fridgeitem">Curd</li>
            <a href="#">
              <li className="fridgeitem">Curd Recipies</li>
            </a>
          </div>
        </section>

        <section className="hello1">
          <div className="one">
            <img src={spinach} className="eggsitem" alt=""></img>
          </div>
          <div className="two">
            <li className="fridgeitem">Spinach</li>
            <a href="#">
              <li className="fridgeitem">Spinach Recipies</li>
            </a>

          </div>
        </section>

        <section className="hello1">
          <div className="one">
            <img src={capsicum} className="eggsitem" alt=""></img>
          </div>
          <div className="two">
            <li className="fridgeitem">Capsicum</li>
            <a href="#">
              <li className="fridgeitem">Capsicum Recipies</li>
            </a>
          </div>

        </section>

        <div className="viewmore">
          <button className="btn btn-danger">View More</button>
        </div>

        {/* <section className="hello2">

        </section>

        <section className="hello3">

        </section> */}
      </div>

      {/* <div>
        <h3>Food items that are expiring within 10 days</h3>
        <ul>
          <li>Item01</li>
          <li>Item02</li>
          <li>Item03</li>
        </ul>
        <button className="btn btn-danger">View More</button>
      </div> */}

      <Trivia />
      <div className="trivia">
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