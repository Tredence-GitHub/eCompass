import React from 'react';
import 'react-bootstrap';
import './App.css';
import {useState} from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Navs  from './components/navs';
import Salesview from './components/salesview';

function App() {

  let viewname = "";

  return (
    <div className="App">
       <Router>
         
         <Route exact path = "/"render={ ()=> (
             <Navs  viewname = "home" />
               ) 
               } >
         </Route>
         <Route path = "/salesview" render={ ()=> (
             <Navs  viewname = "salesview" />
               ) 
               }>
         </Route>
         <Route path = "/contentview" render={ ()=> (
             <Navs  viewname = "contentview" />
               ) 
               }>
         </Route>
         <Route path = "/ratingsview" render={ ()=> (
             <Navs  viewname = "ratingsview" />
               ) 
               }>
         </Route>
         <Route path = "/inventoryview" render={ ()=> (
             <Navs  viewname = "inventoryview" />
               ) 
               }>
         </Route>
       </Router>
        
    </div>
  );
}

export default App;
