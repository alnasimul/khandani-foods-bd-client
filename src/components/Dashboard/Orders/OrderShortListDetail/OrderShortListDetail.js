import React from 'react';

const OrderShortListDetail = ({ order }) => {
    const { orderId, name, phone, totalBill, shippingCost, cart } = order;
    console.log(cart)
    return (
        <>
         <tr className="bg-dark text-white">
                <td>{orderId}</td>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{totalBill + shippingCost}</td>
                <td> {
                    cart.map(item =>
                       <div style={{width:'300px'}} className="p-1">
                            <tr className="text-dark bg-light p-5">
                            <td ><strong>Title</strong> {item.title}</td>
                            <td> <strong>Quntity</strong>  {item.quantity} </td>
                            <td> <strong>Unit Price</strong> {item.price} <br /><small style={{fontSize: '12px'}}> ({item.weight}) </small> </td>
                        </tr>
                       </div>)
                }
                </td>
            </tr>
        </>
           
        
    );
};

export default OrderShortListDetail;