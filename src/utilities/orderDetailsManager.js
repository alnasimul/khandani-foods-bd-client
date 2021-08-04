
export const setOrderDetails = (cart,orderId,shippingCost,totalBill) => {
    const orderDetails = {cart,orderId, shippingCost,totalBill};
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
}

export const getOrderDetails = () => {
    const parseOrderDetalis = localStorage.getItem('orderDetails');

    const orderDetails = JSON.parse(parseOrderDetalis);

    return orderDetails;
}

export const processOrderFromOrderDetailsManager = (cart) => {
    localStorage.removeItem('orderDetails');
}
