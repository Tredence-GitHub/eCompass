import React, { useState } from 'react'
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaSignOutAlt, FaHome, FaChartBar, FaStar, FaBoxOpen, FaPrescription, FaUser, FaBan, FaUserSlash, FaSearch, FaFlask } from 'react-icons/fa';

import { Navbar, Form, FormControl, Button, Container, Row } from 'react-bootstrap';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import GlobalDropDown from './globalDropDown';
import LocalDropDown from './localDropDown';
import './Landing.css';

export default function Navs(props) {

    function onSubmit(value) {
        props.onDropDownSubmit(value);
    }
    const [selectedNav, setselectedNav] = useState(props.viewname)

    function handleSearch(e){
    //    console.log(e.target.value);
    }

    if (localStorage.getItem('loggedIn') === 'true') {
        return (
            <div>
                <SideNav className="side"  
                    onSelect={(selected) => {
                        // Add your code here
                        // alert(selected)
                        setselectedNav(selected)
                        // selected.defaultSelected=selected;
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected={selectedNav}>
                        <NavItem eventKey="home" onSelect="home">
                            <NavIcon>
                                <Link to="/home"><FaHome className="icon-size">
                                </FaHome> </Link>
                            </NavIcon>
                            <NavText>
                                Dashboard
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="recommendations" onSelect="recommendations">
                            <NavIcon>  
                                <Link to="/recommendations"><FaPrescription className="icon-size">  
                                </FaPrescription>
                                </Link>

                            </NavIcon>
                            <NavText>Recommendations View</NavText>
                        </NavItem>
                        <NavItem eventKey="simulator" onSelect="simulator">
                            <NavIcon>

                                <Link to="/simulator" > <FaFlask className="icon-size"> 
                                 </FaFlask></Link>


                            </NavIcon>
                            <NavText>Simulator</NavText>
                        </NavItem>
                        <NavItem eventKey="salesview" onSelect="salesview">
                            <NavIcon>

                                <Link to="/salesview"> <FaChartBar className="icon-size">
                                  </FaChartBar></Link>


                            </NavIcon>
                            <NavText>Sales View</NavText>
                        </NavItem>
                        <NavItem eventKey="contentview" onSelect="contentview">
                            <NavIcon>

                                <Link to="/contentview"> <FaHeartbeat className="icon-size">
                                  </FaHeartbeat></Link>


                            </NavIcon>
                            <NavText>Content Health View</NavText>
                        </NavItem>
                        <NavItem eventKey="ratingsview" onSelect="ratingsview">
                            <NavIcon>

                                <Link to="/ratingsview"> <FaStar className="icon-size">
                                  </FaStar></Link>


                            </NavIcon>
                            <NavText>Ratings & Reviews View</NavText>
                        </NavItem>
                        <NavItem eventKey="inventoryview" onSelect="inventoryview">
                            <NavIcon>

                                <Link to="/inventoryview"> <FaBoxOpen className="icon-size"> 
                                 </FaBoxOpen></Link>


                            </NavIcon>
                            <NavText>Inventory View</NavText>
                        </NavItem>
                        
                    
                    </SideNav.Nav>
                </SideNav>
                <Navbar className="nav-bar" bg="ml-10 col-sm-12" variant="" >
                    <Row className="col-sm-12 ">
                        <div>
                            <Navbar.Brand href="/home" ><img src={logo} style={{
                                width: "90px",
                                height: "40px",
                                marginLeft: "50px"
                            }} /></Navbar.Brand>

                        </div>

                        <div className=" col-6 d-flex mr-0 ml-auto mt-1" style={{
                            padding: "0px"
                        }}>
                            <Form inline className="flex-right ml-auto mr-2 xs-4 mt-0">
                                <FormControl type="text" size="sm" placeholder="Search" className="ml-xs-6 " id="searchbar" onChange={handleSearch} />
                                <Button variant="outline-primary" size="sm" style={{
                                    border: "none"
                                }} ><FaSearch > </FaSearch></Button>
                            </Form>

                            <Link to="/"><Button className="mt-2 mr-0" variant="none" size="sm" style={{
                                marginRight: "0px",
                                border: "none",
                                color: "aqua",
                            }}><FaUser /><FaSignOutAlt style={{

                            }} />

                            </Button>
                            </Link>
                        </div>
                    </Row>
                </Navbar>


                <div className=" col-xl-11 " style={{
                    padding: "0px",
                    paddingRight: "0px",
                    marginLeft: "70px",
                    marginTop: "0px",
                    position: "relative",
                }}>
                    <Container fluid className="  mt-4 mb-1 bg" style={{
                        marginLeft: "0px",
                        width: "100%",
                        marginRight: "0px",
                        padding: "0px",
                        paddingRight: "0px",
                        color: "silver",
                        fontWeight: "lighter"
                    }} >

                    </Container >

                    <Container fluid className=" mt-2  bg" style={{
                        marginLeft: "0px",
                        width: "100%",
                        minHeight: "90vh",
                        marginRight: "0px",
                        backgroundColor: "",
                        // border: "0.25px solid navy"
                    }}>

                        <Container fluid className=" mt-3" style={{
                            marginLeft: "0px",
                            width: "100%",
                            maxHeight: "15vh",
                            marginRight: "0px",
                            // paddingRight: "20px"
                        }}>
                            {props.viewname === 'home' ? <GlobalDropDown onsubmitprop={onSubmit} view={props.viewname} /> : <></>}
                            {/* {props.viewname !== 'home' && props.viewname !== 'recommendations'? <LocalDropDown passview={props.viewname}/>: <></>} */}
                        </Container >
                        {props.content}


                    </Container>
                </div>

            </div>
        )
    }
    else {
        return (

            <div className="row col-6 col-md-6 ml-auto mr-auto" style={{
                marginTop: "200px",
                padding: "5px",
                boxShadow: "1px 1px 1px 1px lightgray"

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
