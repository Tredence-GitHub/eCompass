import React, { Component } from 'react';
import { Button, DropdownButton,  Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import 'react-dropdown/style.css';
import {useState, useEffect} from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { FaFilter, FaRedo } from 'react-icons/fa';


export default function GlobalDropDown(props){
    
    const [state, setState] = useState()
    const [merchant,  setMerchant] = useState('')
    const [product, setProduct] = useState('')

    
    useEffect(() => {
        setMerchant(localStorage.getItem('global_vendor'))
    }, [])

     function handleDropdown(event){
       localStorage.setItem('global_vendor', event.target.value);
       setMerchant(event.target.value)
    }

     return (
           
         <Row>
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
                    <option value="default" selected disabled>{ merchant !== null ? 'Selected '+ merchant : 'Select a Merchant'} </option>
                    <option value="Walmart">Walmart </option>
                    <option value="Amazon">Amazon </option>
                    {/* <option value="merchant3">merchant3 </option> */}
                    {/* <option value="">merchant4  </option> */}
                </select>
                

                <Button type="submit" variant="outline-primary" size="sm" style={{
                    marginRight: "0px",
                    border: "none",
                    height:"30px",
                }} onClick={
                    (e) => {
                        e.preventDefault();
                        {localStorage.setItem('global_vendor', merchant);}
                        window.location.href = "/"+ props.view
                       
                    }
                }><FaFilter></FaFilter></Button>
               
                </Row>
                
        )

}

