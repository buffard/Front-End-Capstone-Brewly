import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import './journal.css'

export default class JournalForm extends Component {

  // Set initial state
  state = {
    roastDate: "",
    brewDate: "",
    dose: "",
    waterAmt: "",
    starRating: "",
    notes: ""
  }

  activeUser() {
    return sessionStorage.getItem("credentials")
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  constructNewJournal = evt => {
    evt.preventDefault()
    
    //the todo object
    const journal = {
      roastDate: this.state.roastDate,
      brewDate: this.state.brewDate,
      dose: this.state.dose,
      waterAmt: this.state.waterAmt,
      starRating: this.state.starRating,
      notes: this.state.notes,
      userId: this.activeUser(),
      coffeeId: this.state.coffeeId,
      brewMethod: this.state.brewMethod

    }
    //add this will post our new journal entry to db then will clear the form
    this.props.addJournal(journal)
    //take us back to our journal page
    .then(() => this.props.history.push("/journal"))

  }

  render() {
    return (
      // TODO:change ids to match items in database
      <Container>
        <Form className="journalForm">
          <Row>
            <Col xs="4">
              <FormGroup>
                <Label for="roastDate">Roast Date</Label>
                <Input type="date" 
                name="roastDate" 
                id="roastDate"
                onChange={this.handleFieldChange}
                  value={this.state.roaster} />
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Label for="brewDate">Brew Date</Label>
                <Input type="date" 
                name="brewDate" 
                id="brewDate"
                onChange={this.handleFieldChange}
                  value={this.state.roaster} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <FormGroup>
                <Label for="dose">Dose</Label>
                <Input type="text" 
                name="dose" 
                id="dose"
                onChange={this.handleFieldChange}
                  value={this.state.roaster} />
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Label for="origin">Water Used</Label>
                <Input type="text" 
                name="origin" 
                id="origin"
                onChange={this.handleFieldChange}
                  value={this.state.roaster} />
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Label for="favoriteBrewMethod">Favorite Brew Method</Label>
                <Input type="select" 
                name="favoriteBrewMethod" 
                id="favoriteBrewMethod"
                onChange={this.handleFieldChange}
                  value={this.state.roaster}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label for="notes">Notes</Label>
                <Input type="textarea" 
                name="notes" 
                id="notes"
                onChange={this.handleFieldChange}
                  value={this.state.roaster} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
          <Col xs="4">
            <FormGroup>
              <Label for="starRating">How did you like it</Label>
              <Input type="select" 
              name="starRating" 
              id="starRating"
              onChange={this.handleFieldChange}
                  value={this.state.roaster}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            </Col>
          </Row>
          
          <Button onClick={this.constructNewJournal}>Submit</Button>
        </Form>
      </Container>
    )
  }
}


