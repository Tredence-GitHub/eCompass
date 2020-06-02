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
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import Landing from './components/landing';
import Loginpage from './components/loginpage';
import Recommendations from './components/recommendations';
import Simulator from './components/simulator';

function App(props) {

  let viewname = "";
  const [value, setValue] = useState('');
  const [loggedIn, setL] = useState('');



  function onDropDownSubmit(value){
    localStorage.setItem('var', value);
    console.log("Got To App DropDown", value);
    
  }

  return (
    <div className="App">
       <Router>
         <Route exact path="/"  render={()=> (
           <Loginpage/>
         )}>

         </Route>

        
         <Route exact path = "/home" render={ ()=> (
              <Navs  viewname = "home" logged = {loggedIn}  onDropDownSubmit = {onDropDownSubmit} content={ <Landing /> }/>
            ) 
               } > 
         </Route> 
         {/* <Route exact path = "/home2" render={ ()=> (
              <Navs  viewname = "home" logged = {loggedIn}  onDropDownSubmit = {onDropDownSubmit} content={ <Landing2 /> }/>
            ) 
               } > 
         </Route>  */}
         <Route path = "/salesview" render={ ()=> (
             <Navs  viewname = "salesview" content = {<Salesview />}  />
               ) 
               }>
         </Route>
         <Route path = "/contentview" render={ ()=> (
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
// const mapPropsToState = (state) => {
//   return {
//     content1: state.content1,
//     content2: state.content2
//   }
// }
export default App;
