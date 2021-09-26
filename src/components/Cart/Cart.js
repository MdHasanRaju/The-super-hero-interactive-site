import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);

    const totalReducer = (previousValue, currentValue) => previousValue + parseFloat(currentValue.salary);
    
    const total = cart.reduce(totalReducer, 0)
    console.log(total);
    

    return (
        <div >
            <h3>Doctors Added: {cart.length}</h3>
            <h5>Total Cost: $ {total}</h5>
            <br />
            <ul className="user-name">
                {
                    cart.map(person => <li>{person.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;