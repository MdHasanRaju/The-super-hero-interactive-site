import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import User from '../User/User';
import './Teams.css';

const Teams = () => {
    const [users, setUsers] = useState([])
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setUsers(data))
    } ,[])

    const handleAddToCart = (users) => {
        const newCart = [...cart, users]
        setCart(newCart)
    }

    return (
      <div className="teams">
        <div className="user-container">
            {
                users.map(user => <User handleAddToCart={handleAddToCart} key={user.id} user={user}></User>)
            } 
        </div>
        
        <div className="cart-container">
            <Cart cart={cart}></Cart>
        </div>   

        
          
        
    </div>
    );
};

export default Teams;