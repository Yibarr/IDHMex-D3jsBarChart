import React, { Component } from 'react'
import {Container,Col,Row,Dropdown,Button} from 'react-materialize'
import SVG from '../SVG/SVG'

export class Chart extends Component {
  
  render() {
    return (
      <div>
        <Container>
            <Row>
                <Col>
                    <Dropdown trigger={<Button className='blue lighten-2'>Drop Me</Button>}>
                      
                     <a>
                      one
                      </a>
                      <a>
                      two
                    
                      </a>
                    </Dropdown> 
                </Col>
            </Row>
            <SVG/>
        </Container>
      </div>
    )
  }
}

export default Chart
