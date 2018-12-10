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
                  <CardHeader>{journal.brewDate}</CardHeader>
                  <CardBody>
                    <CardTitle>{journal.coffeeId}</CardTitle>
                    <CardText>{journal.dose}</CardText>
                    <CardText>{journal.waterAmt}</CardText>
                    <CardText>{journal.roastDate}</CardText>
                    <CardText>{journal.brewMethod}</CardText>
                    <CardText>{journal.notes}</CardText>
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

