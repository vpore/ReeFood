import {Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import DashHeader from './components/DashHeader';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Expiry from './pages/Expiry';
import Recipe from './pages/Recipe';
import Recommendations from './pages/Recommendations';
import Footer from './components/Footer';
import { useEffect, useState } from "react";

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const loadedData = [];

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try{
      const response = await fetch("https://api.spoonacular.com/recipes/findByIngredients?ingredients=eggs,onions,tomato&number=1&ranking=1&ignorePantry=true&apiKey=57b8d608a3a44fe0a0bc6b53ea785082");
      if(!response.ok){
        throw new Error("Could not fetch Data!");
      }
      const data = await response.json();
      loadedData = data.id;
      console.log(loadedData);
    }catch (error) {
      setError(error.message || "Something went Wrong!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Switch>

        <Route exact path='/'>
          <Header/>
          <Redirect to="/home"/>
        </Route>
        
        <Route path="/home">
          <Header/>
          <Home/>
        </Route>

        <Route path="/dashboard">
          <DashHeader/>
          <Dashboard/>
        </Route>

        <Route path='/expiry'>
          <DashHeader/>
          <Expiry/>
        </Route>

        <Route path='/recipe'>
          <DashHeader/>
          <Recipe/>
        </Route>

        <Route path='/recom'>
          <DashHeader/>
          <Recommendations/>
        </Route>

      </Switch>

      <Footer/>
    </>
  );
}

export default App;