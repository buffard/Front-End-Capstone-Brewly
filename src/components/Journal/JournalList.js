import React, { Component } from 'react'
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap'
import './journal.css'

export default class JournalList extends Component {

  render() {
    return (
      <section className="journalContainer">
        {
          this.props.journal.map(journal =>
            <div key={journal.id}>
              <div>
                <Card>
                  <CardHeader>Brew Date: {journal.brewDate}</CardHeader>
                  <CardBody>
                    <CardTitle>Coffee Used: {journal.coffeeId}</CardTitle>
                    <CardText>Dose Size: {journal.dose}</CardText>
                    <CardText>Water Used: {journal.waterAmt}</CardText>
                    <CardText>Roast Date: {journal.roastDate}</CardText>
                    <CardText>Brew Method: {journal.brewMethod}</CardText>
                    <CardText>Notes: {journal.notes}</CardText>
                    <Button outline
                    color="warning"
                    onClick={() => this.props.history.push(`/journal/edit/${journal.id}`)}
                    >Edit</Button>
                    <Button outline 
                    color="danger" 
                    onClick={() => this.props.deleteJournal(journal.id)}
                    >Delete</Button>
                  </CardBody>
                  <CardFooter>{journal.starRating}</CardFooter>
                </Card>                  
              </div>
            </div>
          )
        }
      </section>
    )
  }
}

