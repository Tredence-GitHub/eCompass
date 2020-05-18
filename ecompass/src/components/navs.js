import React from 'react'
import logo from '../logo.png';
import studio from '../studio.PNG';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHamburger, FaList, FaUser, FaHeartbeat, FaSignOutAlt, FaHome, FaChartBar, FaStar, FaBoxOpen, FaPrescription, FaGlobe, FaSadTear, FaRegSadCry, FaEnvelopeOpenText, FaRegBell, FaBellSlash, FaBan, FaUserAltSlash, FaUserSlash } from 'react-icons/fa';
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
                boxShadow: "0px 1px 7px 3px lightgrey"
            }}>
                <Row className="col-md-12 ">
                    <div>
                <Navbar.Brand href="/home" ><img src={logo} style={{
                    width: "100px",
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
                <Form inline className="mr-auto mt-3">
                    <FormControl type="text" placeholder="Search" className="ml-md-4 mr-auto" />
                    <Button variant="outline-primary"> {props.logged} Search</Button>
                </Form>
                </div>
                <div className="ml-auto mt-3">
                <Link to="/"><Button className="drop-down" style={{
                    marginLeft: "auto",
                    marginRight: "5px"
                }} variant="light" ><FaUser /><FaSignOutAlt style={{
                color: "dark-grey"
            }}  />

                </Button>
            </Link>
            </div>
            </Row>
            </Navbar>

            <Container className="row" style={{
                marginRight: "0px",
                marginLeft: "0px",
                marginTop: "0px",
                padding: "0px 0px 0px",
                minWidth: "1550px",

            }}>

                <div style={{
                    overflow: "",
                }}>
                    <Nav className="sidebar bg-light" style={{
                        width: "30vh",
                        minHeight: "105vh",
                        marginLeft: "0px",
                        boxShadow: "0px 0px 7px 3px lightgrey"
                    }}>
                        <Container className=" ml-0 mt-4 mb-4 ">

                            <ul>
                                <img className="mb-4" src={studio} style={{ width: "100px", height: "40px" }} />
                                <li style={{ listStyle: "none" }} id="l1" ><Link to="/home" style={{
                                    textDecorationLine: "none",
                                    padding: "auto"
                                }}><span><FaHome></FaHome></span> Home</Link></li>
                                <li style={{ listStyle: "none", marginTop:"10px" }}><Link to="/salesview" style={{
                                    textDecorationLine: "none",
                                    
                                }}><span><FaChartBar></FaChartBar></span> Sales View</Link></li>
                                <li style={{ listStyle: "none", marginTop:"10px"  }}> <Link to="/contentview" style={{
                                    textDecorationLine: "none",
                                    
                                }}><span><FaHeartbeat></FaHeartbeat></span> Content Health View</Link></li>
                                <li style={{ listStyle: "none", marginTop:"10px"  }}> <Link to="/ratingsview" style={{
                                    textDecorationLine: "none",
                                    
                                }}><span><FaStar></FaStar></span> Ratings & Reviews View</Link></li>
                                <li style={{ listStyle: "none", marginTop:"10px"  }}> <Link to="/inventoryview" style={{
                                    textDecorationLine: "none",
                                    
                                }}><span><FaBoxOpen></FaBoxOpen></span> Inventory Management View</Link></li>
                                <li style={{ listStyle: "none", marginTop:"10px"  }}> <Link to="/home" style={{
                                    textDecorationLine: "none",
                                    
                                }}><span><FaPrescription></FaPrescription></span> Recommendations</Link></li>

                            </ul>
                        </Container>
                    </Nav>
                </div>



                <div style={{
                    minWidth: "1300px",
                    marginRight: "0px"
                }}>

                    <Container className="container mt-4 mb-1 bg-light" style={{
                        marginLeft: "30px",
                        maxWidth: "1500px",
                        marginRight: "0px",
                        height: "50px",
                        padding: "2px",

                    }} >
                        {props.viewname === 'home'? <h4><span className="mr-3"><FaGlobe></FaGlobe></span>  360&deg; View</h4> : <h4></h4> }
                        {props.viewname === 'salesview' ? <h4><span className="mr-3"><FaChartBar></FaChartBar></span>  Sales View</h4> : <h4></h4>}
                        {props.viewname === 'contentview' ? <h4><span className="mr-3"><FaHeartbeat></FaHeartbeat></span>  Content Health View</h4> : <h4></h4>}
                        {props.viewname === 'ratingsview' ? <h4><span className="mr-3"><FaStar></FaStar></span>  Review & Ratings View</h4> : <h4></h4>}
                        {props.viewname === 'inventoryview' ? <h4><span className="mr-3"><FaBoxOpen></FaBoxOpen></span>  Inventory Management View</h4> : <h4></h4>}


                    </Container >
                    <Container className="container-fluid mt-4  bg-light" style={{
                        marginLeft: "30px",
                        maxWidth: "1500px",
                        maxHeight: "15vh",
                        marginRight: "0px",
                        padding: "10px"
                    }}>
                        {props.viewname === 'home'? <GlobalDropDown onsubmitprop = {onSubmit} />:<></> }
                        {props.viewname !== 'home' && props.viewname !== 'recommendations'? <LocalDropDown passview={props.viewname}/>: <></>}
                    </Container>
                    <Container className="container-fluid mt-4  bg-light" style={{
                        marginLeft: "30px",
                        maxWidth: "1500px",
                        maxHeight: "90vh",
                        marginRight: "0px",
                        padding: "10px"
                    }}>

                        <div style={{
                            maxWidth: "1400px",
                            marginTop: "5px",
                            
                        }}>
                            {props.content}
                            
                        </div>
                    </Container>
                </div>
            </Container>

        </div>
    )
    }
    else{
        return(
           
        <div className="row col-6 col-md-8 ml-auto mr-auto" style={{
            marginTop: "200px",
            padding: "5px",
            boxShadow:"1px 1px 1px 1px lightgray"
           
        }}>
        <div className="row">
            <div><FaUserSlash style={{
                width: "300px",
                height: "300px",
                color: "silver",
                marginLeft: "50px"
            }}>
                
            </FaUserSlash> </div>
            <div style={{
                fontFamily: "serif",
                fontSize: "30pt",
                marginTop: "100px"
            }}>
            Unuthorized Access <FaBan></FaBan> Please <Link to="/"> Login</Link>
            </div>
        </div>
            
          
        
        </div>
            
        )
    }

            
}
