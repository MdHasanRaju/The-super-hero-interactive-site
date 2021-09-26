import React from 'react';
import './User.css';

const User = (props) => {
    const {name, img, salary, profession, age, address} = props.user;

    return (
      <div className="user">
        <div>
          <img src={img} />
        </div>
        <h3>{name}</h3>
        <h3>Age: {age}</h3>
        <h4>Profession: {profession}</h4>
        <h4>Salary: ${salary}</h4>
        <h4>Country: {address}</h4>
        <br />
        
        <button
          className="btn"
          onClick={() => props.handleAddToCart(props.user)}
        >
          <i class="fas fa-cart-plus"></i>Add to Cart
        </button>
        <br />

        <div className="social-icon">
          <a href="#">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter-square"></i>
          </a>
        </div>

      </div>
    );
};

export default User;