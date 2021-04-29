

function Product(props) {
    var state

    async function getProducts() {
        fetch('https://f8ss6kguxg.execute-api.us-east-1.amazonaws.com/dev/allProduct/')
        .then(response => response.json())
        .then(data => {
            state = data['body'];
            console.log(state);
        });
        // save it to your components state so you can use it during render
        // console.log(state);
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