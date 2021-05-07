import React from 'react';

class GetProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {products: [], count:0};
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
        const count = this.state.count;
        return (    
            <section className="section is-large">
                <a className="button" onClick={() => this.setState({count: count+1})}>
                    hi{this.state.count}
                </a>
                <h1 className="title">Fresh Products!!!</h1>
                <div className="columns is-mobile is-multiline">
                    {products.map((product, index) => 
                        <div className="column is-one-quarter" key={index}>
                            <div className="card has-background-link-light">
                                <header className="card-header">
                                    <p className="card-header-title is-centered">
                                        {product.name}
                                    </p>
                                </header>
                                <div className="card-content">
                                    <div className="content">
                                        quantity: {product.quantity}
                                        <br></br>
                                        price: {product.price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                
            </section>
        );
    }
  }

export default GetProducts;