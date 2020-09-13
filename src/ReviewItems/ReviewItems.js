import React from 'react';

const ReviewItems = (props) => {
    const{name,quantity,key,price} = props.product 

    const reviewStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft : '200px'
    }
    return (
        <div style = {reviewStyle}className="review-items">
            <h4 className="product-name">{name}</h4>
            <p>quantity{quantity}</p>
            <p><small>Price:{price}</small></p>
            <br/>
            <button
             className="main-button"
             onClick = {()=> props.removeProduct(key)}
             >Remove</button>
        </div>
    );
};

export default ReviewItems;