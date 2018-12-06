import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, ButtonGroup } from 'reactstrap';
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
//stuff for the roast rating

constructor (props) {
  super(props)
  this.state = { cSelected: [] }
  this.onRadioBtnClick = this.onRadioBtnClick.bind(this)
}

onRadioBtnClick(rSelected) {
  this.setState({ rSelected })
}


  

  render() {
    return (
      // TODO:change ids to match items in database
      <Form className="journalForm">
        <FormGroup>
          <Label for="coffeeName">Coffee's Name</Label>
          <Input type="text" name="coffeeName" id="coffeeName" />
        </FormGroup>
        <FormGroup>
          <Label for="roaster">Roaster</Label>
          <Input type="text" name="roaster" id="roaster" />
        </FormGroup>
        <FormGroup>
          <Label for="origin">Origin</Label>
          <Input type="text" name="origin" id="origin" />
        </FormGroup>
        <FormGroup>
          <Label for="roastDate">Roast Date</Label>
          <Input type="date" name="roastDate" id="roastDate" />
        </FormGroup>
        <FormGroup>
          <Label for="brewDate">Brew Date</Label>
          <Input type="date" name="brewDate" id="brewDate" />
        </FormGroup>
        <FormGroup>
          <Label for="dose">Dose</Label>
          <Input type="text" name="dose" id="dose" />
        </FormGroup>
        <FormGroup>
          <Label for="origin">Water Used</Label>
          <Input type="text" name="origin" id="origin" />
        </FormGroup>
        <FormGroup>
          <Label for="notes">Notes</Label>
          <Input type="textarea" name="notes" id="notes" />
        </FormGroup>
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
        <FormGroup>
          <Label for="price">Price</Label>
          <Input type="text" name="price" id="price" />
        </FormGroup>
        <FormGroup>
          <Label for="size">Bag Size</Label>
          <Input type="text" name="size" id="size" />
        </FormGroup>
        <FormGroup>
          <Label for="favoriteBrewMethod">Favorite Brew Method</Label>
          <Input type="select" name="favoriteBrewMethod" id="favoriteBrewMethod">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Input>
        </FormGroup>

        <FormGroup>
        <h5>Radio Buttons</h5>
        <ButtonGroup>
          <Button className="roast1" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>One</Button>
          <Button className="roast2" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Two</Button>
          <Button className="roast3" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Three</Button>
          <Button className="roast4" onClick={() => this.onRadioBtnClick(4)} active={this.state.rSelected === 4}>Four</Button>
          <Button className="roast5" onClick={() => this.onRadioBtnClick(5)} active={this.state.rSelected === 5}>Five</Button>
          <Button className="roast6" onClick={() => this.onRadioBtnClick(6)} active={this.state.rSelected === 6}>Six</Button>
          <Button className="roast7" onClick={() => this.onRadioBtnClick(7)} active={this.state.rSelected === 7}>Seven</Button>
        </ButtonGroup>
        <p>Selected: {this.state.rSelected}</p>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    )
  }
}