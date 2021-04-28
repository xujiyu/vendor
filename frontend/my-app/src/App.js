import logo from './logo.svg';
import './App.css';
import Product from './Product'
import manhattanPark from './manhattanPark.png'
import rooseveltIsland from './rooseveltIsland.jpeg'
import washingtonPark from './washingtonPark.jpeg'
import centralPark from './centralPark.jpeg'


function App() {
  return (
    
    <div className="App">
      
        {/* <Product />
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
        </a> */}
        <section className="hero is-danger">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1">Vendor</h1>
              <h2 className="subtitle">Shop anywhere</h2>
            </div>
          </div>
        
        </section>
        <div className="columns is-mobile">
          <div className="column">
            <div className="card m1">
              <h2 className="title">Manhattan Park Farmer's Market</h2>
              <h3 className="subtitle">30 River Rd, New York, NY 10044</h3>
              <img src={manhattanPark} />
            </div>
          </div>
          <div className="column">
            <div className="card m2">
              <h2 className="title">Roosevelt Island Market</h2>
              <h3 className="subtitle">1 East Loop Rd, New York, NY 10044</h3>
              <img src={rooseveltIsland} />
            </div>
          </div>
        </div>
        <div className="columns is-mobile">
          <div className="column">
            <div className="card m3">
              <h2 className="title">Roosevelt Island Market</h2>
              <h3 className="subtitle">New York, NY</h3>
              <img src={centralPark} />
            </div>
          </div>
          <div className="column">
            <div className="card m4">
              <h2 className="title">Roosevelt Island Market</h2>
              <h3 className="subtitle">Washington Square, New York, NY 10012</h3>
              <img src={washingtonPark} />
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default App;
