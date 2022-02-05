import {Route, Redirect, Switch} from 'react-router-dom';
import { useEffect } from "react";
import './App.css';
import Header from './components/Header';
import DashHeader from './components/DashHeader';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Expiry from './pages/Expiry';
import Recipe from './pages/Recipe';
import Recommendations from './pages/Recommendations';
import Footer from './components/Footer';
import RecipeInfo from './pages/RecipeInfo';
import useHttp from './hooks/use-http';
import {getAllItems} from "./lib/api";
import LoadingSpinner from './UI/LoadingSpinner';
import AllRecipes from './pages/AllRecipes';

function App() {
  const { sendRequest, status, data: loadedItems, error } = useHttp(
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

        <Route exact path='/recipe'>
          <DashHeader/>
          <AllRecipes items={loadedItems}/>
        </Route>

        <Route exact path='/recipe/recipeinfo/:recipeid'>
          <DashHeader/>
          <RecipeInfo/>
        </Route>

      </Switch>

      <Footer/>
    </>
  );
}

export default App;