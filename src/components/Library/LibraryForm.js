import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, ButtonGroup, Container, Row, Col } from 'reactstrap'
import './library.css'

export default class LibraryForm extends Component {

  state = {
    name: "",
    origin: "",
    roaster: "",
    roastRating: "",
    price: "",
    size: "",
    favoriteBrewMethod: ""
  }

  

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  constructNewLibrary = evt => {
    evt.preventDefault()
    

    const library = {
      name: this.state.name,
      origin: this.state.origin,
      roaster: this.state.roaster,
      roastRating: this.state.rSelected,
      price: this.state.price,
      size: this.state.size,
      favoriteBrewMethod: this.state.favoriteBrewMethod,
      userId: this.props.activeUser
    }

    this.props.addLibrary(library)
      .then(() => this.props.history.push("/library"))
  }

  //stuff for the roast rating
  constructor(props) {
    super(props)
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this)
  }
  onRadioBtnClick(rSelected) {
    this.setState({ rSelected })
  }

  render() {
    return (
      <Container>
        <Form className="libraryForm">
          <Row>
            <Col xs="6">
              <FormGroup>
                <Label for="name">Coffee Name</Label>
                <Input type="text"
                  name="name"
                  id="name"
                  onChange={this.handleFieldChange}
                  value={this.state.name}
                />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Label for="roaster">Roaster</Label>
                <Input type="text"
                  name="roaster"
                  id="roaster"
                  onChange={this.handleFieldChange}
                  value={this.state.roaster}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <FormGroup>
                <Label for="origin">Origin</Label>
                <Input type="text"
                  name="origin"
                  id="origin"
                  onChange={this.handleFieldChange}
                  value={this.state.origin}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <FormGroup>
                <Label for="favoriteBrewMethod">Favorite Brew Method</Label>
                <Input type="select"
                  name="favoriteBrewMethod"
                  id="favoriteBrewMethod"
                  onChange={this.handleFieldChange}
                  value={this.state.favoriteBrewMethod}>
                 <option value="">-- Select Brew Method --</option>
                  {
                    this.props.brewMethods.map(e => <option key={e.id} id={e.id}> {e.name} </option>)
                  }
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <FormGroup>
                <Label for="price">Price</Label>
                <Input type="text"
                  name="price"
                  id="price"
                  onChange={this.handleFieldChange}
                  value={this.state.price} />
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Label for="size">Bag Size</Label>
                <Input type="text"
                  name="size"
                  id="size"
                  onChange={this.handleFieldChange}
                  value={this.state.size} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <FormGroup>
                <h5>Radio Buttons</h5>
                <ButtonGroup >
                  <Button className="roast1 roastBtn" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}></Button>
                  <Button className="roast2 roastBtn" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}></Button>
                  <Button className="roast3 roastBtn" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}></Button>
                  <Button className="roast4 roastBtn" onClick={() => this.onRadioBtnClick(4)} active={this.state.rSelected === 4}></Button>
                  <Button className="roast5 roastBtn" onClick={() => this.onRadioBtnClick(5)} active={this.state.rSelected === 5}></Button>
                  <Button className="roast6 roastBtn" onClick={() => this.onRadioBtnClick(6)} active={this.state.rSelected === 6}></Button>
                  <Button className="roast7 roastBtn" onClick={() => this.onRadioBtnClick(7)} active={this.state.rSelected === 7}></Button>
                </ButtonGroup>
                <p>Selected: {this.state.rSelected}</p>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 2, offset: 1 }}>
              <Button type="submit" onClick={this.constructNewLibrary}>Submit</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    )
  }
}


