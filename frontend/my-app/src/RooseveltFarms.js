import rooseveltIsland from './rooseveltIsland.png'
import hoboken from './hoboken.jpg'
import ibari from './ibari.jpg'
import wengerd from './wengerd.jpg'
import vesco from './vesco.jpg'

function RooseveltFarms(props) {
    return(
        <div>

            <div>
            <div className="title">
                <h1> Featured Shops on Roosevelt Island</h1>
            </div>

            </div>
            <div className="columns is-mobile">
                <div className="column">
                    <div className="farm1">
                    <h3 className="title">Hoboken Farms</h3>
                    <h4 className="subtitle"></h4>
                    <img src={hoboken} width="250" height="100" />
                    <p> Looking to jazz up Pasta Night? Hoboken's got your back!</p>
                    <p> Try their signature Vodka sauce today!</p>
                    </div>
                </div>
                <div className="column">
                    <div className="farm2">
                    <h3 className="title">Ibari African Art Store</h3>
                    <h4 className="subtitle"></h4>
                    <img src={ibari} width="250" height="100"/>
                    <p> Run by Beatrice Ajaero, Ibari brings Nigeria to Roosevelt Island!  </p>
                     <p>Visit her stall for authentic and homemade Shea butters, 
                         black soap and more.</p>
                    </div>
                </div>
                </div>
                <br></br>
                <div className="columns is-mobile">
                <div className="column">
                    <div className="farm4">
                    <h3 className="title">Vesco Pickles</h3>
                    <h4 className="subtitle"></h4>
                    <img src={vesco} width="250" height="100" />
                    <p> Looking for a salty, sweet, tangy crunch?  </p>
                     <p>Look no further...Vesco Pickles to the rescue!</p>
                    </div>
                </div> 

            </div>
         </div>
    );
}

export default RooseveltFarms;