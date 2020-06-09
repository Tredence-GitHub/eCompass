import React from 'react'
import { useState } from 'react';
import { FaLock, FaUnlock, FaSignInAlt } from 'react-icons/fa'
import { Form, Button } from 'react-bootstrap';
import studio from '../logo.png';


export default function Loginpage(props) {
    // const [username, setusername] = useState('')
    const [userflag, setuserflag] = useState(null)
    // const [password, setpassword] = useState('')
    const [passwordflag, setpasswordflag] = useState(null)

    localStorage.clear()

    function validateuser(e){
        if(e.target.value === 'tredence')
        {
            // setusername(e.target.value);
            setuserflag(false);
        }
        else{
            setuserflag(true)
        }
    }

    function validatepassword(e){
        if(e.target.value === 'tredence')
        {
            // setpassword(e.target.value);
            setpasswordflag(false);
        }
        else{
            setpasswordflag(true)
        }
    }

    function setlocal(e){
        if(passwordflag === false && userflag === false){
            // console.log("HERE")
            localStorage.setItem('loggedIn', true);
            localStorage.setItem('global_vendor', 'Walmart');
            window.history.pushState('', '', "/home");
        }
        else{
            localStorage.setItem('loggedIn', false)
        }
        
    }
    return (
        <div className="row col-6 col-md-8 ml-auto mr-auto" style={{
            marginTop: "200px",
            padding: "5px",
            boxShadow:"0px 0px 15px 1px gray"
           
        }}>
            <div className="col-md-8 bg" style={{
                // alignItems: "center",
                margin:"auto",
                padding: "50px"

            }}>
                { userflag === true || passwordflag === true ?
                 <FaLock style={{
                    color: "orange",
                    alignItems: "center",
                    margin:"auto",
                    width: "200px",
                    height: "200px"
                }}></FaLock> :
                <FaLock style={{
                    color: "grey",
                    alignItems: "center",
                    margin:"auto",
                    width: "200px",
                    height: "200px"
                }}></FaLock> }


                { passwordflag === false && userflag === false ? 
                <FaUnlock style={{
                    alignItems: "center",
                    color: "lightgreen",
                    marginLeft:"50px",
                    width: "200px",
                    height: "200px"
                }}></FaUnlock> :
                <FaUnlock style={{
                    alignItems: "center",
                    color: "grey",
                    marginLeft:"50px",
                    width: "200px",
                    height: "200px"
                }}></FaUnlock> }
            </div>

            <Form className="col-md-3 ml-2 mr-auto mb-4" style={{
                marginTop: "30px",
                color: "white"               
            }}>
                
                <div className="mb-2">
                    <img src={studio} style={{
                        width: "200px",
                    }}></img>
                </div>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" onKeyUp={validateuser} />
                    { userflag === true? <Form.Text className="text" style ={{
                        color: "red"
                    }}>
                       username is incorrect
        </Form.Text>: <></> }
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onKeyUp={validatepassword}/>
                    { passwordflag === true? <Form.Text className="text" style ={{
                        color: "red"
                    }}>
                       password is incorrect
                    </Form.Text>: <></>}
                </Form.Group>
                {/* <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit" onClick={setlocal}>
                    Login <FaSignInAlt></FaSignInAlt>
                </Button>
            </Form>
        </div>
    )
}
