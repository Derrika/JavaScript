import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App'
import './index.css';


const lakeList = ["Echo Lake", "Maud Lake", "Cascade Lake"];

function App(props) {
  return (
   
    <ul>
      {props.lakes.map(lake => (
        <li>{lake}</li>
      ))}
    </ul>
  )
}

ReactDOM.render(
  <App lake={lakeList}/>, 
document.getElementById("root")

);




