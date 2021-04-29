

function Product(props) {
    var state = {
        products: null
    }

    async function getProducts() {
        const response = await fetch('<https://f8ss6kguxg.execute-api.us-east-1.amazonaws.com/dev/allProduct/>');
        const products = await response.json();
        // save it to your components state so you can use it during render
        this.setState({products: products});
        console.log(products);
    }
    getProducts();
    

    return(
        <div>
            this is a product
            <a href="#" className="button is-primary">
                Button
            </a>
        </div>
    );
}

export default Product;