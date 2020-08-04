import React, { Component } from 'react';
import { Button, DropdownButton,  Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Salesview from './salesview';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {useState, useEffect} from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { FaFilter, FaRedo } from 'react-icons/fa';


export default function LocalDropDown(props){
    
    const [state, setState] = useState({})
    const [productCategory,  setProductCategory] = useState('')
    const [product, setProduct] = useState('')
    const [loading, setloading] = useState(true)
    // const content1 = useSelector(state => state.regular.filter1)
    // const dispatch = useDispatch()
    // const store = useStore()
    
    useEffect(() => {
        setProductCategory(localStorage.getItem('localfilter1'))
        setProduct(localStorage.getItem('localfilter2'))
        setloading(false)
    }, [])

     function handleDropdown(event){
       setProductCategory(event.target.value)
       
    }

    function handleDropdown2(event){
        setProduct(event.target.value)
       
    }
    if(loading){
        return (
        <div>
            loading ...
        </div>
        )
    }
    else{
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
                    <option>{ productCategory !== null ? productCategory : 'Select a Product Category'} </option>
                    <option value="category1">category1</option>
                    <option value="category2">category2</option>
                    <option value="category3">category3</option>
                    <option value="category4">category4</option>
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
                    <option>{ product !== null ? product :  'Select a Product'}</option>
                    <option value="product1">product1</option>
                    <option value="product2">product2</option>
                    <option value="product3">product3</option>
                    <option value="product4">product4</option>
                </select>

                <Button type="submit" variant="outline-primary" size="sm" style={{
                    marginRight: "0px",
                    border: "none",
                }} onClick={
                    (e) => {
                        e.preventDefault();
                        // {props.onsubmitprop( [merchant, product] );}
                        {localStorage.setItem('localfilter1', productCategory);}
                        {localStorage.setItem('localfilter2', product);}
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
                         window.location.href = "/"+ props.passview;
                        // dispatch({type:'UPDATE_FILTERS', info: merchant, info2: product})
                    }
                }><FaRedo></FaRedo></Button>
                </Row>
                
        )
     }

}

