import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateMemberInfo = ({member, closeModal }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));

    const {_id,  name, email, phone, image, role, designation, nid, address, city } = member;

    const onSubmit = data => {
        if(window.confirm(`Are sure want to update ${name}'s profile ?`)){
            fetch(`https://khandani-foods-bd-server-render.onrender.com/updateMember/${_id}?email=${userInfo.email}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type' : 'application/json',
                    authorization: `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify(data)
            })
            .then( res => res.json() )
            .then( data => {
                alert(`Member profile successfully updated to database .`)
                closeModal();
                window.location.reload();
            })
            .catch(error => {
                console.error(error)
            })
        }
    }
    return (
        <div className="col-md-10 bg-light p-5 " style={{ width: '98%', margin: '0 auto !important'  }}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: 'auto'}}>
           <div className="text-center">
           <h2 className='text-success'> <strong>Update Member Profile</strong> </h2>
            <img src={image} alt="" style={{ width: '280px' }} className='img-fluid text-center mt-3' />
           </div>
            <div className="form-group">
                <label className='mb-2 text-success' > <strong> Name </strong> </label>
                <input placeholder="Name" className="form-control" defaultValue={name} {...register("name", { required: true })} />
                {errors.name && <span className='text-danger' >This field is required</span>}
            </div>
            <br />
            <div className="form-group">
                <label className='mb-2 text-success'> <strong> Email </strong></label>
                <input className="form-control" placeholder="Email" defaultValue={email} {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}></input>
                {errors.phone && <span className='text-danger' >This field is required</span>}
            </div>
            <br />
            <div className="form-group">
                <label className='mb-2 text-success'> <strong> Phone </strong></label>
                <input className="form-control" placeholder="Phone" defaultValue={phone} {...register("phone", { required: true })}></input>
                {errors.phone && <span className='text-danger' >This field is required</span>}
            </div>
            <br />
            <div className="form-group row">
                <div className="col-12 col-sm-12 col-md-3 mb-2">
                    <label className='mb-2 text-success'> <strong> Role </strong></label>
                    <select className="form-control" name="role" defaultValue={role} {...register('role', { required: true })} >
                        <option disabled={true} value="Not set">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="moderator">Moderator</option>
                        <option value="member">Member</option>
                    </select>
                    {errors.role && <span className="text-danger">This field is required</span>}
                </div>
                <div className="col-12 col-sm-12 col-md-3 mb-2">
                    <label className='mb-2 text-success'> <strong> Designation </strong></label>
                    <select className="form-control" name="designation" defaultValue={designation} {...register('designation', { required: true })} >
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
                <div className="col-12 col-sm-12 col-md-3 mb-2">
                    <label className='mb-2 text-success'> <strong> Nid </strong></label>
                    <input className="form-control" placeholder="Nid" defaultValue={nid} {...register("nid", { required: false })}></input>
                    {errors.nid && <span className="text-danger">This field is required</span>}
                </div>
                <div className="col-12 col-sm-12 col-md-3">
                    <label className='mb-2 text-success'> <strong> Image Link </strong></label>
                    <input className="form-control" placeholder="Image" defaultValue={image} {...register("image", { required: false })}></input>
                    {errors.image && <span className='text-danger' >This field is required</span>}
                </div>
            </div>
            <br />
            <div className="form-group">
                <label className='mb-2 text-success'> <strong> Address </strong></label>
                <input className="form-control" placeholder="Address" defaultValue={address}  {...register("address", { required: true })}></input>
                {errors.address && <span className='text-danger' >This field is required</span>}
            </div>
            <br />
            <div className="form-group">
                <label className='mb-2 text-success' for="exampleFormControProductDescription"> <strong> City </strong></label>
                <input className="form-control" placeholder="City" defaultValue={city} {...register("city", { required: true })}></input>
                {errors.city && <span className='text-danger' >This field is required</span>}
            </div>
            <br />
            <input type="submit" className='btn btn-danger' value='Submit' />
        </form>
    </div>
    );
};

export default UpdateMemberInfo;