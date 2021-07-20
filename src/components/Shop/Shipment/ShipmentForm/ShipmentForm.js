import React from 'react';
import { useForm } from 'react-hook-form';
import { processOrder } from '../../../../utilities/databaseManager';
import './ShipmentForm.css';


const ShipmentForm = ({orderInfo,closeModal}) => {
    const { register, handleSubmit,formState: { errors }   } = useForm();
    const {orderId} = orderInfo;
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    const onSubmit = data => {
        data.created = new Date().toDateString();
        data.paymentStatus = 'pending';
        data.deliveryStatus = 'pending';
        data.orderStatus = 'open';

      
        
        const orderData = { ...orderInfo, ...data };
        fetch('http://localhost:4000/addOrder',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(orderData)

        })
        .then( res => res.json() )
        .then( success => {
            closeModal();
            processOrder();
            alert('Your order has been received, your order will deliver within 2-3 days')
        })
       // console.log(data)
        console.log(orderData);
        
        closeModal();
    };
    return (
        <div className='col-md-12'>
              <h2 className="text-center text-success">Order Id: #{orderId}</h2>
                <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" {...register('name', { required: true })} name="name" placeholder="Your full name" className="form-control" defaultValue={userInfo.name}/>
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <br />
                    <div className="form-group">
                        <input type="text" {...register('phone',{ required: true })} name="phone" placeholder="Phone number" className="form-control"  />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="text" {...register('email',{ required: true, pattern: /\S+@\S+\.\S+/ })}name="email" placeholder="Email" className="form-control" defaultValue={userInfo.email} />
                        {errors.email && <span className="text-danger">This field is required and please enter valid email address</span>}
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="text" {...register('city',{ required: true })}name="city" placeholder="Current city" className="form-control" />
                        {errors.city && <span className="text-danger">This field is required</span>}
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="text" {...register('address',{ required: true })}name="address" placeholder="Full address" className="form-control" />
                        {errors.address && <span className="text-danger">This field is required</span>}
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="text" {...register('zipCode',{ required: true })}name="zipCode" placeholder="Zip code" className="form-control" />
                        {errors.zipCode && <span className="text-danger">This field is required</span>}
                    </div>
                    <br />
                    <div className="form-group text-end">
                        <button type="submit" className="btn btn-success text-white">Submit</button>
                    </div>
                </form>
        </div>
    );
};

export default ShipmentForm;