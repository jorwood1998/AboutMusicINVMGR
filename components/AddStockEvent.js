import React, {Component} from 'react';
import axios from 'axios'

class AddStockEvent extends Component{

    state = {
        qty: 0,
        type: 'add',

        product: 'no'
    }

    handleChange = (event) => {
        console.log("AddStockEvent.handleChange event.target.name", event.target.name)
        console.log("AddStockEvent.handleChange event.target.value", event.target.value)
        this.setState({[event.target.name]: event.target.value})
    }


    handleSubmit = (event) => {
        event.preventDefault()
        const {qty, type} = this.state
        console.log("AddStockEvent.handleSubmit qty", qty)
        console.log("AddStockEvent.handleSubmit type", type)
    }


    render(){
        //Select product



        //Add a quantity
        //Select a type

        //Submit to strapi
        const {qty, type, product} = this.state
        const {products} = this.props
        return(
        <div className="AddStockEvent">
            Add Stock Event
            <form onSubmit={this.handleSubmit}>

                <select onChange={this.handleChange} name="product" value={product}>
                    <option value='no'>Please select a product</option>
                    {products.map((product, i) => (
                        <option key={i} value={product.id}>
                            {product.model}
                        </option>
                    ))
                    }
                </select>

                <input onChange={this.handleChange} type="number" name="qty" value={qty} />
                <select onChange={this.handleChange} name="type" value={type}>
                    <option value='add'>Add</option>
                    <option value='remove'>Remove</option>
                </select>

                <button>Submit</button>
            </form>
        </div>
        )
    }
}

export default AddStockEvent