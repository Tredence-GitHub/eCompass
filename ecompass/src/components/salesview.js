import React from 'react';
import { useState, useEffect } from 'react';
import {  Tabs, Tab } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import Iframe from 'react-iframe';


export default function Salesview(props) {    

    const [varValue, setvarValue] = useState('');
    const [loading, setLoading] = useState(false);

    // const content1 = useSelector(state => state.regular.filter1);
    // const store = useStore()
    // const dispatch = useDispatch()
    
    const [filter1, setfilter1] = useState('')
    const [filter2, setfilter2] = useState('')

    useEffect(() => {
       setfilter1(localStorage.getItem('filter1'))
       setfilter2(localStorage.getItem('filter2'))
    //    setvarValue(props.filters);
       setLoading(false);
    }, []);

    if(loading){
        return(
            <div className="mr-auto ml-auto d-flex justify-content-center">
                <Spinner className="spinner-grow spinner-grow-sm text-primary" role="status"></Spinner>
                <Spinner className="spinner-grow spinner-grow-sm text-success" role="status"></Spinner>
                <Spinner className="spinner-grow spinner-grow-sm text-warning" role="status"></Spinner>
            </div>
        )
    }
else{
    return (
        <div>
        {/* //  {This is {varValue} --- localStorage -- {filter1} From Global Props --- {content1} ... {props.content1} !! {console.log(store.getState())}} */}
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
}
