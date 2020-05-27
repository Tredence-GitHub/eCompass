import React from 'react';
import { FaChevronCircleUp, FaChevronCircleDown, FaBars, FaRegChartBar, FaChartBar, FaBox, FaHeartbeat, FaArrowRight, FaStar, FaMagic, FaBullseye, FaChartArea, FaChartLine } from 'react-icons/fa'
import axios from 'axios';
import { useState , useEffect} from 'react';
import { Spinner } from 'react-bootstrap';
import './Landing.css';
import { Link } from 'react-router-dom';

export default function Landing() {

const [loading, setloading] = useState(false)
const [data, setdata] = useState(null)

// useEffect(async () => {
    
//     let response = await axios.get('http://localhost:4000/api/')
//     if(response.status === 200){
//         console.log(response);
//         setloading(false);
//     }
//     else{
//         alert('Could not load')
//     }
    
// }, [])


if(! loading)
{
    return (
        
        <div>
            

            <div className="row mt-4 col-border-xl" style={{
                
            }}>
			<div className="first col-xl-3 mr-1 ml-5">
                
                <center className="tc">PREDICTED SALES</center>
                    <div className = "third col-xl-12">
                        <center className="sc1"><h1>$13M</h1></center>
                        <center className="">+3% WoW <FaChevronCircleUp></FaChevronCircleUp></center>
                                                
                    </div>
            </div>
            
            <div className="middle col-xl-5  mr-1">
                <div className="row col-xl-12 mb-5" id="sub1">
                    <div className="dc-1 col-xl-5 mr-4 ml-4">
                        <center className="tc-1">Sales</center>
                        <Link to="/salesview" style={{
                            textDecoration: "none"
                        }}><div className="ic ic-1 col-xl-12">
                        <center className="f1 text-muted">dropped for</center>
                        <center className="n1" ><h1>11%</h1>SKUs</center>
                        </div></Link>
                    </div>
                    <div className="dc-2 col-xl-5 ">
                    <center className="tc-2">Content Health Score</center>
                        <Link to = "/contentview" style={{
                            textDecoration: "none"
                        }}><div className="ic ic-2 col-xl-12">
                        <center className="f1 text-muted">dropped for</center>
                        <center className="n1" ><h1>7%</h1>SKUs</center>
                        </div></Link>
                    </div>
                </div>
                <div className="row col-xl-12 mb-5" id="sub1">
                    <div className="dc-3 col-xl-5 mr-4 ml-4">
                    <center className="tc-3">OOS in last 7 days</center>
                        <Link to = "/inventoryview" style={{
                            textDecoration: "none",
                        }}><div className="ic ic-3 col-xl-12">
                        <center className="f1 text-muted">observed for</center>
                        <center className="n1" ><h1>85</h1>SKUs</center>
                        </div></Link>
                    </div>
                    <div className="dc-4 col-xl-5 mb-5">
                        <center className="tc-4">Sales Weekly Velocity</center>
                        <Link to = "/salesview" style={{
                            textDecoration: "none"
                        }}><div className="ic ic-4 col-xl-12">
                        <center className="f1 text-muted">dropped for</center>
                        <center className="n1" ><h1>467</h1>units</center>
                        </div></Link>
                    </div>
                </div>
                <div className="row col-xl-12 mb-5" id="sub1">
                    <div className="dc-5 col-xl-5 mr-4 ml-4">
                        <center className="tc-5">Average Rating</center>
                        <Link to = "/ratingsview" style={{
                            textDecoration: "none"
                        }}><div className="ic ic-5 col-xl-12">
                        <center className="f1 text-muted">dropped by</center>
                        <center className="n1" ><h1>3.96</h1>units</center>
                        </div></Link>
                    </div>
                    <div className="dc-6 col-xl-5 ">
                        <center className="tc-6">Average Search Rank</center>
                        <Link to = "/salesview" style={{
                            textDecoration: "none"
                        }}><div className="ic ic-6 col-xl-12">
                        <center className="f1 text-muted">dropped for</center>
                        <center className="n1" ><h1>6%</h1>SKUs</center>
                        </div></Link>
                    </div>
                </div>
                <div className="row col-xl-12 mb-5" id="sub1">
                    <div className="dc-7 col-xl-5 mr-4 ml-4">
                        <center className="tc-7">Price Index </center>
                        <Link to = "/salesview" style={{
                            textDecoration: "none"
                        }}><div className="ic ic-7 col-xl-12">
                        <center className="f1 text-muted">competitor's</center>
                        <center className="n1" ><h1>0.97</h1></center>
                        </div></Link>
                    </div>
                    <div className="dc-8 col-xl-5">
                    <center className="tc-8">Buy Box</center>
                    <Link to = "/inventoryview" style={{
                            textDecoration: "none"
                        }}><div className="ic ic-8 col-xl-12">
                        <center className="f1 text-muted">present in</center>
                        <center className="n1" ><h1>87</h1>SKUs</center>
                        </div></Link>  
                    </div>
                </div>
            </div>
            
            <div className="first col-xl-3 mr-2">
                <center className="sc">TARGET SALES</center>
                <div className = "second col-xl-12 text-center">
                    {/* <center><FaChartArea></FaChartArea></center> */}
                    <center className="sc1"><h1>$14M</h1></center>
                    <center className="">+4% WoW <FaChevronCircleUp></FaChevronCircleUp></center>
                </div>
            </div>
                                    
                                    
                                
            
        
            </div>
        </div>
)
}
else
{
    return(
        <div className="mr-auto ml-auto d-flex justify-content-center">
           <Spinner className="spinner-grow spinner-grow-sm text-primary" role="status"></Spinner>
           <Spinner className="spinner-grow spinner-grow-sm text-success" role="status"></Spinner>
           <Spinner className="spinner-grow spinner-grow-sm text-warning" role="status"></Spinner>
        </div>
    )
}

}
