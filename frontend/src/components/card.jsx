import React  from "react"
import Card from "react-bootstrap/Card"
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/card.css"
import Logo from "./logo"
import Navbar from "./navbar"
import Spinner from "react-bootstrap/Spinner"

const Cards = (props)=>{
  console.log(props)
    return(
      <div>
      <Logo/>
      <Navbar/>
      {!props.distance?<Spinner className="bike-spinner" animation="border" variant="success" role="status" />:
      <div>
      <div className="navi">
      <h1 >{props.match.params.origin}</h1>
      <br/>
      <h2>to</h2>
      <br/>
      <h1 >{props.match.params.destination}</h1>
      </div>
      <div className="arrange">
     <Container className="bike-cont">
      <Row>
      <Col>
      <Card  style={{ width:'30rem',height:'30rem' }}>
      <Card.Body>
      <Card.Title className="increase-title" >{props.mode}</Card.Title>
      <Card.Text className="increase-body">
      Total distace: {props.response.total_distance} <br/>
      Total fuelcost: {props.response.fuel_cost} <br/>
      Carbon emissions: {props.response.carbon_emissions} <br/>
      </Card.Text>
      </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card  bg="success" style={{ width: '30rem',height:'30rem' }}>
      <Card.Body>
      <Card.Title  className="increase-title success" >EV Car</Card.Title>
      <Card.Text className="increase-body success">
      Electricity Cost: {props.response.evcar_charge}<br/>
      Carbon Emisssions: {props.response.evcar_carbon_emissions_usage} <br/>
      Manufaturing carbon emissions: {props.response.evcar_carbon_emission_production} <br/>
      </Card.Text  >
      </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card bg="success" style={{ width: '30rem',height:'30rem' }}>
      <Card.Body>
      <Card.Title  className="increase-title success" >EV Bike</Card.Title>
      <Card.Text  className="increase-body success">
      Electricity Cost: {props.response.evbike_charge} <br/>
      Carbon Emisssions: {props.response.evbike_carbon_emissions} <br/>
      Manufaturing carbon emissions: {props.response.evbike_carbon_emission_production} <br/>
      </Card.Text>
      </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card style={{ width:'30rem',height:'30rem'}}>
      <Card.Body>
      <Card.Title  className="increase-title" >BMTC</Card.Title>
      <Card.Text className="increase-body">
      Bmtc cost: {props.response.BMTC_charge} <br/>
      Carbon emission : {props.response.BMTC_carbon_emissions}
      <div> <p className="filler">carbon emission is calculated per person basis and cost is ₹1 per kilometer</p></div>
      </Card.Text>
      </Card.Body>
      </Card>
      </Col>
  </Row>
  </Container>
  </div>
  </div>
}
</div>
    )
}

export default Cards