import {Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import DashHeader from './components/DashHeader';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';

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

      </Switch>

      <Footer/>
    </>
  );
}

export default App;