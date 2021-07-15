import React from 'react';
import { useForm } from 'react-hook-form';

const OrderFilterForm = ({getSearchData}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        if(data.name){
            getSearchData({name: data.name});
        }else if(data.email){
            getSearchData({email: data.email});
        }else if(data.phone){
            getSearchData({phone: data.phone});
        }else if(data.city){
            getSearchData({city: data.city})
        }

       // console.log(data);
    }
   
    return (
        <div className="col-md-3 mt-3 p-5  bg-light" style={{borderRadius:'5px'}}>
            <h5 className="text-light bg-danger p-3 mx-2 my-2 w-50" style={{borderRadius:'5px'}} > <strong> Track order</strong> </h5>
            <form className=" mx-2" style={{borderRadius:'5px'}} onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="text" {...register('name', { required: false })} name="name" placeholder="Your full name" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}

                </div>
                <br />
                <div className="form-group">
                    <input type="text" {...register('phone', { required: false })} name="phone" placeholder="Phone number" className="form-control" />
                    {errors.phone && <span className="text-danger">This field is required</span>}
                </div>
                <br />
                <div className="form-group">
                    <input type="text" {...register('email', { required: false, pattern: /\S+@\S+\.\S+/ })} name="email" placeholder="Email" className="form-control" />
                    {errors.email && <span className="text-danger">please enter valid email address</span>}
                </div>
                <br />
                <div className="form-group">
                    <input type="text" {...register('city', { required: false })} name="city" placeholder="Current city" className="form-control" />
                    {errors.city && <span className="text-danger">This field is required</span>}
                </div>
                <br />
                <div className="form-group text-end">
                    <button type="submit" className="btn btn-success text-white">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default OrderFilterForm;