
export const setOrderDetails = (cart,orderId,shippingCost) => {
    const orderDetails = {...cart,orderId, shippingCost};
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
}

export const getOrderDetails = () => {
    const parseOrderDetalis = localStorage.getItem('orderDetails');

    const orderDetails = JSON.parse(parseOrderDetalis);

    return orderDetails;
}