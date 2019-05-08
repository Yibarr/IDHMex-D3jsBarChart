import * as d3 from 'd3'
import IDH from '../../idh'

export let idh2010 = IDH.idh2010;
export let idh2005 = IDH.idh2005;
export let idh2000 = IDH.idh2000;
export let idh1995 = IDH.idh1995;
export let idh1990 = IDH.idh1990;
export let idh1980 = IDH.idh1980;
//expected output: arr[]

//sorting functions

export let randomOrder = (arr) => {
    arr.sort(()=>Math.random() - 0.5);
    d3.select('.svg').remove();
};

export let inAlphabeticalOrder = (arr) => {
    arr.sort(function(a,b){
        if(a.name < b.name) { return -1; };
        if(b.name > a.name) { return 1; };
        return 0;
      });
    d3.select('.svg').remove();
}

export let ascendent = (arr) => {
    arr.sort((a,b) => a.idh < b.idh ? -1 : 1);
    d3.select('.svg').remove();
}

export let descendent = (arr) => {
    arr.sort((a,b) => a.idh > b.idh ? -1 : 1);
    d3.select('.svg').remove();
}
//What we are going to do with the sorting function and the selected year array
let idhData = [];
export let setData= (idhYear,sortBy) => {
  sortBy(idhYear);
  
  idhData=[];
  for (let i = 0; i < idhYear.length; i++) {
    idhData.push(idhYear[i])  
  }
  console.log(idhData)
  drawBarchart();
};

export let drawBarchart=()=>{
    const margin = {top: 20, right: 20, bottom: 40, left: 45};
    const width = 955;
    const height = 400;

    chart(idhData,width, height, margin);

  function chart(idhData, chartWidth, chartHeight, margin) {
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

    x.domain(idhData.map(d => d.abb));
    y.domain([0, d3.max(idh2010, (d) =>  d.idh)]);

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
    .data(idhData,d=>d)
    .enter().append( "text" )
    .text(d=>d.idh)
    .attr('y', (d) => { return y(d.idh) - 8 } )
    .attr('x',(d)=>{return y(-3) })
    .style('font-size', '0.56rem')
    .transition()
    .delay(100)
    .attr('x', (d) => { return x(d.abb)+ 1 })
    
    svg.selectAll('.bar')
    .data(idhData)
    .enter().append('rect')
    .attr('class',(d)=>d.name.replace(/\s/g, ''))
    .attr('x', d =>  x(d.abb))
    .attr('width', x.bandwidth())
    .attr('y', y(0) )
    .style('fill', '#b2ff59')
    .on('mouseover', function() {
      d3.select(this).style('fill', 'orange')
    })
    .on('mouseout', function() {
      d3.select(this).style('fill', '#b2ff59')
    }) 
    .transition()
    .delay( 10 )
    .attr('y', (d) =>  y(d.idh))
    .attr('height', (d) =>  height - y(d.idh))
   
  }
}

export let injectDropdownStates=()=>{  
    d3.select('#states')
      .selectAll('states')
      .data(idh2010)
      .enter()
      .append('Li')
      .append('a')
      .attr('class','statesdp deep-purple-text')
      .text(d=>d.name)
      
      
  }

  /* module.exports={

  } */