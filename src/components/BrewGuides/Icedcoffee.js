import React, { Component } from 'react'
import { Row, Col, Card, CardHeader, CardFooter, CardBody, ListGroup, ListGroupItem, Badge } from 'reactstrap'

export default class Pourover extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Iced Coffee</h1>
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
                  <ListGroupItem>Carafe to brew into</ListGroupItem>
                  <ListGroupItem>Kettle</ListGroupItem>
                  <ListGroupItem>Hot water (195–205 F) and ice: we use 335 grams hot water and 165 grams ice</ListGroupItem>
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
                    <Badge color="info" pill>1</Badge> Heat 335 grams water to a boil and let cool
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>2</Badge> Crease edges of paper filter in opposite directions to ensure fit, then place filter in dripper
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>3</Badge> Rinse paper filter (to avoid paper taste) and discard water used for rinsing
                    </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>4</Badge> Weigh and grind coffee medium-fine (roughly the size of granulated table salt)
                    </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>5</Badge> Add the coffee to the brewer and shake to level it out
                    </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>6</Badge> Start timer and gently wet grounds with hot water
Pouring in a circular motion in the center of the coffee bed, allow the coffee to "bloom" or de-gas for 45 seconds. Add only enough water to saturate all grounds. Stop before coffee starts to flow from bottom of filter.
                     </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>7</Badge> Slowly pour remaining water
Keep the liquid level in the dripper between ½ and ¾ full. Avoid pouring along the edges of the coffee bed. Control brewing time by slowing or speeding up the pour as needed; total brew time should be around 2:30 minutes.
                    </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>8</Badge> Weigh 165 grams ice in carafe
                    </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>9</Badge> Pour the coffee concentrate over the ice
This cools the coffee and dilutes it to an enjoyable strength.
                    </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge color="info" pill>10</Badge> Swirl the coffee to ensure all ice is melted. Serve immediately over more ice and enjoy!
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