import React from 'react';
import { Container, Button, Tabs, Tab } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa';
import Iframe from 'react-iframe';

export default function Contenthealth() {
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
