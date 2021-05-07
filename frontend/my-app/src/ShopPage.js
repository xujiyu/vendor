import React, { useEffect, useState } from 'react'
import ReactDOM, { render } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'



function ShopPage(props) {
    const [products, setProducts] = useState([]);
    const [random, setRandom] = useState(Math.random());

    const reRender = () => setRandom(Math.random());

    useEffect(() => {
        fetch('https://f8ss6kguxg.execute-api.us-east-1.amazonaws.com/dev/allProduct/')
        .then(response => response.json())
        .then(data => {
            data = JSON.parse(data['body']);
            console.log(data);
            setProducts(data);
        });
    },[random]);

    function modifyQuantity(data, operation = "add") {
        var data_copy = Object.assign({}, data);
        if (operation === "add") {
            data_copy.quantity += 1;
        }
        else if (operation === "minus") {
            data_copy.quantity === 0 ? data_copy.quantity = 0 : data_copy.quantity -= 1;
        }
        else if (operation === "new") {
            // no-op
            data_copy.quantity = data_copy.quantity;
        }
        const url = 'https://f8ss6kguxg.execute-api.us-east-1.amazonaws.com/dev/product';
        fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data_copy) // body data type must match "Content-Type" header
        })
        .then(response => response.json())
        .then(data => {
            data = JSON.parse(data['quantity'])
            console.log(data);
        })
        .then(() => reRender());
    }

    function removeAProduct(productId) {
        fetch('https://f8ss6kguxg.execute-api.us-east-1.amazonaws.com/dev/removeAProduct/'+productId)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.isSuccess === "true") {
                reRender();
            }
        });
    }

    return(
        <section className="section ">
            <h1 className="title">Your Inventory</h1>
            <div className="columns is-mobile is-multiline">
                {products.map((product, index) => 
                    <div className="column is-one-quarter" key={index}>
                        <div className="card has-background-link-light">
                            <header className="card-header">
                                <p className="card-header-title is-centered">
                                    {product.name} : id{product.productId}
                                </p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    quantity: {product.quantity}
                                    <br></br>
                                    price: {product.price}
                                </div>
                            </div>
                            <footer className="card-footer">
                                <a href="#" onClick={() => {modifyQuantity(product, "add")}} className="card-footer-item">
                                    <FontAwesomeIcon icon={faPlus} />
                                </a>
                                <a href="#" onClick={() => {modifyQuantity(product, "minus")}}className="card-footer-item">
                                    <FontAwesomeIcon icon={faMinus} />
                                </a>
                                <a href="#" onClick={() => {removeAProduct(product.productId)}}className="card-footer-item">
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </a>
                            </footer>
                        </div>
                    </div>
                )}
                {/* Card view for adding new item */}
                <div className="column is-one-quarter">
                    <div className="card has-background-link-light">
                        <header className="card-header">
                            <p className="card-header-title is-centered">
                                <input type="text" id="newItemName"/>
                            </p>
                        </header>
                        <div className="card-content">
                            <div className="content">
                                quantity: <input type="text" id="newItemQuantity"/>
                                <br></br>
                                price: <input type="text" id="newItemPrice"/>
                                <br></br>
                                id: <input type="text" id="newItemId"/>
                            </div>
                        </div>
                        <footer className="card-footer">
                            <a href="#" onClick={() => {
                                    modifyQuantity({"name": document.getElementById("newItemName").value,
                                     "productId": document.getElementById("newItemId").value,
                                     "quantity": parseInt(document.getElementById("newItemQuantity").value),
                                     "price": parseFloat(document.getElementById("newItemPrice").value)}, "new");
                                }} className="card-footer-item">
                                Add Item
                            </a>
                        </footer>
                    </div>
                </div>
            </div>
            
        </section>
    );

}
export default ShopPage;