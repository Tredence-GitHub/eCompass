import React from 'react';
import { FaChevronCircleUp, FaChevronCircleDown, FaDatabase, FaRegChartBar, FaChartBar, FaBox, FaHeartbeat, FaArrowRight, FaStar, FaMagic, FaBullseye, FaChartArea, FaChartLine, FaArrowUp, FaArrowDown, FaNetworkWired, FaExclamation, FaWifi } from 'react-icons/fa'
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
import Axios from 'axios';


export default function Landing() {

    const [loading, setloading] = useState(true)
    const [data, setdata] = useState(null)
    const [error, seterror] = useState(false)
    const local = "http://localhost:4000"
    const deploy = "https://ecompass-app-development.azurewebsites.net"


    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        let response = await Axios.get(`${deploy}/api/get360/${localStorage.getItem('global_vendor')}`);
        if(response.status === 200 && response.data.data.length > 0 ) {
            console.log(response.data)
            console.log(response.data.data);
            setdata(response.data.data[0]);
            seterror(false);
            setloading(false);
            animateShades();
        }
        else{
            
            seterror(true)
            fetchData();
            
        }
    }


    
    const [params, setParams] = useState({});

    const leads = {
        'lead': 'aqua',
        'ar': 'aqua',
        'chs': 'aqua',
        'cr': 'aqua',
        'asr': 'aqua',
        'ps': 'aqua',
        'oosc': 'aqua'
    }

    const lags = {
        'lag': 'gold',
        'sales': 'gold',
        'oos': 'gold',
        'chs': 'gold',
        'cr': 'gold',
        'asr': 'gold',
        'pi': 'gold',
        'bb': 'gold',

    }

    const all = {
        'lag': 'transparent',
        'lead': 'transparent',
        'sales': 'transparent',
        'oos': 'transparent',
        'chs': 'transparent',
        'cr': 'transparent',
        'asr': 'transparent',
        'pi': 'transparent',
        'bb': 'transparent',
        'oosc': 'transparent',
        'ar': 'transparent',
        'ps': 'transparent'
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
            <div className="ic" style={{
                position: "relative"
            }} >
                <div style={{ position: 'relative' }}>
                    <div className="progressCircle" style={{
                        boxShadow: `1px 2px 7px 4px ${props.outercolor}`
                    }}></div>
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
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    top: '0px',
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
        setParams(leads);
    }

    function laggingParameters() {
        setParams({});
        setParams(lags);
    }

    function animateShades(){
        
        setTimeout(laggingParameters, 2000);
        setTimeout(leadingParameters, 5000)
    }

    if (!loading) {
        // animateShades()
        return (
            <div class="landing-main">
            <div className=" col-12">
                <center>
                <div className="top-box col-12 mb-1" style={{
                   
                    maxWidth: "535px",
                    width: "100%"
                    // boxShadow: "0px 1px 7px 3px navy"
                }}>
               <center className="tc-1 mid-heading">Sales Health</center>
                <div className="row col-14  mt-1 mr-0 ml-3" id="sub1">
                            <div className="  dc-1 col-6">
                                <center className="tc-1" id="sub-header">Sales Drop</center>
                                {/* Avg rating */}
                                <center>
                                    <Link to={{
                                        pathname: "/salesview",
                                        state: {
                                            name: "sku"
                                        } 
                                     }} className="lnk">
                                        <div >
                                            <center className=" mt-1">
                                            <CustomTextProgressBar className="" outercolor={params.sales}
                                              pc="skyblue" percentage={data.perc_skus_sales_dropped_base} >

                                                <h6 className={data.perc_skus_sales_dropped_base_indicator}>{data.number_skus_sales_dropped} SKUs </h6>
                                                <small className="text-white" style={{
                                                    fontSize: '8pt',
                                                    padding: "2px"
                                                }}>{data.perc_change_wow_sales} SKUs WoW&nbsp;
                                                { data.sales_flag === 'Deteriorate'? <FaChevronCircleDown></FaChevronCircleDown>:<></>}
                                                { data.sales_flag === 'Improve'? <FaChevronCircleUp></FaChevronCircleUp>:<></>}

                                                </small>
                                            </CustomTextProgressBar>
                                            </center>
                                        </div>
                                    </Link>
                                </center>
                            </div>
                            <div className="dc-2 col-6 "  >
                                <center className="tc-2" id="sub-header">Predicted Sales Drop</center>
                                <center>
                                    <Link to="/salesview" className="lnk" >
                                    <center className="mt-1 ">
                                            <CustomTextProgressBar className=""
                                                outercolor = {params.ps}
                                                pc="springgreen" percentage={data.perc_skus_pred_sales_dropped_base_indicator} >

                                                <h6 className={data.perc_skus_pred_sales_dropped_base_indicator}>{data.number_pred_skus_sales_dropped} SKUs </h6>
                                                <small className="text-white" style={{
                                                    fontSize: '8pt',
                                                    padding:"2px"
                                                }}>{data.perc_change_wow_pred_sales} SKUs WoW&nbsp; 
                                                { data.pred_sales_flag === 'Deteriorate'? <FaChevronCircleDown></FaChevronCircleDown>:<></>}
                                                { data.pred_sales_flag === 'Improve'? <FaChevronCircleUp></FaChevronCircleUp>:<></>}
                                                </small>
                                            </CustomTextProgressBar>
                                            </center>
                                    </Link>
                                </center>
                            </div>
                        </div>
                    </div>
                    </center>
                </div>
                
               
                {/* Second row */}

                <div className="mid">
                <div className="mid-side " style={{
                   
                    
                }}>
               <center className="tc-3 mid-heading">Search Health</center>
                <div className=" mid-inner " id="">
                            <div className=" dc-3 inner-circle ">
                                <center className="tc-3" id="sub-header">Average Search Rank</center>
                                {/* Avg rating */}
                                <center>
                                    <Link to={{
                                        pathname: "/contentview",
                                        state: {
                                            name: "sku"
                                        } 
                                     }} className="lnk">
                                        <div >
                                            <center className="mt-1" >
                                            <CustomTextProgressBar className="" outercolor={params.asr}
                                            pc="skyblue" percentage={data.perc_skus_avg_search_rank_dropped_base} >

                                                <h6 className={data.perc_skus_avg_search_rank_dropped_base_indicator}>{data.l7_avg_sku_search_rank} </h6>
                                                <small className="text-white" style={{
                                                    fontSize: '8pt',
                                                    padding:"2px"
                                                }}>{data.wow_avg_sku_search_rank} WoW&nbsp;
                                                { data.search_rank_flag === 'Deteriorate'? <FaChevronCircleDown></FaChevronCircleDown>:<></>}
                                                { data.search_rank_flag === 'Improve'? <FaChevronCircleUp></FaChevronCircleUp>:<></>}
                                                </small>
                                                {/* <small className="lnk mt-1">{percentages.chs}%</small> */}
                                            </CustomTextProgressBar>
                                            </center>
                                        </div>
                                    </Link>
                                </center>
                            </div>
                            <div className=" dc-4  "  >
                                <center className="tc-4" id="sub-header">Buy Box Lost</center>
                                <center>
                                    <Link to="/contentview" className="lnk" >
                                    <center className=" mt-1 ">
                                            <CustomTextProgressBar className=""
                                                outercolor={params.bb}
                                                pc="springgreen" percentage={data.perc_skus_buy_box_status_dropped_base} >

                                                <h6 className={data.perc_skus_buy_box_status_dropped_base_indicator}>{data.l7_avg_buy_box_status} SKUs </h6>
                                                <small className="text-white" style={{
                                                    fontSize: '8pt',
                                                    padding: "2px"
                                                }}>{data.wow_buybox} SKUs WoW&nbsp; 
                                                { data.buy_box_status_flag === 'Deteriorate'? <FaChevronCircleDown></FaChevronCircleDown>:<></>}
                                                { data.buy_box_status_flag === 'Improve'? <FaChevronCircleUp></FaChevronCircleUp>:<></>}</small>
                                            </CustomTextProgressBar>
                                            </center>
                                    </Link>
                                </center>
                            </div>
                        </div>
                    </div>
                    {/* center div */}
                    <div className=" ctr ">
                        <div className="mid-row" >
                    <div className=" col-6" style={{
                       
                    }}>
                        <center className="sc ml-0 mt-0"><strong>CURRENT SALES</strong> </center>
                        <div className="col-12 " onMouseOut={
                            allParameters
                        } onMouseOver={
                            laggingParameters
                        } >
                            <hr style={{
                                border: "1px solid palegoldenrod",
                                boxShadow: `0px 1px 10px 1px ${params.lag}`
                            }}></hr>
                            <div className="row " style={{
                                color: "palegoldenrod",
                                margin: "0px",
                            }}>
                                <div className="" style={{
                                    width: "50%"
                                }} >
                                    <center className="" style={{
                                    fontSize: '9pt'
                                }} >LW Sales</center>
                                    { localStorage.getItem('global_vendor') === 'Walmart' ? <center><strong>$300K</strong></center>: <center><strong>$2.2M</strong></center> }
                                </div>
                                <div className="" style={{
                                    borderLeft: "0.5px solid palegoldenrod",
                                    width: "50%"
                                }}>
                                    <center className="" style={{
                                    fontSize: '9pt'
                                }}>Sales WoW</center>
                                   { localStorage.getItem('global_vendor') === 'Walmart' ? <center><strong>+4% WoW</strong></center>: <center><strong style={{
                                       fontSize: '10pt'
                                   }}>+0.85% WoW</strong></center> }
                                </div>

                            </div>
                            <div className="">
                                <center style={{
                                    paddingTop: "20px"
                                }}>
                                {  localStorage.getItem('global_vendor') === 'Walmart' ? 
                                 <ReactSpeedometer id="spdm"
                                 textColor="palegoldenrod"
                                 maxValue={10}
                                 value={4}
                                 needleColor="silver"
                                 startColor="rgba(255, 0, 0, 0.562)"
                                 width={200}
                                 height={200}
                                 labelFontSize={12}
                                 valueTextFontSize={14}
                                 // fontSize="8pt"
                                 maxSegmentLabels={4}
                                 customSegmentStops={[0, 4, 10]}
                                 segmentColors={["navy", "aqua"]}
                                 // segments = {1000}
                                 currentValueText="QTD Sales in Million"
                                 
                                 endColor="green"
                                 ringWidth={20}
                             />
                                : <ReactSpeedometer id="spdm"
                                    textColor="palegoldenrod"
                                    maxValue={33}
                                    value={30}
                                    needleColor="silver"
                                    startColor="rgba(255, 0, 0, 0.562)"
                                    width={200}
                                    height={200}
                                    labelFontSize={12}
                                    valueTextFontSize={14}
                                    // fontSize="8pt"
                                    maxSegmentLabels={4}
                                    customSegmentStops={[0, 30, 33]}
                                    segmentColors={["navy", "aqua"]}
                                    // segments = {1000}
                                    currentValueText="QTD Sales in Million"
                                    
                                    endColor="green"
                                    ringWidth={20}
                                />
                            }
                               </center>
                            </div>
                        </div>
                        
                    </div>
                    <div className=" col-6 ml-0" style={{
                       
                    }}>
                        <center className="tc ml-0 mt-0"><strong>SALES FORECAST</strong> </center>
                        <div className="col-12 " onMouseOut={
                            allParameters
                        } onMouseOver={
                            leadingParameters
                        } >
                            <hr style={{
                                border: "1px solid aquamarine",
                                boxShadow: `0px 1px 10px 1px ${params.lead}`
                            }}></hr>
                            <div className="row" style={{
                                padding: "0px",
                                margin: "0px",
                                color: "aquamarine"
                            }}>
                                <div className="" style={{
                                    width: "50%"
                                }}>
                                <center className="" style={{
                                    fontSize: '9pt'
                                }} >Target Remaining</center>
                                   {  localStorage.getItem('global_vendor') === 'Walmart' ? <center><strong>$6M</strong></center>: <center><strong>$3M</strong></center> } 
                                </div>
                                <div className="" style={{
                                    borderLeft: "0.5px solid aqua",
                                    width: "50%"                                    
                                }}>
                                    <center className="" style={{
                                    fontSize: '9pt'
                                }}>Predicted Sales</center>
                                    {  localStorage.getItem('global_vendor') === 'Walmart' ? <center><strong>$5M</strong></center>: <center><strong>$2.27M</strong></center> }
                                </div>

                            </div>
                            <div className="">
                                <center style={{
                                    paddingTop: "20px"
                                }}>
                               {  localStorage.getItem('global_vendor') === 'Walmart' ? <ReactSpeedometer id="spdm"
                                    textColor="aquamarine"
                                    maxValue={6}
                                    value={5}
                                    needleColor="silver"
                                    startColor="rgba(255, 0, 0, 0.562)"
                                    width={200}
                                    height={200}
                                    labelFontSize={12}
                                    valueTextFontSize={14}
                                    maxSegmentLabels={4}
                                    customSegmentStops={[0, 5, 6]}
                                    segmentColors={["navy", "aquamarine"]}
                                    // segments = {1000}
                                    fontSize={6}
                                    currentValueText="Sales for Remaining Quarter"
                                    endColor="green"
                                    ringWidth={20}
                                /> : <ReactSpeedometer id="spdm"
                                textColor="aquamarine"
                                maxValue={3}
                                value={2.27}
                                needleColor="silver"
                                startColor="rgba(255, 0, 0, 0.562)"
                                width={200}
                                height={200}
                                labelFontSize={12}
                                valueTextFontSize={14}
                                maxSegmentLabels={4}
                                customSegmentStops={[0, 2.27 , 3]}
                                segmentColors={["navy", "aquamarine"]}
                                // segments = {1000}
                                fontSize={6}
                                currentValueText="Sales for Remaining Quarter"
                                endColor="green"
                                ringWidth={20}
                            />
                            }
                               </center>
                            </div>
                        </div>
                        
                    </div>
                    </div>
                    </div>
                    {/* right div  */}
                    <div className="mid-side" style={{
                    
                }}>
               <center className="tc-5 mid-heading">Inventory Health</center>
                <div className="mid-inner " id="">
                            <div className="  dc-5 inner-circle ">
                                <center className="tc-5" id="sub-header" >OOS in Last 7 days</center>
                                {/* Avg rating */}
                                <center>
                                    <Link to={{
                                        pathname: "/inventoryview",
                                        state: {
                                            name: "sku"
                                        } 
                                     }} className="lnk">
                                        <div >
                                            <center className="mt-1" >
                                            
                                            <CustomTextProgressBar className="" outercolor={params.oos} pc="skyblue" style={{
                                            padding: "0px",
                                            boxShadow: `0px 1px 7px 4px red`
                                        }} percentage={data.perc_skus_oos_dropped_base} >

                                                <h6 className={data.perc_skus_oos_dropped_base_indicator}>{data.l7_sku_oos} SKUs </h6>
                                                <small className="text-white" style={{
                                                    fontSize: '8pt',
                                                    padding: "2px"
                                                }}>{data.wow_sku_oos} SKUs WoW&nbsp; 
                                                { data.oos_flag === 'Deteriorate'? <FaChevronCircleDown></FaChevronCircleDown>:<></>}
                                                { data.oos_flag === 'Improve'? <FaChevronCircleUp></FaChevronCircleUp>:<></>}</small>
                                                {/* <small className="lnk mt-1">{percentages.chs}%</small> */}
                                            </CustomTextProgressBar>
                                            </center>
                                        </div>
                                    </Link>
                                </center>
                            </div>
                            <div className=" dc-6  "  >
                                <center className="tc-6" id="sub-header">OOS in next 7 days</center>
                                <center>
                                    <Link to="/inventoryview" className="lnk" >
                                    <center className="mt-1">
                                            <CustomTextProgressBar className="" outercolor={params.oosc}

                                                pc="springgreen" percentage={data.perc_skus_pred_oos_dropped_base} >

                                                <h6 className={data.perc_skus_prd_oos_dropped_base_indicator}>{data.l7_sku_pred_oos} SKUs </h6>
                                                <small className="text-white" style={{
                                                    fontSize: '8pt',
                                                    padding:"2px"
                                                }}>{data.wow_skus_pred_oos} SKUs WoW&nbsp; 
                                                { data.oos_pred_flag === 'Deteriorate'? <FaChevronCircleDown></FaChevronCircleDown>:<></>}
                                                { data.oos_pred_flag === 'Improve'? <FaChevronCircleUp></FaChevronCircleUp>:<></>} </small>
                                            </CustomTextProgressBar>
                                            </center>
                                    </Link>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
                {/* third row  */}
                <div className="row col-12 ml-0 " style={{
                    
                }}>
                <div className="col-5 mb-1 mr-2 bottom-box  " style={{
                   
                    boxShadow: "0px 0px 12px 3px #f8f9fa57",
                    marginLeft: "80px",
                   
                }}>
               <center className="tc-7 mid-heading">External Indicators</center>
               <center>
                <div className="row col-14  mt-1 mr-0" id="">
                            <div className="ml-5  dc-7 col-5">
                                <center className="tc-7" id="sub-header">Average Rating</center>
                                {/* Avg rating */}
                                <center>
                                    <Link to={{
                                        pathname: "/ratingsview",
                                        state: {
                                            name: "sku"
                                        } 
                                     }} className="lnk">
                                        <div >
                                            <center className="mt-1" >
                                            <CustomTextProgressBar className="" outercolor={params.ar} pc="skyblue"
                                             percentage={data.perc_skus_avg_rating_dropped_base_indicator} >

                                                <h6 className={data.perc_skus_avg_rating_dropped_base_indicator}>{data.l7_avg_rating} </h6>
                                                <small className="text-white" style={{
                                                    fontSize: '8pt',
                                                    padding:"2px"
                                                }}>{data.wow_avg_rating} WoW&nbsp;  
                                                { data.avg_rating_flag === 'Deteriorate'? <FaChevronCircleDown></FaChevronCircleDown>:<></>}
                                                { data.avg_rating_flag === 'Improve'? <FaChevronCircleUp></FaChevronCircleUp>:<></>}</small>
                                            </CustomTextProgressBar>
                                            </center>
                                        </div>
                                    </Link>
                                </center>
                            </div>
                            <div className="  dc-6 col-5 "  >
                                <center className="tc-6" id="sub-header">Price Index</center>
                                <center>
                                    <Link to="/salesview" className="lnk" >
                                    <center className="mt-1" >
                                            <CustomTextProgressBar className="" outercolor={params.pi}

                                                pc="springgreen" percentage={data.perc_skus_cpi_dropped_base} >

                                                <h6 className={data.perc_skus_cpi_dropped_base_indicator}>{data.l7_avg_price_index} </h6>
                                                <small className="text-white" style={{
                                                    fontSize: '8pt',
                                                    padding:"2px"
                                                }}>{data.wow_pi} WoW&nbsp; 
                                                { data.cpi_flag === 'Deteriorate'? <FaChevronCircleDown></FaChevronCircleDown>:<></>}
                                                { data.cpi_flag === 'Improve'? <FaChevronCircleUp></FaChevronCircleUp>:<></>}</small>
                                            </CustomTextProgressBar>
                                            </center>
                                    </Link>
                                </center>
                            </div>
                        </div>
                        </center>
                    </div>
                <div className="ml-2 col-5 mb-1 " style={{
                   
                    boxShadow: "0px 0px 12px 3px #f8f9fa57",
                    padding: "-1px",
                    paddingRight: "0px",
                    marginRight:"0px",
                }}>
               <center className="tc-8 mb-1 mr-4 mid-heading" >Content Health</center>
               <center>
                <div className="row col-14 mt-1 mr-0 ml-0 p-0" id="sub1">
                            <div className=" dc-8 col-6 ml-2 ">
                                <center className="tc-8" id="sub-header">Content Health Score</center>
                                {/* Avg rating */}
                                <center>
                                    <Link to={{
                                        pathname: "/contentview",
                                        state: {
                                            name: "sku"
                                        } 
                                     }} className="lnk">
                                        <div >
                                            <center className="mt-1"  >
                                            <CustomTextProgressBar className="" outercolor={params.chs}  pc="skyblue"
                                             percentage={data.perc_skus_chs_dropped_base} >

                                                <h6 className={data.perc_skus_chs_dropped_base_indicator}>{data.l7_avg_content_health_score} </h6>
                                                <small className="text-white" style={{
                                                    fontSize: '8pt',
                                                    padding:"2px"
                                                }}>{data.wow_chs} WoW&nbsp;  
                                                { data.content_health_score_flag === 'Deteriorate'? <FaChevronCircleDown></FaChevronCircleDown>:<></>}
                                                { data.content_health_score_flag === 'Improve'? <FaChevronCircleUp></FaChevronCircleUp>:<></>}</small>
                                                {/* <small className="lnk mt-1">{percentages.chs}%</small> */}
                                            </CustomTextProgressBar>
                                            </center>
                                        </div>
                                    </Link>
                                </center>
                            </div>
                            <div className="dc-5 col-5"  >
                                <center className="tc-5" id="sub-header">Conversion Rate</center>
                                <center>
                                    <Link to="/salesview" className="lnk" >
                                    <center className="mt-1" >
                                            <CustomTextProgressBar className=""
                                                outercolor={params.cr}
                                                pc="springgreen" percentage={data.perc_skus_conversion_rate_dropped_base} >

                                                <h6 className={data.perc_skus_conversion_rate_dropped_base_indicator}>{data.l7_avg_conversion_rate} </h6>
                                                <small className="text-white" style={{
                                                    fontSize: '8pt',
                                                    padding:"2px"
                                                }}>{data.wow_conversion_rate} pp WoW&nbsp;
                                                 { data.conversion_rate_flag === 'Deteriorate'? <FaChevronCircleDown></FaChevronCircleDown>:<></>}
                                                 { data.conversion_rate_flag === 'Improve'? <FaChevronCircleUp></FaChevronCircleUp>:<></>}</small>
                                            </CustomTextProgressBar>
                                            </center>
                                    </Link>
                                </center>
                            </div>
                        </div>
                    </center>
                    </div>
                </div>
            </div>
        )
    }
    else if(loading === true && error === false) {

        return (
            <div className="mr-auto ml-auto d-flex justify-content-center">
                <Spinner className="spinner-grow spinner-grow-sm text-primary" role="status"></Spinner>
                <Spinner className="spinner-grow spinner-grow-sm text-success" role="status"></Spinner>
                <Spinner className="spinner-grow spinner-grow-sm text-warning" role="status"></Spinner>
            </div>
        )
    }
    else {
        return(
        <div className="mr-auto ml-5 mt-auto justify-content-center align-items-center">
                <FaExclamation style={{
                    fontSize: '50px',
                    color: 'aqua',
                }}></FaExclamation> <h4 className="text-muted"> Oops! We are reconnecting... ! &nbsp;  </h4>
               
                    <h6 className="text-muted">There was a problem while connecting to our database... <FaDatabase></FaDatabase></h6>
                
        </div>
        )
    }
}
