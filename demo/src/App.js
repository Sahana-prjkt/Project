import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import './components/Navbar/style.css'
function App() {
  return (
    <>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
       <h1>I am Sahana</h1> */}      
     <Navbar/>
    </div>
    </>
  );
}

export default App;
