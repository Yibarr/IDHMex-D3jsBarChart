import React, { Component } from 'react'
import { Container } from 'react-materialize';

export class Authorlink extends Component {
  render() {
    return (
      <div>
        <Container>
            <p>Made by <a href='https://github.com/Yibarr' target='_blank' rel="noopener noreferrer" ><u><strong>Yibarr</strong></u></a></p>
        </Container>
      </div>
    )
  }
}

export default Authorlink
