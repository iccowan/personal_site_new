import logo from './logo.svg';
import './App.css';

function App() {
  document.title = "Ian Cowan";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ian Cowan</h1>
        <p>Something new and great is coming soon...</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
