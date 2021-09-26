import React from 'react';
import './User.css';

const User = (props) => {
    // console.log(props.handleAddToCart);
    const {name, img, salary, profession, address} = props.user;
    return (
      <div className="user">
        <div>
          <img src={img} />
        </div>
        <h3>Name: {name}</h3>
        <h4>Profession: {profession}</h4>
        <p>Salary: {salary}</p>
        <p>Country: {address}</p>
        <br />
        <button className="btn" onClick={() => props.handleAddToCart(props.user)}>Add to Cart</button>
      </div>
    );
};

export default User;