import React, { Component } from 'react'
import { Row, Col, Card, CardHeader, CardFooter, CardBody, ListGroup, ListGroupItem, Badge } from 'reactstrap'

export default class Pourover extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Pour Over</h1>
        <Row>
          <Col xs="6">
            <Card>
              <CardHeader className="">What You'll Need</CardHeader>
              <CardBody>
                <ListGroup flush className="text-center">
                  <ListGroupItem>30 grams coffee</ListGroupItem>
                  <ListGroupItem>Scale</ListGroupItem>
                  <ListGroupItem>Grinder</ListGroupItem>
                  <ListGroupItem>Pour over brewer (such as Hario V60)</ListGroupItem>
                  <ListGroupItem>Filter</ListGroupItem>
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
                    <Badge color="info" pill>1</Badge> Bring 500 grams water to a boil and let cool
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
        </Row>
      </React.Fragment>
    )
  }
}