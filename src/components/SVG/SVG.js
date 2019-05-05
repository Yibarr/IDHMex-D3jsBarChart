import React, { Component } from 'react';
import * as d3 from 'd3';
import idh from '../../manifest'

export class SVG extends Component {
    
  componentDidMount() {
        this.drawChart();
        
      }
      drawChart(){
        
        idh.sort((a, b) => a.idh2010> b.idh2010 ? -1 : 1);
         /* idh.sort((a, b) => a.idh2010> b.idh2010 ? 1 : -1); */


      // Margins of the chart
      const margin = {top: 20, right: 20, bottom: 40, left: 45};
      const width = 955;
      const height = 400;

      chart(idh, width, height, margin);

    function chart(idh, chartWidth, chartHeight, margin) {
      const width = chartWidth - margin.left - margin.right;
      const height = chartHeight - margin.top - margin.bottom;

      const x = d3.scaleBand()
        .rangeRound([0, width])
        .paddingInner(0.1);

      const y = d3.scaleLinear()
        .range([height, 0]);

      const xAxis = d3.axisBottom(x);

      const yAxis = d3.axisLeft(y)
                .ticks(30);
      
      
      d3.selectAll('#chart');

      const svg = d3.select('#chart').append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      x.domain(idh.map(d =>  d.abr));
      y.domain([0, d3.max(idh, d =>  d.idh2010)]);

      svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
      .style('font-weight','bolder')
      .style('font-size','0.7rem');
      

      svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .style('font-weight','bolder')
      .style('font-size','1rem');


      svg.selectAll("text")
      .data(idh,d => d  )
      .enter()
      .append( "text" )
      .text( (d) => d.idh2010)
      .attr('y', -250)
      .attr('x', (d) => { return x(d.abr) })
      .style('font-size', '0.56rem')
     
      .attr('y', d => { return y(d.idh2010) - 8 } )
      .attr('x', (d) => { return x(d.abr) + 5 })

      svg.selectAll('.bar')
      .data(idh)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d =>  x(d.abr))
      .attr('width', x.bandwidth())
      .attr('y', d => { return y(0)} )
      .style('fill', '#B0F566')

      .on('mouseover', function(d,i) {
        d3.select(this).style('fill', 'orange')
      })
      .on('mouseout', function(d,i) {
        d3.select(this).style('fill', '#B0F566')
      })
      .attr('y', d =>  y(d.idh2010))
      .attr('height', d =>  height - y(d.idh2010))
     
    }
    

      }
    
  render() {
   return (
       <div id='chart'></div>
   )
  }
}


export default SVG