import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateClientInfo = ({order,closeModal}) => {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    const { register, handleSubmit,formState: { errors }   } = useForm();

    const { _id, name, phone, email, address, city } = order;


    const onSubmit = data => {
        const updatedData = { ...data }

        if(window.confirm('Are you sure to proceed ?')){
        fetch(`https://www.webserver.khandanifoodsbd.com/updateClientInfo/${_id}?email=${userInfo.email}`,{
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify(updatedData)
        })
        .then( res => res.json())
        .then( data => {
            closeModal();
            window.location.reload()
        })
      }
        console.log(data)
    }
    return (
        <div className=''>
            <h2 className="text-center text-danger">Update {name}'s info </h2>
            <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
            
                    <div className="form-group">
                        <input type="text" {...register('name', { required: true })} name="name" placeholder="Your full name" className="form-control" defaultValue={name} />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <br />
                    <div className="form-group">
                        <input type="text" {...register('phone',{ required: true })} name="phone" placeholder="Phone number" className="form-control" defaultValue={phone} />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="text" {...register('email',{ required: true, pattern: /\S+@\S+\.\S+/  })}name="email" placeholder="Email" className="form-control" defaultValue={email}/>
                        {errors.email && <span className="text-danger">This field is required and please enter valid email address </span>}
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="text" {...register('city',{ required: true })}name="city" placeholder="Current city" className="form-control" defaultValue={city} />
                        {errors.city && <span className="text-danger">This field is required</span>}
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="text" {...register('address',{ required: true })}name="address" placeholder="Full address" className="form-control" defaultValue={address} />
                        {errors.address && <span className="text-danger">This field is required</span>}
                    </div>
                    <br />
                    <div className="form-group text-end">
                        <button type="submit" className="btn btn-danger text-white">Submit</button>
                    </div>
                </form>
        </div>
    );
};

export default UpdateClientInfo;