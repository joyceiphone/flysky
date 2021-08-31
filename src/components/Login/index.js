import React from 'react';
import {Form, Button} from 'react-bootstrap';
import SimpleLayout from '../../layouts/SimpleLayouts';

import './index.css';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '', 
            password: ''
        }
    }
    handleEmailChange = (e)=>{
        this.setState({email: e.target.value});
    }
    handlePasswordChange = (e)=>{
        this.setState({password: e.target.value});
    }
    onSubmit = (e)=>{
        e.preventDefault();
        if(this.state.email === 'demo' && this.state.password === 'demo'){
            this.props.history.push('/dashboard');
        }
    }
    render(){
        return(
        <SimpleLayout>
        <Form className = "login-form" onSubmit = {this.onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control placeholder="Enter email" onChange = {this.handleEmailChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange = {this.handlePasswordChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
        </SimpleLayout>
        )
    }
}

export default Login;