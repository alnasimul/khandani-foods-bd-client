import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Sidebar/Sidebar';

const AddMember = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));

    const onSubmit = data => {
        const id = Math.ceil( Math.random() * 10000 )
        
        data.id = 'KM' + Math.round(id).toString();

        if(window.confirm('Are you sure want to add this member to database ?')){
            fetch(`https://khandanifoodsbd.herokuapp.com/addMember?email=${userInfo.email}`,{
                method: 'POST',
                headers: {
                     'Content-Type' : 'application/json',
                     authorization: `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify({...data})
            })
            .then( res => res.json() )
            .then( data => {
                alert('New member added successfully to database')
            } )
        }

        console.log(data)
    }
    if(window.innerWidth > 991 ){
        var widthValue = '83%';
    }
    else{
        widthValue = '100%'
    }
    return (
        <div className='row' style={{ width:'100.6%' }}>
            <Sidebar></Sidebar>
            <div className="col-md-10 col-sm-12 col-12 mt-5 mb-5 bg-light p-4 " style={{ width: widthValue }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='text-center text-success'> <strong>Add New Member</strong> </h2>
                    <div className="form-group">
                        <label className='mb-2 text-success' > <strong> Name </strong> </label>
                        <input placeholder="Name" className="form-control" {...register("name", { required: true })} />
                        {errors.name && <span className='text-danger' >This field is required</span>}
                    </div>
                    <br />
                    <div className="form-group">
                        <label className='mb-2 text-success'> <strong> Email </strong></label>
                        <input className="form-control" placeholder="Email"  {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}></input>
                        {errors.phone && <span className='text-danger' >This field is required</span>}
                    </div>
                    <br />
                    <div className="form-group">
                        <label className='mb-2 text-success'> <strong> Phone </strong></label>
                        <input className="form-control" placeholder="Phone"  {...register("phone", { required: true })}></input>
                        {errors.phone && <span className='text-danger' >This field is required</span>}
                    </div>
                    <br />
                    <div className="form-group row">
                        <div className="col-12 col-md-3 col-sm-6 mb-2">
                            <label className='mb-2 text-success'> <strong> Role </strong></label>
                            <select className="form-control" name="role" {...register('role', { required: true })} >
                                <option disabled={true} value="Not set">Select Role</option>
                                <option value="admin">Admin</option>
                                <option value="moderator">Moderator</option>
                                <option value="member">Member</option>
                            </select>
                            {errors.role && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-12 col-md-3 col-sm-6 mb-2">
                            <label className='mb-2 text-success'> <strong> Designation </strong></label>
                            <select className="form-control" name="designation" {...register('designation', { required: true })} >
                                <option disabled={true} value="Not set">Select Designation</option>
                                <option value="Founder/Owner">Founder / Owner</option>
                                <option value="Manager">Manager</option>
                                <option value="Assistant manager">Assistant manager</option>
                                <option value="Marketing manager">Marketing manager</option>
                                <option value="Staff">Staff</option>
                                <option value="Rider">Rider</option>
                            </select>
                            {errors.designation && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-12 col-md-3 col-sm-6 mb-2">
                            <label className='mb-2 text-success'> <strong> Nid </strong></label>
                            <input className="form-control" placeholder="Nid"  {...register("nid", { required: false })}></input>
                            {errors.nid && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-12 col-md-3 col-sm-6">
                            <label className='mb-2 text-success'> <strong> Image Link </strong></label>
                            <input className="form-control" placeholder="Image"  {...register("image", { required: false })}></input>
                            {errors.image && <span className='text-danger' >This field is required</span>}
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <label className='mb-2 text-success'> <strong> Address </strong></label>
                        <input className="form-control" placeholder="Address"  {...register("address", { required: true })}></input>
                        {errors.address && <span className='text-danger' >This field is required</span>}
                    </div>
                    <br />
                    <div className="form-group">
                        <label className='mb-2 text-success' for="exampleFormControProductDescription"> <strong> City </strong></label>
                        <input className="form-control" placeholder="City"  {...register("city", { required: true })}></input>
                        {errors.city && <span className='text-danger' >This field is required</span>}
                    </div>
                    <br />
                    <input type="submit" className='btn btn-danger' value='Submit' />
                </form>
            </div>
        </div>
    );
};

export default AddMember;