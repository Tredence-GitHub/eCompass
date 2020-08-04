import React, { useState } from 'react'
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaSignOutAlt, FaHome,FaPenNib, FaChartBar, FaStar, FaBoxOpen, FaPrescription,
     FaUser, FaBan, FaUserSlash, FaSearch, FaFlask, FaTimes } from 'react-icons/fa';

import { Navbar, Form, FormControl, Button, Container, Row } from 'react-bootstrap';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import GlobalDropDown from './globalDropDown';
import './Landing.css';

export default function Navs(props) {
    const searched = ['sales recommendation', 'sales view', 'recommendation', 'ratings and reviews view', 'ratings recommendation',
    'content health view', 'content health recommendation', 'inventory view', 'simulator','Workbench',
    'buybox', 'average search rank', 'average rating', 
    'revenue', 'WoW','home', '360 view']

    const [showSearchDiv, setshowSearchDiv] = useState(true)
    const [searchbtn, setsearchbtn] = useState(true)
    
    function onSubmit(value) {
        props.onDropDownSubmit(value);
    }
    const [selectedNav, setselectedNav] = useState(props.viewname)

    function populateSearchDiv(val) {
        let node = document.createElement('li');
        if (val.includes('revenue') || val.includes('sales view') || val.includes('search rank')){
            node.setAttribute('onClick', "location.href= 'salesview'")
        }
        else if (val.includes('recommendation') || val.includes('recommendations')){
            node.setAttribute('onClick', "location.href= 'recommendations'")
        }
        else if (val.includes('content') || val.includes('health') || val.includes('buybox')){
            node.setAttribute('onClick', "location.href= 'contentview'")
        }
        else if (val.includes('inventory') ){
            node.setAttribute('onClick', "location.href= 'inventoryview'")
        }
        else if (val.includes('simulator') ){
            node.setAttribute('onClick', "location.href= 'simulator'")
        }
        else if (val.includes('ratings') || val.includes('reviews')){
            node.setAttribute('onClick', "location.href= 'ratingsview'")
        }
        else if (val.includes('workbench') || val.includes('Workbench')){
            node.setAttribute('onClick', "location.href= 'Workbench'")
        }//Vivek added workbench
        else {
            node.setAttribute('onClick', "location.href= 'home' ")
        }
        node.setAttribute('className', 'search-list-item');
        node.innerHTML = val;

        document.getElementById('search-list').appendChild(node);

        let children = document.getElementById('search-list');
        children.querySelectorAll('li').forEach((n, idx) => { if(n.innerHTML === val){
            console.log(n.innerHTML)
            document.getElementById('search-list').replaceChild(node, n);
        } 
        })
    }
    function handleSearch(e){
       if(!e.target.value){
        setshowSearchDiv(true);
        document.querySelectorAll('li').forEach((n, idx) => { 
            n.remove()
        })
       }

       searched.forEach((item, index) =>{
           let input_list = e.target.value.split(' ');
           if(input_list) {
            input_list.forEach((i)=> {
                if(item.includes(i) && i.length >= 2 ){
                    populateSearchDiv(item);
                    setshowSearchDiv(false);    
                 }
            })
            
           }
          
       })
      
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
                        {/* vivek added workbench */}
                        <NavItem eventKey="Workbench" onSelect="Workbench">
                            <NavIcon>
                                <Link to="/Workbench" > <FaPenNib className="icon-size"> 
                                 </FaPenNib></Link>
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
                        <NavItem eventKey="signout" onSelect="signout">
                            <NavIcon>

                                <Link to="/"><FaSignOutAlt className="icon-size">
                                    </FaSignOutAlt></Link>


                            </NavIcon>
                            <NavText>Sign Out</NavText>
                        </NavItem>
                        
                    
                    </SideNav.Nav>
                </SideNav>
                <Navbar className="nav-bar" bg="" variant="" >
                    <Row>
                        <div style={{
                            // backgroundColor: "red",
                            padding: "0px",
                            maxHeight: "50px",
                            
                        }}>
                            <img src={logo} style={{
                                width: "90px",
                                height: "40px",
                                marginLeft: "70px",
                            }} />

                        </div>

                        <div className="" style={{
                            padding: "0px",
                            
                        }}>
                            {/* <Button variant="outline-primary"  onClick={(e)=> {
                                setsearchbtn(true)
                            }} style={{
                                    border: "none",
                                    flex: "end",
                                    float: "left"
                                }} hidden={searchbtn} ><FaSearch > </FaSearch></Button> */}

                            <Form className="search-form">
                                <FormControl type="text"  placeholder="Search" size="sm" id="searchbar"  onChange={handleSearch} >
                                </FormControl>
                               <div className="bg search-div" hidden={showSearchDiv} >
                                    <FaTimes id="search-close" onClick={(e)=> {
                                    setshowSearchDiv(true)
                                }}  ></FaTimes> 
                                   <ul className="search-list" id="search-list">

                                   </ul>
                                   
                            </div>
                                
                                </Form>
                              
                           

                            
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
