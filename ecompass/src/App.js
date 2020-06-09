import React from 'react';
import 'react-bootstrap';
import './App.css';
import {useState} from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Navs  from './components/navs';
import Salesview from './components/salesview';
import Contenthealth from './components/contenthealth';
import Ratings from './components/ratings';
import Inventory from './components/inventory';
import Landing from './components/landing';
import Loginpage from './components/loginpage';
import Recommendations from './components/recommendations';
import Simulator from './components/simulator';

function App(props) {


  return (
    <div className="App">
       <Router>
         <Route exact path="/"  render={()=> (
           <Loginpage/>
         )}>

         </Route>

        
         <Route exact path = "/home" render={ ()=> (
              <Navs  viewname = "home"  content={ <Landing /> }/>
            ) 
               } > 
         </Route> 
         <Route path = "/salesview" render={ ()=> (
             <Navs  viewname = "salesview" content = {<Salesview />}  />
               ) 
               }>
         </Route>
         <Route path = "/contentview" exact render={ ()=> (
             <Navs  viewname = "contentview" content = {<Contenthealth />} />
               ) 
               }>
         </Route>
         <Route path = "/ratingsview" render={ ()=> (
             <Navs  viewname = "ratingsview" content = {<Ratings />} />
               ) 
               }>
         </Route>
         <Route path = "/inventoryview" render={ ()=> (
             <Navs  viewname = "inventoryview" content = {<Inventory />} />
               ) 
               }>
         </Route>
         <Route path = "/recommendations" render={ ()=> (
             <Navs  viewname = "recommendations" content = {<Recommendations />} />
               ) 
               }>
         </Route>
         <Route path = "/simulator" render={ ()=> (
             <Navs  viewname = "simulator" content = {<Simulator />} />
               ) 
               }>
         </Route>
       </Router>
        
    </div>
  );
}

export default App;
