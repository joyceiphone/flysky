import React from 'react';
import {Card, Button, Modal, Dropdown} from 'react-bootstrap';
import moment from 'moment';

import {majorCityAirports} from '../../constants/page';

import './index.css';
import axios from 'axios';

const BASE_URL = 'https://opensky-network.org/api/flights';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false,
            departure: [],
            arrival: [], 
            selectedValue: '',
            selectedIcao: ''
        }
    }
    handleSelectedValue = (e)=>{
        let current = 1517227200;
        let end;
        if(e.target.innerText === '1 hour'){
            end = current + 60*60;
        }
        if(e.target.innerText === '5 hour'){
            end = current + 5*60*60;
        }
        axios.get(`${BASE_URL}/departure?airport=${this.state.selectedIcao}&begin=${current}&end=${end}`).then((response)=>{
            this.setState({departure: [...response.data]});
        })
        axios.get(`${BASE_URL}/arrival?airport=${this.state.selectedIcao}&begin=${current}&end=${end}`).then((response)=>{
            this.setState({arrival: [...response.data]});
        })
    }

    render(){
        return(
            <div className = 'cards-container'>
            {
                majorCityAirports.map((item, index)=>(
                <Card border = 'info' key = {index} style = {{width: '15rem'}} className = 'card-container'>
                <Card.Header>{item.cities}</Card.Header>
                <Card.Body>
                <Card.Title>{item.code}</Card.Title>
                <Card.Text>{item.airport}</Card.Text>
                <Button onClick = {()=>this.setState({show: true, selectedIcao: item.icao})}>More Detail</Button>
                </Card.Body>
            </Card>
                ))
            }
            <Modal show = {this.state.show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
                Flight Detail
                <Dropdown className="d-inline mx-2" >
                <Dropdown.Toggle id="dropdown-autoclose-true">
                    In last x minutes
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#" onClick = {this.handleSelectedValue} item = {1}>1 hour</Dropdown.Item>
                    <Dropdown.Item href="#" onClick = {this.handleSelectedValue} item = {2}>5 hour</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body className = "modal-body">
            <div>
            <h4>Departure</h4>
            <table style = {{fontSize: '10px'}}>
                <tbody>
                    {
                       this.state.departure.map((flight, index)=>(
                           <tr key = {index}>
                               <td>ICAO</td><td>{this.state.selectedIcao}</td>
                                <td>Airline</td><td>{flight.callsign}</td>
                           </tr>
                       ))
                    }
                </tbody>
            </table>
            </div>
            <div>
            <h4>Arrival</h4>
            <table style = {{fontSize: '10px'}}>
                <tbody>
                    {
                       this.state.arrival.map((flight, index)=>(
                           <tr key = {index}>
                               <td>ICAO</td><td>{this.state.selectedIcao}</td>
                                <td>Airline</td><td>{flight.callsign}</td>
                           </tr>
                       ))
                    }
                </tbody>
            </table>
            </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>this.setState({show: false, departure: [], arrival: []})}>Close</Button>
            </Modal.Footer>
        </Modal>
            </div>
        )
    }
}

export default Dashboard;