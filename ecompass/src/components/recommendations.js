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
import { FaFilter, FaRedo } from 'react-icons/fa';
import styled from 'styled-components';

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
        product: ''
    }


    salesFormatter(cell, row, rowIndex, formatExtraData) {
        return (

            <div className="">
                {cell.map((item, index) => {
                        if(item === 'No Recommendation'){
                            return <span className="text-muted"><i>{item}</i></span>
                        }
                        else if (item.toLowerCase().includes('drop') | item.toLowerCase().includes('without') | 
                        item.toLowerCase().includes('oos') | item.toLowerCase().includes('negative')) {
                        return <Popup className="bg-dark" trigger={<Button variant="outline-danger" value={item} size="sm" onClick={(e) => {
                            console.log(e.target.value, cell, " --- ", row)

                        }} >{item}</Button>} modal >
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
                    else if (item.toLowerCase().includes('decline') | item.toLowerCase().includes('not') | item.toLowerCase().includes('below')) {
                        return <Popup className="bg-dark" trigger={<Button variant="outline-warning" value={item} size="sm"  >
                            {item}</Button>} modal >
                            <div>
                                <Iframe>

                                </Iframe>
                            </div>
                        </Popup>
                    }
                    else if (item.toLowerCase().includes('high') | item.toLowerCase().includes('positive')) {
                        return <Popup className="bg-dark" trigger={<Button variant="outline-success" value={item} size="sm" onClick={(e) => {
                            // console.log(e.target.value,cell, " --- ", row)
                        }} >{item}</Button>} modal>

                        </Popup>
                    }
                    return <Popup className="bg-dark" trigger={<Button variant="outline-info" value={item} size="sm" onClick={(e) => {
                        // console.log(e.target.value,cell, " --- ", row)
                    }} >{item}</Button>} modal>

                    </Popup>
                })}
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
                    else if (item.toLowerCase().includes('drop') | item.toLowerCase().includes('without') | 
                    item.toLowerCase().includes('oos') | item.toLowerCase().includes('negative')) {
                        return <Popup className="bg-dark" trigger={<Button variant="outline-danger" value={item} size="sm" onClick={(e) => {
                            console.log(e.target.value, cell, " --- ", row)
                        }} >{item}</Button>} modal>

                        </Popup>

                    }
                    else if (item.toLowerCase().includes('decline') | item.toLowerCase().includes('not') | item.toLowerCase().includes('below')) {
                        return <Popup className="bg-dark" trigger={<Button variant="outline-warning" value={item} size="sm" onClick={(e) => {
                            // console.log(e.target.value,cell, " --- ", row)
                        }} >{item}</Button>} modal>

                        </Popup>
                    }
                    else if (item.toLowerCase().includes('high') | item.toLowerCase().includes('positive')) {
                        return <Popup className="bg-dark" trigger={<Button variant="outline-success" value={item} size="sm" onClick={(e) => {
                            // console.log(e.target.value,cell, " --- ", row)
                        }} >{item}</Button>} modal>

                        </Popup>
                    }
                    return <Popup className="bg-dark" trigger={<Button variant="outline-info" value={item} size="sm" onClick={(e) => {
                        // console.log(e.target.value,cell, " --- ", row)
                    }} >{item}</Button>} modal>

                    </Popup>
                })}
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
                    else if ( item.toLowerCase().includes('drop') | item.includes('without') | 
                    item.toLowerCase().includes('oos') | item.toLowerCase().includes('negative')) {
                        return <Popup className="bg-dark" trigger={<Button variant="outline-danger" value={item} size="sm" onClick={(e) => {
                            console.log(e.target.value, cell, " --- ", row)
                        }} >{item}</Button>} modal>

                        </Popup>

                    }
                    else if (item.toLowerCase().includes('decline') | item.toLowerCase().includes('not') | item.toLowerCase().includes('below')) {
                        return <Popup className="bg-dark" trigger={<Button variant="outline-warning" value={item} size="sm" onClick={(e) => {
                            // console.log(e.target.value,cell, " --- ", row)
                        }} >{item}</Button>} modal>

                        </Popup>
                    }
                    else if (item.toLowerCase().includes('high') | item.toLowerCase().includes('positive')) {
                        return <Popup className="bg-dark" trigger={<Button variant="outline-success" value={item} size="sm" onClick={(e) => {
                            // console.log(e.target.value,cell, " --- ", row)
                        }} >{item}</Button>} modal>

                        </Popup>
                    }
                    return <Popup className="bg-dark" trigger={<Button variant="outline-info" value={item} size="sm" onClick={(e) => {
                        // console.log(e.target.value,cell, " --- ", row)
                    }} >{item}</Button>} modal>

                    </Popup>
                })}
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
                    else if (item.includes('Drop') | item.includes('drop') | item.includes('without') | item.includes
                        ('OOS') | item.includes('Negative')) {
                        return <Popup className="bg-dark" trigger={<Button variant="outline-danger" value={item} size="sm" onClick={(e) => {
                            console.log(e.target.value, cell, " --- ", row)
                        }} >{item}</Button>} modal>

                        </Popup>

                    }
                    else if (item.includes('Decline') | item.includes('Low') | item.includes('Not') | item.includes('Below')) {
                        return <Popup className="bg-dark" trigger={<Button variant="outline-warning" value={item} size="sm" onClick={(e) => {
                            // console.log(e.target.value,cell, " --- ", row)
                        }} >{item}</Button>} modal>

                        </Popup>
                    }
                    else if (item.includes('High') | item.includes('Positive')) {
                        return <Popup className="bg-dark" trigger={<Button variant="outline-success" value={item} size="sm" onClick={(e) => {
                            // console.log(e.target.value,cell, " --- ", row)
                        }} >{item}</Button>} modal>

                        </Popup>
                    }
                    return <Popup className="bg-dark" trigger={<Button variant="outline-info" value={item} size="sm" onClick={(e) => {
                        // console.log(e.target.value,cell, " --- ", row)
                    }} >{item}</Button>} modal>

                    </Popup>
                })}
            </div>
        );
    }

    componentDidMount() {
        Axios.get(`${this.state.deploy}/api/getRecommendations/${localStorage.getItem('global_vendor')}`).then((response) => {
            let fetched = response.data.data;

            fetched.forEach(element => {
                element.sales_recommendation = element.sales_recommendation.split(',');
                element.content_health_recommendation = element.content_health_recommendation.split(',');
                element.inventory_recommendation = element.inventory_recommendation.split(',');
                element.ratings_and_reviews_recommendation = element.ratings_and_reviews_recommendation.split(',')

            });
            // console.log(fetched);
            this.setState({ tabledata: fetched });
            this.setState({ originaldata: fetched })
            this.setState({ loading: false })
        }).catch((err) => {
            console.log(err);
            window.alert(err);
        })

    }
   
    handleSelected(e){
        const newtabledata = []
        // this.setState({product: e.target.value})
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

        const columns = [{
            dataField: 'sku_id',
            text: 'SKU ID',
            sort: true
            // filter: textFilter(),
            // headerFormatter: skuIDFormatter
        }, {
            dataField: 'vendor',
            text: 'Vendor',
            // sort: true
        }, {
            dataField: 'product_group',
            text: 'Product Group'
        }, {
            dataField: 'sales_recommendation',
            text: 'Sales Recommendation',

            formatter: this.salesFormatter
        }, {
            dataField: 'content_health_recommendation',
            text: 'Content Health Recommendation',

            formatter: this.contentFormatter
        },
        {
            dataField: 'ratings_and_reviews_recommendation',
            text: 'Ratings & Reviews Recommendation',

            formatter: this.ratingsFormatter
        },
            ,
        {
            dataField: 'inventory_recommendation',
            text: 'Inventory Recommendation',

            formatter: this.inventoryFormatter
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
                <div className='table-responsive recommendations-table'>
                    <select className="categoryDropDown mb-2" id="deflt" onChange = {(e)=>{ this.handleSelected(e) } } >
                        <option value="select" disabled>Select a Product Category </option>
                        <option value="all">All Categories</option>
                        {this.populateCat()}

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
                                        pagination={paginationFactory(options)}
                                        // filter={filterFactory()}
                                        defaultSorted={defaultSorted}
                                        noDataIndication={() => (<div>No Data available</div>)}
                                        remote={{ pagination: false, filter: true }}
                                    />
                                </div>
                            )
                        }
                    </ToolkitProvider>

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
}

export default Recommendations;
