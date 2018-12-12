import React, { Component } from 'react'
import { Row, Col, Card, CardHeader, CardFooter, CardBody, ListGroup, ListGroupItem, Badge, FormGroup, Label, Input, Button } from 'reactstrap'
import DataManager from '../../module/DataManager'

export default class Frenchpress extends Component {
  state = {
    journalEntries: [],
    journal: ""
  }

  handleFieldChange = evt => {
    const selectedValue = evt.target.value
    DataManager.getJournalByCoffee("journal", this.props.activeUser, selectedValue)
    .then((res) => this.setState({
      journalEntries: res
    }))
  }

  handleJournalFieldChange = evt => {
    const selectedValue = evt.target.value
    DataManager.get("journal", selectedValue)
    .then((res)=> this.setState({
      journal: res
    }))
  }

  componentDidMount() {
    const journal = this.props.journal.find(a => a.id === parseInt(this.props.match.params.journalId))
    this.setState(journal)
  }

  render() {
    return (
      <React.Fragment>
        <h1>French Press</h1>
        <Row>
        <Col xs="9">
            <FormGroup>
              <Label for="coffeeId">Select a coffee</Label>
              <Input type="select"
                name="coffeeId"
                id="coffeeId"
                onChange={this.handleFieldChange}
                >
                <option value="">--Coffee--</option>
                {
                  this.props.library.map(e => <option key={e.id} value={e.id}> {e.name} </option>)
                }
              </Input>
            </FormGroup>
            {
              this.state.journalEntries.length > 0 ? <FormGroup>
              <Label for="journalEntries">Select a journal entry</Label>
              <Input type="select"
                name="journalEntries"
                id="journalEntries"
               onChange={this.handleJournalFieldChange}
                >
                <option value="">--Journal Entries--</option>
                {
                  this.state.journalEntries.map(e => <option key={e.id} value={e.id}> {e.brewDate} {e.starRating} </option>)
                }
              </Input>
            </FormGroup> : null
            }
          </Col> 
          <Col>
          <br></br>
          <Button outline 
          color="primary"
          onClick={() => this.props.history.push(`/brewguides`)}
          >Back to Brew Guides</Button>{' '}
          </Col>
        </Row>
        {
              this.state.journal  ?
        <Row>
          <Col xs="6">
            <Card>
              <CardHeader className="">What You'll Need</CardHeader>
              <CardBody>
                <ListGroup flush className="text-center">
                  <ListGroupItem>{this.state.journal.dose} grams coffee</ListGroupItem>
                  <ListGroupItem>Scale</ListGroupItem>
                  <ListGroupItem>Grinder</ListGroupItem>
                  <ListGroupItem>French Press</ListGroupItem>
                  <ListGroupItem>Stirring utensil</ListGroupItem>
                  <ListGroupItem>Cup or Carafe to brew into</ListGroupItem>
                  <ListGroupItem>Kettle</ListGroupItem>
                  <ListGroupItem>Hot water (195–205 F)</ListGroupItem>
                  <ListGroupItem>Timer</ListGroupItem>
                </ListGroup>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          </Col>
          <Col xs="6">
            <Card>
              <CardHeader>Brew This Thing!</CardHeader>
              <CardBody className="instructionsBG">
                <ListGroup>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>1</Badge> Heat 900 grams of water to boil and let cool
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>2</Badge> Grind the appropriate amount of coffee just before brewing
Grind should be medium-coarse roughly the size of coarsely cracked pepper
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>3</Badge> Add ground coffee to French press carafe and level the bed
                    </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>4</Badge> Wet all grounds and fill the carafe about halfway with hot water
Stir the grounds to encourage even brewing–this helps to release CO2 gas.
                    </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>5</Badge> Add the remaining water
                    Pour evenly to the top
                    </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>6</Badge> Replace plunger
Press down just enough to create a seal. Let the coffee brew about 4 minutes.
                     </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>7</Badge> At about 4 minutes, the coffee is ready to filter.
Press down slowly to avoid overly-agitating the coffee. Align the spout so it’s ready to pour.
                    </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <p> <Badge color="info" pill>8</Badge> Serve and enjoy!</p>
                    Decant any remaining coffee to fully stop brewing in the press.
                    </ListGroupItem>
                </ListGroup>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          </Col>
        </Row> : <p>select your shit</p>
        }
      </React.Fragment>
    )
  }
}