import React from 'react';


const Inventory = () => {
    const product ={}
    const handleAddProduct = () =>{
        fetch('http://localhost:5000/addProduct',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    }
    return (
        <div>
           <button onClick={handleAddProduct}>add product</button>
        </div>
    );
};

export default Inventory;