import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {

    const [product,setProduct]=useState(fakeData);
    const[cart,setCart]=useState([]);
   
    // useEffect(()=>{
    //     fetch(fakeData)
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    // })

    const handleClick=(product)=>{
        const newItem=[...cart,product];
        console.log(newItem)
        setCart(newItem);
    }

    return (
        <div className="shop-container">
           
            <div className="product-container">
                {
                    product.map(pd=><Product 
                        btnClick={handleClick}
                        product={pd}>

                        </Product>)
                }
            </div>
            <div className="cart-container">
           <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;