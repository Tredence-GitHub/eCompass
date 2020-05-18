import React from 'react'
import logo from '../logo.png';
import studio from '../studio.PNG';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHamburger, FaList, FaUser, FaHeartbeat, FaSignOutAlt, FaHome, FaChartBar, FaStar, FaBoxOpen, FaPrescription, FaGlobe, FaSadTear, FaRegSadCry, FaEnvelopeOpenText, FaRegBell, FaBellSlash, FaBan, FaUserAltSlash, FaUserSlash, FaSearch } from 'react-icons/fa';
import Salesview from './salesview';
import Contenthealth from './contenthealth';
import Inventory from './inventory';
import { Navbar, Nav, Form, FormControl, Button, Container, Dropdown, Row, Card } from 'react-bootstrap';
import Ratings from './ratings';
import GlobalDropDown from './globalDropDown';
import LocalDropDown from './localDropDown';

export default function Navs(props) {

    function onSubmit (value) {
        props.onDropDownSubmit(value);
    }

   if(localStorage.getItem('loggedIn') === 'true')
   {
    // console.log(props.logged)
    return (
        <div>
            
            <Navbar bg="light" variant="light" style={{
                boxShadow: "0px 1px 7px 3px lightgrey",
                width:"100%"
            }}>
                <Row className="col-md-12 ">
                    <div>
                <Navbar.Brand href="/home" ><img src={logo} style={{
                    width: "110px",
                    height: "50px",
                    marginRight: "50px"
                }} /></Navbar.Brand>

                </div>
                <div className="mr-3 mt-3">
                <Button variant="light"  ><FaList style={{
                    color: "dark-grey"
                }} /></Button>
                </div>
                <div>
                <Form inline className="mr-auto xs-4 mt-3">
                    <FormControl type="text" size="sm" placeholder="Search" className="ml-xs-4 mr-auto" />
                    <Button variant="outline-primary" size="sm" ><FaSearch > Search</FaSearch></Button>
                </Form>
                </div>
                <div className="ml-auto mt-3">
                <Link to="/"><Button className="drop-down" style={{
                    marginLeft: "auto",
                    marginRight: "0px"
                }} variant="light" ><FaUser /><FaSignOutAlt style={{
                color: "dark-grey"
            }}  />

                </Button>
            </Link>
            </div>
            </Row>
            </Navbar>

            <div className="row " style={{
                height: "100vh",
                marginLeft: "0px",
                marginTop: "0px",
                width: "100%",
                // backgroundColor: "blue"

            }}>

                <div className="col-2" id="bar" style={{
                    overflow: "",
                    height: "150vh",
                    padding: "0px"
                }}> 
                    <div className="sidebar container-fluid bg-light" style={{
                        overflow: "",
                        height: "150vh",
                    }}>
                        <Container className=" ml-0  ">

                            <ul>
                                <img className="mb-4" src={studio} style={{ width: "100px", marginTop: "30px", height: "40px" }} />
                                <li style={{ listStyle: "none" }} id="l1" ><Link to="/home" style={{
                                    textDecorationLine: "none",
                                    padding: "auto"
                                }}><span><FaHome></FaHome></span> Home</Link></li>
                                <li style={{ listStyle: "none", marginTop:"20px" }}><Link to="/salesview" style={{
                                    textDecorationLine: "none",
                                    
                                }}><span><FaChartBar></FaChartBar></span> Sales View</Link></li>
                                <li style={{ listStyle: "none", marginTop:"20px"  }}> <Link to="/contentview" style={{
                                    textDecorationLine: "none",
                                    
                                }}><span><FaHeartbeat></FaHeartbeat></span> Content Health View</Link></li>
                                <li style={{ listStyle: "none", marginTop:"20px"  }}> <Link to="/ratingsview" style={{
                                    textDecorationLine: "none",
                                    
                                }}><span><FaStar></FaStar></span> Ratings & Reviews View</Link></li>
                                <li style={{ listStyle: "none", marginTop:"20px"  }}> <Link to="/inventoryview" style={{
                                    textDecorationLine: "none",
                                    
                                }}><span><FaBoxOpen></FaBoxOpen></span> Inventory Management View</Link></li>
                                <li style={{ listStyle: "none", marginTop:"20px"  }}> <Link to="/home" style={{
                                    textDecorationLine: "none",
                                    
                                }}><span><FaPrescription></FaPrescription></span> Recommendations</Link></li>

                            </ul>
                        </Container>
                    </div>
                </div>

                <div className="container-fluid col-8 col-xl-10" style={{
                     marginLeft: "0px",
                     marginTop: "0px",
                    //  backgroundColor: "pink"
                }}>
                    <Container className="container-fluid col-xl-12 mt-4 mb-1 bg-light" style={{
                        marginLeft: "0px",
                        width: "100%",
                        marginRight: "0px",
                        padding: "2px",

                    }} >
                        {props.viewname === 'home'? <h4><span className="mr-3"><FaGlobe></FaGlobe></span>  360&deg; View</h4> : <h4></h4> }
                        {props.viewname === 'salesview' ? <h4><span className="mr-3"><FaChartBar></FaChartBar></span>  Sales View</h4> : <h4></h4>}
                        {props.viewname === 'contentview' ? <h4><span className="mr-3"><FaHeartbeat></FaHeartbeat></span>  Content Health View</h4> : <h4></h4>}
                        {props.viewname === 'ratingsview' ? <h4><span className="mr-3"><FaStar></FaStar></span>  Review & Ratings View</h4> : <h4></h4>}
                        {props.viewname === 'inventoryview' ? <h4><span className="mr-3"><FaBoxOpen></FaBoxOpen></span>  Inventory Management View</h4> : <h4></h4>}


                    </Container >
                    <Container className="container-fluid mt-4 col-xl-12  bg-light" style={{
                        marginLeft: "0px",
                        width: "100%",
                        maxHeight: "15vh",
                        marginRight: "0px",
                        paddingRight: "20px"
                    }}>
                        {props.viewname === 'home'? <GlobalDropDown onsubmitprop = {onSubmit} />:<></> }
                        {props.viewname !== 'home' && props.viewname !== 'recommendations'? <LocalDropDown passview={props.viewname}/>: <></>}
                    </Container>
                    <Container className="container-fluid col-xl-12 mt-4  bg-light" style={{
                        marginLeft: "0px",
                        width: "100%",
                        // maxHeight: "90vh",
                        marginRight: "0px",
                    }}>

                        
                            {props.content}
                            
                        
                    </Container>
                    </div>

            </div>

        </div>
    )
    }
    else{
        return(
           
        <div className="row col-6 col-md-6 ml-auto mr-auto" style={{
            marginTop: "200px",
            padding: "5px",
            boxShadow:"1px 1px 1px 1px lightgray"
           
        }}>
        <div className="row">
            <div><FaUserSlash style={{
                width: "200px",
                height: "200px",
                color: "silver",
                marginLeft: "50px"
            }}>
                
            </FaUserSlash> </div>
            <div style={{
                fontFamily: "serif",
                fontSize: "20pt",
                marginTop: "100px"
            }}>
            Unuthorized Access <FaBan></FaBan> Please <Link to="/"> Login</Link>
            </div>
        </div>
            
          
        
        </div>
            
        )
    }

            
}
