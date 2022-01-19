import React from 'react';
import './Orders.css';

const Orders = props => {
  const priceMap = {
    'beans': 1.5,
    'steak': 2,
    'carnitas': 2,
    'sofritas': 1.75,
    'lettuce': .5, 
    'queso fresco': .5, 
    'pico de gallo': .5,
    'hot sauce': .75,
    'guacamole': 500, 
    'jalapeno': .75, 
    'cilantro': .25,
    'sour cream': .5
  }
  const orderEls = props.orders.map(order => {
    const total = order.ingredients.reduce((total, ing) => total += priceMap[ing], 0)
    return (
      <div className="order" key={order.id} id={order.id}>
        <h3>{order.name}</h3>
        <ul className="ingredient-list">
          {order.ingredients.map(ingredient => {
            return <li key={`${ingredient}_${Date.now()}`}>Name: {ingredient}; Cost: {priceMap[ingredient]}</li>
          })}
        </ul>
        <p>Total Cost: {total}</p>
        <button id={order.id} onClick={(e) => props.deleteOrder(e.target.id)}>Delete</button>
      </div>
    )
  });

  return (
    <section>
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;