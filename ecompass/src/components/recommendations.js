import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Spinner, Button } from 'react-bootstrap';
import BootstrapTable, { TableHeaderColumn } from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Popup from "reactjs-popup";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { render } from '@testing-library/react';
import Iframe from 'react-iframe';
import './Landing.css';
import { FaFilter, FaRedo, FaExclamation, FaDatabase } from 'react-icons/fa';
import styled from 'styled-components';
import {Report} from 'powerbi-report-component';
import RenderPowerBi from './renderPowerBi';


class Recommendations extends Component {

    constructor(props) {
        super(props);

    }

    state = {
        loading: true,
        tabledata: null,
        originaldata: null,
        local: 'http://localhost:4000',
        deploy: 'https://ecompass-app-development.azurewebsites.net',
        product: '',
        merchant: '',
        error: false,
        salesEmbed: '',
        inventoryEmbed: '',
        contentEmbed: '',
        ratingsEmbed: '',
    }

    
     
    salesFormatter(cell, row, rowIndex, formatExtraData) {        
        return (
            <div className="">
                {cell.map((item, index) => {
                        if(item === 'No Recommendation'){
                            return <span className="text-muted"><i>{item}</i></span>
                        }
                       
                            return (<Popup className="bg-dark" trigger={
                                <Button  
                                className="recommendations-btn" value={item} size="sm"
                                >{item} </Button>} modal >
                                    <RenderPowerBi reportIdPass = 'fe0fdd28-faa8-4816-8677-8c730005e1d5' embedPass = {formatExtraData} sku_idpass={row.sku_id} tablepass= {'ecom sales'} /> 
                                     
                            </Popup> 
                            )
                      })
                }          
                    
            </div>
        );
        
    }
    contentFormatter(cell, row, rowIndex, formatExtraData) {        
        return (
            <div className="">
                {cell.map((item, index) => {
                        if(item === 'No Recommendation'){
                            return <span className="text-muted"><i>{item}</i></span>
                        }
                       
                            return (<Popup className="bg-dark" trigger={
                                <Button  
                                className="recommendations-btn" value={item} size="sm"
                                >{item} </Button>} modal >
                                    <RenderPowerBi reportIdPass = '3e2254df-65b1-4d07-b019-1c28c6811a08' embedPass = {formatExtraData} sku_idpass={row.sku_id} tablepass= {'ecom content_health_final'}  /> 
                            </Popup>
                            )
                      })
                }          
                    
            </div>
        );
        
    }

    inventoryFormatter(cell, row, rowIndex, formatExtraData) {        
        return (
            <div className="">
                {cell.map((item, index) => {
                        if(item === 'No Recommendation'){
                            return <span className="text-muted"><i>{item}</i></span>
                        }
                       
                            return (<Popup className="bg-dark" trigger={
                                <Button  
                                className="recommendations-btn" value={item} size="sm"
                                >{item} </Button>} modal >
                                    <RenderPowerBi reportIdPass = '4593d2d5-1ee8-4f57-88ca-d5a8e65b0a59' embedPass = {formatExtraData} sku_idpass={row.sku_id} tablepass= {'ecom sales'} /> 
                            </Popup>
                            )
                      })
                }          
                    
            </div>
        );
        
    }

    ratingsFormatter(cell, row, rowIndex, formatExtraData) {        
        return (
            <div className="">
                {cell.map((item, index) => {
                        if(item === 'No Recommendation'){
                            return <span className="text-muted"><i>{item}</i></span>
                        }
                       
                            return (<Popup className="bg-dark" trigger={
                                <Button  
                                className="recommendations-btn" value={item} size="sm"
                                >{item} </Button>} modal >
                                    <RenderPowerBi reportIdPass = '85fa92cd-09b6-45df-9660-10cc69eaeaa6' embedPass = {formatExtraData} sku_idpass={row.sku_id} tablepass= {'ecom ratings_and_reviews_final'} /> 
                            </Popup>
                            )
                      })
                }          
                    
            </div>
        );
        
    }
    
    
    makeApiCall(){
        Promise.all( 
           [ Axios.get(`${this.state.deploy}/api/getRecommendations/${localStorage.getItem('global_vendor')}`), 
            Axios.post(`${this.state.deploy}/powerbi/getEmbedToken`, {data: [{
                'sales': {
                    'reportId':'fe0fdd28-faa8-4816-8677-8c730005e1d5',
                    'groupId': 'a3d38897-e2ce-4cec-9302-e5acafabc87b'
                },
                'content': {
                    'reportId':'3e2254df-65b1-4d07-b019-1c28c6811a08',
                    'groupId': 'a3d38897-e2ce-4cec-9302-e5acafabc87b'
                }, 
                'inventory': {
                    'reportId': '4593d2d5-1ee8-4f57-88ca-d5a8e65b0a59',
                    'groupId': 'a3d38897-e2ce-4cec-9302-e5acafabc87b'
                },
                'ratings':{
                     'reportId':  '85fa92cd-09b6-45df-9660-10cc69eaeaa6',
                     'groupId': 'a3d38897-e2ce-4cec-9302-e5acafabc87b'
                }
            }] 
        })] ).then((response) => {
                console.log(response);
                 return [response]
                }
            )
            .then(([results]) => {
            console.log(results);
            let fetched = results[0].data.data;
            console.log(results[1].data.embedToken);
            let tokens = results[1].data.embedToken;

            fetched.forEach(element => {
                element.sales_recommendation = element.sales_recommendation.split(',');
                element.content_health_recommendation = element.content_health_recommendation.split(',');
                element.inventory_recommendation = element.inventory_recommendation.split(',');
                element.ratings_and_reviews_recommendation = element.ratings_and_reviews_recommendation.split(',')

            });
            if(results[1].status === 200) {
            tokens.map((item, index)=> {
                console.log(Object.keys(item))
                console.log(item)
                this.setState({salesEmbed: item.sales.embeddingToken});
                this.setState({contentEmbed: item.content.embeddingToken});
                this.setState({inventoryEmbed: item.inventory.embeddingToken});
                this.setState({ratingsEmbed: item.ratings.embeddingToken});
                
            })
            this.setState({error: false})
            }
            else {
                this.setState({error: true})
            }
            this.setState({error: false})
            this.setState({ tabledata: fetched });
            this.setState({ originaldata: fetched });
            
            this.setState({loading: false});
            
            

        })

    }
   
    
    componentDidMount() {
        this.setState({merchant: localStorage.getItem('global_vendor')})
        
        this.makeApiCall();
    }

    handleSelected(e){
        const newtabledata = []
        if(e.target.value == 'all'){
            this.setState({tabledata: this.state.originaldata})
        }
        else{
        this.state.originaldata.map((item, index)=>{
            console.log(this.state.product)
            if(item.product_group === e.target.value){
                newtabledata.push(item);
            }
        });
        console.log(newtabledata)
        this.setState({tabledata: newtabledata});
        }
        
    }

    handleDropdown(e){
        localStorage.setItem('global_vendor', e.target.value);
        this.setState({merchant: e.target.value});
        this.makeApiCall()
    }
    populateCat() {
        let optionItems = []
        let optionUnique = []
        this.state.originaldata.map((item, index) => {
            console.log(item.product_group)
           
            if(optionUnique.indexOf(item.product_group) < 0)
            {
                optionUnique.push(item.product_group)
                optionItems.push(<option value={item.product_group}>{item.product_group}</option>)
            }            

        })
        optionItems = [... new Set(optionItems)]
        return optionItems;
    }
    render() {
        const tabledata = this.state.tabledata;
        const loading = this.state.loading;
        

        const { SearchBar } = Search;
        const self =  this;
        const columns = [{
            dataField: 'sku_id',
            text: 'SKU ID',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '110px',
                backgroundColor:'#f8f9fa26',
                borderColor: '#f8f9fa60'
            }
        }, {
            dataField: 'vendor',
            text: 'Vendor',
            classes: "rowColor",
            headerStyle: {
                width: '110px',
                backgroundColor:'#f8f9fa26',
                borderColor: '#f8f9fa60'
            }
        }, {
            dataField: 'sales_recommendation',
            text: 'Sales Recommendation',
            classes: "rowColor",
            headerStyle: {
                backgroundColor:'#f8f9fa26',
                borderColor: '#f8f9fa60'
            },
            formatter: this.salesFormatter,
            formatExtraData: this.state.salesEmbed
        }, {
            dataField: 'content_health_recommendation',
            text: 'Content Health Recommendation',
            classes: "rowColor",
            headerStyle: {
                backgroundColor:'#f8f9fa26',
                borderColor: '#f8f9fa60'
            },
            formatter:this.contentFormatter,
            formatExtraData: this.state.contentEmbed
        },
        {
            dataField: 'ratings_and_reviews_recommendation',
            text: 'Ratings & Reviews Recommendation',
            classes: "rowColor",
            headerStyle: {
                backgroundColor:'#f8f9fa26',
                borderColor: '#f8f9fa60'
            },
            formatter: this.ratingsFormatter,
            formatExtraData: this.state.ratingsEmbed
        },
            
        {
            dataField: 'inventory_recommendation',
            text: 'Inventory Recommendation',
            classes: "rowColor",
            headerStyle: {
                backgroundColor:'#f8f9fa26',
                borderColor: '#f8f9fa60'
            },
            formatter: this.inventoryFormatter,
            formatExtraData: this.state.inventoryEmbed
        }]



        const defaultSorted = [{
            dataField: 'sku_id',
            order: 'asc'
        }]


        if (loading == false) {
            const customTotal = (from, to, size) => (
                <span className="react-bootstrap-table-pagination-total text-white ml-2">
                    Showing { from} to { to} of { size} Results
                </span>
            );

            const options = {
                paginationSize: 1,
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
                <div className='table-responsive recommendations-table landing-main'>
                    <select className="categoryDropDown mb-2" id="deflt" onChange = {(e)=>{ this.handleSelected(e) } } >
                        <option value="select" disabled>Select a Product Category </option>
                        <option value="all">All Categories</option>
                        {this.populateCat()}

                    </select>
                    <select onChange={(e) => { this.handleDropdown(e)} } style={{
                    padding:"3px",
                    height:"30px",
                    width: "200px",
                    border: "none",
                    color: "silver",
                    backgroundColor:"#162447",
                    boxShadow: "0px 1px 7px 0.25px navy",
                    marginRight: "5px",
                    marginLeft: "auto",
                }}>
                    <option value="default" selected disabled>{ this.state.merchant !== null ? 'Selected '+ this.state.merchant : 'Select a Merchant'} </option>
                    <option value="Walmart">Walmart </option>
                    <option value="Amazon">Amazon </option>
                    {/* <option value="merchant3">merchant3 </option> */}
                    {/* <option value="">merchant4  </option> */}
                </select>
                
                    <ToolkitProvider
                        keyField="id"
                        data={tabledata}
                        columns={columns}
                        
                        search
                    >
                        {
                            props => (
                                <div>
                                    {/* <div className="ml-0 col-xl-6 ">
                                        <SearchBar {...props.searchProps} />
                                    </div> */}

                                    <BootstrapTable classes="table-dark table-bordered table-hover table-striped thead-light"
                                        {...props.baseProps}
                                        condensed = {true}
                                        pagination={paginationFactory(options)}
                                        defaultSorted={defaultSorted}
                                        noDataIndication={() => (<div>No data available</div>)}
                                        remote={{ pagination: false, filter: true }}
                                    />
                                </div>
                            )
                        }
                    </ToolkitProvider>

                </div>
            )
        }

        else if(this.state.loading === true && this.state.error === false) {
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
                        color: 'aqua'
                    }}></FaExclamation><h4 className="text-muted"> Oops! Something went wrong! </h4>
                    <h6 className="text-muted"> There was a problem while connecting to our database... <FaDatabase></FaDatabase></h6>
            </div>
            )
        }
        
    }
}

export default Recommendations;
