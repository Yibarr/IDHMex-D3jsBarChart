
import React, { Component } from 'react';
import {Container,Col,Row,Dropdown,Button} from 'react-materialize';
import {injectDropdownStates} from '../barchart'
import './Chart.css'


export class Chart extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
        this.fillDropdowns();        
      };

  fillDropdowns(){
    injectDropdownStates();
  };
  
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
            <Col s={3} m={2} push='m1' >
              <Dropdown trigger={<Button className='large-button deep-purple'>Year</Button>}>
                <a className='deep-purple-text' >2010</a>
                <a className='deep-purple-text' >2005</a>
                <a className='deep-purple-text' >2000</a>
                <a className='deep-purple-text' >1995</a>
                <a className='deep-purple-text' >1990</a>
                <a className='deep-purple-text' >1980</a>
              </Dropdown> 
            </Col>
            <Col s={4} m={4} push='m2'>
              <Dropdown trigger={<Button className='large-button button deep-purple'>Sort</Button>}>
                <a className='deep-purple-text' onClick={this.AlphabeticSort}>Alfabetical</a>
                <a className='deep-purple-text' onClick={this.sortUp}>Ascendent</a>
                <a className='deep-purple-text' onClick={this.sortDown}>Descendent</a>
              </Dropdown> 
            </Col>
          </Row>
          <div id='chart'></div>
          <p>Made by <a href='https://github.com/Yibarr' target='_blank' rel="noopener noreferrer" ><u><strong>Yibarr</strong></u></a></p>
        </Container>
      </div>
    )
  }
}

export default Chart
