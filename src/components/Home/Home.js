import React, { Component } from 'react'
import DataManager from '../../module/DataManager'
import { Button, Label, Card, FormGroup, CardTitle, CardText } from 'reactstrap'


export default class Home extends Component {
  state = {
    journalEntries: [],
    
  }

  // handleFieldChange = evt => {
  //   const selectedValue = evt.target.value
  //   DataManager.getRecentJournal("journal", this.props.activeUser, selectedValue)
  //   .then((res) => this.setState({
  //     journalEntries: res
  //   }))
  // }

  

  componentDidMount() {
    DataManager.getRecentJournal("journal", this.props.activeUser )
    .then(entry => this.setState({
      journalEntries: entry
    }
    )
    )
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Button type="button" className="btn btn-success" onClick={() => {
            this.props.history.push("/journal/new")
          }}>
            Create New Journal Entry
          </Button>
        </div>
        
        <div>



       <div>
       <FormGroup>
              <Label for="recentJournal">Your Most Recent Coffee Journal Entries</Label>
              <div type="select"
                name="recentJournal"
                id="recentJournal"
                onChange={this.handleFieldChange}
                >
                {
                  this.state.journalEntries.map(e => <Card key={e.id} value={e.id}><CardTitle> Brew Date: {e.brewDate} </CardTitle>Rating: {e.starRating} </Card>)
                }
              </div>
            </FormGroup>
            </div>
        </div>



{/* <Card body outline color="secondary">
        <CardTitle> </CardTitle>
        <CardText></CardText>
        <Button>Button</Button>
      </Card> */}








      </React.Fragment>
    )

  }
}