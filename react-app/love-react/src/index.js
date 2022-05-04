import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css';


const lakeList = ["Echo Lake", "Maud Lake", "Cascade Lake"];

ReactDOM.render(
  <App lake={lakeList}/>, 
document.getElementById("root")

);




