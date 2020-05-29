import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Spinner, Button } from 'react-bootstrap';
import BootstrapTable, {TableHeaderColumn} from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Popup from "reactjs-popup";
import { render } from '@testing-library/react';
import Iframe from 'react-iframe';
import './Landing.css';
import styled from 'styled-components';

export default function Recommendations() {
    const { SearchBar, ClearSearchButton  }= Search;

    const StyledPopup = styled(Popup)`
    &-content{
        width: "300px"
    } `;

    function salesFormatter(cell, row, rowIndex, formatExtraData){
        return (
            
            <div className="">
            {cell.map((item, index) => {
                // return <li style={{ textDecoration:"none", listStyle:"none", color: "green" }} key={index}>{item}</li>
                if(item.includes('Drop') | item.includes('without') | item.includes
                ('OOS') | item.includes('Negative')){
                    return <Popup className="bg-dark" trigger={ <Button variant="outline-danger" value={item} size="sm" onClick={(e)=>{
                        console.log(e.target.value,cell, " --- ", row)
                        
                        }} >{item}</Button> } modal >
                            <div className="bg-dark text-white">
                                <Iframe className=""
                                url="https://app.powerbi.com/reportEmbed?reportId=6edd203c-2a69-4613-95b4-c6f983f01e0b&autoAuth=true&ctid=927e65b8-7ad7-48db-a3c6-c42a67c100d6&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D&filterPaneEnabled=false&navContentPaneEnabled=false"
                                frameBorder="0" 
                                width="100%"
                                height="98%"
                                allowFullScreen="false">

                                </Iframe>
                            </div>
                        </Popup>
                     

                }
                else if(item.includes('Decline') | item.includes('Not') | item.includes('Below')){
                    return <Popup className="bg-dark" trigger={ <Button variant="outline-warning" value={item} size="sm"  >
                        {item}</Button> } modal >
                            <div>
                                <Iframe>

                                </Iframe>
                            </div>
                        </Popup>
                }
                else if(item.includes('High') | item.includes('Positive') ){
                    return <Popup className="bg-dark" trigger= {<Button variant="outline-success" value={item} size="sm" onClick={(e)=>{
                        // console.log(e.target.value,cell, " --- ", row)
                    }} >{item}</Button>} modal>

                    </Popup>
                }
                return <Popup className="bg-dark" trigger= {<Button variant="outline-info" value={item} size="sm" onClick={(e)=>{
                    // console.log(e.target.value,cell, " --- ", row)
                }} >{item}</Button>} modal>

                </Popup>
            })}
        </div>
        );
    }
    
    function contentFormatter(cell, row, rowIndex, formatExtraData){
        return (
            
            <div className="">
            {cell.map((item, index) => {
                if(item.includes('Drop') | item.includes('without') | item.includes
                ('OOS') | item.includes('Negative')){
                    return <Popup className="bg-dark" trigger= {<Button variant="outline-danger" value={item} size="sm" onClick={(e)=>{
                        console.log(e.target.value,cell, " --- ", row)
                    }} >{item}</Button>} modal>

                    </Popup>

                }
                else if(item.includes('Decline') | item.includes('Not') | item.includes('Below')){
                    return <Popup className="bg-dark" trigger= {<Button variant="outline-warning" value={item} size="sm" onClick={(e)=>{
                        // console.log(e.target.value,cell, " --- ", row)
                    }} >{item}</Button>} modal>

                    </Popup>
                }
                else if(item.includes('High') | item.includes('Positive') ){
                    return <Popup className="bg-dark" trigger= {<Button variant="outline-success" value={item} size="sm" onClick={(e)=>{
                        // console.log(e.target.value,cell, " --- ", row)
                    }} >{item}</Button>} modal>

                    </Popup>
                }
                return <Popup className="bg-dark" trigger= {<Button variant="outline-info" value={item} size="sm" onClick={(e)=>{
                    // console.log(e.target.value,cell, " --- ", row)
                }} >{item}</Button>} modal>

                </Popup>
            })}
        </div>
        );
    }
    
    function ratingsFormatter(cell, row, rowIndex, formatExtraData){
        return (
            
            <div className="">
            {cell.map((item, index) => {
                // return <li style={{ textDecoration:"none", listStyle:"none", color: "green" }} key={index}>{item}</li>
                if(item.includes('Drop') | item.includes('without') | item.includes
                ('OOS') | item.includes('Negative')){
                    return <Popup className="bg-dark" trigger= {<Button variant="outline-danger" value={item} size="sm" onClick={(e)=>{
                        console.log(e.target.value,cell, " --- ", row)
                    }} >{item}</Button>} modal>

                    </Popup>

                }
                else if(item.includes('Decline') | item.includes('Not') | item.includes('Below')){
                    return <Popup className="bg-dark" trigger= {<Button variant="outline-warning" value={item} size="sm" onClick={(e)=>{
                        // console.log(e.target.value,cell, " --- ", row)
                    }} >{item}</Button>} modal>

                    </Popup>
                }
                else if(item.includes('High') | item.includes('Positive') ){
                    return <Popup className="bg-dark" trigger= {<Button variant="outline-success" value={item} size="sm" onClick={(e)=>{
                        // console.log(e.target.value,cell, " --- ", row)
                    }} >{item}</Button>} modal>

                    </Popup>
                }
                return <Popup className="bg-dark" trigger= {<Button variant="outline-info" value={item} size="sm" onClick={(e)=>{
                    // console.log(e.target.value,cell, " --- ", row)
                }} >{item}</Button>} modal>

                </Popup>
            })}
        </div>
        );
    }
    
    function inventoryFormatter(cell, row, rowIndex, formatExtraData){
        return (
            
            <div className="">
            {cell.map((item, index) => {
                // return <li style={{ textDecoration:"none", listStyle:"none", color: "green" }} key={index}>{item}</li>
                if(item.includes('Drop') | item.includes('without') | item.includes
                ('OOS') | item.includes('Negative')){
                    return <Popup className="bg-dark" trigger= {<Button variant="outline-danger" value={item} size="sm" onClick={(e)=>{
                        console.log(e.target.value,cell, " --- ", row)
                    }} >{item}</Button>} modal>

                    </Popup>

                }
                else if(item.includes('Decline') | item.includes('Low') | item.includes('Not') | item.includes('Below')){
                    return <Popup className="bg-dark" trigger= {<Button variant="outline-warning" value={item} size="sm" onClick={(e)=>{
                        // console.log(e.target.value,cell, " --- ", row)
                    }} >{item}</Button>} modal>

                    </Popup>
                }
                else if(item.includes('High') | item.includes('Positive') ){
                    return <Popup className="bg-dark" trigger= {<Button variant="outline-success" value={item} size="sm" onClick={(e)=>{
                        // console.log(e.target.value,cell, " --- ", row)
                    }} >{item}</Button>} modal>

                    </Popup>
                }
                return <Popup className="bg-dark" trigger= {<Button variant="outline-info" value={item} size="sm" onClick={(e)=>{
                    // console.log(e.target.value,cell, " --- ", row)
                }} >{item}</Button>} modal>
                    
                </Popup>
            })}
        </div>
        );
    }

    function skuIDFormatter(column, colIndex, { sortElement, filterElement }) {
        return (
          <div style={ { display: 'flex', flexDirection: 'column' } }>
            { filterElement }
            { column.text }
            { sortElement }
          </div>
        );
      }
    
    const columns = [{
        dataField: 'sku_id',
        text: 'SKU ID',
        // filter: textFilter(),
        // headerFormatter: skuIDFormatter
        }, {
        dataField: 'vendor',
        text: 'Vendor'
    },{
        dataField: 'sales_recommendation',
        text: 'Sales Recommendation',
        
        formatter: salesFormatter
    }, {
        dataField: 'content_health_recommendation',
        text: 'Content Health Recommendation',
        
        formatter: contentFormatter
    },
    {
        dataField: 'ratings_and_reviews_recommendation',
        text: 'Ratings & Reviews Recommendation',
        
        formatter: ratingsFormatter
    },
    ,
    {
        dataField: 'inventory_recommendation',
        text: 'Inventory Recommendation',
        
        formatter: inventoryFormatter
    }]

    

    const defaultSorted = [{
        dataField: 'sku_id',
        order: 'asc'
    }]
    const [loading, setloading] = useState(true);
    const [tabledata, settabledata] = useState(null);
    
    
    useEffect(() => {
        fetchData();
        
    }, [])

    async function fetchData() {
        let response = await Axios.get('http://localhost:4000/api/getRecommendations');
        if(response.status === 200){
            // console.log(response.data.data)
            let fetched = response.data.data;
            fetched.forEach(element => {
                element.sales_recommendation = element.sales_recommendation.split(',');
                element.content_health_recommendation = element.content_health_recommendation.split(',');
                element.inventory_recommendation = element.inventory_recommendation.split(',');
                element.ratings_and_reviews_recommendation = element.ratings_and_reviews_recommendation.split(',')
                
            });
            console.log(fetched);
            settabledata(fetched);
            setloading(false);
        }
        else{
            // window.alert('Error making an API call !');
        }
    }
    
    if(!loading){
        const customTotal = (from, to, size) => (
            <span className="react-bootstrap-table-pagination-total text-white ml-2">
              Showing { from } to { to } of { size } Results
            </span>
          );
          
        const options = {
            paginationSize: 3,
            pageStartIndex: 0,
            // alwaysShowAllBtns: true, // Always show next and previous button
            // withFirstAndLast: false, // Hide the going to First and Last page button
            // hideSizePerPage: true, // Hide the sizePerPage dropdown always
            // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
            firstPageText: 'First',
            prePageText: 'Back',
            nextPageText: 'Next',
            lastPageText: 'Last',
            nextPageTitle: 'First page',
            prePageTitle: 'Pre page',
            firstPageTitle: 'Next page',
            lastPageTitle: 'Last page',
            showTotal: true,
            paginationTotalRenderer: customTotal,
            disablePageTitle: true,
            sizePerPageList: [{
              text: '5', value: 5
            }, {
              text: '10', value: 10
            }, {
              text: 'All', value: tabledata.length
            }] // A numeric array is also available. the purpose of above example is custom the text
          };
        return (
            <div>
                                {/* <ToolkitProvider

                keyField="id"

                data={tabledata}

                columns={columns}

                search



                >



                {

                    props => (

                        <div>



                            <div className="flex justify-content-between">

                                <h4>All (SKUs)</h4>

                                <SearchBar {...props.searchProps} />

                            </div>



                            <BootstrapTable


                                pagination={paginationFactory()}

                                {...props.baseProps}

                            />

                        </div>

                    )

                }

</ToolkitProvider> */}
                <ToolkitProvider
                    keyField="id"
                    data={tabledata}
                    columns={columns}
                    search
                >
                    
                    {
                        props => (
                            <div className="table-responsive" >
                                <div className="row col-xl-12">
                                <div>
                                <SearchBar className="col-xl-12 mr-1" {...props.searchProps} />
                                </div>
                                <div>
                                <ClearSearchButton className="ml-1 btn btn-outline-primary" { ...props.searchProps}/>
                                </div>
                                </div>
                                
                                <BootstrapTable classes="table-dark table-bordered table-hover table-striped thead-light"
                                 pagination={paginationFactory(options)} 
                                 
                                 defaultSorted={ defaultSorted }
                                 noDataIndication={() => (<div>No Data available</div>)}
                                 remote={{pagination: false, filter: true}}
                                    {...props.baseProps}
                                />
                            </div>
                        )
                    }
                </ToolkitProvider>
                   
            </div>
        )
    }
    else{
        return (
            <div className="mr-auto ml-auto d-flex justify-content-center">
                <Spinner className="spinner-grow spinner-grow-sm text-primary" role="status"></Spinner>
                <Spinner className="spinner-grow spinner-grow-sm text-success" role="status"></Spinner>
                <Spinner className="spinner-grow spinner-grow-sm text-warning" role="status"></Spinner>
            </div>
        )
    }
    
}
