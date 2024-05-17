import logo from './assets/images/logo.svg';
import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-gray-400">
          This platform is ongoing...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="text-3xl font-bold">
            Court Star
          </h1>
        </a>
      </header>
    </div>
  );
}

export default App;
