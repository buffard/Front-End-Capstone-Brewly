import React, { Component } from 'react'
import { Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';

export default class LibraryList extends Component {

  brewMethodNameFinder = (brewMethod) => {
    const brewMethodName = this.props.brewMethods.find(brewMethodId => brewMethodId.id === brewMethod)
    return (brewMethodName.name)
  }

  render() {
    return (

      <section className="libraryContainer">
        {
          this.props.library.map(library =>
            <div key={library.id}>
              <div>
                <Card className="libraryCard" body inverse >
                  <CardImg top width="100%" src={require("./coffeeImg.jpg")} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{library.name}</CardTitle>
                    <CardSubtitle>{library.roaster}</CardSubtitle>
                    <CardText>{library.origin}</CardText>
                    <CardText>Roast Rating: {library.roastRating}</CardText>
                    <CardText>Price: {library.price}</CardText>
                    <CardText>Favorite Brew Method: {library.favoriteBrewMethod} </CardText>
                    <CardText>{library.size}</CardText>
                    <Button outline
                      className="editBtn"
                      color="warning"
                      onClick={() => this.props.history.push(`/library/edit/${library.id}`)}
                    >Edit</Button>
                    <Button outline
                      color="danger"
                      onClick={() => this.props.deleteLibrary(library.id)}
                    >Delete</Button>
                  </CardBody>
                </Card>
              </div>
            </div>
          )
        }
      </section>
    )
  }
}

