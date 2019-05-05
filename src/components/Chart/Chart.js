import * as d3 from 'd3'
import React, { Component } from 'react';
import {Container,Col,Row,Dropdown,Button} from 'react-materialize';
import idh from '../../manifest.js'
import SVG from '../SVG/SVG';
import './Chart.css'


export class Chart extends Component {
  
  componentDidMount(){
        this.draw()
      }

      draw(){
        
        d3.select('#states')
          .selectAll('states')
          .data(idh)
          .enter()
          .append('Li')
          .append('a')
          .text(d=>d.name)
      }
      
  
  render() {   
    return (
      <div>
        <Container>
          <div className='head-cont'>
            <h1 className='head'>Mexico DHI Visualization</h1>
          </div>
          <Row>
            <Col s={4} m={4}>
              <Dropdown id='states' trigger={<Button className='large-button deep-purple'>States</Button>}>
                
              </Dropdown> 
            </Col>
            <Col s={4} m={2} push='m1' >
              <Dropdown trigger={<Button className='large-button deep-purple'>Years</Button>}>
                <a>2010</a>
                <a>2005</a>
                <a>2000</a>
                <a>1995</a>
                <a>1990</a>
                <a>1980</a>
              </Dropdown> 
            </Col>
            <Col s={4} m={4} push='m2'>
              <Dropdown trigger={<Button className='large-button button deep-purple'>Sort</Button>}>
                <a>Alfabéticamente</a>
                <a>Ascendente</a>
                <a>Descendente</a>
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
