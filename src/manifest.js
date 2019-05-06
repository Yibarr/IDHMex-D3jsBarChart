let db = [
  {
      name:'Aguascalientes',
      abr:'AGU',
      idh2010:0.880,
      idh2005:0.861,
      idh2000:0.850,
      idh1995:0.813,
      idh1990:0.804,
      idh1980:0.737
  },
  {
      name:'Baja California',
      abr:'BCN',
      idh2010:0.877,
      idh2005:0.865,
      idh2000:0.862,
      idh1995:0.835,
      idh1990:0.850,    
      idh1980:0.796
  },
  {
      name:'Baja California Sur',
      abr:'BCS',
      idh2010:0.879,
      idh2005:0.873,
      idh2000:0.855,
      idh1995:0.839,
      idh1990:0.838,
      idh1980:0.787
  },
  {
      name:'Campeche',
      abr:'CAM',
      idh2010:0.821,
      idh2005:0.804,
      idh2000:0.792,
      idh1995:0.775,
      idh1990:0.785,
      idh1980:0.647
      
  },
  {
      name:'Ciudad de México',
      abr:'CMX',
      idh2010:0.954,
      idh2005:0.938,
      idh2000:0.930,
      idh1995:0.904,
      idh1990:0.911,
      idh1980:0.828
      
  },
  {
      name:'Coahuila',
      abr:'COA',
      idh2010:0.896,
      idh2005:0.876,
      idh2000:0.863,
      idh1995:0.835,
      idh1990:0.816,
      idh1980:0.770
      
  },
  {
      name:'Colima',
      abr:'COL',
      idh2010:0.846,
      idh2005:0.834,
      idh2000:0.826,
      idh1995:0.803,
      idh1990:0.793,
      idh1980:0.719
      
  },
  {
      name:'Chiapas',
      abr:'CHI',
      idh2010:0.724,
      idh2005:0.700,
      idh2000:0.681,
      idh1995:0.658,
      idh1990:0.647,
      idh1980:0.598
      
  },
  {
      name:'Chihuahua',
      abr:'CHH',
      idh2010:0.864,
      idh2005:0.880,
      idh2000:0.867,
      idh1995:0.832,
      idh1990:0.839,
      idh1980:0.777
      
  },
  {
      name:'Durango',
      abr:'DUR',
      idh2010:0.840,
      idh2005:0.822,
      idh2000:0.805,
      idh1995:0.781,
      idh1990:0.773,
      idh1980:0.722
      
  },
  {
      name:'Guanajuato',
      abr:'GUA',
      idh2010:0.812,
      idh2005:0.789,
      idh2000:0.771,
      idh1995:0.741,
      idh1990:0.731,
      idh1980:0.665
      
  },
  {
      name:'Guerrero',
      abr:'GRO',
      idh2010:0.752,
      idh2005:0.727,
      idh2000:0.713,
      idh1995:0.693,
      idh1990:0.683,
      idh1980:0.607
      
  },
  {
      name:'Hidalgo',
      abr:'HID',
      idh2010:0.798,
      idh2005:0.772,
      idh2000:0.755,
      idh1995:0.716,
      idh1990:0.725,
      idh1980:0.649
      
  },
  {
      name:'Jalisco',
      abr:'JAL',
      idh2010:0.854,
      idh2005:0.836,
      idh2000:0.826,
      idh1995:0.795,
      idh1990:0.801,
      idh1980:0.742
      
  },
  {
      name:'Estado de México',
      abr:'EMX',
      idh2010:0.843,
      idh2005:0.820,
      idh2000:0.806,
      idh1995:0.775,
      idh1990:0.791,
      idh1980:0.743
      
  },
  {
      name:'Michoacán',
      abr:'MIC',
      idh2010:0.786,
      idh2005:0.759,
      idh2000:0.746,
      idh1995:0.714,
      idh1990:0.704,
      idh1980:0.648
      
  },
  {
      name:'Morelos',
      abr:'MOR',
      idh2010:0.852,
      idh2005:0.830,
      idh2000:0.807,
      idh1995:0.779,
      idh1990:0.779,
      idh1980:0.699
      
  },
  {
      name:'Nayarit',
      abr:'NAY',
      idh2010:0.793,
      idh2005:0.771,
      idh2000:0.764,
      idh1995:0.739,
      idh1990:0.741,
      idh1980:0.689
      
  },
  {
      name:'Nuevo Leon',
      abr:'NVL',
      idh2010:0.922,
      idh2005:0.905,
      idh2000:0.893,
      idh1995:0.864,
      idh1990:0.867,
      idh1980:0.800
      
  },
  {
      name:'Oaxaca',
      abr:'OAX',
      idh2010:0.733,
      idh2005:0.711,
      idh2000:0.689,
      idh1995:0.666,
      idh1990:0.658,
      idh1980:0.576
      
  },
  {
      name:'Puebla',
      abr:'PUE',
      idh2010:0.809,
      idh2005:0.779,
      idh2000:0.759,
      idh1995:0.716,
      idh1990:0.719,
      idh1980:0.658
      
  },
  {
      name:'Queretaro',
      abr:'QRO',
      idh2010:0.871,
      idh2005:0.853,
      idh2000:0.835,
      idh1995:0.795,
      idh1990:0.780,
      idh1980:0.693
      
  },
  {
      name:'Quintana Roo',
      abr:'QNR',
      idh2010:0.889,
      idh2005:0.875,
      idh2000:0.862,
      idh1995:0.845,
      idh1990:0.827,
      idh1980:0.738
      
  },
  {
      name:'San Luis Potosi',
      abr:'SLP',
      idh2010:0.828,
      idh2005:0.802,
      idh2000:0.781,
      idh1995:0.743,
      idh1990:0.746,
      idh1980:0.661
      
  },
  {
      name:'Sinaloa',
      abr:'SIN',
      idh2010:0.821,
      idh2005:0.811,
      idh2000:0.796,
      idh1995:0.780,
      idh1990:0.774,
      idh1980:0.713
      
  },
  {
      name:'Sonora',
      abr:'SON',
      idh2010:0.873,
      idh2005:0.864,
      idh2000:0.853,
      idh1995:0.827,
      idh1990:0.828,
      idh1980:0.759
      
  },
  {
      name:'Tabasco',
      abr:'TAB',
      idh2010:0.795,
      idh2005:0.775,
      idh2000:0.762,
      idh1995:0.746,
      idh1990:0.754,
      idh1980:0.677
      
  },
  {
      name:'Tamaulipas',
      abr:'TAM',
      idh2010:0.864,
      idh2005:0.854,
      idh2000:0.838,
      idh1995:0.808,
      idh1990:0.809,
      idh1980:0.759
      
  },
  {
      name:'Tlaxcala',
      abr:'TLX',
      idh2010:0.790,
      idh2005:0.773,
      idh2000:0.758,
      idh1995:0.724,
      idh1990:0.728,
      idh1980:0.660
      
  },
  {
      name:'Veracruz',
      abr:'VER',
      idh2010:0.780,
      idh2005:0.759,
      idh2000:0.743,
      idh1995:0.723,
      idh1990:0.722,
      idh1980:0.667
      
  },
  {
      name:'Yucatan',
      abr:'YUC',
      idh2010:0.822,
      idh2005:0.802,
      idh2000:0.787,
      idh1995:0.750,
      idh1990:0.744,
      idh1980:0.691
      
  },
  {
      name:'Zacatecas',
      abr:'ZAC',
      idh2010:0.801,
      idh2005:0.778,
      idh2000:0.753,
      idh1995:0.729,
      idh1990:0.730,
      idh1980:0.663
      
  }
]


export default db