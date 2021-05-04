import React from 'react';


class StockDetail extends React.Component{
    state= {
        show: false
    }

    render(){
        const {model, total, stockEvents} = this.props
        const {show} = this.state
                return(

<div className="StockDetail" onClick={() => this.setState({show: !show})}>
<h2>Product: {model} | Total: {total}</h2>
{show &&
    <div>
        {stockEvents.map(event => (
<div className="StockEventsTable__card">
<p>Product: {event.product.model}</p>
<p>ID: {event.id}</p>
<p>Quantity: {event.qty}</p>
<p>Type: {event.type}</p>
</div>
))}
    </div>
}



</div>


         )
    }
}
    export default StockDetail