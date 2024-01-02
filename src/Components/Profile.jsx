import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import Counter from './Counter'

export default class Profile extends Component {
  render() {
    return (
        <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.img} />
      <Card.Body>
        <Card.Title> {this.props.name} </Card.Title>
        <Card.Text>
         {this.props.bio}
        </Card.Text>
        <Counter/>

      </Card.Body>
    </Card>
      </div>

    )
  }
}
