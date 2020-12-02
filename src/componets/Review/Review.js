import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Cart/Cart'
import happyImage from '../../images/giphy.gif'
import { useHistory } from 'react-router-dom';

const Review = () => {
    const[cart, setCart] = useState([]);
    const [orderPlace, setOrderPlace] = useState(false);
    const history = useHistory();

      const handleProceedCheckOut = () =>{
         history.push('/shipment')
      }

    const removeProduct = (productKey) =>{
        const newCart = cart.filter(pd => pd.key !==productKey)
        setCart(newCart);
        removeFromDatabaseCart(productKey)   
    }

    useEffect (() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);

       fetch('http://localhost:5000/productsByKeys',{
           method:'POST',
           headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(productKeys)
       })
       .then(res =>res.json())
       .then(data => setCart(data))

    }, []);
     let thankyou;
         if(orderPlace){
             thankyou = <img src={happyImage} alt=""/>
         }
     
    
    return ( 
        <div className='shop-container'>
         <div className="product-container">
         {
                cart.map(pd => <ReviewItems
                     key={pd.key} product ={pd}
                     removeProduct = {removeProduct}
                     ></ReviewItems>)
            }
            {thankyou}
         </div>
         <div className="cart-container">
             <Cart cart={cart}>
                 <button onClick = {handleProceedCheckOut} className="main-button">Proceed Checkout</button>
             </Cart>
         </div>
        </div>
    );
};

export default Review;