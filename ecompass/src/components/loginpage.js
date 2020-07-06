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
            localStorage.setItem('global_vendor', 'Amazon');
            window.history.pushState('', '', "/home");
        }
        else{
            localStorage.setItem('loggedIn', false)
        }
        
    }
    return (
        <div className="row" style={{
            maxWidth: '800px',
            marginTop: "200px",
            width: '750px',
            marginRight: 'auto',
            marginLeft: 'auto',
            padding: "5px",
            boxShadow:"0px 0px 15px 1px gray"
           
        }}>
            <div className="col-md-8 bg" style={{
                // alignItems: "center",
                padding: "2px",
                marginTop: '60px',
                paddingLeft: '30px',
                paddingRight: '0px',
                marginRight: '0px'

            }}>
                { userflag === true || passwordflag === true ?
                 <FaLock style={{
                    color: "orange",
                    alignItems: "center",
                    margin:"auto",
                    width: "180px",
                    height: "180px"
                }}></FaLock> :
                <FaLock style={{
                    color: "grey",
                    alignItems: "center",
                    margin:"auto",
                    width: "180px",
                    height: "180px"
                }}></FaLock> }


                { passwordflag === false && userflag === false ? 
                <FaUnlock style={{
                    alignItems: "center",
                    color: "lightgreen",
                    marginLeft:"40px",
                    width: "180px",
                    height: "180px"
                }}></FaUnlock> :
                <FaUnlock style={{
                    alignItems: "center",
                    color: "grey",
                    marginLeft:"40px",
                    width: "180px",
                    height: "180px"
                }}></FaUnlock> }
            </div>

            <Form className="col-md-3 mr-auto mb-4" style={{
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
                <Button size="sm" type="submit" onClick={setlocal}>
                    Login <FaSignInAlt></FaSignInAlt>
                </Button>
            </Form>
        </div>
    )
}
