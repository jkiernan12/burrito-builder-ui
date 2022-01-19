import React, { Component, useState, useEffect } from 'react';
import './App.css';
import {getOrders} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

function App() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    getOrders()
    .then(data => setOrders(data.orders))
    .catch(err => console.error('Error fetching:', err));
  }, [])

  useEffect(() => {

  }, [orders])

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm orders={orders} setOrders={setOrders} />
      </header>
      {orders.length > 0 && <Orders orders={orders} />}
    </main>
  );
}


export default App;
