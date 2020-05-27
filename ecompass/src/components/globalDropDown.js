import React, { Component } from 'react';
import { Button, DropdownButton,  Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Salesview from './salesview';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {useState, useEffect} from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { FaFilter, FaRedo } from 'react-icons/fa';


export default function GlobalDropDown(props){
    
    const [state, setState] = useState()
    const [merchant,  setMerchant] = useState('')
    const [product, setProduct] = useState('')

    // const content1 = useSelector(state => state.regular.filter1)
    // const dispatch = useDispatch()
    // const store = useStore()
    
    useEffect(() => {
        setMerchant(localStorage.getItem('filter1'))
        setProduct(localStorage.getItem('filter2'))
    }, [])

     function handleDropdown(event){
       setMerchant(event.target.value)
       
    }

    function handleDropdown2(event){
        setProduct(event.target.value)
       
    }
     return (
           
         <Row>
         {/* <label>{content1}  {console.log('gob pg ----  ', store.getState())}  </label> */}
                <select onChange={handleDropdown} style={{
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
                    <option>{ merchant !== null ? merchant : 'Select a Merchant'} </option>
                    <option value="merchant1" >merchant1 </option>
                    <option value="merchant2">merchant2 </option>
                    <option value="merchant3">merchant3 </option>
                    <option value="merchant4">merchant4  </option>
                </select>
                

                <select onChange={handleDropdown2} style={{
                    padding:"3px",
                    height:"30px",
                    width: "200px",
                    border: "none",
                    color: "silver",
                    backgroundColor:"#162447",
                    boxShadow: "0px 1px 7px 0.25px navy",
                    marginRight: "5px"
                }}>
                    <option>{ product !== null ? product :  'Select a Product Category'}</option>
                    <option value="category1">category1</option>
                    <option value="category2">category2</option>
                    <option value="category3">category3</option>
                    <option value="category4">category4</option>
                </select>

                <Button type="submit" variant="outline-primary" size="sm" style={{
                    marginRight: "0px",
                    border: "none",
                    height:"30px",
                }} onClick={
                    (e) => {
                        e.preventDefault();
                        // {props.onsubmitprop( [merchant, product] );}
                        {localStorage.setItem('filter1', merchant);}
                        {localStorage.setItem('filter2', product);}
                        // dispatch({type:'UPDATE_FILTERS', info: merchant, info2: product})
                    }
                }><FaFilter></FaFilter></Button>
                <Button type="submit" variant="outline-primary" size="sm" style={{
                    border: "none",
                }} onClick={
                    (e) => {
                        e.preventDefault();
                        // {props.onsubmitprop( [merchant, product] );}
                        {localStorage.setItem('filter1', 'default merchant');}
                        {localStorage.setItem('filter2', 'default product');}
                         window.location.href = "/home"
                        // dispatch({type:'UPDATE_FILTERS', info: merchant, info2: product})
                    }
                }><FaRedo></FaRedo></Button>
                </Row>
                
        )

}

// const mapStateToProps = (state) => {
//     return {
//         content1: state.content1,
//         content2: state.content2
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {

//         onclicksubmit: () => dispatch({
//             type: 'UPDATE_FILTERS',
//             info: 'newinfo',
//             info2: 'newcategory'
//         },
//         {
//             type: 'Edit'
//         })
//     }
// }

