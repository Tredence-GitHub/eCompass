// import React from 'react'
// import { FaChevronCircleUp, FaChevronCircleDown, FaBars, FaMagic, FaChartBar, FaBox, FaHeartbeat, FaArrowRight, FaStar } from 'react-icons/fa'
// export default function Landing2() {
//   return (
//     <div style={{
//       backgroundColor: ""
//     }}>
//       <div className="row mt-4 col-border-xl" style={{
                
//             }}>
// 									<div className=" col-md-8 col-6 col-xl-3">
// 										<div className="inventory card-body mr-1">
// 											<div className=" float-left mr-1" style={{
//                                                 backgroundColor: "powderblue",
//                                                 alignItems: "center",
//                                                 fontSize: "20pt",
//                                                 width: "50px",
//                                                 borderRadius: "50%",
//                                                 padding: "2px"
//                                             }}>
// 												<center><FaBox></FaBox></center>
// 											</div>
// 											<h5 className="card-title ml-2 mb-5 counter" data-count="87">87 SKUs</h5>
// 											<h6 className="h6 mt-10">
// 												OOS in Last 7 days
// 											</h6>
											
// 										</div>
// 									</div>
// 									<div className="col-md-12 col-lg-6 col-xl-3">
// 										<div className="sales card-body" >
//                                         <div className=" float-left mr-1" style={{
//                                                 backgroundColor: "pink",
//                                                 alignItems: "center",
//                                                 fontSize: "20pt",
//                                                 width: "50px",
//                                                 borderRadius: "50%",
//                                                 padding: "2px"
//                                             }}>
// 												<center><FaChartBar></FaChartBar></center>
// 											</div>
// 											<h5 className="card-title mb-5 append-percent counter" data-count="67">11% SKUs <FaChevronCircleDown style={{ color: "red" }}></FaChevronCircleDown></h5>
// 											<h6 className="h6 mt-10">
// 												Sales
// 											</h6>
//                                             {/* <div className="progress progress-active-sessions mt-4" style={{
//                                                 height:"7px"
//                                             }}>
//                                                 <div className="progress-bar bg-primary" role="progressbar" 
//                                                 style={{
//                                                     width: "62%" ,
//                                                     ariaValueNow: "72",
//                                                     ariaValuemin: "0",
//                                                      ariaValuemax: "100"
//                                                 }}></div> 
// 											</div>*/}
// 											{/* <small className="h6 float-left m-t-5 mb-3">
// 												Change
// 											</small>
// 											<small className="h6 float-right m-t-5 mb-3 counter append-percent" data-count="7">7</small> */}
// 										</div>
// 									</div>


//                                     <div className=" col-md-12 col-lg-6 col-xl-3 border-xl">
// 										<div className="chs card-body mr-1" >
// 											<div className="float-left mr-1" style={{
//                                                 backgroundColor: "violet",
//                                                 alignItems: "center",
//                                                 fontSize: "20pt",
//                                                 width: "50px",
//                                                 borderRadius: "50%",
//                                                 padding: "2px"
//                                             }}>
// 												<center><FaHeartbeat></FaHeartbeat></center>
// 											</div>
// 											<h5 className="card-title ml-2 mb-5 counter" data-count="87">7% SKUs <FaChevronCircleUp style={{
//                                                 color: "red"
//                                             }}></FaChevronCircleUp></h5>
// 											<h6 className="h6 mt-10">
// 												Content Health Score
// 											</h6>
// 											{/* <div className="progress progress-active-sessions mt-4" style={{
//                                                 height:"7px"
//                                             }}>
                                                
//                                                 <div className="progress-bar bg-primary" role="progressbar" 
//                                                 style={{
//                                                     width: "62%" ,
//                                                     ariaValueNow: "72",
//                                                     ariaValuemin: "62",
//                                                      ariaValuemax: "100"
//                                                 }}></div> 
// 											</div>*/}
// 											{/* <small className="h6 float-left m-t-5 mb-3">
// 												Change
// 											</small>
// 											<small className="h6 float-right m-t-5 mb-3 counter append-percent" data-count="7">7</small> */}
// 										</div>
// 									</div>
									
// 									<div className=" col-md-12 col-lg-6 col-xl-3 border-xl">
// 										<div className="sales card-body mr-1" >
// 											<div className=" float-left mr-1" style={{
//                                                 backgroundColor: "pink",
//                                                 alignItems: "center",
//                                                 fontSize: "20pt",
//                                                 width: "50px",
//                                                 borderRadius: "50%",
//                                                 padding: "2px"
//                                             }}>
// 												<center><FaChartBar></FaChartBar></center>
// 											</div>
// 											<h5 className="card-title ml-2 mb-5 counter" data-count="87">467 Units <FaChevronCircleDown style={{
//                                                 color: "red"
//                                             }}></FaChevronCircleDown></h5>
// 											<h6 className="h6 mt-10">
// 												Sales Weekly Velocity
// 											</h6>
											
// 										</div>
// 									</div>


//                                     <div className=" col-md-12 mt-4 col-lg-6 mt-2 col-xl-3 border-xl">
// 										<div className="sales card-body mr-1" >
// 											<div className=" float-left mr-1" style={{
//                                                 backgroundColor: "pink",
//                                                 alignItems: "center",
//                                                 fontSize: "20pt",
//                                                 width: "50px",
//                                                 borderRadius: "50%",
//                                                 padding: "2px"
//                                             }}>
// 												<center><FaChartBar></FaChartBar></center>
// 											</div>
// 											<h5 className="card-title ml-2 mb-5 counter" data-count="87">85% SKUs <FaChevronCircleUp style={{
//                                                 color: "green"
//                                             }}></FaChevronCircleUp></h5>
// 											<h6 className="h6 mt-10">
// 												Buy Box In
// 											</h6>
// 											{/* <div className="progress progress-active-sessions mt-4" style={{
//                                                 height:"7px"
//                                             }}>
                                                
//                                                 <div className="progress-bar bg-primary" role="progressbar" 
//                                                 style={{
//                                                     width: "62%" ,
//                                                     ariaValueNow: "72",
//                                                     ariaValuemin: "62",
//                                                      ariaValuemax: "100"
//                                                 }}></div>
// 											</div>
// 											<small className="h6 float-left m-t-5 mb-3">
// 												Change
// 											</small>
// 											<small className="h6 float-right m-t-5 mb-3 counter append-percent" data-count="7">7</small> */}
// 										</div>
// 									</div>
                                    
//                                     <div className=" col-xl-6 col-lg-6 mt-2 col-xl-3 ">
// 										<div className="target card-body mr-1" >
// 											<div className="float-left mr-1" >
// 												<center><></></center>
// 											</div>
											
// 											<h5 className="h5 ">
// 												TARGET SALES
// 											</h5>
//                                             <h5 className="card-title ml-1 mb-4 counter" data-count="87">$13M/$15M  
//                                             +4% WoW <FaChevronCircleUp style={{
//                                                 color: "green"
//                                             }}></FaChevronCircleUp> </h5>
// 											{/* <div className="progress progress-active-sessions mt-4" style={{
//                                                 height:"7px"
//                                             }}>
                                                
//                                                 <div className="progress-bar bg-primary" role="progressbar" 
//                                                 style={{
//                                                     width: "62%" ,
//                                                     ariaValueNow: "72",
//                                                     ariaValuemin: "62",
//                                                      ariaValuemax: "100"
//                                                 }}></div>
// 											</div>
// 											<small className="h6 float-left m-t-5 mb-3">
// 												Change
// 											</small>
// 											<small className="h6 float-right m-t-5 mb-3 counter append-percent" data-count="7">7</small> */}
// 										</div>
// 									</div>

                                    
//                                     <div className=" col-md-12 col-lg-6  mt-4 col-xl-3 border-xl">
// 										<div className="rating card-body mr-1" >
// 											<div className="float-left mr-1" style={{
//                                                 backgroundColor: "beige",
//                                                 alignItems: "center",
//                                                 fontSize: "20pt",
//                                                 width: "50px",
//                                                 borderRadius: "50%",
//                                                 padding: "2px"
//                                             }}>
// 												<center><FaStar></FaStar></center>
// 											</div>
// 											<h5 className="card-title ml-2 mb-5 counter" data-count="87">3.96 Units <FaChevronCircleDown style={{
//                                                 color: "red"
//                                             }}></FaChevronCircleDown></h5>
// 											<h6 className="h6 mt-10">
// 												Average Ratings
// 											</h6>
// 											{/* <div className="progress progress-active-sessions mt-4" style={{
//                                                 height:"7px"
//                                             }}>
                                                
//                                                 <div className="progress-bar bg-primary" role="progressbar" 
//                                                 style={{
//                                                     width: "62%" ,
//                                                     ariaValueNow: "72",
//                                                     ariaValuemin: "62",
//                                                      ariaValuemax: "100"
//                                                 }}></div>
// 											</div>
// 											<small className="h6 float-left m-t-5 mb-3">
// 												Change
// 											</small>
// 											<small className="h6 float-right m-t-5 mb-3 counter append-percent" data-count="7">7</small> */}
// 										</div>
// 									</div>
//                                     <div className=" col-md-12 col-lg-6  mt-2 col-xl-3 border-xl">
// 										<div className="sales card-body mr-1" >
// 											<div className="float-left mr-1" style={{
//                                                 backgroundColor: "pink",
//                                                 alignItems: "center",
//                                                 fontSize: "20pt",
//                                                 width: "50px",
//                                                 borderRadius: "50%",
//                                                 padding: "2px"
//                                             }}>
// 												<center><FaChartBar></FaChartBar></center>
// 											</div>
// 											<h5 className="card-title ml-2 mb-5 counter" data-count="87">1.04 Units <FaChevronCircleDown style={{
//                                                 color: "red"
//                                             }}></FaChevronCircleDown></h5>
// 											<h6 className="h6 mt-10">
// 												Reseller Price Index
// 											</h6>
											
// 										</div>
// 									</div>

//                                     <div className=" col-md-12 col-lg-6 col-xl-3 mt-2 border-xl">
// 										<div className="sales card-body mr-1" >
// 											<div className="float-left mr-1" style={{
//                                                 backgroundColor: "pink",
//                                                 alignItems: "center",
//                                                 fontSize: "20pt",
//                                                 width: "50px",
//                                                 borderRadius: "50%",
//                                                 padding: "2px"
//                                             }}>
// 												<center><FaChartBar></FaChartBar></center>
// 											</div>
// 											<h5 className="card-title ml-2 mb-5 counter" >11.2% <FaChevronCircleUp style={{
//                                                 color: "green"
//                                             }}></FaChevronCircleUp></h5>
// 											<h6 className="h6 mt-10">
// 												Conversion Rate
// 											</h6>
// 										</div>
// 									</div>

//                                     <div className=" col-md-12 col-lg-6 col-xl-3 mt-2 border-xl">
// 										<div className="sales card-body mr-1" >
// 											<div className="float-left mr-1" style={{
//                                                 backgroundColor: "pink",
//                                                 alignItems: "center",
//                                                 fontSize: "20pt",
//                                                 width: "50px",
//                                                 borderRadius: "50%",
//                                                 padding: "2px"
//                                             }}>
// 												<center><FaChartBar></FaChartBar></center>
// 											</div>
// 											<h5 className="card-title ml-2 mb-5 counter" >3.8 <FaChevronCircleDown style={{
//                                                 color: "red"
//                                             }}></FaChevronCircleDown></h5>
// 											<h6 className="h6 mt-10">
// 												Average Search Rank
// 											</h6>
// 										</div>
// 									</div>
                                    
//                                     <div className=" col-md-12 col-lg-6  mt-2 col-xl-3 border-xl">
// 										<div className="sales card-body mr-1" >
// 											<div className="float-left mr-1" style={{
//                                                 backgroundColor: "pink",
//                                                 alignItems: "center",
//                                                 fontSize: "20pt",
//                                                 width: "50px",
//                                                 borderRadius: "50%",
//                                                 padding: "2px"
//                                             }}>
// 												<center><FaChartBar></FaChartBar></center>
// 											</div>
// 											<h5 className="card-title ml-2 mb-5 counter" data-count="87">0.97 Units <FaChevronCircleUp style={{
//                                                 color: "green"
//                                             }}></FaChevronCircleUp></h5>
// 											<h6 className="h6 mt-10">
// 												Competitor Price Index
// 											</h6>
// 											{/* <div className="progress progress-active-sessions mt-4" style={{
//                                                 height:"7px"
//                                             }}>
                                                
//                                                 <div className="progress-bar bg-primary" role="progressbar" 
//                                                 style={{
//                                                     width: "62%" ,
//                                                     ariaValueNow: "72",
//                                                     ariaValuemin: "62",
//                                                      ariaValuemax: "100"
//                                                 }}></div>
// 											</div>
// 											<small className="h6 float-left m-t-5 mb-3">
// 												Change
// 											</small>
// 											<small className="h6 float-right m-t-5 mb-3 counter append-percent" data-count="7">7</small> */}
// 										</div>
// 									</div>
                                
//             <div className="row col-md-11 col-border-xl ml-4  " id="forecast">
//             <div className="pred card-body mr-auto" >
//                 <div className=" float-left mr-1" style={{
//                     backgroundColor: "lightgray",
//                     alignItems: "center",
//                     fontSize: "20pt",
//                     width: "50px",
//                     borderRadius: "50%",
//                     padding: "2px"
//                 }}>
//                     <center><FaMagic></FaMagic></center>
//                 </div>
//                 <h5 className="card-title ml-2 mb-5 counter" data-count="87">$10.5M <FaChevronCircleUp style={{
//                     color: "green"
//                 }}></FaChevronCircleUp></h5>
//                 <h6 className="h6 mt-10">
//                     Predicted Sales
//                 </h6>
//                 </div>
            
//             {/* <div className="targ ml-4 card-body mr-1" >
//                 <div className=" float-left mr-1" style={{
//                     backgroundColor: "purple",
//                     alignItems: "center",
//                     fontSize: "20pt",
//                     width: "50px",
//                     borderRadius: "50%",
//                     padding: "2px"
//                 }}>
//                     <center><FaChartLine></FaChartLine></center>
//                 </div>
//                 <h5 className="card-title ml-2 mb-5 counter" >$10.3M <FaChevronCircleUp style={{
//                     color: "green"
//                 }}></FaChevronCircleUp></h5>
//                 <h6 className="h6 mt-10">
//                     Target Sales
//                 </h6>
//                 </div> */}
//             </div>

// 								</div>
//     </div>
//   )
// }
// import React from 'react';
// import { FaChevronCircleUp, FaChevronCircleDown, FaBars, FaRegChartBar, FaChartBar, FaBox, FaHeartbeat, FaArrowRight, FaStar, FaMagic, FaBullseye, FaChartArea, FaChartLine } from 'react-icons/fa'
// import axios from 'axios';
// import { useState , useEffect} from 'react';
// import { Spinner } from 'react-bootstrap';
// import './Landing.css';
// import { Link } from 'react-router-dom';
// import GaugeChart from 'react-gauge-chart';
// import ReactSpeedometer from "react-d3-speedometer"
// import DonutChart from 'react-donut-chart';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';


// export default function Landing() {

// const [loading, setloading] = useState(false)
// const [data, setdata] = useState(null)

// // useEffect(async () => {
    
// //     let response = await axios.get('http://localhost:4000/api/')
// //     if(response.status === 200){
// //         console.log(response);
// //         setloading(false);
// //     }
// //     else{
// //         alert('Could not load')
// //     }
    
// // }, [])

// const val = "5";

// const chartStyle = {
    
//         width: 150,
//         height: 150
    
//   }

// if(! loading)
// {
//     return (
        
//         <div>
            

//             <div className="row mt-4 col-border-xl" style={{
//                 // border: "1px solid white",
//                 padding: "0px"
//             }}>
// 			<div className="first col-xl-4 mr-0 ml-0">
                

//                 <center className="tc ml-4">CURRENT SALES</center>
//                 <div className = "third col-xl-12 mt-3" style={{
//                     //    border: "1px solid blue"
//                    }}>
                
//                 <div className="row col-xl-14 ml-0 " style={{
//                     padding: "0px"
//                 }}>
//                     <div className="col-6  ml-0">
//                     <center><strong>Weekly Sales</strong></center>
//                     <center><strong>$300K</strong></center>
//                     </div>
//                 <div className="col-6  ml-0" style={{
//                     borderLeft: "0.5px solid aqua"
//                 }}>
//                     <center><strong>WoW</strong></center>
//                    <center>+4% WoW<FaChevronCircleUp></FaChevronCircleUp></center>
//                 </div>
               
//                 </div>

//                 <center className="mt-2 ml-0">
//                <ReactSpeedometer 
//                         textColor = "aquamarine"
//                         maxValue={10}
//                         value={4}
//                         needleColor="aqua"
//                         startColor="red"
//                         // segments={10}
//                         currentValueText="Quarterly Sales in Million"
//                         endColor="green"
                        
//                         /> 
                        
//                         </center>
                                         
                        
//                     </div>
//             </div>
            
//             <div className="middle col-xl-5  mr-0">
//                 <div className="row col-xl-12 mb-5" id="sub1">
//                     <div className="dc-1 col-xl-5 mr-4 ml-4">
//                    <center className="tc-1">Sales</center>
//                    <div className="progess-circle ic  col-xl-13">
//                    <CircularProgressbar value={66} strokeWidth={4} width="100" height="50" text="1995 SKUs" styles={buildStyles({
//     // Rotation of path and trail, in number of turns (0-1)
//     // rotation: 0.25,
 
//     // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
//     strokeLinecap: 'round',
    
//     // Text size
//     textSize: '20px',
 
//     // Can specify path transition in more detail, or remove it entirely
//     // pathTransition: 'none',
 
//     // Colors
//     pathColor: `red`,
//     textColor: 'red',
//     trailColor: 'lightgray',
//     backgroundColor: 'red',
//   })} > </CircularProgressbar>
//   <br>
//   </br>
//   <center className="mt-1" style={{
//       fontSize: "9pt"
//   }}>+1124 SKUs WoW<FaChevronCircleUp></FaChevronCircleUp></center>
                           
//                         {/* <center className="f1 text-muted">dropped for</center>
//                         <center className="n1"><h4 style={{
//                             color: "red"
//                         }}>195 SKUs</h4></center>
//                         <center className="text-muted">+24 SKUs WoW<FaChevronCircleUp></FaChevronCircleUp></center> */}
//                         </div>
//                     </div>
//                     <div className="dc-2 col-xl-5 ">
//                     <center className="tc-2">Content Health Score</center>
//                         <Link to = "/contentview" style={{
//                             textDecoration: "none",
//                             color: "inherit"
//                         }}><div className="ic ic-2 col-xl-13">
//                         <center className="f1 text-muted"><br></br></center>
//                         <center className="n1" ><h4 style={{
//                             color:"red"
//                         }}>3.85</h4></center>
//                         <center className="text-muted">-0.17 WoW  <FaChevronCircleDown></FaChevronCircleDown></center>
//                         </div></Link>
//                     </div>
//                 </div>
//                 <div className="row col-xl-12 mb-5" id="sub1">
//                     <div className="dc-3 col-xl-5 mr-4 ml-4">
//                     <center className="tc-3">OOS in last 7 days</center>
//                         <Link to = "/inventoryview" style={{
//                             textDecoration: "none",
//                             color: "inherit"
//                         }}><div className="ic ic-3 col-xl-13">
//                         <center className="f1 text-muted"><br></br></center>
//                         <center className="n1" ><h4 style={{
//                             color: "lightgreen"
//                         }}>85 SKUs</h4></center>
//                         <center className="text-muted">+15 SKUs WoW  <FaChevronCircleUp></FaChevronCircleUp></center>
                        
//                         </div></Link>
//                     </div>
//                     <div className="dc-4 col-xl-5 mb-5">
//                         <center className="tc-4">Conversion Rate</center>
//                         <Link to = "/salesview" style={{
//                             textDecoration: "none",
//                             color: "inherit"
//                         }}><div className="ic ic-4 col-xl-13">
//                         <center className="f1 text-muted"><br></br> </center>
//                         <center className="n1"><h4 style={{
//                             color:"lightgreen"
//                         }}>17.1% </h4></center>
//                         <center className="text-muted"> +0.8 pp WoW <FaChevronCircleUp ></FaChevronCircleUp></center>
//                         </div></Link>
//                     </div>
//                 </div>
//                 <div className="row col-xl-12 mb-5" id="sub1">
//                     <div className="dc-5 col-xl-5 mr-4 ml-4">
//                         <center className="tc-5">Average Rating</center>
//                         <Link to = "/ratingsview" style={{
//                             textDecoration: "none",
//                             color: "inherit"
//                         }}><div className="ic ic-5 col-xl-13">
//                         <center className="f1 text-muted"><br></br> </center>
//                         <center className="n1" ><h4 style={{
//                             color: "lightgreen"
//                         }}>3.98</h4></center>
//                         <center className="text-muted">-0.16 WoW <FaChevronCircleDown></FaChevronCircleDown></center>
//                         </div></Link>
//                     </div>
//                     <div className="dc-6 col-xl-5 ">
//                         <center className="tc-6">Average Search Rank</center>
//                         <Link to = "/salesview" style={{
//                             textDecoration: "none",
//                             color: "inherit"
//                         }}><div className="ic ic-6 col-xl-13">
//                         <center className="f1 text-muted"><br></br></center>
//                         <center className="n1" ><h4 style={{
//                             color: "red"
//                         }}>4.2</h4></center>
//                         <center className="text-muted"> +0.7 WoW <FaChevronCircleUp ></FaChevronCircleUp></center>
//                         </div></Link>
//                     </div>
//                 </div>
//                 <div className="row col-xl-12 mb-5" id="sub1">
//                     <div className="dc-7 col-xl-5 mr-4 ml-4">
//                         <center className="tc-7">Price Index </center>
//                         <Link to = "/salesview" style={{
//                             textDecoration: "none",
//                             color: "inherit"
//                         }}><div className="ic ic-7 col-xl-13">
//                         <center className="f1 text-muted">competitor's</center>
//                         <center className="n1" ><h4 style={{
//                             color: "yellow"
//                         }}>0.97</h4></center>
//                         <center className="text-muted">+0.07 WoW <FaChevronCircleUp ></FaChevronCircleUp> </center>
//                         </div></Link>
//                     </div>
//                     <div className="dc-8 col-xl-5">
//                     <center className="tc-8">Buy Box</center>
//                     <Link to = "/inventoryview" style={{
//                             textDecoration: "none",
//                             color: "inherit"
//                         }}><div className="ic ic-8 col-xl-13">
//                         <center className="f1 text-muted">Not present in</center>
//                         <center className="n1" ><h4 style={{
//                             color: "yellow"
//                         }}>46 SKUs</h4></center>
//                         <center className="text-muted">+5 SKUs WoW <FaChevronCircleUp ></FaChevronCircleUp> </center>
//                         </div></Link>  
//                     </div>
//                 </div>
//             </div>
            
//             <div className="first col-xl-3 mr-0 ml-0" style={{
//                 padding: "0px"
//             }}>
//                 <center className="sc ml-0">PREDICTED SALES</center>
//                 <div className="col-xl-14 mt-5" style={{
//                 //    border: "1px solid white",
//                }}>
                   
                    
//                 {/* <div className = "second col-xl-12 "> */}
//                 <ReactSpeedometer 
//                         textColor = "gold"
//                         maxValue={6}
//                         value={val}
//                         needleColor="aqua"
//                         // startColor="red"
//                         maxSegmentLabels={5}
//                         customSegmentStops={[0, 4, val, 6]}
//                         segmentColors={["red", "orange", "limegreen"]}
//                         segments = {1000}
//                         currentValueText="Quarterly Predicted Sales in Million"
//                         // endColor="green"
//                         ringWidth={20}
//                         /> 
//                     </div>
//                     {/* <GaugeChart id="gauge-chart4" 
//                     nrOfLevels={10} 
//                     arcPadding={0.1} 
//                     cornerRadius={3} 
//                     // percent={val}
//                     maxValue={6}
//                     labels = {true}
//                     start = {0}
//                     formatTextValue={val => val+""} 
//                     color="aqua"
//                     maxSegmentLabels={4}
//                     /> */}
//                 {/* </div> */}
//             </div>
                                    
                                    
//                                 {/*
                                
//                                 Sales 
//                                 Content health
//                                 OOS last 7 days

//                                 */}
            
        
//             </div>
//         </div>
// )
// }
// else
// {
//     return(
//         <div className="mr-auto ml-auto d-flex justify-content-center">
//            <Spinner className="spinner-grow spinner-grow-sm text-primary" role="status"></Spinner>
//            <Spinner className="spinner-grow spinner-grow-sm text-success" role="status"></Spinner>
//            <Spinner className="spinner-grow spinner-grow-sm text-warning" role="status"></Spinner>
//         </div>
//     )
// }

// }
