import * as d3 from 'd3'
import idh from '../manifest'

export let draw=()=>{  
    d3.select('#states')
      .selectAll('states')
      .data(idh)
      .enter()
      .append('Li')
      .append('a')
      .attr('class','deep-purple-text')
      .text(d=>d.name)
  }

export default draw