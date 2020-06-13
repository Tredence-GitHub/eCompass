import React, { useEffect, useState } from 'react';
import { Container, Spinner, Button, Tabs, Tab } from 'react-bootstrap';
import { FaFilter, FaExclamation, FaWifi, FaDatabase } from 'react-icons/fa';
import Iframe from 'react-iframe';
import Axios from 'axios';

export default function Contenthealth(props) {
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(false)
    useEffect(() => {
        f()
    }, [])
    
    let data = [{'productlevel': {
        'reportId':'934a99b8-47a2-4825-907c-0040b96af643',
        'groupId': 'a3d38897-e2ce-4cec-9302-e5acafabc87b' 
        }
    },
        {'skulevel': {
        'reportId': 'ff3ab103-a5a1-4850-b21d-4fec16e9a56c',
        'groupId': 'a3d38897-e2ce-4cec-9302-e5acafabc87b'
        }
    }
    ]

    async function f(){
        let response = await Axios.post('http://localhost:4000/powerbi/getEmbedToken',{data}
         );
        if(response.status === 200){
            console.log(response.data.embedToken);
            setloading(false);
        }else{
            seterror(true);
        }
    }
    if(!loading){
    return (
        <div> 
        <Tabs defaultActiveKey="home" variant="dark" transition={false} id="noanim-tab-example">
            <Tab eventKey="home" title="Product Group Level">
            <div className="" style={{
                marginTop: "10px",
                height: "90vh",
            }}>
        <Iframe 
            url="https://app.powerbi.com/reportEmbed?reportId=eac57d44-c32a-4c85-b50a-12bf73dbb1cb&autoAuth=true&ctid=927e65b8-7ad7-48db-a3c6-c42a67c100d6&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D&navContentPaneEnabled=false"
            frameBorder="0" 
            width="100%"
            height="98%"
            allowFullScreen="false"
        ></Iframe>

    </div>
            </Tab>
            <Tab eventKey="profile" title="SKU Level">
            <div className="" style={{
                marginTop: "10px",
                height: "90vh",
            }}>
        <Iframe className=""
            url="https://app.powerbi.com/reportEmbed?reportId=79703cb5-62fe-468c-a0dd-91ddd4defc4b&autoAuth=true&ctid=927e65b8-7ad7-48db-a3c6-c42a67c100d6&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D&filterPaneEnabled=false&navContentPaneEnabled=false"
            frameBorder="0" 
            width="100%"
            height="98%"
            allowFullScreen="false"
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
