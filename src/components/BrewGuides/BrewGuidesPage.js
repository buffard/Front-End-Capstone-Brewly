import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap'
import './brewguides.css'

export default class BrewGuidesPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Card body className="text-center brewBtnPour">
          <CardTitle>Pour Over</CardTitle>
          <CardText>Pour over is an easy-to-master brewing method.  Simple manual brewers such as Beehouse or Kalita Wave drippers produce aromatic, sweet and clean coffees.</CardText>
          <Button type="button"
           color="secondary"
           onClick={() => {
             this.props.history.push("/pourover")
           }}
           >Let's Brew It!</Button>
        </Card>

        <Card body className="text-center brewBtnFrench">
          <CardTitle>French Press</CardTitle>
          <CardText>Big-bodied coffee flavor. This classic and straightforward steeping method consistently produces a creamy, rich mouthfeel.</CardText>
          <Button type="button"
          color="secondary"
          onClick={() => {
            this.props.history.push("/frenchpress")
          }}
          >Let's Brew It!</Button>
        </Card>

        <Card body className="text-center brewBtnIced">
          <CardTitle>Iced Coffee</CardTitle>
          <CardText>Brew a concentrate and pour it over ice to cool, using basic pour over brewing equipment.</CardText>
          <Button type="button"
          color="secondary"
          onClick={() => {
            this.props.history.push("/icedcoffee")
          }}          
          >Let's Brew It!</Button>
        </Card>
      </React.Fragment>
    )
  }
}