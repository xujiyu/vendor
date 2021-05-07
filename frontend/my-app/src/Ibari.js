import rooseveltIsland from './rooseveltIsland.png'
import shea from './shea.jpg'
import blacksoap from './blacksoap.jpg'

function Ibari(props) {
    return(
        <div>

            <div>
            <div className="title">
                <h1> Ibari - Sale Items</h1>
            </div>

            </div>
            <div className="columns is-mobile">
                <div className="column" >
                    <div className="farm1">
                    <h3 className="title"></h3>
                    <h4 className="subtitle">Shea Butter</h4>
                    <img src={shea} width="250" height="100" />
                    <p> IN STOCK</p>
                    </div>
                </div>
                <div className="column">
                    <div className="farm2">
                    <h3 className="title"></h3>
                    <h4 className="subtitle">Organic Black Soap</h4>
                    <img src={blacksoap} width="250" height="100"/>
                    <p> IN STOCK - Limited Supply </p>
                    </div>
                </div>
                </div>

            </div>
    );
}

export default Ibari;