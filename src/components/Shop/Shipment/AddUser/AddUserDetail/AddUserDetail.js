import React from 'react';
import { useForm } from 'react-hook-form';

const AddUserDetail = ({userInfo, closeModal}) => {
    const { register, handleSubmit,formState: { errors }   } = useForm();

    const onSubmit = data => {

      if(window.confirm('Are you sure want to proceed ?') ){
        fetch(`https://khandanifoodsbd.herokuapp.com/addUser?email=${userInfo.email}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify(data)
        })
        .then( res => res.json() )
        .then ( data => {
            alert(`Congratulation, ${userInfo.name} your address is successfully saved` )
            closeModal();
            console.log(data)
        })
      }
       // console.log(data);
    }
    return (
        <div className='col-md-12'>
            <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='text-center text-success'> <strong> Hi, {userInfo.name} add your shipping address </strong> </h2>
                        <div className="form-group">
                            <label className='mb-2 text-success' > <strong> Name </strong> </label>
                            <input placeholder="Your name " className="form-control" defaultValue={userInfo.name} {...register("name", { required: true })} />
                            {errors.name && <span className='text-danger'>This field is required</span>}
                        </div>
                        <br />
                        <div className="form-group">
                            <label className='mb-2 text-success' > <strong> Email</strong> </label>
                            <input placeholder="Your email" className="form-control" value={userInfo.email} {...register("email",  { required: true , pattern: /\S+@\S+\.\S+/ })} />
                            {errors.email && <span className="text-danger">This field is required and try again with valid email address.</span>}
                        </div>
                        <br />
                        <div className="form-group">
                            <label className='mb-2 text-success' > <strong> Phone </strong> </label>
                            <input placeholder="Your Phone" className="form-control" {...register("phone", { required: true })} />
                            {errors.phone && <span className='text-danger' >This field is required</span>}
                        </div>
                        <br />
                        <div className="form-group">
                            <label className='mb-2 text-success'> <strong> Address </strong> </label>
                            <input placeholder="Full Address" className="form-control"  {...register("address", { required: true })} />
                            {errors.address && <span className='text-danger' >This field is required</span>}
                        </div>
                        <br />
                        <div className="form-group">
                            <label className='mb-2 text-success' for="exampleFormControProductDescription"> <strong> Product Description </strong></label>
                            <input placeholder="City" className="form-control" rows="4" {...register("city", { required: true })}></input>
                            {errors.city && <span className='text-danger' >This field is required</span>}
                        </div>
                        <br />
                        <input type="submit" className='btn btn-danger'/>
                    </form> 
        </div>
    );
};

export default AddUserDetail;