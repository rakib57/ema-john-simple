import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    let total = 0 
    for(let i = 0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price * product.quantity;
    }
        let shipping = 0;
        if(total > 35){
            shipping = 0; 
        }
        else if (total > 15){
            shipping = 4.99
        }
        else if(total > 0){
            shipping = 12.99
        }
        const tax = total/20;
        
        const formetNumber = num =>{
            const precision = num.toFixed(2);
            return Number(precision);
        }     
    
    return (
        <div>
           <h3> Order Summary</h3>
           <p>Items Order: {cart.length}</p>
           <p>product Price:{formetNumber(total)}</p>
           <p><small>shipping: {shipping}</small></p>
           <p><small>Tax+Vat:{formetNumber(tax)}</small></p>
           <p>Total Price: {formetNumber(total+shipping+tax)}</p>
           {
               props.children
           }
        </div>
    );
};

export default Cart;