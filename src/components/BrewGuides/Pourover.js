import React, { Component } from 'react'
import DataManager from '../../module/DataManager'
import { Row, Col, Card, CardHeader, CardFooter, Label, Input, CardBody, ListGroup, ListGroupItem, Badge, FormGroup, Button } 
from 'reactstrap'

export default class Pourover extends Component {
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
        <h1>Pour Over</h1>
        <Row>
          <Col xs="3">
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
                  this.state.journalEntries.map(e => <option key={e.id} value={e.id}> Brew Date: {e.brewDate} Star Rating: {e.starRating} </option>)
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
              <CardHeader className="">What You'll Need <Label for="coffeeId">Coffee Used</Label>
              </CardHeader>
              <CardBody>
                <ListGroup flush className="text-center">
                  <ListGroupItem>{this.state.journal.dose} grams coffee</ListGroupItem>
                  <ListGroupItem>Scale</ListGroupItem>
                  <ListGroupItem>Grinder</ListGroupItem>
                  <ListGroupItem>Pour over brewer (such as Hario V60)</ListGroupItem>
                  <ListGroupItem>Filter</ListGroupItem>
                  <ListGroupItem>Cup or Carafe to brew into</ListGroupItem>
                  <ListGroupItem>Kettle</ListGroupItem>
                  <ListGroupItem>{this.state.journal.waterAmt} grams Hot water (195–205 F)</ListGroupItem>
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
                    <Badge color="info" pill>1</Badge> Bring {this.state.journal.waterAmt} grams water to a boil and let cool
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>2</Badge> Crease edges of paper filter in opposite directions to ensure fit then place filter in dripper
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>3</Badge> Rinse paper filter (to avoid paper taste) and discard water used for rinsing
                    </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>4</Badge> Place dripper on top of carafe
                    </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>5</Badge> Weigh and grind coffee (grind to roughly the size of granulated table salt)
                    </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>6</Badge> Add ground coffee to filter; make sure the coffee bed is level
                     </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>7</Badge> Add water to "bloom" grounds
Start timer and gently saturate grounds with hot water, pouring in a circular motion in the center of the coffee bed and allowing the coffee to "bloom" or de-gas. Add only enough water to saturate the grounds; stop before coffee starts to flow from bottom of filter.
                    </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>8</Badge> Wait 30–45 seconds
                    </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>9</Badge> Slowly pour remaining water
Keep the liquid level in the dripper between ½ and ¾ full. Avoid pouring along the edges of the coffee bed. Control brewing time and liquid level by slowing or speeding up the pour as needed; total brew time should be 3–4 minutes.
                    </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>10</Badge> Serve and enjoy!
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