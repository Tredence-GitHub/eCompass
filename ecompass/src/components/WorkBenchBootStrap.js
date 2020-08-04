import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import paginationFactory from 'react-bootstrap-table2-paginator';
import React, {useEffect, useState} from "react";
import axios from 'axios';
import Popup from "reactjs-popup";
import './Landing.css';
import Select from 'react-select'
import {
    Container,
    SplitButton,
    DropdownButton,
    Spinner,
    Button,
    Dropdown,
    ToggleButtonGroup,
    ToggleButton,
    Row,
    Col,
    Tooltip,
    Tab,
    Tabs
} from 'react-bootstrap';
import {
    FaExclamation,
    FaDatabase,
    FaFilter,
    FaSave,
    FaUndo,
    FaPrint,
    FaChevronCircleUp,
    FaArrowUp,
    FaArrowDown
} from 'react-icons/fa';
import {CSVLink} from "react-csv";

export default function Workbench(props) {

    const [editType, setEditType] = useState(1);
    const handleChange = (val) => setEditType(val);
    const [selectedPC, setselectedPC] = useState('Product-Cat')
    const [Pcdropdown, setPcDropdown] = React.useState([]);
    const [WbTableLoad, setWbTableLoad] = React.useState([]);
    const [sku, setSku] = React.useState([]);
    const [pc, setPc] = React.useState([]);
    const [skuf, setSkuFilter] = React.useState();
    const [pcf, setPcFilter] = React.useState("abc");
    const [submitButton, setsubmitButton] = useState(false);
    const [recSku, setrecSku] = React.useState([]);
    const [SalesRcm, setSalesRcm] = React.useState([]);
    const [SalesChr, setSalesChr] = React.useState([]);
    const [SalesIr, setSalesIr] = React.useState([]);
    const [SalesRrr, setSalesRrr] = React.useState([]);
    const [defaultValues, setdefaultValues] = useState({})
    const [error, seterror] = useState(false)
    const [loading, setloading] = useState(true)
    const [selectedSkus, setSelectedSkus] = useState([]);
    const [selectedPcs, setSelectedPcs] = useState([]);
    const [recommendedPc, setRecommendedPc] = useState([]);
    const [recommendedSkuId, setRecommendedSkuId] = useState([]);
    const [dataToExport, setDataToExport] = useState([]);
    const [showCSVButton, setshowCSVButton] = useState(false);
    const [simulateData, setsimulateData] = useState({});
    const [columnsim, setcolumnsim] = useState([]);
    const [display, setdisplay] = useState({});
    const [changeable, setchangeable] = useState(false);

    let updateAuxillary = [];
    let Arr1 = [];
    let Arr2 = [];
    let Arr3 = [];
    let SalesChr1 = [];
    let SalesRrr1 = [];
    let SalesIr1 = [];
    let SalesRcm1 = [];
    let local = 'http://localhost:4000';
    let deploy = 'https://cpg-app.azurewebsites.net';
    let develop = 'https://ecompass-app-development.azurewebsites.net';

    // filter API addition
    const filterFCAPI = () => {
        axios
            .get(`${develop}/workbenchapi/workbench-productTypes`)
            .then(response => {
                    console.log(response.data);
                    /*for (const dataObj of response.data.data.seller_sku) {
                        Arr1.push(parseInt(dataObj.item_sku));
                    }*/
                    for (const dataObj of response.data.data.product_category) {
                        Arr2.push((dataObj.feed_product_type));
                    }
                    //setSku(Arr1);
                    setPc(Arr2);
                }
            )
            .catch(function (error) {
                console.log(error);
            });

    }

    const getSkuIdsForProductTypes = (value) => {
        if (value !== null) {
            axios
                .get(`${develop}/workbenchapi/workbench-skuIds`, {
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
                    setSku(Arr1);
                    // setPc(Arr2);
                }
            )
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    const wbAPI = () => {
        console.log("selectedSkus:::", selectedSkus)
        console.log("selectedPcs:::", selectedPcs)
        
        axios
            .post(`${deploy}/workbenchapi/workbench-data`, {
                item_sku: selectedSkus,
                product_category: selectedPcs,
                vendor: localStorage.getItem('global_vendor')
            })
            .then(response => {
                if (response !== undefined) {
                    if(Object.keys(response.data.simulations)[0] === ""){
                        setsimulateData({});
                    }else{
                        setsimulateData(response.data.simulations);
                    }
                    for (const dataObj of response.data.data) {
                        console.log('inner sku bdy', dataObj.item_sku);
                        Arr3.push(parseInt(dataObj.item_sku));
                    }
                    for (const dataObj of response.data.data) {
                        SalesRcm1.push(dataObj.demo_recommendations_final.sales_recommendation);
                        SalesChr1.push(dataObj.demo_recommendations_final.content_health_recommendation);
                        SalesIr1.push(dataObj.demo_recommendations_final.inventory_recommendation);
                        SalesRrr1.push(dataObj.demo_recommendations_final.ratings_and_reviews_recommendation);
                    }
                    setrecSku(Arr3);
                    setSalesRcm(SalesRcm1);
                    setSalesChr(SalesChr1);
                    setSalesIr(SalesIr1);
                    setSalesRrr(SalesRrr1);
                    setWbTableLoad(response.data.data);

                    // getAllSavedSimulations();
                    seterror(false);
                    setloading(false);
                }
            })
            .catch(function (error) {
                console.log(error);
                seterror(true);
                setloading(true);
            });
        
       
    }

    const setPublished = () => {
        axios.get(`${develop}/workbenchapi/setPublishedFlag`)
        .then((response)=> {
            // alert(response.data.message)
            setshowCSVButton(false);
        }).catch((err)=>{
            console.log(err);
        })
    }

    const publishRows = () => {
        axios.post(`${develop}/workbenchapi/workbench-publishdata`)
        .then((response)=>{
            if(response.data.data.length > 0){
                setDataToExport(response.data.data);
                setshowCSVButton(true);
                setsubmitButton(false);
            }else{
                setshowCSVButton(false);
                setsubmitButton(false);
            }
            console.log('PUBLIST DATA RESPONSE --- ', response.data.data);
        }).catch((err)=>{
            console.log('PUBLISH CALL ERR ', err);
            alert(err);
        })
        
    }

    const updateAPICall = (filteredArray) => {
        console.log("filteredArray:::", filteredArray)

        axios.post(`${deploy}/workbenchapi/workbench-updatedata`, filteredArray)
            .then((response) => {
                publishRows();
                console.log('UPDATE CALL RESPONSE -- ', response.data.message);
            }).catch((err) => {
            console.log('UPDATE CALL ERR ', err);
        })
    }
    useEffect(() => {
        filterFCAPI();
        publishRows();
        let current = window.location.pathname.split('/');
        if (current.length === 4) {
            setRecommendedPc([{"value": current[2], "label": current[2]}]);
            setSelectedPcs([current[2]])
        } else if (current.length > 4) {
            seterror(true);
        } else {
            wbAPI()
        }
    }, []);


    useEffect(() => {
        console.log('recommendedPc dsdadsda::', recommendedPc)
        
    
        const column_sim = [{
            dataField: 'column_nm',
            text: 'Variable',
            classes: "rowColor",
            editable: false,
            headerStyle: {
                width: '30px',
                backgroundColor: '#43505d',
                borderColor: '#f8f9fa60'
            }
        }, {
            dataField: 'Value',
            text: 'Original Value',
            classes: "rowColor",
            editable: true,
            type: 'number',                                        
            headerStyle: {
                width: '30px',
                backgroundColor: '#43505d',
                borderColor: '#f8f9fa60'
            }
            
        }, {
            dataField: 'Value2',
            text: 'Edited Value',
            classes: "rowColor",
            editable: true,
            type: 'number',                                        
            headerStyle: {
                width: '30px',
                backgroundColor: '#43505d',
                borderColor: '#f8f9fa60'
            }
            
        }]

        setcolumnsim(column_sim);

        let current = window.location.pathname.split('/');
        if (current.length === 4) {
            if (recommendedPc.length !== 0) {
                getSkuIdsForProductTypes(recommendedPc[0].value);
            }
            setRecommendedSkuId([{"value": current[3], "label": current[3]}]);
            Object.assign(selectedSkus, [current[3]])
            wbAPI()
        }
    }, [recommendedPc])

    let rowFormatter = (oldValue, newValue, row, column) => {
        row.update_flag = '1'
        updateAuxillary.push(row);
        console.log(oldValue, newValue, updateAuxillary)
    }

    let sendUpdatedRows = () => {
        let filteredArray = updateAuxillary.filter((item, index) => {
            return updateAuxillary.indexOf(item) == index;
        });
        if (filteredArray.length > 0) {
            setsubmitButton(true);
            
            // set the setDataToExport
            updateAPICall(filteredArray);
        } else {
            alert('You have not made any changes!')
        }
    }
    


    function ChrFormatter(cell, row, rowIndex, formatExtraData) {
        const customTotal = (from, to, size) => (
            <span className="react-bootstrap-table-pagination-total text-white ml-2">
                Showing {from} to {to} of {size} Results
            </span>
        );
        const options = {
            paginationSize: 4,
            pageStartIndex: 0,
            firstPageText: '<<',
            prePageText: '<<',
            nextPageText: '>',
            lastPageText: '<',
            showTotal: true,
            paginationTotalRenderer: customTotal,
            disablePageTitle: true,
            sizePerPageList: [{
                text: '4', value: 4
            }, {
                text: '8', value: 8
            }, {
                text: 'All', value: 16
            }] // A numeric array is also available. the purpose of above example is custom the text
        };
        return (
            <Popup className="bg workbench-popup"  trigger={
                
                <Button
                    className="recommendations-btn" value={cell} size="sm" 
                >{cell} </Button>} modal>
                <div>
                    <Tabs defaultActiveKey="home" variant="dark" transition={false}  id="popTablets">
                            <Tab eventKey="home" id="popTablets-home" title="Recommendations"> 
                                <div className="bg-dark p-2" id="deftblue">Actionable Recommendations Support for {cell}</div>
                                <table className="bg-dark">
                                <tbody>
                                    <tr>
                                        <td id="deftblue">Content Health Recommendation</td>
                                        <td>{SalesChr[rowIndex]}</td>
                                    </tr>
                                    <tr>
                                        <td id="deftblue">Sales Recommendation</td>
                                        <td>{SalesRcm[rowIndex]}</td>
                                    </tr>
                                    <tr>
                                        <td id="deftblue">Ratings and Reviews Recommendation</td>
                                        <td>{SalesRrr[rowIndex]}</td>
                                    </tr>
                                    <tr>
                                        <td id="deftblue">Inventory Recommendation</td>
                                        <td>{SalesIr[rowIndex]}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Tab>
                            <Tab eventKey="profile" id="popTablets-profile" title="Simulations">
                                <div>
                                <div className="bg-dark p-2" id="deftblue">Saved Simulation for {cell} <br>
                                </br>
                                Sales Target: {simulateData[cell].length > 0 ? <b>{simulateData[cell][0].sales_target}</b> : <b>$0</b> }
                                &nbsp; &nbsp; &nbsp;
                                Sales Forecast: {simulateData[cell].length > 0 ? <b>{simulateData[cell][0].sales_forecast}</b> : <b>$0</b> }
                                </div>
                                <BootstrapTable
                                    keyField = "row_id"
                                    classes="table-dark table-striped popupSimulateTable"
                                    data={simulateData[cell]}
                                    columns={columnsim}
                                    pagination={paginationFactory(options)}
                                    noDataIndication={() => (<div>No data available</div>)}
                                        >
                                </BootstrapTable>
                                </div>
                            </Tab>
                    </Tabs> 
                </div>
            </Popup>
        );
    }


    //Product Info table
    function CellFormatter(cell, row) {
        return (<a className="url-text" href={cell} target="_blank">{cell}</a>)
    }


    const columns = [
        {
            dataField: 'feed_product_type',
            text: 'Product Type',
            sort: true,
            editable: false,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60'
            }
        }, {
            dataField: 'item_sku',
            text: 'Seller Sku',
            editable: false,
            sort: true,
            //hover:true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60'
            },
            formatter: ChrFormatter,
            formatExtraData: SalesRcm,

        }, {
            dataField: 'brand_name',
            text: 'Brand',
            editable: false,
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60'
            }
        },
        {
            dataField: 'external_product_id',
            text: 'Product Id',
            editable: false,
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        },
        {
            dataField: 'external_product_id_type',
            text: 'Product Id Type',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        },
        {
            dataField: 'item_name',
            text: 'Item Name Title',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        },
        {
            dataField: 'manufacturer',
            text: 'Manufacture',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        },
        {
            dataField: 'maximum_retail_price',
            text: 'Manufacturer Part Number',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        },
        {
            dataField: 'recommended_browse_nodes',
            text: 'Recommended Browse Nodes',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        },
        {
            dataField: 'standard_price',
            text: 'Standard Price',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        },
        {
            dataField: 'quantity',
            text: 'Quantity',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        },
        {
            dataField: 'is_expiration_dated_product',
            text: 'Expiration Dated Product',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        },
        {
            dataField: 'main_image_url',
            text: 'Main Image URL',
            editable: true,
            sort: true,
            classes: "rowColor",
            formatter: CellFormatter,
            classes: 'url-text',
            headerStyle: {
                width: '200px',
                padding: '.75rem',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60'
            }
        },
    ];
    //Price Table
    const columnsPrc = [{
        dataField: 'feed_product_type',
        text: 'Product Type',
        sort: true,
        editable: false,
        classes: "rowColor",
        headerStyle: {
            width: '125px',
            backgroundColor: '#f8f9fa26',
            borderColor: '#f8f9fa60',

        }
    }, {
        dataField: 'item_sku',
        text: 'Seller Sku',
        editable: false,
        sort: true,
        classes: "rowColor",
        headerStyle: {
            width: '125px',
            backgroundColor: '#f8f9fa26',
            borderColor: '#f8f9fa60',

        },
        formatter: ChrFormatter,
        formatExtraData: SalesRcm,
    }, {
        dataField: 'brand_name',
        text: 'Brand',
        editable: false,
        sort: true,
        classes: "rowColor",
        headerStyle: {
            width: '125px',
            backgroundColor: '#f8f9fa26',
            borderColor: '#f8f9fa60',

        }
    },
        {
            dataField: 'external_product_id',
            text: 'Product Id',
            editable: false,
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        },
        {
            dataField: 'business_price',
            text: 'Business Price',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        }, {
            dataField: 'quantity_price_type',
            text: 'Quantity Price Type',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        }, {
            dataField: 'quantity_price1',
            text: 'Quantity Price 1',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        },
        {
            dataField: 'quantity_lower_bound1',
            text: 'Quantity Lower Bound1',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        },
        {
            dataField: 'quantity_price2',
            text: 'Quantity Price 2',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        },
        {
            dataField: 'quantity_lower_bound2',
            text: 'Quantity Lower Bound2',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        },
        {
            dataField: 'quantity_price3',
            text: 'Quantity Price 3',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        },
        {
            dataField: 'quantity_lower_bound3',
            text: 'Quantity Lower Bound3',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        },
        {
            dataField: 'quantity_price4',
            text: 'Quantity Price 4',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        },
        {
            dataField: 'quantity_lower_bound4',
            text: 'Quantity Lower Bound4',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        },
        {
            dataField: 'quantity_price5',
            text: 'Quantity Price 5',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        },
        {
            dataField: 'quantity_lower_bound5',
            text: 'Quantity Lower Bound5',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        },
        {
            dataField: 'pricing_action',
            text: 'Pricing Action',
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        },

    ];

    //Image Table
    const columnsImg = [
        {
            dataField: 'feed_product_type',
            text: 'Product Type',
            sort: true,
            editable: false,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        }, {
            dataField: 'item_sku',
            text: 'Seller Sku',
            editable: false,
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            },
            formatter: ChrFormatter,
            formatExtraData: SalesRcm,
        }, {
            dataField: 'brand_name',
            text: 'Brand',
            editable: false,
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',

            }
        },
        {
            dataField: 'external_product_id',
            text: 'Product Id',
            editable: false,
            sort: true,
            classes: "rowColor",
            headerStyle: {
                width: '125px',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden'

            }
        },
        {
            dataField: 'other_image_url1',
            text: 'Other Image URL1',
            sort: true,
            classes: "rowColor",
            formatter: CellFormatter,
            classes: 'url-text',
            headerStyle: {
                width: '200px',
                padding: '.75rem',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60'
                

            }
        }, {
            dataField: 'other_image_url2',
            text: 'Other Image URL2',
            sort: true,
            classes: "rowColor",
            formatter: CellFormatter,
            classes: 'url-text',
            headerStyle: {
                width: '200px',
                padding: '.75rem',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60'
            }
        }, {
            dataField: 'other_image_url3',
            text: 'Other Image URL3',
            sort: true,
            classes: "rowColor",
            formatter: CellFormatter,
            classes: 'url-text',
            headerStyle: {
                width: '200px',
                padding: '.75rem',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60'
            }
        },
        {
            dataField: 'other_image_url4',
            text: 'Other Image URL4',
            sort: true,
            classes: "rowColor",
            formatter: CellFormatter,
            classes: 'url-text',
            headerStyle: {
                width: '200px',
                padding: '.75rem',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60'
            }
        },
        {
            dataField: 'other_image_url5',
            text: 'Other Image URL5',
            sort: true,
            classes: "rowColor",
            formatter: CellFormatter,
            classes: 'url-text',
            headerStyle: {
                width: '200px',
                padding: '.75rem',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60'
            }
        },
        {
            dataField: 'other_image_url6',
            text: 'Other Image URL6',
            sort: true,
            classes: "rowColor",
            formatter: CellFormatter,
            classes: 'url-text',
            headerStyle: {
                width: '200px',
                padding: '.75rem',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60'
            }
        },
        {
            dataField: 'other_image_url7',
            text: 'Other Image URL7',
            sort: true,
            classes: "rowColor",
            formatter: CellFormatter,
            classes: 'url-text',
            headerStyle: {
                width: '200px',
                padding: '.75rem',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60'
            }
        },
        {
            dataField: 'other_image_url8',
            text: 'Other Image URL8',
            sort: true,
            classes: "rowColor",
            formatter: CellFormatter,
            classes: 'url-text',
            headerStyle: {
                width: '200px',
                padding: '.75rem',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60'
            }
        },
        {
            dataField: 'swatch_image_url',
            text: 'Swatch Image Url',
            sort: true,
            classes: "rowColor",
            formatter: CellFormatter,
            classes: 'url-text',
            headerStyle: {
                width: '200px',
                padding: '.75rem',
                backgroundColor: '#f8f9fa26',
                borderColor: '#f8f9fa60'
            }
        },
    ]
    if (error === false && !loading) {
        const customTotal = (from, to, size) => (
            <span className="react-bootstrap-table-pagination-total text-white ml-2">
                Showing {from} to {to} of {size} Results
            </span>
        );

        const options = {
            paginationSize: 4,
            pageStartIndex: 0,
            // alwaysShowAllBtns: true, // Always show next and previous button
            // withFirstAndLast: false, // Hide the going to First and Last page button
            // hideSizePerPage: true, // Hide the sizePerPage dropdown always
            // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
            firstPageText: 'First',
            prePageText: 'Back',
            nextPageText: '>',
            lastPageText: '<',
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
                text: 'All', value: WbTableLoad.length
            }] // A numeric array is also available. the purpose of above example is custom the text
        };

        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={3} style={{paddingLeft: '0px'}}>
                            <Select
                                placeholder="Select Product Category(s)"
                                defaultValue={recommendedPc[0]}
                                isMulti
                                name="colors"
                                options={pc.map((record, index) => {
                                    return {"value": record, "label": record}
                                })}
                                className="basic-multi-select"
                                onChange={e => {
                                    setSelectedPcs(e !== null ? e.map(data => data.value) : [])
                                    if(e != null){
                                        getSkuIdsForProductTypes(e.map(data => data.value));
                                    } 
                                }}
                            />
                        </Col>
                        <Col xs={4} style={{paddingLeft: '0px'}}>
                            <Select
                                defaultValue={recommendedSkuId[0]}
                                placeholder="Select SKU ID(s)"
                                isMulti
                                name="colors"
                                options={sku.map((record, index) => {
                                    return {"value": record, "label": record}
                                })}
                                className="basic-multi-select"
                                classNamePrefix="Select SKU ID"
                                onChange={event => {
                                    setSelectedSkus(event !== null ? event.map(data => data.value) : [])
                                }}
                            />
                        </Col>
                        <Button variant="outline-primary" size="sm" style={{
                            border: "none"
                        }} onClick={(e) => {
                            e.preventDefault();
                            setWbTableLoad([]);
                            wbAPI();
                        }}><FaFilter/></Button>
                    

                        <Col xs={1} className="mt-4"></Col>
                        <>
                            <ToggleButtonGroup value={editType} onChange={handleChange} name={'editType'}>
                                <ToggleButton className="workbench-tabs" variant="outline-primary" value={1}>Product
                                    Info</ToggleButton>{'  '}
                                <ToggleButton className="workbench-tabs" variant="outline-primary" value={2}>Image
                                    URL</ToggleButton>{'  '}
                                <ToggleButton className="workbench-tabs" variant="outline-primary" value={3}>Product
                                    Price</ToggleButton>{'  '}
                            </ToggleButtonGroup>
                        </>
                    </Row>
                    <br/>
                    <Row>
                        <div style={{
                            display: editType === 1 ? 'block' : 'none',
                            overflow: 'auto',
                            tableLayout: 'auto'
                        }}>

                            <BootstrapTable
                                classes="table-dark table-bordered table-hover table-striped thead-light"
                                keyField="item_sku"
                                data={WbTableLoad}
                                columns={columns}
                                noDataIndication={() => (<div>No data available</div>)}
                                pagination={paginationFactory(options)}
                                cellEdit={
                                    cellEditFactory({
                                        mode: 'click',
                                        blurToSave: true,
                                        nonEditableRows: () => [0, 3],
                                        afterSaveCell: rowFormatter
                                    })
                                }/>
                        </div>


                        <div style={{
                            display: editType === 2 ? 'block' : 'none',
                            overflow: 'auto',
                            tableLayout: 'auto'
                        }}>
                            <BootstrapTable classes="table-dark table-bordered table-hover table-striped thead-light"
                                            keyField="item_sku"
                                            data={WbTableLoad} //{productsImg}
                                            columns={columnsImg}
                                            noDataIndication={() => (<div>No data available</div>)}
                                            pagination={paginationFactory(options)}
                                            cellEdit={cellEditFactory({
                                                mode: 'click',
                                                blurToSave: true,
                                                nonEditableRows: () => [0, 3],
                                                afterSaveCell: rowFormatter
                                            })}/>
                        </div>
                        <div style={{
                            display: editType === 3 ? 'block' : 'none',
                            overflow: 'auto',
                            tableLayout: 'auto'
                        }}>
                            <BootstrapTable
                                classes="table-dark table-bordered table-hover table-striped thead-light"
                                keyField="item_sku"
                                data={WbTableLoad}//{productsPrc}
                                columns={columnsPrc}
                                noDataIndication={() => (<div>No data available</div>)}
                                pagination={paginationFactory(options)}
                                cellEdit={
                                    cellEditFactory({
                                        mode: 'click',
                                        blurToSave: true,
                                        nonEditableRows: () => [0, 3],
                                        afterSaveCell: rowFormatter
                                    })
                                }/>
                        </div>
                    </Row>
                    <br/>

                    <div style={{float: 'right'}}>
                        { showCSVButton === true?  <CSVLink
                            variant="outline-primary"
                            data={dataToExport}
                            filename={"my-file.csv"}
                            className="btn btn-primary"
                            target="_blank"
                            onClick={(e) => {
                               // e.preventDefault();
                                setPublished();
                            }}
                        >
                            Publish Changes <FaArrowUp size="9pt"> </FaArrowUp>
                        </CSVLink> : <> </>
                        }   

                        <Button variant="outline-info" className="ml-2" onClick={(e) => {
                            e.preventDefault();
                            sendUpdatedRows();
                        }} disabled={submitButton}>
                            Save Changes <FaSave size="9pt"></FaSave> </Button> 
                        

                        <Button variant="outline-secondary" className="ml-2 mr-0" onClick={(e) => {
                            wbAPI();
                        }}>Reset Changes <FaUndo size="9pt"></FaUndo> </Button>
                    </div>
                </Container>
            </div>
        )
    } else if (error === false && loading === true) {
        return (
            <div className="mr-auto ml-auto d-flex justify-content-center">
                <Spinner className="spinner-grow spinner-grow-sm text-primary" role="status"></Spinner>
                <Spinner className="spinner-grow spinner-grow-sm text-success" role="status"></Spinner>
                <Spinner className="spinner-grow spinner-grow-sm text-warning" role="status"></Spinner>
            </div>
        )
    } else {
        return (
            <div className="mr-auto ml-5 mt-auto justify-content-center align-items-center">
                <FaExclamation style={{
                    fontSize: '50px',
                    color: 'aqua',
                }}></FaExclamation> <h4 className="text-muted"> Oops! Something is not right... ! &nbsp;  </h4>

                {/* <h6 className="text-muted">Please check your internet connection... <FaWifi></FaWifi></h6> */}

            </div>
        )
    }
}
