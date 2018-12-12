import React, { Component } from 'react'
import { Row, Col, Card, CardHeader, CardFooter, CardBody, ListGroup, ListGroupItem, Badge } from 'reactstrap'

export default class Frenchpress extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>French Press</h1>
        <Row>
          <Col xs="6">
            <Card>
              <CardHeader className="">What You'll Need</CardHeader>
              <CardBody>
                <ListGroup flush className="text-center">
                  <ListGroupItem>60 grams coffee</ListGroupItem>
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
        </Row>
      </React.Fragment>
    )
  }
}