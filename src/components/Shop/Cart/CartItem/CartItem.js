import React, { useState } from 'react';
import fakeData from '../../../../fakeData';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart } from '../../../../utilities/databaseManager';

const CartItem = ({ item, cartPlusChange, cartSubChange }) => {
    const { title, image, quantity, id, regularPrice, salePrice } = item;

    const [quantityCount, setQuantityCount] = useState(quantity);

    const handleAdd = clickedId => {

    

        const currentItem = fakeData.find(item => item.id === clickedId);

        const updatedQuantity = quantityCount + 1;
        currentItem.quantity = updatedQuantity;
        updatedQuantityCount(updatedQuantity,clickedId);

        console.log(currentItem);

        
        getDatabaseCart();
        cartPlusChange();
        
    }
    const updatedQuantityCount = (updatedQuantity,clickedId) => {
        setQuantityCount(updatedQuantity);
        addToDatabaseCart(clickedId, updatedQuantity);
    }
    const handleSub = clickedId => {

            if( quantityCount > 1){
                
                const currentItem = fakeData.find(item => item.id === clickedId);
                const updatedQuantity = quantityCount - 1;
                currentItem.quantity = updatedQuantity;
                updatedQuantityCount(updatedQuantity,clickedId)
                console.log(currentItem);
                getDatabaseCart();
                cartSubChange();
            }
        
    }

    const removeItemFromCart = clickedId => {
        removeFromDatabaseCart(clickedId);
        refresh();
    }
    const refresh = () => {
        return window.location.reload();
    }
    console.log(quantityCount)
    return (
        <div className="d-flex my-3" >
            <div>
                <img src={`data:image/png;base64,${image.img}`}  alt="" style={{ width: '100px' }} />
            </div>
            <div className='ms-3' >
                <h4>{title}</h4>
                <br />
                <p> { salePrice  ? <del>  Old Price : {parseInt(regularPrice) * quantityCount}</del> : <span> Price : {parseInt(regularPrice) * quantityCount} </span> } </p>
                {
                    salePrice && <p> Sale Price: { parseInt(salePrice) * quantityCount } </p>
                }
                <div className='d-flex'>
                    <button className='btn btn-danger ' onClick={() => handleSub(id)}>-</button>
                    <p className='mx-2 my-1 px-3' style={{ border: '1px solid lightgray', borderRadius: '5px' }}>{quantityCount}</p>
                    <button className="btn btn-danger " onClick={() => handleAdd(id)}>+</button>
                    <button className="btn btn-danger ms-3" onClick={() => removeItemFromCart(id)}>Remove</button>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default CartItem;