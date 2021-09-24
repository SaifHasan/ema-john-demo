import React from 'react';

const Cart = (props) => {
   const cart=props.cart;

   const total=cart.reduce((total,pd)=>total+pd.price,0);

   let shippingP=0;
   if(total>15){
       shippingP=4.99;
   }else if(total>0){
    shippingP=12.99;
   }

   let tax=(total/10).toFixed(2);
   const grandTotal=(total+shippingP+Number(tax)).toFixed(2);

   

    return (
        <div>
            <h1>this is cart</h1>
            <p>Items Ordered:{cart.length}</p>

            <h5>Total shipping cost: ${shippingP}</h5>
            <h5>Total tax+ VAT: ${tax}</h5>
            <h5>Total Price: ${grandTotal}</h5>

            <button>Order Sumary</button>
        </div>
    );
};

export default Cart;