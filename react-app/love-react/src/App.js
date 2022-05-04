import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Welcome!!
        </p>
        <ul>
          {props.lakes.map(lake => (
            <li>{lake}</li>
          ))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React !! 😍
        </a>
      </header>
    </div>
  );
}

export default App;
