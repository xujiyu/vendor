import manhattanPark from './manhattanPark.png'
import rooseveltIsland from './rooseveltIsland.png'
import washingtonPark from './washingtonPark.png'
import centralPark from './centralPark.png'

function Markets(props) {
    return(
        <div>
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
                    <h2 className="title">Central Park Market</h2>
                    <h3 className="subtitle">New York, NY</h3>
                    <img src={centralPark} />
                    </div>
                </div>
                <div className="column">
                    <div className="card m4">
                    <h2 className="title">Washington Square Park Market</h2>
                    <h3 className="subtitle">Washington Square, New York, NY 10012</h3>
                    <img src={washingtonPark} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Markets;