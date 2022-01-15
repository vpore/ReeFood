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
import { useState } from "react";
import RecipeInfo from './pages/RecipeInfo';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipeData, setRecipeData] = useState({});
  const loadedData = [];
  var mainData = [];

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try{
      const response = await fetch("https://api.spoonacular.com/recipes/findByIngredients?ingredients=eggs,onions,tomato&number=10&ranking=1&ignorePantry=true&apiKey=021f5840660c411aa1cb7aa4882d976a");
      if(!response.ok){
        throw new Error("Could not fetch Data!");
      }
      const data = await response.json();
      loadedData = data.map(eachData => eachData.id);
      console.log(loadedData);

      const ingResponse = await fetch("https://api.spoonacular.com/recipes/663680/information?includeNutrition=false&apiKey=021f5840660c411aa1cb7aa4882d976a");//021f5840660c411aa1cb7aa4882d976a  -   57b8d608a3a44fe0a0bc6b53ea785082
      
      if(!ingResponse.ok){
        throw new Error("Could not fetch Data!");
      }
      
      const ingData = await ingResponse.json();
      mainData = {
        title: ingData.title,
        imageURL: ingData.image,
        ingredients: ingData.extendedIngredients,
        detInstructions: ingData.analyzedInstructions
      }
      
      setRecipeData(mainData);
    }catch (error) {
      setError(error.message || "Something went Wrong!");
    }
    
    setIsLoading(false);
  };

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

        <Route exact path='/recipe'>
          <DashHeader/>
          <Recipe onFetch={fetchData} inst={recipeData} loading={isLoading}/>
        </Route>

        <Route exact path='/recipe/recipeinfo'>
          <DashHeader/>
          <RecipeInfo inst={recipeData}/>
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