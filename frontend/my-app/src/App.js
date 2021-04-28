import logo from './logo.svg';
import './App.css';
import Product from './Product'
import manhattanPark from './manhattanPark.png'
import rooseveltIsland from './rooseveltIsland.jpeg'
import washingtonPark from './washingtonPark.jpeg'
import centralPark from './centralPark.jpeg'
import Markets from './Markets'
import Home from './Home'


function App() {
  return (
    
    <div className="App">
      <section className="hero is-danger">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">Vendor</h1>
            <h2 className="subtitle">Shop anywhere</h2>
          </div>
        </div>
      
      </section>
      {/* <Markets /> */}
      <div className="slideShow">
        <Home />
      </div>
      <div>
      <h2 className="title">Check out our slides for details</h2>
      </div>
        
    </div>
  );
}

export default App;
