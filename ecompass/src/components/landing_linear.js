import React from 'react';
import { FaChevronCircleUp, FaChevronCircleDown, FaBars, FaRegChartBar, FaChartBar, FaBox, FaHeartbeat, FaArrowRight, FaStar, FaMagic, FaBullseye, FaChartArea, FaChartLine, FaArrowUp, FaArrowDown } from 'react-icons/fa'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import './Landing.css';
import { Link } from 'react-router-dom';
import GaugeChart from 'react-gauge-chart';
import ReactSpeedometer from "react-d3-speedometer"
import DonutChart from 'react-donut-chart';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';


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

    const val = 5;

    const chartStyle = {

        width: 150,
        height: 150

    }
    const [params, setParams] = useState({});

    const leads = {
        'ar': 'aqua',
        'chs': 'aqua',
        'cr': 'aqua',
        'asr': 'aqua',
        'ps': 'aqua',
        'oosc': 'aqua'
    }

    const lags = {
        'sales': 'gold',
        'oos': 'gold',
        'chs': 'gold',
        'cr': 'gold',
        'asr': 'gold',
        'pi': 'gold',
        'bb': 'gold',

    }

    const all = {
        'sales': 'black',
        'oos': 'black',
        'chs': 'black',
        'cr': 'black',
        'asr': 'black',
        'pi': 'black',
        'bb': 'black',
        'oosc': 'black',
        'ar': 'black',
        'ps': 'black'
    }

    const percentages = {
        sales: 65,
        pred: 63,
        oos: 71,
        oosc: 75,
        chs: 77,
        cr: 58,
        asr: 168,
        ar: 111,
        pi: 97,
        bb: 58
    }

    function CustomTextProgressBar(props) {
        const { children, ...otherProps } = props;
        return (
            <div className="cc" style={{
                // marginLeft: "-10px"
            }} >
                <div style={{ position: 'absolute' }}>
                    <CircularProgressbar {...otherProps} value={props.percentage} pathColor='gold' strokeWidth={4}
                        styles={buildStyles({

                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'round',

                            // Text size
                            // Colors
                            // pathColor: props.pc,
                            textColor: 'white',
                            pathColor: 'white',
                            trailColor: 'black'
                        })}>

                    </CircularProgressbar></div>

                <center className="" style={{
                    //   position: 'absolute',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    marginTop: '0px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    //   marginLeft: '-9px'
                }}>
                    {props.children}
                </center>
            </div>
        )
    }

    function allParameters() {
        setParams(all);
    }

    function leadingParameters() {
        // alert('reached')
        setParams(leads);
    }

    function laggingParameters() {
        // alert('reached')
        setParams({});
        setParams(lags);
    }

    if (!loading) {
        return (

            <div>
                <div className="row mt-4 col-border-xl" style={{
                    // border: "1px solid white",
                    padding: "0px"
                }}>
                    <div className="first col-xl-4 mr-0 ml-0">


                        <center className="tc ml-4"> <strong>CURRENT SALES </strong></center>
                        <hr style={{
                            border: "1px solid palegoldenrod"
                        }}></hr>
                        <div className="third col-xl-12 mt-3"  style={{
                            //    border: "1px solid blue"
                        }}>

                        <div className="row col-xl-14 ml-0 " onMouseOut={
                            allParameters
                        } onMouseOver={
                            laggingParameters
                        } style={{
                                padding: "0px"
                            }}>
                                <div className="col-6  ml-0">
                                    <center className="mini-header">LW Sales</center>
                                    <center><strong>$300K</strong></center>
                                </div>
                                <div className="col-6  ml-0" style={{
                                    borderLeft: "0.5px solid aqua"
                                }}>
                                    <center className="mini-header">WoW</center>
                                    <center><strong>+4% WoW</strong><FaChevronCircleUp></FaChevronCircleUp></center>
                                </div>

                            <div className="col-xl-12 mt-1">

                            <center>
                                <ReactSpeedometer
                                    textColor="aquamarine"
                                    maxValue={10}
                                    value={4}
                                    needleColor="silver"
                                    startColor="rgba(255, 0, 0, 0.562)"
                                    // segments={10}
                                    currentValueText="QTD Sales in Million"
                                    endColor="green"
                                    ringWidth={40}
                                />

                            </center>
                            </div>
                            </div>
                            <div className=" col-xl-13 mt-1 " id="sub1">
                                <center>
                                    <div className="dc-6 col-xl-7 ml-0">
                                        <center className="tc-6">Average Search Rank</center>
                                        <Link to="/contentview" className="lnk">
                                            <div className="ic col-xl-13" style={{
                                                boxShadow: `0px 1px 7px 4px ${params.asr}`
                                            }}>
                                                <CustomTextProgressBar className="cc col-xl-13" pc="orange" percentage={percentages.asr} >

                                                    <h4 className="danger">4.2</h4>
                                                    <small className="text-white">+0.7 WoW <FaChevronCircleUp></FaChevronCircleUp></small>

                                                    <small className="lnk mt-1">{percentages.asr}%</small>
                                                </CustomTextProgressBar>
                                            </div>
                                        </Link>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>

                    <div className="middle col-xl-5  mr-0">
                        <div className="row col-xl-12 mb-5" id="sub1">
                            <div className="dc-1 col-xl-5 mr-4 ml-4">
                                <center className="tc-1">Sales Drop</center>
                                <center>
                                    <Link to="/salesview" className="lnk">
                                        <div className="ic col-xl-13 " style={{
                                            boxShadow: `0px 1px 7px 4px ${params.sales}`
                                        }}>
                                            <CustomTextProgressBar className="cc col-xl-13 " pc="orange" percentage={percentages.sales} >

                                                <h4 className="danger">195 SKUs</h4>
                                                <small className="text-white">+24 SKUs WoW <FaChevronCircleUp></FaChevronCircleUp></small>

                                                <small className="lnk mt-1">{percentages.sales}%</small>
                                            </CustomTextProgressBar>
                                        </div>
                                    </Link>
                                </center>
                            </div>
                            {/*Content Health  */}

                            <div className="dc-2 col-xl-5 ">

                                <center className="tc-2">Predicted Sales Drop</center>
                                <center>
                                    <Link to="/salesview" className="lnk">
                                        <div className="ic col-xl-13 " style={{
                                            boxShadow: `0px 1px 7px 4px ${params.ps}`
                                        }}>
                                            <CustomTextProgressBar className="cc col-xl-13" pc="aqua" percentage={percentages.pred} >

                                                <h4 className="danger">190 SKUs </h4>
                                                <small className="text-white">-5 SKUs WoW <FaChevronCircleDown></FaChevronCircleDown></small>
                                                <small className="lnk mt-1">{percentages.pred}%</small>
                                            </CustomTextProgressBar>
                                        </div>
                                    </Link>
                                </center>

                            </div>
                        </div>

                        {/* Second row  */}
                        <div className="row col-xl-12 mb-5" id="sub1">
                            <div className="dc-3 col-xl-5 mr-4 ml-4">
                                {/* OOS  */}
                                <center className="tc-3">OOS in last 7 days</center>
                                <center>
                                    <Link to="/inventoryview" className="lnk">
                                        <div className="ic col-xl-13 " style={{
                                            boxShadow: `0px 1px 7px 4px ${params.oos}`
                                        }}>
                                            <CustomTextProgressBar className="cc col-xl-13" pc="blanchedalmond" percentage={percentages.oos} >
                                                <h4 className="safe">85 SKUs </h4>
                                                <small className="text-white">+15 SKUs WoW  <FaChevronCircleUp></FaChevronCircleUp></small>
                                                <small className="lnk mt-1">{percentages.oos}%</small>
                                            </CustomTextProgressBar>
                                        </div>
                                    </Link>
                                </center>
                            </div>
                            <div className="dc-4 col-xl-5 ">
                                <center className="tc-4">OOS in next 7 days</center>
                                {/* conversion rate */}
                                <center>
                                    <Link to="/inventoryview" className="lnk">
                                        <div className="ic col-xl-13 " style={{
                                            boxShadow: `0px 1px 7px 4px ${params.oosc}`
                                        }}>
                                            <CustomTextProgressBar className="cc col-xl-13 " pc="lightpink" percentage={percentages.oosc} >

                                                <h4 className="safe">90 SKUs </h4>
                                                <small className="text-white">+5 SKUs WoW <FaChevronCircleUp ></FaChevronCircleUp></small>
                                                <small className="lnk mt-1">{percentages.oosc}%</small>
                                            </CustomTextProgressBar>
                                        </div>
                                    </Link>
                                </center>
                            </div>
                        </div>
                        {/* third row */}
                        <div className="row col-xl-12 mb-5" id="sub1">
                            <div className="dc-5 col-xl-5 mr-4 ml-4">
                                <center className="tc-5">Content Health Score</center>
                                {/* Avg rating */}
                                <center>
                                    <Link to={{
                                        pathname: "/contentview",
                                        state: {
                                            name: "sku"
                                        } 
                                     }} className="lnk">
                                        <div className="ic col-xl-13 " style={{
                                            boxShadow: `0px 1px 7px 4px ${params.chs}`
                                        }}>
                                            <CustomTextProgressBar className="cc col-xl-13" pc="skyblue" percentage={percentages.chs} >

                                                <h4 className="safe">3.85 </h4>
                                                <small className="text-white">-0.17 WoW <FaChevronCircleDown></FaChevronCircleDown></small>
                                                <small className="lnk mt-1">{percentages.chs}%</small>
                                            </CustomTextProgressBar>
                                        </div>
                                    </Link>
                                </center>
                            </div>
                            <div className="dc-6 col-xl-5 "  >
                                <center className="tc-6">Conversion Rate</center>
                                <center>
                                    <Link to="/salesview" className="lnk" >
                                        <div className="ic col-xl-13" style={{
                                            borderRadius: "50%",
                                            boxShadow: `0px 1px 7px 4px ${params.cr}`
                                        }} >
                                            <CustomTextProgressBar className="cc col-xl-13 "

                                                pc="springgreen" percentage={percentages.cr} >

                                                <h4 className="safe">17.5% </h4>
                                                <small className="text-white">+0.8 pp WoW <FaChevronCircleUp ></FaChevronCircleUp></small>
                                                <small className="lnk mt-1">{percentages.cr}%</small>
                                            </CustomTextProgressBar></div>
                                    </Link>
                                </center>
                            </div>
                        </div>
                        <div className="row col-xl-12 mb-5" id="sub1">
                            <div className="dc-7 col-xl-5 mr-4 ml-4">
                                <center className="tc-7">Average Rating </center>
                                <center>
                                    <Link to="/ratingsview" className="lnk">
                                        <div className="ic col-xl-13 " style={{
                                            boxShadow: `0px 1px 7px 4px ${params.ar}`
                                        }}>
                                            <CustomTextProgressBar className="cc col-xl-13 " pc="plum" percentage={percentages.ar} >

                                                <h4 className="safe">3.98 </h4>
                                                <small className="text-white">-0.16 WoW <FaChevronCircleDown ></FaChevronCircleDown></small>
                                                <small className="lnk mt-1">{percentages.ar}%</small>
                                            </CustomTextProgressBar>
                                        </div>
                                    </Link>
                                </center>

                            </div>
                            <div className="dc-8 col-xl-5">
                                <center className="tc-8">Price Index</center>

                                <center>
                                    <Link to="/salesview" className="lnk">
                                        <div className="ic col-xl-13 " style={{
                                            boxShadow: `0px 1px 7px 4px ${params.pi}`
                                        }}>
                                            <CustomTextProgressBar className="cc col-xl-13" pc="paleturquoise" percentage={percentages.pi} >

                                                <h4 className="warning">0.97 </h4>
                                                <small className="text-white">+0.07 WoW <FaChevronCircleUp ></FaChevronCircleUp></small>
                                                <small className="lnk mt-1">{percentages.pi}%</small>
                                            </CustomTextProgressBar>
                                        </div>
                                    </Link>
                                </center>

                            </div>
                        </div>
                    </div>

                    <div className="first col-xl-3 mr-0 ml-0" style={{
                        padding: "0px"
                    }}>
                        <center className="sc ml-0"><strong>SALES FORECAST</strong> </center>
                        <div className="col-xl-14 mt-3" onMouseOut={
                            allParameters
                        } onMouseOver={
                            leadingParameters
                        } >
                            <hr style={{
                                border: "1px solid aquamarine"
                            }}></hr>
                            <div className="row col-xl-14 ml-0 mb-1 " style={{
                                padding: "0px",
                                color: "palegoldenrod"
                            }}>
                                <div className="col-6  ml-0">
                                    <center className="mini-header">Target Remaining</center>
                                    <center><strong>$6M</strong></center>
                                </div>
                                <div className="col-6  ml-0" style={{
                                    borderLeft: "0.5px solid palegoldenrod"
                                }}>
                                    <center className="mini-header">Predicted Sales</center>
                                    <center><strong>$5M</strong></center>
                                </div>

                            </div>
                            <div className="second col-xl-12">
                                <center><ReactSpeedometer
                                    textColor="palegoldenrod"
                                    maxValue={6}
                                    value={val}
                                    needleColor="silver"
                                    startColor="rgba(255, 0, 0, 0.562)"
                                    // maxSegmentLabels={4}
                                    // customSegmentStops={[0, 4, val, 6]}
                                    // segmentColors={["rgba(255, 0, 0, 0.562)", "orange", "limegreen"]}
                                    // segments = {1000}
                                    currentValueText="Sales for Remaining Quarter"
                                    endColor="green"
                                    ringWidth={40}
                                />
                                </center>
                            </div>
                        </div>
                        <div className=" col-xl-13 mt-5 " id="sub1">
                            <center>
                                <div className="dc-8 col-xl-8 ml-0">
                                    <center className="tc-8">Buy Box Lost</center>
                                    {/* <center> */}
                                    <Link to="/contentview" className="lnk">
                                        <div className="ic col-xl-13" style={{
                                            boxShadow: `0px 1px 7px 4px ${params.bb}`
                                        }}>
                                            <CustomTextProgressBar className="cc col-xl-13" pc="orange" percentage={percentages.bb} >

                                                <h4 className="warning">46 SKUs</h4>
                                                <small className="text-white">+5 SKUs WoW <FaChevronCircleUp></FaChevronCircleUp></small>

                                                <small className="lnk mt-1">{percentages.bb}%</small>
                                            </CustomTextProgressBar>
                                        </div>
                                    </Link>
                                    {/* </center> */}
                                </div>
                            </center>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    else {
        return (
            <div className="mr-auto ml-auto d-flex justify-content-center">
                <Spinner className="spinner-grow spinner-grow-sm text-primary" role="status"></Spinner>
                <Spinner className="spinner-grow spinner-grow-sm text-success" role="status"></Spinner>
                <Spinner className="spinner-grow spinner-grow-sm text-warning" role="status"></Spinner>
            </div>
        )
    }

}
