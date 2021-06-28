import React, { useState } from 'react';
import fakeData from '../../../../fakeData';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart } from '../../../../utilities/databaseManager';

const CartItem = ({ item }) => {
    const { title, img, quantity, id } = item;

    const [quantityCount, setQuantityCount] = useState(quantity);

    const handleAdd = clickedId => {

        const currentItem = fakeData.find(item => item.id === clickedId);

        const updatedQuantity = quantityCount + 1;
        setQuantityCount(updatedQuantity);
        currentItem.quantity = updatedQuantity;

        console.log(currentItem);

        addToDatabaseCart(clickedId, quantityCount);
        getDatabaseCart();
    }
    const handleSub = clickedId => {
        if (quantityCount > 0) {
            const currentItem = fakeData.find(item => item.id === clickedId);

            const updatedQuantity = quantityCount - 1;

            setQuantityCount(updatedQuantity);
            currentItem.quantity = updatedQuantity;

            console.log(currentItem);

            addToDatabaseCart(clickedId, quantityCount);
            getDatabaseCart();
        }
    }

    const removeItemFromCart = clickedId => {
        removeFromDatabaseCart(clickedId);
        refresh();
    }
    const refresh = () => {
        return window.location.reload();
    }

    return (
        <div className="d-flex my-3" >
            <div>
                <img src={img} alt="" style={{ width: '100px' }} />
            </div>
            <div className='ms-3' >
                <h4>{title}</h4>
                <br />
                <div className='d-flex'>
                    <button className='btn btn-danger ' onClick={() => handleSub(id)}>-</button>
                    <p className='mx-2 my-1 px-3' style={{ border: '1px solid lightgray', borderRadius: '5px' }}>{quantity}</p>
                    <button className="btn btn-danger " onClick={() => handleAdd(id)}>+</button>
                    <button className="btn btn-danger ms-3" onClick={() => removeItemFromCart(id)}>Remove</button>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default CartItem;