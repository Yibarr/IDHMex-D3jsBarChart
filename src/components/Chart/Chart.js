
import React, { Component } from 'react';
import {Container,Col,Row,Dropdown,Button} from 'react-materialize';
import {injectDropdownStates,
  setData,
  set2010, 
  set2005,
  set2000,
  set1995,
  set1990,
  set1980,
  ascendent,
  descendent, 
  inAlphabeticalOrder,
  drawBarchart
} from '../barchart'
import './Chart.css'

export class Chart extends Component {
    state={
      setYear:set2010,
      sortBy:inAlphabeticalOrder
    }
   
  componentDidMount(){
        this.fillDropdowns();
        this.mountedData(this.state.setYear,this.state.sortBy)
      };

  fillDropdowns(){
    injectDropdownStates(); 
  };

  draw(){
    drawBarchart()
  }

  mountedData=(setYear,sortBy)=>{  
      setData(setYear,sortBy)
    };

  changeYear= (e) => {    
    switch(e){
      case "2010":
        this.setState({setYear: set2010}, () => this.mountedData(this.state.setYear,this.state.sortBy));
        console.log(this.state.setYear);
      break
      case "2005":
        this.setState({setYear: set2005},()=> this.mountedData(this.state.setYear,this.state.sortBy));
        
        console.log(this.state.setYear);
      break
      case "2000":
        this.setState({setYear: set2000},()=>this.mountedData(this.state.setYear,this.state.sortBy));
        
        console.log(this.state.setYear);
      break
      case "1995":
        this.setState({setYear: set1995},()=>this.mountedData(this.state.setYear,this.state.sortBy));
        console.log(this.state.setYear);
      break
      case "1990":
        this.setState({setYear: set1990},()=>this.mountedData(this.state.setYear,this.state.sortBy));
        console.log(this.state.setYear);
      break
      case "1980":
        this.setState({setYear: set1980},()=>this.mountedData(this.state.setYear,this.state.sortBy));
      break
      default :
    }
  } 

  changeSort= (e) => {    
    switch(e){
      case "alphabetical":
        this.setState({sortBy: inAlphabeticalOrder},()=>this.mountedData(this.state.setYear,this.state.sortBy));
        this.mountedData(this.state.setYear,this.state.sortBy);
        console.log(this.state.sortBy);
      break
      case "ascendent":
        this.setState({sortBy: ascendent},()=>this.mountedData(this.state.setYear,this.state.sortBy));
        console.log(this.state.sortBy);
      break
      case "descendent":
        this.setState({sortBy: descendent},()=>this.mountedData(this.state.setYear,this.state.sortBy));
        console.log(this.state.sortBy);
      break
      default :
    }
  } 
  render() {  
    return (
      <div>
        <Container>
          <div className='head-cont'>
            <h1 className='head'>Mexico DHI Visualization</h1>
            <h3>{this.state.setYear}</h3> 
          </div>
          <Row>
            <Col s={4} m={4}>
              <Dropdown id='states' trigger={<Button className='large-button deep-purple'>States</Button>}>
                
              </Dropdown> 
            </Col>
            <Col s={3} m={2} push='m1' >
              <Dropdown trigger={<Button className='large-button deep-purple'>Year</Button>}>
                <a className='deep-purple-text' onClick={()=>this.changeYear("2010")}>2010</a>
                <a className='deep-purple-text'  onClick={()=>this.changeYear("2005")}>2005</a>
                <a className='deep-purple-text'  onClick={()=>this.changeYear("2000")}>2000</a>
                <a className='deep-purple-text'  onClick={()=>this.changeYear("1995")}>1995</a>
                <a className='deep-purple-text'  onClick={()=>this.changeYear("1990")}>1990</a>
                <a className='deep-purple-text'  onClick={()=>this.changeYear("1980")}>1980</a>   
              </Dropdown> 
            </Col>
            <Col s={4} m={4} push='m2'>
              <Dropdown trigger={<Button className='large-button button deep-purple'>Sort</Button>}>
                <a className='deep-purple-text'  onClick={()=>this.changeSort('alphabetical')}>Alphabetical</a>
                <a className='deep-purple-text'  onClick={()=>this.changeSort('ascendent')}>Ascendent</a>
                <a className='deep-purple-text'  onClick={()=>this.changeSort('descendent')}>Descendent</a>
              </Dropdown> 
            </Col>
          </Row>
          <div id='chart'></div>
        </Container>
      </div>
    )
  }
}

export default Chart
