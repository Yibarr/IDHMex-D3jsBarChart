
import React, { Component } from 'react';
import * as d3 from 'd3'
import IDH from '../../idh'
import {Container,Col,Row,Dropdown,Button,CardPanel} from 'react-materialize';
import {
  idh2010,
  idh2005,
  idh2000,
  idh1995,
  idh1990,
  idh1980,
  randomOrder,
  inAlphabeticalOrder,
  ascendent,
  descendent,
  setData,
  injectDropdownStates
} from '../Chart/drawBarchart'
import './Chart.css'

export class Chart extends Component {
    state={ 
      setYear:idh2010,
      sortBy:randomOrder,
      selectedSt:0
    }
   
  componentDidMount(){
        this.fillDropdowns()
        this.mountedData(this.state.setYear,this.state.sortBy)
        
      };

 fillDropdowns(){
  injectDropdownStates()
  
  
  
  d3.selectAll('.statesdp')
  .on('click',(d,i)=>{
    d3.selectAll('rect')
      .style('fill','#b2ff59')

      console.log('hola');
      
      console.log(IDH.idh2010)

      this.setState({selectedSt:IDH.idh2010.indexOf(this.state.setYear[i])});
      console.log(IDH.idh2010.indexOf(this.state.setYear[i]));
      

    d3.selectAll('.'+d.name.replace(/\s/g, ''))
    .style('fill','#eeff41')

    d3.selectAll('.'+d.name.replace(/\s/g, '')+'2')
    .style('fill','#eeff41')
  })

 }

  mountedData=(setYear,sortBy)=>{  
      setData(setYear,sortBy)
    };

  changeYear= (e) => {    
    switch(e){
      case "2010":
        this.setState({setYear: idh2010}, () => this.mountedData(this.state.setYear,this.state.sortBy));
        console.log(this.state.setYear);
      break
      case "2005":
        this.setState({setYear: idh2005},()=> this.mountedData(this.state.setYear,this.state.sortBy));
        
        console.log(this.state.setYear);
      break
      case "2000":
        this.setState({setYear: idh2000},()=>this.mountedData(this.state.setYear,this.state.sortBy));
        
        console.log(this.state.setYear);
      break
      case "1995":
        this.setState({setYear: idh1995},()=>this.mountedData(this.state.setYear,this.state.sortBy));
        console.log(this.state.setYear);
      break
      case "1990":
        this.setState({setYear: idh1990},()=>this.mountedData(this.state.setYear,this.state.sortBy));
        console.log(this.state.setYear);
      break
      case "1980":
        this.setState({setYear: idh1980},()=>this.mountedData(this.state.setYear,this.state.sortBy));
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
          <div id='chart2'></div>
          <Row> 
            <Col l={6} m={6} s={12} offset='l3 m3'>
              <CardPanel className="cardP deep-purple">
                <p className='large-button white-text'>El IDH más alto de {IDH.idh2010[this.state.selectedSt].name} es de {IDH.idh2010[this.state.selectedSt].idh} mientras que el más bajo es {IDH.idh1980[this.state.selectedSt].idh}, el promedio de todos sus idh es {(IDH.idh2010[this.state.selectedSt].idh+IDH.idh2005[this.state.selectedSt].idh+IDH.idh2000[this.state.selectedSt].idh+IDH.idh1995[this.state.selectedSt].idh+IDH.idh1990[this.state.selectedSt].idh+IDH.idh1980[this.state.selectedSt].idh)/6}
                </p>
              </CardPanel>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Chart
