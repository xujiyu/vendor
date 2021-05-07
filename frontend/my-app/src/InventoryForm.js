import React, { useState } from "react";

class InventoryForm extends React.Component{
    constructor(props){
        super(props);
        this.state={ 
            id: '', 
            name: '',
             type: '', 
             quantity: '', 
             orders: '', 
             status: '', 
             update: '', 
             price:''};
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handleInputChange = (event) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name] : value

        });
    }
    render(){
        return(
            <form>
                <label> Item Id
                <input 
                name= "id" 
                type = "number"
                value={this.state.id}
                onChange={this.handleInputChange}                
                />
                </label>
                <label> Item Name
                <input 
                name= "name" 
                type = "string"
                value={this.state.id}
                onChange={this.handleInputChange}                
                />
                </label>

                <label> Item Type
                <input 
                name= "type" 
                type = "string"
                value={this.state.id}
                onChange={this.handleInputChange}                
                />
                </label>
                <label> Item QTY
                <input 
                name= "quantity" 
                type = "number"
                value={this.state.id}
                onChange={this.handleInputChange}                
                />
                </label>

                <label> Item Orders
                <input 
                name= "orders" 
                type = "number"
                value={this.state.id}
                onChange={this.handleInputChange}                
                />
                </label>

                <label> Item Status
                <input 
                name= "status" 
                type = "string"
                value={this.state.id}
                onChange={this.handleInputChange}                
                />
                </label>

                <label> Item Update
                <input 
                name= "update" 
                type = "string"
                value={this.state.id}
                onChange={this.handleInputChange}                
                />
                </label>

                <label> Item Price
                <input 
                name= "price" 
                type = "string"
                value={this.state.id}
                onChange={this.handleInputChange}                
                />
                </label>
            </form>

        );
    }

}
export default InventoryForm;
// ReactDOM.render(
//     <InventoryForm />,
//     document.getElementById('root')
//   );
  