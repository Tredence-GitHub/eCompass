import React from 'react'
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa'

export default function Landing() {
return (
            
            <div className="row">
                 <div className="col-2 col-md-2 " style={{
                     height: "500px",
                     width: "500px",
                     alignItems: "center",
                     marginLeft: "30px",
                     
                 }}>
                                    {/* side */}
                                    <div className="card col-12 mb-4" style={{
                                        border: "none",
                                        height: "150px",
                                        borderRadius: "50%",
                                        marginTop: "100px", 
                                    background: "linear-gradient(rgb(243, 205, 205),#d87ec2)",
                                    
                                    }}>
                                    <div className="card-body text-center">
                                        <div className="card-body">
                                        <div className="card-title">
                                            
                                            Predicted sales
                                            <p>
                                                <b><h5>$10.5M</h5></b> 
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="card col-12 " style={{
                                            border: "none",
                                            height: "150px",
                                            borderRadius: "50%", 
                                            marginTop: "50px",
                                        background: "linear-gradient(rgb(236, 185, 185),#7ecad8)"
                                        }} >
                                        <div className="card-body text-center">
                                            <div className="card-body">
                                            <div className="card-title">
                                                
                                                Target sales
                                                <p>
                                                    <b><h5>$10.3M</h5></b> 
                                                    </p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                        
                            <div className="card-body col-md-8 mt-0" style={{
                                padding: "0px",
                                marginLeft: "100px",
                                height: "520px"
                            }}>
                                <div className="row">
                                    <div className="card col-3 mb-2 mr-2 text-center "
                                      style={{
                                        border: "none",
                                          background: "rgb(224, 222, 222)"
                                        }}
                                           >
                                        <div className="card-body" style={{ 
                                            
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden"
                                        }}>
                                            <div className="card-title" >
                                                OOS in last 7 days
                                            </div>
                                            
                                            
                                            <p className="card-text"  > <b><h5>87 SKUs  <FaChevronCircleUp style={{ color: "green" }}></FaChevronCircleUp></h5></b>
                                             </p>
                                        </div>
                                    </div>
                                    <div className="card col-3 mb-2 mr-2 text-center h-10" style={{
                                        border: "none",
                                        background: "rgb(224, 222, 222)"
                                        }} >
                                        <div className="card-body" style={{

                                        }} >
                                            Sales
                                            <div className="card-text"> dropped for 
                                                <h5 style={{color: "navy"}}><b>11% SKUs</b></h5>  Weekly Velocity
                                            <h5><b>467 Units <FaChevronCircleDown style={{ color: "red" }}></FaChevronCircleDown></b></h5>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="card col-3 mb-2 text-center h-8" style={{
                                        border: "none",
                                          background: "rgb(224, 222, 222)"
                                        }} >
                                        <div className="card-body">
                                         Content Health Score 
                                            <div className="card-text"> dropped for
                                                <h5 style={{color: "navy"}}><b> 7% SKUs </b></h5>  
                                                <h5><b>4.1 <FaChevronCircleUp style={{ color: "green" }}></FaChevronCircleUp></b></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="card col-3 mb-2 mr-2 text-center h-8" style={{
                                        border: "none",
                                          background: "rgb(224, 222, 222)"
                                        }} >
                                        <div className="card-body" style={{ 
                                            
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden"
                                            }} >
                                            
                                            <div className="card-text"> Reseller Price Index 
                                                <h5><b> 1.04 <FaChevronCircleUp style={{ color: "green" }}></FaChevronCircleUp></b></h5>
                                                 Competitor Price index 
                                                <h5><b> 0.97</b> <FaChevronCircleDown style={{ color: "red" }}></FaChevronCircleDown></h5> </div>
                                        </div>
                                    </div>
                                    <div className="card col-3 mb-2 mr-2 text-center h-8"  style={{
                                        border: "none",
                                        borderRadius: "50%",
                                        background: "rgb(224, 222, 222)"
                                        }} >
                                        <div className="card-body" >
                                            <div className="card-title">
                                                Sales/Target
                                            </div>
                                            <p className="card-text"> 
                                                <b><h3 style={{ color: "red"}}>$13M/$15M </h3> </b>
                                                <h5><b> +4% WoW <FaChevronCircleUp style={{ color: "green" }}></FaChevronCircleUp></b></h5>  </p>
                                        </div>
                                    </div>
                                    <div className="card col-3 mb-2 text-center h-8" style={{
                                        border: "none",
                                          background: "rgb(224, 222, 222)"
                                        }} >
                                        <div className="card-body" >
                                            <div className="card-title">
                                                Buy box in
                                            </div>
                                            <div className="card-text"> 
                                                <b><h5>85% SKUs  <FaChevronCircleUp style={{ color: "green" }}></FaChevronCircleUp></h5>  </b> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="card col-3 mb-2 mr-2 text-center h-8" style={{
                                        border: "none",
                                          background: "rgb(224, 222, 222)"
                                        }} >
                                        <div className="card-body" >
                                            Average Search Rank
                                             dropped for 
                                                <b> <h5 style={{color: "navy"}}>6% SKUs</h5></b> Avg. Search Rank
                                                <h5><b>3.8 <FaChevronCircleDown style={{ color: "red" }}></FaChevronCircleDown></b></h5>
                                                </div>
                                                
                                    </div>
                                    <div className="card col-3 mr-2 mb-2 text-center h-8" style={{
                                        border: "none",
                                          background: "rgb(224, 222, 222)"
                                        }}
                                     >
                                            <div className="card-body" >
                                                <div className="card-title">
                                                    Average Ratings
                                                </div>
                                                <p className="card-text">
                                                    
                                                    
                                                    <h5><b>3.96 <FaChevronCircleDown style={{ color: "red" }}></FaChevronCircleDown></b></h5> 
                                                    </p>
                                            </div>

                                    </div>
                                    <div className="card col-3 mb-2 text-center h-8 " style={{
                                          border: "none",
                                          boxRadius: "50%",
                                          background: "rgb(224, 222, 222)"
                                        }}
                                    >
                                        
                                            <div className="card-body" >
                                                <div className="card-title">
                                                    Conversion Rate
                                                </div>
                                                

                                                <p className="card-text">
                                                    <h5><b>11.2% <FaChevronCircleDown style={{ color: "red" }}></FaChevronCircleDown> </b></h5> 
                                                    <b></b>
                                                    </p>
                                            </div>
                                            
                                    </div>

                                   
                                </div>                           
                                

                                   

                                    
                                    
                                </div>
                            </div> 
                            
)
}
