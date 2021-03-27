import React from "react"
import Navbar from "../components/navbar"
import Logo from "../components/logo"
import { Container, Row, Col } from 'react-bootstrap';
import Dropdown from "react-bootstrap/Dropdown" 
import Button from "react-bootstrap/Button"
import "../styles/select.css"
import {Link} from "react-router-dom"

const Select = (props)=>{
    console.log(props)
    return(
        <div>
            <Logo/>
            <Navbar/>
            <div className="choose">
            <h1 className="header">Choose your Ride</h1>
            </div>
        <div className="container">
        <Container>
        <Row>
        <Col xs="3">
        <Link to={{
            pathname:`/bike/${props.match.params.distance}/${props.match.params.origin}/${props.match.params.destination}`,
        }}>
        <Button  size="lg" variant="outline-success">Bike</Button>
        </Link>
        </Col>
        <Col xs="3">
        <Dropdown>
    <Dropdown.Toggle size="lg" variant="success" id="dropdown-basic">
        Car
    </Dropdown.Toggle>

    <Dropdown.Menu>
    
    <Dropdown.Item className="remove">
    <Link to={{
        pathname:`/smallpetrol/${props.match.params.distance}/${props.match.params.origin}/${props.match.params.destination}`,
    }
    }>
    Small Petrol
    </Link>
    </Dropdown.Item>
    <Dropdown.Item className="remove" >
    <Link to={{
        pathname:`/mediumpetrol/${props.match.params.distance}/${props.match.params.origin}/${props.match.params.destination}`,
    }
    }>
    Medium Petrol
    </Link>
    </Dropdown.Item>
    <Dropdown.Item  className="remove">Large Petrol</Dropdown.Item>
    <Dropdown.Item  className="remove">Average Petrol</Dropdown.Item>
    <Dropdown.Item  className="remove">Small Diesel</Dropdown.Item>
    <Dropdown.Item  className="remove">Large Diesel</Dropdown.Item>
    <Dropdown.Item  className="remove">Average Diesel</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
        </Col>
        <Col xs="3">
        <Dropdown>
    <Dropdown.Toggle size="lg" variant="success" id="dropdown-basic">
    EV
    </Dropdown.Toggle>
    <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Electic Car</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Electric Bike </Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    </Col>
     <Col xs="3">
     <Button  size="lg" variant="outline-success">Bus</Button>
        </Col>
      </Row>
        </Container>
        </div>
        </div>
    )
}
export default Select