import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const{img,name,seller,price,stock}=props.product;
    return (
        <div className='product'>

            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="product-detail">
            <p id='heading'>{name}</p>
            <span>by:{seller}</span>
            <h3>${price}</h3>
            <p>Only {stock} left in stock-order soon </p>
            <button onClick={()=>props.btnClick(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
           
            
        </div>
    );
};

export default Product;