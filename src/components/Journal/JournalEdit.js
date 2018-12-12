import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap'
import './journal.css'

export default class JournalEdit extends Component {
  state = {

  }

  //this will watch the keystrokes in our inputs
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  componentDidMount() {
    const journal = this.props.journal.find(a => a.id === parseInt(this.props.match.params.journalId))
    this.setState(journal)
  }


  constructNewJournal = (evt) => {
    evt.preventDefault()

    let editedJournal = {
      roastDate: this.state.roastDate,
      brewDate: this.state.brewDate,
      dose: this.state.dose,
      waterAmt: this.state.waterAmt,
      starRating: this.state.starRating,
      notes: this.state.notes,
      userId: this.props.activeUser,
      coffeeId: this.props.library.find(e => e.name === this.state.coffeeId).id,
      brewMethod: this.props.brewMethods.find(e => e.name === this.state.brewMethod).id
    }
    this.props.editJournal(this.state.id, editedJournal)
      .then(() => {
        this.props.history.push("/journal")
      })
  }

  render() {
    return (
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
                  value={this.state.roastDate} />
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Label for="brewDate">Brew Date</Label>
                <Input type="date"
                  name="brewDate"
                  id="brewDate"
                  onChange={this.handleFieldChange}
                  value={this.state.brewDate} />
              </FormGroup>
            </Col>
            <Col xs="4">
            <FormGroup>
                <Label for="coffeeId">Coffee Used</Label>
                <Input type="select"
                  name="coffeeId"
                  id="coffeeId"
                  onChange={this.handleFieldChange}
                  value={this.state.coffeeId}>
                  <option value="">--Coffee--</option>
                  {
                    this.props.library.map(e => <option key={e.id} id={e.id}> {e.name} </option>)
                  }
                </Input>
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
                  value={this.state.dose} />
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Label for="waterAmt">Water Used</Label>
                <Input type="text"
                  name="waterAmt"
                  id="waterAmt"
                  onChange={this.handleFieldChange}
                  value={this.state.waterAmt} />
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Label for="brewMethod">Favorite Brew Method</Label>
                <Input type="select"
                  name="brewMethod"
                  id="brewMethod"
                  onChange={this.handleFieldChange}
                  value={this.state.brewMethod}>
                  <option value="">-- Select Brew Method --</option>
                  {
                    this.props.brewMethods.map(e => <option key={e.id} id={e.id}> {e.name} </option>)
                  }
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
                  value={this.state.notes} />
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
                  value={this.state.starRating}>
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