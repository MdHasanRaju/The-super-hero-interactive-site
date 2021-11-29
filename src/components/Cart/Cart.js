import React from 'react';
import Person from '../Person/Person';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;

    // used reduce for estimating total
    const totalReducer = (previousValue, currentValue) => previousValue + parseFloat(currentValue.salary);
    const total = cart.reduce(totalReducer, 0)
    
    return (
      <div className="cart">
        <h2>
          <i class="fas fa-user"></i> Doctors Added: {cart.length}
        </h2>
        <h2>Total Cost: ${total}</h2>
        <br />
        <h3>Doctors Name:</h3>

        <ul className="user-name">
          {cart.map((person) => (
            <Person key={person.id} name={person.name}></Person>
          ))}
        </ul>
      </div>
    );
};
<li>
   
</li>;

export default Cart;