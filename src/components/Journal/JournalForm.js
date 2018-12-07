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

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  constructNewTodo = evt => {
    evt.preventDefault()
    //getting our user id from our local storage
    const credentials = JSON.parse(localStorage.getItem('credentials'))
    //the todo object
    const journal = {
      roastDate: this.state.roastDate,
      brewDate: this.state.brewDate,
      dose: this.state.dose,
      waterAmt: this.state.waterAmt,
      starRating: this.state.starRating,
      notes: this.state.notes,
      userId: credentials.id,
      coffeeId: this.state.coffeeId,
      brewMethod: this.state.brewMethod

    }
    //add this will post our new entry to todos db then will clear the form
    this.props.addTodo(journal)
      .then(() => {
        this.setState({
          id: "",
          roastDate: "",
          brewDate: "",
          dose: "",
          waterAmt: "",
          starRating: "",
          notes: "",
          userId: "",
          coffeeId: "",
          brewMethod: ""
        })
      }
      )

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
                <Input type="date" name="roastDate" id="roastDate" />
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Label for="brewDate">Brew Date</Label>
                <Input type="date" name="brewDate" id="brewDate" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <FormGroup>
                <Label for="dose">Dose</Label>
                <Input type="text" name="dose" id="dose" />
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Label for="origin">Water Used</Label>
                <Input type="text" name="origin" id="origin" />
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Label for="favoriteBrewMethod">Favorite Brew Method</Label>
                <Input type="select" name="favoriteBrewMethod" id="favoriteBrewMethod">
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
                <Input type="textarea" name="notes" id="notes" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
          <Col xs="4">
            <FormGroup>
              <Label for="starRating">How did you like it</Label>
              <Input type="select" name="starRating" id="starRating">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            </Col>
          </Row>
          
          <Button>Submit</Button>
        </Form>
      </Container>
    )
  }
}


