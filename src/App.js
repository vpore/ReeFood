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
import RecipeInfo from './pages/RecipeInfo';

function App() {

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
          <Recipe/>
        </Route>

        <Route exact path='/recipe/recipeinfo/:recipeid'>
          <DashHeader/>
           <RecipeInfo/>
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