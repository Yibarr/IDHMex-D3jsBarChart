import React, { Component } from 'react';
import * as d3 from 'd3';

export class SVG extends Component {
    state = {
        isLoaded : false
    }
    componentDidMount() {
        this.drawChart();
      }

      drawChart(){
        let idh = {
          state01:{
              name:'Aguascalientes',
              abr:'Ags.',
              idh2010:0.880,
              idh2005:0.861,
              idh2000:0.850,
              idh1995:0.813,
              idh1990:0.804,
              idh1980:0.737
          },
          state02:{
              name:'Baja California',
              abr:'B.C.S.',
              idh2010:0.877,
              idh2005:0.865,
              idh2000:0.862,
              idh1995:0.835,
              idh1990:0.850,
              idh1980:0.796
          },
          state03:{
              name:'Baja California Sur',
              abr:'B.C.S.',
              idh2010:0.879,
              idh2005:0.873,
              idh2000:0.855,
              idh1995:0.839,
              idh1990:0.838,
              idh1980:0.787
          },
          state04:{
              name:'Campeche',
              abr:'Camp.',
              idh2010:0.821,
              idh2005:0.804,
              idh2000:0.792,
              idh1995:0.775,
              idh1990:0.785,
              idh1980:0.647
              
          },
          state05:{
              name:'Ciudad de México',
              abr:'CDMX',
              idh2010:0.954,
              idh2005:0.938,
              idh2000:0.930,
              idh1995:0.904,
              idh1990:0.911,
              idh1980:0.828
              
          },
          state06:{
              name:'Coahuila',
              abr:'Coah.',
              idh2010:0.896,
              idh2005:0.876,
              idh2000:0.863,
              idh1995:0.835,
              idh1990:0.816,
              idh1980:0.770
              
          },
          state07:{
              name:'Colima',
              abr:'Col.',
              idh2010:0.846,
              idh2005:0.834,
              idh2000:0.826,
              idh1995:0.803,
              idh1990:0.793,
              idh1980:0.719
              
          },
          state08:{
              name:'Chiapas',
              abr:'Chis.',
              idh2010:0.724,
              idh2005:0.700,
              idh2000:0.681,
              idh1995:0.658,
              idh1990:0.647,
              idh1980:0.598
              
          },
          state09:{
              name:'Chihuahua',
              abr:'Chih.',
              idh2010:0.864,
              idh2005:0.880,
              idh2000:0.867,
              idh1995:0.832,
              idh1990:0.839,
              idh1980:0.777
              
          },
          state10:{
              name:'Durango',
              abr:'Dgo.',
              idh2010:0.840,
              idh2005:0.822,
              idh2000:0.805,
              idh1995:0.781,
              idh1990:0.773,
              idh1980:0.722
              
          },
          state11:{
              name:'Guanajuato',
              abr:'Gto.',
              idh2010:0.812,
              idh2005:0.789,
              idh2000:0.771,
              idh1995:0.741,
              idh1990:0.731,
              idh1980:0.665
              
          },
          state12:{
              name:'Guerrero',
              abr:'Gro.',
              idh2010:0.752,
              idh2005:0.727,
              idh2000:0.713,
              idh1995:0.693,
              idh1990:0.683,
              idh1980:0.607
              
          },
          state13:{
              name:'Hidalgo',
              abr:'Hgo.',
              idh2010:0.798,
              idh2005:0.772,
              idh2000:0.755,
              idh1995:0.716,
              idh1990:0.725,
              idh1980:0.649
              
          },
          state14:{
              name:'Jalisco',
              abr:'Jal.',
              idh2010:0.854,
              idh2005:0.836,
              idh2000:0.826,
              idh1995:0.795,
              idh1990:0.801,
              idh1980:0.742
              
          },
          state15:{
              name:'Estado de México',
              abr:'Edo. Mex.',
              idh2010:0.843,
              idh2005:0.820,
              idh2000:0.806,
              idh1995:0.775,
              idh1990:0.791,
              idh1980:0.743
              
          },
          state16:{
              name:'Michoacán',
              abr:'Mich.',
              idh2010:0.786,
              idh2005:0.759,
              idh2000:0.746,
              idh1995:0.714,
              idh1990:0.704,
              idh1980:0.648
              
          },
          state17:{
              name:'Morelos',
              abr:'Mor.',
              idh2010:0.852,
              idh2005:0.830,
              idh2000:0.807,
              idh1995:0.779,
              idh1990:0.779,
              idh1980:0.699
              
          },
          state18:{
              name:'Nayarit',
              abr:'Nay',
              idh2010:0.793,
              idh2005:0.771,
              idh2000:0.764,
              idh1995:0.739,
              idh1990:0.741,
              idh1980:0.689
              
          },
          state19:{
              name:'Nuevo Leon',
              abr:'N.L.',
              idh2010:0.922,
              idh2005:0.905,
              idh2000:0.893,
              idh1995:0.864,
              idh1990:0.867,
              idh1980:0.800
              
          },
          state20:{
              name:'Oaxaca',
              abr:'Oax.',
              idh2010:0.733,
              idh2005:0.711,
              idh2000:0.689,
              idh1995:0.666,
              idh1990:0.658,
              idh1980:0.576
              
          },
          state21:{
              name:'Puebla',
              abr:'Pue.',
              idh2010:0.809,
              idh2005:0.779,
              idh2000:0.759,
              idh1995:0.716,
              idh1990:0.719,
              idh1980:0.658
              
          },
          state22:{
              name:'Queretaro',
              abr:'Qro.',
              idh2010:0.871,
              idh2005:0.853,
              idh2000:0.835,
              idh1995:0.795,
              idh1990:0.780,
              idh1980:0.693
              
          },
          state23:{
              name:'Quintana Roo',
              abr:'Q. Roo',
              idh2010:0.889,
              idh2005:0.875,
              idh2000:0.862,
              idh1995:0.845,
              idh1990:0.827,
              idh1980:0.738
              
          },
          state24:{
              name:'San Luis Potosi',
              abr:'S.L.P.',
              idh2010:0.828,
              idh2005:0.802,
              idh2000:0.781,
              idh1995:0.743,
              idh1990:0.746,
              idh1980:0.661
              
          },
          state25:{
              name:'Sinaloa',
              abr:'Sin.',
              idh2010:0.821,
              idh2005:0.811,
              idh2000:0.796,
              idh1995:0.780,
              idh1990:0.774,
              idh1980:0.713
              
          },
          state26:{
              name:'Sonora',
              abr:'Son',
              idh2010:0.873,
              idh2005:0.864,
              idh2000:0.853,
              idh1995:0.827,
              idh1990:0.828,
              idh1980:0.759
              
          },
          state27:{
              name:'Tabasco',
              abr:'Tab.',
              idh2010:0.795,
              idh2005:0.775,
              idh2000:0.762,
              idh1995:0.746,
              idh1990:0.754,
              idh1980:0.677
              
          },
          state28:{
              name:'Tamaulipas',
              abr:'Tamps.',
              idh2010:0.864,
              idh2005:0.854,
              idh2000:0.838,
              idh1995:0.808,
              idh1990:0.809,
              idh1980:0.759
              
          },
          state29:{
              name:'Tlaxcala',
              abr:'Tlax.',
              idh2010:0.790,
              idh2005:0.773,
              idh2000:0.758,
              idh1995:0.724,
              idh1990:0.728,
              idh1980:0.660
              
          },
          state30:{
              name:'Veracruz',
              abr:'Ver.',
              idh2010:0.780,
              idh2005:0.759,
              idh2000:0.743,
              idh1995:0.723,
              idh1990:0.722,
              idh1980:0.667
              
          },
          state31:{
              name:'Yucatan',
              abr:'Yuc.',
              idh2010:0.822,
              idh2005:0.802,
              idh2000:0.787,
              idh1995:0.750,
              idh1990:0.744,
              idh1980:0.691
              
          },
          state32:{
              name:'Zacatecas',
              abr:'Zac.',
              idh2010:0.801,
              idh2005:0.778,
              idh2000:0.753,
              idh1995:0.729,
              idh1990:0.730,
              idh1980:0.663
              
          },
      
      }
      console.log(idh.state24.name)
        const square = d3.selectAll("rect");
        square.style("fill", "orange");

      }
    
  render() {
    return (
      <div id='chart'>
        <svg width="300px" height="150px">
        <rect x="20" y="20" width="20px" height="20" rx="5" ry="5" />
        <rect x="60" y="20" width="20px" height="20" rx="5" ry="5" />
        <rect x="100" y="20" width="20px" height="20" rx="5" ry="5"/>
        </svg>
      </div>
    )
  }
}

export default SVG
