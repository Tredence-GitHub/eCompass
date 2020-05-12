import React from 'react'
import logo from '../logo.png';
import studio from '../studio.PNG';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHamburger, FaList, FaUser, FaHeartbeat, FaSignOutAlt, FaHome, FaChartBar, FaStar, FaBoxOpen, FaPrescription, FaGlobe } from 'react-icons/fa';
import Salesview from './salesview';
import Contenthealth from './contenthealth';
import { Navbar, Nav, Form, FormControl, Button, Container, Dropdown, Row, Card } from 'react-bootstrap';
import Ratings from './ratings';


export default function Navs(props) {
    const [hover, setHovered] = useState(false);
    const [viewname, setViewName] = useState('')

    function setHoverStyle(id) {
        if (hover) {


        }
    }

    return (
        <div>
            <Navbar bg="light" variant="light" style={{
                boxShadow: "0px 1px 7px 3px lightgrey"
            }}>
                <Navbar.Brand href="#home" ><img src={logo} style={{
                    width: "100px",
                    height: "50px",
                    marginRight: "50px"
                }} /></Navbar.Brand>
                <Button variant="light"  ><FaList style={{
                    color: "dark-grey"
                }} /></Button>

                <Form inline>
                    <FormControl type="text" placeholder="Search" className="ml-sm-4" />
                    <Button variant="outline-primary">Search</Button>
                </Form>

                <Button className="drop-down" style={{
                    marginLeft: "970px"
                }} variant="light" onClick={(e) => {

                }

                } ><FaUser /><FaSignOutAlt style={{
                    color: "dark-grey"
                }} />


                </Button>


            </Navbar>


            <Container className="row" style={{
                marginRight: "0px",
                marginLeft: "0px",
                marginTop: "0px",
                padding: "0px 0px 0px",
                minWidth: "1550px",

            }}>

                <div style={{
                    overflow: "auto",
                }}>
                    <Nav className="sidebar bg-light" style={{
                        width: "30vh",
                        minHeight: "100vh",
                        marginLeft: "0px",
                        boxShadow: "0px 0px 7px 3px lightgrey"
                    }}>
                        <Container className=" ml-0 mt-4 mb-4 ">

                            <ul>
                                <img className="mb-4" src={studio} style={{ width: "100px", height: "40px" }} />
                                <li style={{ listStyle: "none" }} id="l1" ><Nav.Link href="/" ><span><FaHome></FaHome></span> Home</Nav.Link></li>
                                <li style={{ listStyle: "none" }}><Nav.Link href="/salesview"><span><FaChartBar></FaChartBar></span> Sales View</Nav.Link></li>
                                <li style={{ listStyle: "none" }}> <Nav.Link href="/contentview"><span><FaHeartbeat></FaHeartbeat></span> Content Health View</Nav.Link></li>
                                <li style={{ listStyle: "none" }}> <Nav.Link href="/ratingsview"><span><FaStar></FaStar></span> Ratings & Reviews View</Nav.Link></li>
                                <li style={{ listStyle: "none" }}> <Nav.Link href="/inventoryview"><span><FaBoxOpen></FaBoxOpen></span> Inventory Management View</Nav.Link></li>
                                <li style={{ listStyle: "none" }}> <Nav.Link href="/recommendations"><span><FaPrescription></FaPrescription></span> Recommendations</Nav.Link></li>

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
                        maxHeight: "85vh",
                        marginRight: "0px",
                        padding: "10px"
                    }}>

                        <div style={{
                            maxWidth: "1400px",
                            marginTop: "5px",

                        }}>

                            {props.viewname === 'salesview' ? <Salesview /> : <></>}
                            {props.viewname === 'contentview' ? <Contenthealth /> : <></>}
                            {props.viewname === 'ratingsview' ? <Ratings /> : <></>}
                            {props.viewname === 'inventoryview' ? <Contenthealth /> : <></>}

                        </div>
                    </Container>
                </div>
            </Container>

        </div>
    )
}
