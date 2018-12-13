import React, { Component } from 'react'
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap'
import './journal.css'

export default class JournalList extends Component {
//this will take the coffeeId and return its name
  coffeeNameFinder = (coffeeId) => {
  const coffeeName = this.props.library.find(library => library.id === coffeeId)
  return(coffeeName.name)
}

brewMethodNameFinder = (brewMethod) => {
  const brewMethodName = this.props.brewMethods.find(brewMethodId => brewMethodId.id === brewMethod)
  return(brewMethodName.name)
}

  render() {
    return (
      <section className="journalContainer">
        {
          this.props.journal.map(journal =>
            <div key={journal.id}>
              <div>
                <Card className="journalCard">
                  <CardHeader>Brew Date: {journal.brewDate}</CardHeader>
                  <CardBody>
                    <CardTitle>Coffee Used:
                        {this.coffeeNameFinder(journal.coffeeId).length > 0 ? this.coffeeNameFinder(journal.coffeeId) : <p>Coffee was deleted</p>} </CardTitle> 



                    <CardText>Dose Size: {journal.dose}</CardText>
                    <CardText>Water Used: {journal.waterAmt}</CardText>
                    <CardText>Roast Date: {journal.roastDate}</CardText>
                    <CardText>Brew Method: {this.brewMethodNameFinder(journal.brewMethod)}</CardText>
                    <CardText>Notes: {journal.notes}</CardText>
                    <Button outline
                    className="editBtn"
                    color="warning"
                    onClick={() => this.props.history.push(`/journal/edit/${journal.id}`)}
                    >Edit</Button>
                    <Button outline 
                    color="danger" 
                    onClick={() => this.props.deleteJournal(journal.id)}
                    >Delete</Button>
                  </CardBody>
                  <CardFooter>{journal.starRating} <img alt='star icon' src={ require('./star.png') } />'s </CardFooter>
                </Card>                  
              </div>
            </div>
          )
        }
      </section>
    )
  }
}

