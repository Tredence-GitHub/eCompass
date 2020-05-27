import React from 'react';
import Iframe from 'react-iframe';
import { Container, Button, Tabs, Tab } from 'react-bootstrap';


export default function Simulator() {
    return (
        <div>
            <Tabs defaultActiveKey="home" variant="dark" transition={false} id="noanim-tab-example">
            <Tab eventKey="home" title="Simulator">
            <div className="" style={{
                marginTop: "10px",
                height: "90vh",
            }}>
        <Iframe 
            url="https://app.powerbi.com/reportEmbed?reportId=6d256bdf-8515-4c05-97d0-0fc464b8fbc9&autoAuth=true&ctid=927e65b8-7ad7-48db-a3c6-c42a67c100d6&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D&navContentPaneEnabled=false"
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
