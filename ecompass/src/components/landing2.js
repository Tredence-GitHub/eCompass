import React from 'react'
import { FaChevronCircleUp, FaChevronCircleDown, FaBars, FaMagic, FaChartBar, FaBox, FaHeartbeat, FaArrowRight, FaStar } from 'react-icons/fa'
export default function Landing2() {
  return (
    <div style={{
      backgroundColor: ""
    }}>
      <div className="row mt-4 col-border-xl" style={{
                
            }}>
									<div className=" col-md-8 col-6 col-xl-3">
										<div className="inventory card-body mr-1">
											<div className=" float-left mr-1" style={{
                                                backgroundColor: "powderblue",
                                                alignItems: "center",
                                                fontSize: "20pt",
                                                width: "50px",
                                                borderRadius: "50%",
                                                padding: "2px"
                                            }}>
												<center><FaBox></FaBox></center>
											</div>
											<h5 className="card-title ml-2 mb-5 counter" data-count="87">87 SKUs</h5>
											<h6 className="h6 mt-10">
												OOS in Last 7 days
											</h6>
											
										</div>
									</div>
									<div className="col-md-12 col-lg-6 col-xl-3">
										<div className="sales card-body" >
                                        <div className=" float-left mr-1" style={{
                                                backgroundColor: "pink",
                                                alignItems: "center",
                                                fontSize: "20pt",
                                                width: "50px",
                                                borderRadius: "50%",
                                                padding: "2px"
                                            }}>
												<center><FaChartBar></FaChartBar></center>
											</div>
											<h5 className="card-title mb-5 append-percent counter" data-count="67">11% SKUs <FaChevronCircleDown style={{ color: "red" }}></FaChevronCircleDown></h5>
											<h6 className="h6 mt-10">
												Sales
											</h6>
                                            {/* <div className="progress progress-active-sessions mt-4" style={{
                                                height:"7px"
                                            }}>
                                                <div className="progress-bar bg-primary" role="progressbar" 
                                                style={{
                                                    width: "62%" ,
                                                    ariaValueNow: "72",
                                                    ariaValuemin: "0",
                                                     ariaValuemax: "100"
                                                }}></div> 
											</div>*/}
											{/* <small className="h6 float-left m-t-5 mb-3">
												Change
											</small>
											<small className="h6 float-right m-t-5 mb-3 counter append-percent" data-count="7">7</small> */}
										</div>
									</div>


                                    <div className=" col-md-12 col-lg-6 col-xl-3 border-xl">
										<div className="chs card-body mr-1" >
											<div className="float-left mr-1" style={{
                                                backgroundColor: "violet",
                                                alignItems: "center",
                                                fontSize: "20pt",
                                                width: "50px",
                                                borderRadius: "50%",
                                                padding: "2px"
                                            }}>
												<center><FaHeartbeat></FaHeartbeat></center>
											</div>
											<h5 className="card-title ml-2 mb-5 counter" data-count="87">7% SKUs <FaChevronCircleUp style={{
                                                color: "red"
                                            }}></FaChevronCircleUp></h5>
											<h6 className="h6 mt-10">
												Content Health Score
											</h6>
											{/* <div className="progress progress-active-sessions mt-4" style={{
                                                height:"7px"
                                            }}>
                                                
                                                <div className="progress-bar bg-primary" role="progressbar" 
                                                style={{
                                                    width: "62%" ,
                                                    ariaValueNow: "72",
                                                    ariaValuemin: "62",
                                                     ariaValuemax: "100"
                                                }}></div> 
											</div>*/}
											{/* <small className="h6 float-left m-t-5 mb-3">
												Change
											</small>
											<small className="h6 float-right m-t-5 mb-3 counter append-percent" data-count="7">7</small> */}
										</div>
									</div>
									
									<div className=" col-md-12 col-lg-6 col-xl-3 border-xl">
										<div className="sales card-body mr-1" >
											<div className=" float-left mr-1" style={{
                                                backgroundColor: "pink",
                                                alignItems: "center",
                                                fontSize: "20pt",
                                                width: "50px",
                                                borderRadius: "50%",
                                                padding: "2px"
                                            }}>
												<center><FaChartBar></FaChartBar></center>
											</div>
											<h5 className="card-title ml-2 mb-5 counter" data-count="87">467 Units <FaChevronCircleDown style={{
                                                color: "red"
                                            }}></FaChevronCircleDown></h5>
											<h6 className="h6 mt-10">
												Sales Weekly Velocity
											</h6>
											
										</div>
									</div>


                                    <div className=" col-md-12 mt-4 col-lg-6 mt-2 col-xl-3 border-xl">
										<div className="sales card-body mr-1" >
											<div className=" float-left mr-1" style={{
                                                backgroundColor: "pink",
                                                alignItems: "center",
                                                fontSize: "20pt",
                                                width: "50px",
                                                borderRadius: "50%",
                                                padding: "2px"
                                            }}>
												<center><FaChartBar></FaChartBar></center>
											</div>
											<h5 className="card-title ml-2 mb-5 counter" data-count="87">85% SKUs <FaChevronCircleUp style={{
                                                color: "green"
                                            }}></FaChevronCircleUp></h5>
											<h6 className="h6 mt-10">
												Buy Box In
											</h6>
											{/* <div className="progress progress-active-sessions mt-4" style={{
                                                height:"7px"
                                            }}>
                                                
                                                <div className="progress-bar bg-primary" role="progressbar" 
                                                style={{
                                                    width: "62%" ,
                                                    ariaValueNow: "72",
                                                    ariaValuemin: "62",
                                                     ariaValuemax: "100"
                                                }}></div>
											</div>
											<small className="h6 float-left m-t-5 mb-3">
												Change
											</small>
											<small className="h6 float-right m-t-5 mb-3 counter append-percent" data-count="7">7</small> */}
										</div>
									</div>
                                    
                                    <div className=" col-xl-6 col-lg-6 mt-2 col-xl-3 ">
										<div className="target card-body mr-1" >
											<div className="float-left mr-1" >
												<center><></></center>
											</div>
											
											<h5 className="h5 ">
												TARGET SALES
											</h5>
                                            <h5 className="card-title ml-1 mb-4 counter" data-count="87">$13M/$15M  
                                            +4% WoW <FaChevronCircleUp style={{
                                                color: "green"
                                            }}></FaChevronCircleUp> </h5>
											{/* <div className="progress progress-active-sessions mt-4" style={{
                                                height:"7px"
                                            }}>
                                                
                                                <div className="progress-bar bg-primary" role="progressbar" 
                                                style={{
                                                    width: "62%" ,
                                                    ariaValueNow: "72",
                                                    ariaValuemin: "62",
                                                     ariaValuemax: "100"
                                                }}></div>
											</div>
											<small className="h6 float-left m-t-5 mb-3">
												Change
											</small>
											<small className="h6 float-right m-t-5 mb-3 counter append-percent" data-count="7">7</small> */}
										</div>
									</div>

                                    
                                    <div className=" col-md-12 col-lg-6  mt-4 col-xl-3 border-xl">
										<div className="rating card-body mr-1" >
											<div className="float-left mr-1" style={{
                                                backgroundColor: "beige",
                                                alignItems: "center",
                                                fontSize: "20pt",
                                                width: "50px",
                                                borderRadius: "50%",
                                                padding: "2px"
                                            }}>
												<center><FaStar></FaStar></center>
											</div>
											<h5 className="card-title ml-2 mb-5 counter" data-count="87">3.96 Units <FaChevronCircleDown style={{
                                                color: "red"
                                            }}></FaChevronCircleDown></h5>
											<h6 className="h6 mt-10">
												Average Ratings
											</h6>
											{/* <div className="progress progress-active-sessions mt-4" style={{
                                                height:"7px"
                                            }}>
                                                
                                                <div className="progress-bar bg-primary" role="progressbar" 
                                                style={{
                                                    width: "62%" ,
                                                    ariaValueNow: "72",
                                                    ariaValuemin: "62",
                                                     ariaValuemax: "100"
                                                }}></div>
											</div>
											<small className="h6 float-left m-t-5 mb-3">
												Change
											</small>
											<small className="h6 float-right m-t-5 mb-3 counter append-percent" data-count="7">7</small> */}
										</div>
									</div>
                                    <div className=" col-md-12 col-lg-6  mt-2 col-xl-3 border-xl">
										<div className="sales card-body mr-1" >
											<div className="float-left mr-1" style={{
                                                backgroundColor: "pink",
                                                alignItems: "center",
                                                fontSize: "20pt",
                                                width: "50px",
                                                borderRadius: "50%",
                                                padding: "2px"
                                            }}>
												<center><FaChartBar></FaChartBar></center>
											</div>
											<h5 className="card-title ml-2 mb-5 counter" data-count="87">1.04 Units <FaChevronCircleDown style={{
                                                color: "red"
                                            }}></FaChevronCircleDown></h5>
											<h6 className="h6 mt-10">
												Reseller Price Index
											</h6>
											
										</div>
									</div>

                                    <div className=" col-md-12 col-lg-6 col-xl-3 mt-2 border-xl">
										<div className="sales card-body mr-1" >
											<div className="float-left mr-1" style={{
                                                backgroundColor: "pink",
                                                alignItems: "center",
                                                fontSize: "20pt",
                                                width: "50px",
                                                borderRadius: "50%",
                                                padding: "2px"
                                            }}>
												<center><FaChartBar></FaChartBar></center>
											</div>
											<h5 className="card-title ml-2 mb-5 counter" >11.2% <FaChevronCircleUp style={{
                                                color: "green"
                                            }}></FaChevronCircleUp></h5>
											<h6 className="h6 mt-10">
												Conversion Rate
											</h6>
										</div>
									</div>

                                    <div className=" col-md-12 col-lg-6 col-xl-3 mt-2 border-xl">
										<div className="sales card-body mr-1" >
											<div className="float-left mr-1" style={{
                                                backgroundColor: "pink",
                                                alignItems: "center",
                                                fontSize: "20pt",
                                                width: "50px",
                                                borderRadius: "50%",
                                                padding: "2px"
                                            }}>
												<center><FaChartBar></FaChartBar></center>
											</div>
											<h5 className="card-title ml-2 mb-5 counter" >3.8 <FaChevronCircleDown style={{
                                                color: "red"
                                            }}></FaChevronCircleDown></h5>
											<h6 className="h6 mt-10">
												Average Search Rank
											</h6>
										</div>
									</div>
                                    
                                    <div className=" col-md-12 col-lg-6  mt-2 col-xl-3 border-xl">
										<div className="sales card-body mr-1" >
											<div className="float-left mr-1" style={{
                                                backgroundColor: "pink",
                                                alignItems: "center",
                                                fontSize: "20pt",
                                                width: "50px",
                                                borderRadius: "50%",
                                                padding: "2px"
                                            }}>
												<center><FaChartBar></FaChartBar></center>
											</div>
											<h5 className="card-title ml-2 mb-5 counter" data-count="87">0.97 Units <FaChevronCircleUp style={{
                                                color: "green"
                                            }}></FaChevronCircleUp></h5>
											<h6 className="h6 mt-10">
												Competitor Price Index
											</h6>
											{/* <div className="progress progress-active-sessions mt-4" style={{
                                                height:"7px"
                                            }}>
                                                
                                                <div className="progress-bar bg-primary" role="progressbar" 
                                                style={{
                                                    width: "62%" ,
                                                    ariaValueNow: "72",
                                                    ariaValuemin: "62",
                                                     ariaValuemax: "100"
                                                }}></div>
											</div>
											<small className="h6 float-left m-t-5 mb-3">
												Change
											</small>
											<small className="h6 float-right m-t-5 mb-3 counter append-percent" data-count="7">7</small> */}
										</div>
									</div>
                                
            <div className="row col-md-11 col-border-xl ml-4  " id="forecast">
            <div className="pred card-body mr-auto" >
                <div className=" float-left mr-1" style={{
                    backgroundColor: "lightgray",
                    alignItems: "center",
                    fontSize: "20pt",
                    width: "50px",
                    borderRadius: "50%",
                    padding: "2px"
                }}>
                    <center><FaMagic></FaMagic></center>
                </div>
                <h5 className="card-title ml-2 mb-5 counter" data-count="87">$10.5M <FaChevronCircleUp style={{
                    color: "green"
                }}></FaChevronCircleUp></h5>
                <h6 className="h6 mt-10">
                    Predicted Sales
                </h6>
                </div>
            
            {/* <div className="targ ml-4 card-body mr-1" >
                <div className=" float-left mr-1" style={{
                    backgroundColor: "purple",
                    alignItems: "center",
                    fontSize: "20pt",
                    width: "50px",
                    borderRadius: "50%",
                    padding: "2px"
                }}>
                    <center><FaChartLine></FaChartLine></center>
                </div>
                <h5 className="card-title ml-2 mb-5 counter" >$10.3M <FaChevronCircleUp style={{
                    color: "green"
                }}></FaChevronCircleUp></h5>
                <h6 className="h6 mt-10">
                    Target Sales
                </h6>
                </div> */}
            </div>

								</div>
    </div>
  )
}
