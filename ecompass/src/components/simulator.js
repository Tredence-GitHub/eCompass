import React, { useEffect, useState } from 'react';
import { Spinner, Tabs, Tab } from 'react-bootstrap';
import { FaExclamation, FaWifi } from 'react-icons/fa';
import Axios from 'axios';
import {Report} from 'powerbi-report-component';

export default function Simulator(props) {
    const [loading, setloading] = useState(true)
    const [results, setresults] = useState({})
    const [error, seterror] = useState(false)
    useEffect(() => {
        f()
    }, [])
    const url = {
        'local': 'http://localhost:4000',
        'deploy': 'https://cpg-app.azurewebsites.net',
        'develop': 'https://ecompass-app-development.azurewebsites.net'
    }
    let data = [{'productlevel': {
        'reportId':'834e0185-88b5-4878-9a66-4e5f1c8e67ee',
        'groupId': 'a3d38897-e2ce-4cec-9302-e5acafabc87b' ,
        }
    }
    ]

    async function f(){
        let resp = await Axios.post(`${url.deploy}/powerbi/getEmbedToken`,{data}
         ).then((response)=> {
            //  console.log(response)
             setresults(response.data.embedToken);
            if(response.data.embedToken[0].productlevel.embeddingToken){
                seterror(false);
                setloading(false);
            }
            else{
                seterror(true);
                setloading(true);
            }
         }).catch((err)=> {
            seterror(true)
            f()
         });
    }

    function renderPowerBi(myReportId, myGroupId, embeddingToken) {
        
        const reportId =myReportId;  
        const groupId = myGroupId;
        let embedUrl = `https://app.powerbi.com/reportEmbed?reportId=${reportId}&groupId=${groupId}`;
          const embedToken = embeddingToken;
          embedUrl = embedUrl.replace("watch?v=", "v/");
   
          const reportStyle = {
              height: "45rem"
          };
          const extraSettings = {
              filterPaneEnabled: false, //true
              navContentPaneEnabled: false, //true
              hideErrors: false
          };
          return (
           
              <Report
                  embedType="report" // "dashboard"
                  tokenType="Embed" // "Aad"
                  accessToken={embedToken} // accessToken goes here
                  embedUrl={embedUrl} // embedUrl goes here
                  embedId={reportId}
                  permissions="All" // View
                  style={reportStyle}
                  extraSettings={extraSettings}
                  onLoad={(report) => {
                      report = report;
                    
                  }
                  }
   
              />
          )
      }

    if(!loading){
        return (
        
        <div> 

        <Tabs defaultActiveKey="home" variant="dark" transition={false} id="noanim-tab-example">
            <Tab eventKey="home" title="Simulator">
            <div className="" style={{
                marginTop: "10px",
                height: "90vh",
            }}>
                {Object.keys(results[0])[0] === 'productlevel'?  renderPowerBi(results[0].productlevel.reportId, results[0].productlevel.groupId ,results[0].productlevel.embeddingToken): renderPowerBi(results[1].productlevel.reportId, results[1].productlevel.groupId ,results[1].productlevel.embeddingToken) }

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
                }}></FaExclamation> <h4 className="text-muted"> Oops! We are reconnecting... ! &nbsp;  </h4>
                
                    <h6 className="text-muted">Please check your internet connection... <FaWifi></FaWifi></h6>
                
        </div>
        )
    }
}
