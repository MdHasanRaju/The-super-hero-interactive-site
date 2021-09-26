import React from 'react';
import Person from '../Person/Person';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;

    const totalReducer = (previousValue, currentValue) => previousValue + parseFloat(currentValue.salary);
    const total = cart.reduce(totalReducer, 0)
    
    return (
        <div >
            <h3>Doctors Added: {cart.length}</h3>
            <h5>Total Cost: $ {total}</h5>
            <br />
            <h4>User Name</h4>
            <ul className="user-name">

                {
                    cart.map(person => <Person key={person.id} name={person.name}></Person>)
                }
            </ul>
        </div>
    );
};
<li>
   
</li>;

export default Cart;