import React from 'react';
import axios from 'axios';


import './App.css';
import StockEventsTable from './components/StockEventsTable';
import AddStockEvent from './components/AddStockEvent'
//display
class App extends React.Component{
  state = {
    fetchedproducts: [],
    fetchedstockEvents: []
  }

  async componentDidMount(){

      const productRes = await axios({
        method: 'GET',
        url: 'http://localhost:1337/Products'
      })

      const stockEventRes = await axios({
        method: 'GET',
        url: 'http://localhost:1337/Stockevents'
      })

      const fetchedproducts = productRes.data
      const fetchedstockEvents = stockEventRes.data

      this.setState({fetchedproducts, fetchedstockEvents})
  }


  render(){
    console.log("App.Render")
    const {fetchedproducts, fetchedstockEvents} = this.state
    return (
      <div className="App">
        <h1>About Music Inventory</h1>
        <AddStockEvent products={fetchedproducts} />
        <StockEventsTable 
          products={fetchedproducts} 
          stockEvents={fetchedstockEvents}
        />
      </div>
    );

  }

}

export default App;
