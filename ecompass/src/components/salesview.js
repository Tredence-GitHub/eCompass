import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Spinner, Button, Tabs, Tab } from 'react-bootstrap';
import { FaFilter, FaExclamation, FaWifi, FaDatabase } from 'react-icons/fa';
import Iframe from 'react-iframe';


export default function Salesview(props) {    

    const [loading, setLoading] = useState(false);
    const [error, seterror] = useState(false);
    
    if(!loading){
        return (
            <div>
            <Tabs defaultActiveKey="home" variant="dark"  transition={false} id="noanim-tab-example">
                
                <Tab eventKey="home"  title="Product Group Level">
                <div className="container-fluid" style={{
                    marginTop: "10px",
                    padding: "0px",
                    height: "90vh",
                    marginRight: "0px",
                    
                }}>
            <Iframe 
                url="https://app.powerbi.com/reportEmbed?reportId=786263b8-b02b-4c87-8130-6917e0f65743&autoAuth=true&ctid=927e65b8-7ad7-48db-a3c6-c42a67c100d6&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D&navContentPaneEnabled=false"
                frameBorder="0" 
                width= "100%"
                height= "98%"
                variant = "light"
                
                style= {{ "background":"white"}}
                allowFullScreen="true"
            ></Iframe>
    
        </div>
                </Tab>
                <Tab eventKey="profile" title="SKU Level">
                <div className="" style={{
                    marginTop: "10px",
                    padding: "0px",
                    height: "90vh",
                    paddingBottom: "10px"
                }}>
            <Iframe className=""
                url="https://app.powerbi.com/reportEmbed?reportId=d6b347b6-841e-4be6-a18e-2a554d3f42ea&autoAuth=true&ctid=927e65b8-7ad7-48db-a3c6-c42a67c100d6&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D&navContentPaneEnabled=false"
                frameBorder="0" 
                width="100%"
                height = "100%"
                allowFullScreen="true"
            ></Iframe>
    
        </div>
                </Tab>
          </Tabs>   
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
                }}></FaExclamation> <h4 className="text-muted"> Oops! Something went wrong! &nbsp;  </h4>
                
                    <h6 className="text-muted">Pssst! Check your internet connection... <FaWifi></FaWifi></h6>
                
        </div>
        )
    }

}
