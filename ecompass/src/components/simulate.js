import React, {Component, useEffect, useState } from 'react';
import { Spinner, Tabs, Tab, Button, Table } from 'react-bootstrap';
import { 
    FaExclamation, 
    FaWifi, 
    FaPlus, 
    FaFilter,
    FaSave,
    FaUndo,
    FaPenNib,
    FaCalculator,
    } from 'react-icons/fa';
import cellEditFactory from 'react-bootstrap-table2-editor';
import Select from 'react-select';
import axios from 'axios';
import BootstrapTable, {TableHeaderColumn} from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import './Landing.css';


class Simulate extends Component {

    state = {
        isLoading: true,
        tabledata: [],
        mockdata: [],

        logs: [],
        unique_logs: [],
        hideCalculator: true,
        otherVariables: [],
        productCategories : [],
        selectedPc: ['Product-Category'],
        recommendedPc: [],
        recommendedSku: [],
        skus: [0],
        allData: [],
        salesForecast: 0,
        salesTarget: 0,
        increment: 0,

        url: {
            local: 'http://localhost:4000',
            deploy: 'https://cpg-app.azurewebsites.net',
            develop: 'https://ecompass-app-development.azurewebsites.net'
        } 
    }

    getSkuIdsForProductTypes(value) {
        if (value !== null) {
            let Arr1 = []
            axios
                .get(`${this.state.url.deploy}/workbenchapi/workbench-skuIds`, {
                    params: {
                        prodTypes: value
                    }
                }).then(response => {
                    console.log(response.data);
                    for (const dataObj of response.data.data.seller_sku) {
                        Arr1.push(parseInt(dataObj.item_sku));
                    }
                    /* for (const dataObj of response.data.data.product_category) {
                         Arr2.push((dataObj.feed_product_type));
                     }*/
                    this.setState({skus: Arr1})
                    // setPc(Arr2);
                }
            )
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    filterFCAPI() {
        let PCArray = [];

        axios
        .get(`${this.state.url.deploy}/workbenchapi/workbench-productTypes`)
        .then(response => {
                console.log(response.data);
                
                for (const dataObj of response.data.data.product_category) {
                    PCArray.push((dataObj.feed_product_type));
                }
                this.setState({productCategories: PCArray});
                
            }
        )
        .catch(function (error) {
            console.log(error);
        });
    }

    simulationAPICall(selectedPc, selectedSku) {
        // console.log(this.state.selectedPc, this.state.skus);
        axios.post(`${this.state.url.deploy}/simulator/getSimulations`, {
            product_category: selectedPc,
            sku_id: selectedSku,
            vendor: localStorage.getItem('global_vendor')
        }).then((response) => {
            console.log("Response data SIMULATEcinAPI CALL ", response.data.data);
            let len = response.data.data.length;
            let firstSet = [];
            let secondSet = [];
            response.data.data.map((item,index) =>{
                if(item.rank === "1"){
                    firstSet.push(item)
                }else{
                    secondSet.push(item);
                }
            })

            let forecast = response.data.data[0].sales_forecast;
            let forecastValue = Math.abs(forecast) > 999 ? Math.sign(forecast)*((Math.abs(forecast)/1000).toFixed(1)) + 'K' : Math.sign(forecast)*Math.abs(forecast)
            
            let sales = response.data.data[0].sales_target;
            let salesValue = Math.abs(sales) > 999 ? Math.sign(sales)*((Math.abs(sales)/1000).toFixed(1)) + 'K' : Math.sign(sales)*Math.abs(sales)

            this.setState({allData: response.data.data});
            this.setState({tabledata: firstSet});
            this.setState({salesForecast: forecastValue})
            this.setState({salesTarget: salesValue})
            this.setState({hideCalculator: false});
            this.setState({otherVariables: secondSet});
           

        }).catch((err)=>{
            console.log(err);
        })
    }

    simulationAPI() {
        axios.post(`${this.state.url.deploy}/simulator/getSimulations`, {
            product_category: this.state.selectedPc,
            sku_id: this.state.skus,
            vendor: localStorage.getItem('global_vendor')
        }).then((response) => {
            // console.log("Response data SIMULATE ", response.data.data);
            let len = response.data.data.length;
            if(len > 0) {
                let firstSet = [];
                let secondSet = [];
                response.data.data.map((item,index) =>{
                    if(item.rank === "1"){
                        firstSet.push(item)
                    }else{
                        secondSet.push(item);
                    }
                })
                let forecast = response.data.data[0].sales_forecast;
                let forecastValue = Math.abs(forecast) > 999 ? Math.sign(forecast)*((Math.abs(forecast)/1000).toFixed(1)) + 'K' : Math.sign(forecast)*Math.abs(forecast)
                
                let sales = response.data.data[0].sales_target;
                let salesValue = Math.abs(sales) > 999 ? Math.sign(sales)*((Math.abs(sales)/1000).toFixed(1)) + 'K' : Math.sign(sales)*Math.abs(sales)
                
                this.setState({allData: response.data.data});
                this.setState({tabledata: firstSet});
                this.setState({salesForecast: forecastValue})
                this.setState({salesTarget: salesValue})
                this.setState({otherVariables: secondSet});
                this.setState({hideCalculator: false});
                this.savedSimulationsAPI(this.state.selectedPc, this.state.skus );
            }
            else{
                this.savedSimulationsAPI(this.state.selectedPc, this.state.skus );
            }
           
        }).catch((err)=>{
            console.log(err);
        })
    }

    savedSimulationsAPI(selectedPc, selectedSku){
        axios.post(`${this.state.url.deploy}/simulator/getSavedSimulations`,{
            vendor: localStorage.getItem('global_vendor'),
            sku_id: selectedSku,
            product_category: selectedPc
        })
        .then((response)=>{
            // console.log("fetching the saved simulations::  ",response.data.data);
            console.log(response.data.unique_logs)
            this.setState({unique_logs: response.data.unique_logs});
            this.setState({logs: response.data.data});
            this.setState({isLoading: false});
        }).catch((err)=>{
            console.log(err, "--- in fetching the saved simulations")
        })
    }

    saveSimulation(selectedPc, selectedSku, tabledata){
        axios.post(`${this.state.url.deploy}/simulator/saveSimulation`,{
            sku_id: selectedSku,
            product_category: selectedPc,
            saveData: tabledata

        }).then((response)=>{
            console.log(response.data.message);
            alert('Successfully saved your simulations!');
            this.savedSimulationsAPI(selectedPc, selectedSku);
        }).catch((err)=>{
            console.log(err);
        })
    }

    componentDidMount() {
        // this.setState({tabledata: this.state.data})
        // this.setState({mockdata: this.state.data})

        this.filterFCAPI();
        let current = window.location.pathname.split('/');
        if (current.length === 4) {
            this.setState({recommendedPc: [{"value": current[2], "label": current[2]}]});
            Object.assign(this.state.selectedPc, [current[2]]);
            this.afterMount();
        }
        this.simulationAPI();
        // this.savedSimulationsAPI();
    }
    
    afterMount() {
        let current = window.location.pathname.split('/');
        if (current.length === 4) {
            if (this.state.recommendedPc.length !== 0) {
                this.getSkuIdsForProductTypes(this.state.recommendedPc[0].value);
            }
            this.setState({recommendedSku: [{"value": current[3], "label": current[3]}]});
            Object.assign(this.state.skus, [current[3]])
    }

}

    onInsertRow() {
        console.log('ROW -- ', this.state.SelectedVariables);

        this.state.otherVariables.map((item, index)=>{
            console.log(item, item['column_nm'], this.state.SelectedVariables);
            if(this.state.SelectedVariables.includes(item['column_nm'])){
                
                if(this.state.tabledata.indexOf(item) < 0){
                    this.state.tabledata.push(item);
                }
            }
            // this.setState({otherVariables: this.state.otherVariables.slice(this.state.otherVariables.indexOf(item))});
            console.log(this.state.otherVariables)
        });
        this.setState({tabledata: this.state.tabledata});
      } 
    
    

    priorityFormatter(cell, row, rowIndex, formatExtraData){  
        if(cell === "1"){
            return(
                <div style={{
                    background: 'limegreen',
                    width: '15px',
                    height: '15px',
                    borderRadius: '50%'
                }}></div>
            )   
        }
        else if(cell === "2"){
            return(
                <div style={{
                    background: 'orange',
                    width: '15px',
                    height: '15px',
                    borderRadius: '50%'
                }}></div>
            )   
        }
        else{
            return(
                <div style={{
                    background: 'palegoldenrod',
                    width: '15px',
                    height: '15px',
                    borderRadius: '50%'
                }}></div>
            )   
        }
        
    }
 
    calculateForecast(){
        let overallSum = 0;
        console.log(this.state.increment, "--- in calc forec");
        let auxillaryData = [];

        this.state.allData.map((item, index)=>{
            this.state.tabledata.map((item1,  index1)=>{
                if(item1.row_id === item.row_id){
                    if(auxillaryData.indexOf(item1) < 0){

                        auxillaryData.push(item1)
                    }
                }else{
                    if(auxillaryData.indexOf(item) < 0){

                        auxillaryData.push(item)
                    }
                }
            })
        })
        // console.log(auxillaryData, 'AUUUUXXUXUUXXU ')
        auxillaryData.map((item, index)=>{
            let z = ((item.Value2 - item.mean)/item.std)*item.Coefficient;
            overallSum = overallSum + z;
        });
        let mean_sales = this.state.tabledata[0].mean_sales;
        let std_sales = this.state.tabledata[0].std_sales;
        let intercept =  this.state.tabledata[0].intercept;
        let forecast = (((overallSum + intercept)*std_sales) + mean_sales).toFixed(2);
        
        let increment = (forecast - this.state.tabledata[0].sales_forecast).toFixed(2);
        let incrementVal = Math.abs(increment) > 999 ? Math.sign(increment)*((Math.abs(increment)/1000).toFixed(1)) + 'K' : Math.sign(increment)*Math.abs(increment)

        let salesTargetVal = document.getElementById('salesTarget').innerHTML;
        let forecastVal = Math.abs(forecast) > 999 ? Math.sign(forecast)*((Math.abs(forecast)/1000).toFixed(1)) + 'K' : Math.sign(forecast)*Math.abs(forecast)
       
        this.setState({salesTarget: salesTargetVal.substring(1,)});
        this.setState({salesForecast: forecastVal});
        this.setState({increment: incrementVal});
        auxillaryData = [];
        console.log(this.state.tabledata);
    }

    
    render() {

        const unique_logs = this.state.unique_logs;

        const logs = this.state.logs;

        const logColumns = [{
            dataField: 'sku_id',
            text: 'Saved Simulations',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '150px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60'
            }
        },{
            dataField: 'product_category',
            text: 'Product Category',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '150px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60'
            }
        },{
            dataField: 'sales_forecast',
            text: 'Sales Forecast',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '150px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60'
            }
        },{
            dataField: 'sales_target',
            text: 'Sales Target',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '150px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60'
            }
        }      
        ]

        const logInnerColumns = [{
            dataField: 'sku_id',
            text: 'SKU ID',
            sort: true,
            classes: "rowColorLog",
            headerStyle: {
                width: '50px',
                backgroundColor: '#83bbf326',
                borderColor: '#f8f9fa60'
            }
        },{
            dataField: 'product_category',
            text: 'Product Category',
            sort: true,
            classes: "rowColorLog",
            headerStyle: {
                width: '150px',
                backgroundColor: '#83bbf326',
                borderColor: '#f8f9fa60'
            }
        },
            {
                dataField: 'column_nm',
                text: 'Variable',
                sort: true,
                classes: "rowColorLog",
                headerStyle: {
                    width: '150px',
                    backgroundColor: '#83bbf326',
                    borderColor: '#f8f9fa60'
                }
        },
        {
            dataField: 'Value',
            text: 'Original Value',
            sort: true,
            classes: "rowColorLog",
            headerStyle: {
                width: '150px',
                backgroundColor: '#83bbf326',
                borderColor: '#f8f9fa60'
            }
    },
    {
        dataField: 'Value2',
        text: 'Edited Value',
        sort: true,
        classes: "rowColorLog",
        headerStyle: {
            width: '150px',
            backgroundColor: '#83bbf326',
            borderColor: '#f8f9fa60'
        }
}
        
        ]

        let count = 0;
        
        const tabledata = this.state.tabledata;
        const otherVariables = this.state.otherVariables;
        var salesForecast = this.state.salesForecast;

        function rowFormatter(oldValue, newValue, row, column){
            if(newValue < 0 || Number.isNaN(newValue)){
                newValue = oldValue;
                row.Value2 = oldValue;
                alert('Oops! Please enter a positive number!');
            }
        }
        
        const columns = [{
            dataField: 'rank',
            text: 'Priority',
            sort: true,
            classes: "rowColor",
            editable: false,
            formatter: this.priorityFormatter,
            headerStyle: {
                width: '5px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60'
            }
        }, {
            dataField: 'column_nm',
            text: 'Variable',
            classes: "rowColor",
            editable: false,
            headerStyle: {
                width: '30px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60'
            }
        }, {
            dataField: 'Value',
            text: 'Original Value',
            classes: "rowColor",
            editable: false,
            headerStyle: {
                width: '30px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60'
            }
            
        },{
            dataField: 'Value2',
            text: 'Edit Value',
            classes: "rowColor",
            editable: true,
            type: 'number',                                        
            headerStyle: {
                width: '30px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60'
            }
            
        }]
        
        
        
        
        if(this.state.isLoading === false){
            const expandRow = {
                renderer: row => {
                    const frameLogs = [];
                    for(let i of logs){
                        console.log(i, '--- ', row)
                        count++;
                        if(i.SKU_ID === row.SKU_ID && i.product_category === row.product_category ){
                            
                            if(frameLogs.indexOf(i) < 0){
                                frameLogs.push(i);
                            }
                        }
                        if(count === logs.length){
                            count = 0;
                            return(<BootstrapTable 
                                keyField='id'
                                data={frameLogs}
                                columns={logInnerColumns}
                                classes = "table-dark"
                                pagination={paginationFactory(options)}
                                noDataIndication={() => (<div>No data available</div>)}
                                /> )
                            
                        }
                   }
              }
            }
              
            const customTotal = (from, to, size) => (
                <span className="react-bootstrap-table-pagination-total text-white ml-2">
                    Showing {from} to {to} of {size} Results
                </span>
            );

            const options = {
                paginationSize: 1,
                pageStartIndex: 0,
                // alwaysShowAllBtns: true, // Always show next and previous button
                // withFirstAndLast: false, // Hide the going to First and Last page button
                // hideSizePerPage: true, // Hide the sizePerPage dropdown always
                // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
                firstPageText: '<<',
                prePageText: '<',
                nextPageText: '>',
                lastPageText: '>>',
                nextPageTitle: 'First page',
                prePageTitle: 'Pre page',
                firstPageTitle: 'Next page',
                lastPageTitle: 'Last page',
                showTotal: true,
                paginationTotalRenderer: customTotal,
                disablePageTitle: true,
                sizePerPageList: [{
                    text: '6', value: 6
                }, {
                    text: '10', value: 10
                }, {
                    text: 'All', value: tabledata.length
                }] // A numeric array is also available. the purpose of above example is custom the text
            };

            return (
                <div className="" style={{
                    // border: "1px solid yellow"
                }}>
                <div className="row main-simulator" style={{
                    // border: "1px solid yellow"
                }}>
                    <div>
                        <Select
                            placeholder="Select Product Category"
                            defaultValue={this.state.recommendedPc[0]}
                            name="colors"
                            id="simulatorDropDown"
                            options={this.state.productCategories.map((record, index) => {
                                return {"value": record, "label": record}
                            })}
                            className="basic-multi-select"
                            onChange={event => {
                                console.log(event);
                                this.setState({selectedPc: (event !== null ? [event.value] : [])})
                                if(event != null){
                                    this.getSkuIdsForProductTypes(event.value);
                                }
                            }}
                            /> 
                    </div>

                    <div>
                    
                    <Select
                            placeholder="Select SKU"
                            defaultValue={this.state.recommendedSku[0]}
                            name="colors"
                            id="simulatorDropDown"
                            options={this.state.skus.map((record, index) => {
                                return {"value": record, "label": record}
                            })}
                            className="basic-multi-select ml-2"
                            onChange={event => {
                                this.setState({skus: (event !== null ? [event.value] : [])})
                                console.log(this.state.skus);
                            }}
                            /> 
                                                    
                    </div>
                    <div className="ml-3 mt-2">
                        <FaFilter color="steelblue" onClick={(e) =>{
                            e.preventDefault();
                            this.simulationAPICall(this.state.selectedPc, this.state.skus);
                            this.savedSimulationsAPI(this.state.selectedPc, this.state.skus);
                        }
                            
                        }>
                            
                        </FaFilter>
                    </div>
                </div>
                <div className="row main-simulator" style={{
                    // border: "1px solid yellow"
                }}>
                    
                    
                    <div className="row keyMetrics" style={{
                    // border: "1px solid yellow"
                }}>
                        <div className="simulator-1">
                        <center>
                        <small>{this.state.selectedPc}</small> <br>
                        </br>
                        <h1>{this.state.skus[0]}</h1>
                        </center>
                        </div>
                        <div className="simulator-4">
                        <center>
                        <small>Sales Target</small> <br>
                        </br>
                        <h1 contentEditable="true" id="salesTarget">${this.state.salesTarget}</h1>
                        </center>
                        </div>
                        <div className="simulator-2">
                        <center>
                        <small>Sales Forecast</small> <br>
                        </br>
                        <h1 id="salesForecast">${salesForecast}</h1>
                        </center>
                        </div>
                        <div className="simulator-3">
                        <center>
                        <small>Sales Increment</small> <br>
                        </br>
                        <h1 id="increment">${this.state.increment}</h1>
                        </center> 
                        </div>

                    </div>

                    <div>
                        <div className="row simulatorDropDownDiv" style={{
                    // border: "1px solid yellow",
                
                }}>
                                <Select
                                    placeholder="Add Variable"
                                    defaultValue={''}
                                    isMulti
                                    id="simulatorDropDown"
                                    name="colors"
                                    options={otherVariables.map((record, index) => {
                                        return {"value": record.column_nm, "label": record.column_nm}
                                    })}
                                    className="basic-multi-select"
                                    onChange={event => {
                                        this.setState({SelectedVariables: (event !== null ? event.map(data => data.value) : [])})
                                    }}
                                    /> 
                                    <FaPlus color="steelblue" size="15pt" className="addCell" onClick = {(e) => {
                                    this.onInsertRow()    
                                    }}> </FaPlus>
                                    <FaCalculator color="steelblue" size="15pt" className="addCell" style={{
                                        marginRight: '0px',
                                        paddingRight: '0px',
                                        marginLeft: '70%'
                                    }} onClick = {(e) => {
                                    this.calculateForecast()    
                                    }} hidden={this.state.hideCalculator} > </FaCalculator>
                        </div>
                        <Tabs defaultActiveKey="home" variant="dark" transition={false}  id="simulatorTablets">
                            <Tab eventKey="home" id="simulatorTablets-home" title="Simulate">
                                <ToolkitProvider
                                    keyField = "row_id"
                                    columns = {columns}
                                    data = {tabledata}
                                    >
                                        {
                                            props => (
                                                    
                                            <div>
                                                
                                                <BootstrapTable
                                                    
                                                    classes="table-dark table-bordered table-hover table-striped thead-light"
                                                    {...props.baseProps}
                                                    cellEdit={
                                                        cellEditFactory({
                                                            mode: 'click',
                                                            blurToSave: true,
                                                            nonEditableRows: () => [0],
                                                            afterSaveCell: rowFormatter
                                                        })
                                                    }
                                                    condensed={true}
                                                    pagination={paginationFactory(options)}
                                                    noDataIndication={() => (<div>No data available</div>)}
                                                    remote={{pagination: false, filter: true}}
                                                />
                                                <div style={{float: 'right'}}>

                                                <Button variant="outline-info" size="sm" className="ml-2" onClick={(e)=>{
                                                    e.preventDefault();
                                                    this.state.tabledata.map((item, index)=>{
                                                        item['sales_forecast'] = '$'+this.state.salesForecast;
                                                        item['sales_target'] = '$'+this.state.salesTarget;
                                                    });
                                                    this.setState({increment: 0});
                                                    {this.state.tabledata.length === 0? alert('You have not simulated any data!') : 
                                                    this.saveSimulation(this.state.selectedPc, this.state.skus, this.state.tabledata)
                                                    this.simulationAPICall(this.state.selectedPc, this.state.skus)
                                                    }
                                                    // this.simulationAPICall(this.state.selectedPc, this.state.skus)
                                                }
                                                } >
                                                    Save Simulation <FaSave size="9pt"></FaSave> </Button> 

                                                <Button variant="outline-secondary" size="sm" className="ml-2 mr-2" onClick={(e) => {
                                                     e.preventDefault();
                                                     this.setState({increment: 0});
                                                     this.simulationAPICall(this.state.selectedPc, this.state.skus)
                                                }}>Reset Changes <FaUndo size="9pt"></FaUndo> </Button>

                                                <Button variant="outline-secondary" size="sm">
                                                    <FaPenNib size="10pt" onClick={(e) =>{
                                                        e.preventDefault();
                                                        window.location.href = "/Workbench/" + this.state.selectedPc + "/" + this.state.skus
                                                    }
                                                    }>
                                                    
                                                    </FaPenNib>
                                                </Button>
                                                </div>
                                                
                                            
                                        </div>
                                    )
                                }
                            </ToolkitProvider>
                    
                            </Tab>
                            <Tab eventKey="profile" id="simulatorTablets-profile" title="Saved Simulations">
                                <BootstrapTable
                                keyField="sku_id"
                                columns={logColumns}
                                    data={unique_logs}
                                    expandRow={ expandRow }
                                    pagination={paginationFactory(options)}
                                    classes="table-dark table-bordered table-hover table-striped thead-light"
                                    condensed={true}
                                    noDataIndication={() => (<div>No data available</div>)}
                                    remote={{pagination: false, filter: true}}
                                        >
                                    
                                    </BootstrapTable>
                            </Tab>
                        </Tabs>
                    </div>
                    
                </div>
                </div>
            )
       }else{
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

export default Simulate;


// APIs needed
// Once filter is applied - use the SKU ID and Product category - fetch the SKUs and its variables based on:
// Priority & non priority two sets of states

// send updated rows to API -  to insert into the DB
// API to fetch unique SKU IDs from the Saved simulations - copy table
//  API to fetch saved simulations
