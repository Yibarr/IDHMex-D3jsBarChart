import React from 'react';
import './App.css';
import Chart from './components/Chart/Chart'
import Authorlink from './components/Authorlink/Authorlink'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize'

function App() {
  return (
    <div className="App">
      <Chart/>
      <Authorlink/>
    </div>
  );
}

export default App;
