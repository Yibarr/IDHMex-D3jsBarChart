import * as d3 from 'd3'
import idh from '../manifest'

let indexValue = [];

export let injectDropdownStates=()=>{  
  d3.select('#states')
    .selectAll('states')
    .data(idh)
    .enter()
    .append('Li')
    .append('a')
    .attr('class','deep-purple-text')
    .text(d=>d.name) 

    let setYear=set1980
    let idhSort=randomOrder
    setData(setYear,idhSort)
}
  


export let randomOrder=(arr,arr1)=>{
   let random=(arr,arr1)=>{
    arr.sort(() => Math.random() - 0.5);
    arr1.sort(() => Math.random() - 0.5);

  }
  random(idh,indexValue)
}

export let inAlphabeticalOrder=()=>{
  idh.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
})
  d3.select('svg').remove() 
  
}

export let ascendent=(arr,arr1)=>{
  arr.sort((a,b)=>{
    return a-b
  });
  arr1.sort((a,b)=>{
    return a-b
  });
  d3.select('.svg').remove();
}

export let descendent=(arr,arr1)=>{
  arr.sort((a,b)=>{
    return b-a
  });
  arr1.sort((a,b)=>{
    return b-a
  });
    d3.select('.svg').remove();
}

let set1980=()=>{
  for (let i = 0; i <idh.length; i++) {
    indexValue.push(idh[i].idh1980)  
  }
}

let set1990=()=>{
  for (let i = 0; i <idh.length; i++) {
    indexValue.push(idh[i].idh1990)  
  }
}

let set1995=()=>{
  for (let i = 0; i <idh.length; i++) {
    indexValue.push(idh[i].idh1995)  
  }
}

let set2000=()=>{
  for (let i = 0; i <idh.length; i++) {
    indexValue.push(idh[i].idh2000)  
  }
}

let set2005=()=>{
  for (let i = 0; i <idh.length; i++) {
    indexValue.push(idh[i].idh2005)  
  }
}

let set2010=()=>{
  
  for (let i = 0; i <idh.length; i++) {
    indexValue.push(idh[i].idh2010)  
  }
}

export let setData=(setYear,idhSort)=>{
  setYear();
  idhSort(idh,indexValue);
  d3.select('.svg').remove();
  drawBarchart();
}

export let drawBarchart=()=>{
      const margin = {top: 20, right: 20, bottom: 40, left: 45};
      const width = 955;
      const height = 400;

      chart(idh, indexValue, width, height, margin);

    function chart(idh, indexValue, chartWidth, chartHeight, margin) {
      const width = chartWidth - margin.left - margin.right;
      const height = chartHeight - margin.top - margin.bottom;

      const x = d3.scaleBand()
        .rangeRound([0, width])
        .paddingInner(0.1);

      const y = d3.scaleLinear()
        .range([height, 0]);

      const xAxis = d3.axisBottom(x);

      const yAxis = d3.axisLeft(y)
                .ticks(20);
    
      const svg = d3.select('#chart').append('svg')
        .attr('class','svg')
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
      .text( (d,i) => indexValue[i])
      .attr('y', (d,i) => { return y(indexValue[i]) - 8 } )
      .attr('x',(d)=>{return y(-3) })
      .style('font-size', '0.56rem')
      .transition()
      .delay(100)
      .attr('x', (d) => { return x(d.abr)+ 1 })
      
      svg.selectAll('.bar')
      .data(idh)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d =>  x(d.abr))
      .attr('width', x.bandwidth())
      .attr('y', y(0) )
      .style('fill', '#B0F566')
      .on('mouseover', function() {
        d3.select(this).style('fill', 'orange')
      })
      .on('mouseout', function() {
        d3.select(this).style('fill', '#B0F566')
      })
      .transition()
      .delay( 10 )
      .attr('y', (d,i) =>  y(indexValue[i]))
      .attr('height', (d,i) =>  height - y(indexValue[i]))
     
    }
}



module.esports={
    injectDropdownStates,
    drawBarchart
}