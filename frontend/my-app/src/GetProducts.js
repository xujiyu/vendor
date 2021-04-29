// function GetProducts(props) {
//     var state;
//     var count = 0;
//     async function getProducts() {
//         fetch('https://f8ss6kguxg.execute-api.us-east-1.amazonaws.com/dev/allProduct/')
//         .then(response => response.json())
//         .then(data => {
//             state = data['body'];
//             console.log(state);
//         });
//         // save it to your components state so you can use it during render
//         // console.log(state);
//     }
//     getProducts();
    

//     return(
//         <div>
//             this is a product
//             {state}
//             <a href="#" className="button is-primary">
//                 button
//             </a>
//         </div>
//     );
// }
import React from 'react';

class GetProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {products: []};
    }


    componentDidMount() {
        fetch('https://f8ss6kguxg.execute-api.us-east-1.amazonaws.com/dev/allProduct/')
        .then(response => response.json())
        .then(data => {
            data = JSON.parse(data['body']);
            console.log(data);
            this.setState({products: data})
        });
    }

    render() {
        const products = this.state.products;
        return (    
            <section className="section is-large">
                <h1 className="title">Fresh Products!!!</h1>
                <div className="columns is-mobile is-multiline">
                    {products.map(product => 
                        <div className="column is-one-quarter">
                            <div className="card has-background-link-light">
                                <header class="card-header">
                                    <p class="card-header-title is-centered">
                                    {product.name}
                                    </p>
                                </header>
                                <div class="card-content">
                                    <div class="content">
                                        quantity: {product.quantity}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                
            </section>
            // <div>
            // <h1 className="title">Hello, world!</h1>
            // {products.map(product => <div>{product.name}: quantity {product.quantity}</div>)}
            
            // </div>
        );
    }
  }

export default GetProducts;