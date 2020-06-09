import React from 'react'
import logo from '../logo.png';
import studio from '../studio.PNG';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaSignOutAlt, FaHome, FaChartBar, FaStar, FaBoxOpen, FaPrescription, FaUser, FaBan, FaUserSlash, FaSearch, FaFlask } from 'react-icons/fa';

import { Navbar,  Form, FormControl, Button, Container, Dropdown, Row, Card } from 'react-bootstrap';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
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
            <SideNav className="" style={{
                backgroundColor: "#191d38",
                height: "auto",
                minHeight: "150vh"
            }}
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
            <Link to="/home"><FaHome style={{
                                    fontSize: "20pt"
                                }}>
                                </FaHome> </Link>
            </NavIcon>
            <NavText>
                Dashboard
            </NavText>
        </NavItem>
        <NavItem eventKey="sales">
            <NavIcon>
            
            <Link to="/salesview"> <FaChartBar style={{
                                    fontSize: "20pt"
                                }}>  </FaChartBar></Link>
                                
            
            </NavIcon>
            <NavText>Sales View</NavText>
        </NavItem>
        <NavItem eventKey="">
            <NavIcon>
            
            <Link to="/contentview"> <FaHeartbeat style={{
                                    fontSize: "20pt"
                                }}>  </FaHeartbeat></Link>
                                
            
            </NavIcon>
            <NavText>Content Health View</NavText>
        </NavItem>
        <NavItem eventKey="">
            <NavIcon>
            
            <Link to="/ratingsview"> <FaStar style={{
                                    fontSize: "20pt"
                                }}>  </FaStar></Link>
                                
            
            </NavIcon>
            <NavText>Ratings & Reviews View</NavText>
        </NavItem>
        <NavItem eventKey="inventoryview">
            <NavIcon>
            
            <Link to="/inventoryview"> <FaBoxOpen style={{
                                    fontSize: "20pt"
                                }}>  </FaBoxOpen></Link>
                                
            
            </NavIcon>
            <NavText>Inventory View</NavText>
        </NavItem>
        <NavItem eventKey="recommendationsview">
            <NavIcon>
            
             {/* <FaPrescription onClick={(e)=>{
                 window.location.href="https://tredence-github.github.io/eCompass/recommendations.html"
             }} style={{
                                    fontSize: "20pt"
                                }}>  </FaPrescription> */}
                <Link to="/recommendations"><FaPrescription  style={{
                                    fontSize: "20pt"
                                }}>  </FaPrescription>
                                </Link>
            
            </NavIcon>
            <NavText>Recommendations View</NavText>
        </NavItem>
        <NavItem eventKey="simulator">
            <NavIcon>
            
            <Link to="/simulator" > <FaFlask style={{
                                    fontSize: "20pt"
                                }}>  </FaFlask></Link>
                                
            
            </NavIcon>
            <NavText>Simulator</NavText>
        </NavItem>
        {/* <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            {/* <Link to="/home2" style={{
                                    textDecorationLine: "none",
                                    padding: "auto"
                                }}><span></span> Home2</Link> */}
            {/* </NavText>
            <NavItem eventKey="charts/linechart">
                <NavText>
                    Line Chart
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                    Bar Chart
                </NavText>
            </NavItem>
        </NavItem> */}
    </SideNav.Nav>
</SideNav>
            <Navbar bg="ml-10 col-sm-12" variant="" style={{
                boxShadow: "0px 1px 7px 0.25px navy",
                backgroundColor: "#191d30",
                height: "50px",
                width:"100%"
            }}>
                <Row className="col-sm-12 ">
                    <div>
                <Navbar.Brand href="/home" ><img src={logo} style={{
                    width: "90px",
                    height: "40px",
                    marginLeft: "50px"
                }} /></Navbar.Brand>

                </div>
                
                <div className=" col-6 d-flex mr-0 ml-auto mt-1"  style={{
                    padding: "0px"
                }}>
                <Form inline className="flex-right ml-auto mr-2 xs-4 mt-0">
                    <FormControl type="text" size="sm" placeholder="Search" className="ml-xs-6 " style={{
                        backgroundColor: "lightgray",
                        borderRadius: "12px"
                    }} />
                    <Button variant="outline-primary" size="sm" style={{
                        border: "none"
                    }} ><FaSearch > </FaSearch></Button>
                </Form>
                
                <Link to="/"><Button className="mt-2 mr-0" variant="none" size="sm" style={{
                    marginRight: "0px",
                    border: "none",
                    // backgroundColor:"none",
                    color:"aqua",
                }}><FaUser /><FaSignOutAlt style={{
                
            }}  />

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
                        {props.viewname !== ''? <GlobalDropDown onsubmitprop = {onSubmit} view = {props.viewname} />:<></> }
                        {/* {props.viewname !== 'home' && props.viewname !== 'recommendations'? <LocalDropDown passview={props.viewname}/>: <></>} */}
                    </Container >
                            {props.content}
                            
                        
                    </Container>
                    </div>

            {/* </div> */}

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
