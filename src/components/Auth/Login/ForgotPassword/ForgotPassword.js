import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo.png';
import { resetPassword } from '../loginManager';

const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [message, setMessage] = useState('');

    const onSubmit = data => {
        resetPassword(data.email)
        .then(data => {
            setMessage(data)
        });
    }
    return (
        <div className="container">
            <div className="row">
                <div className='d-flex justify-content-center align-items-center' style={{ marginTop: '260px'}}>
                <div className="col-md-8 shadow p-5" >
                    <Link to='/login'>
                        <button className="btn btn-danger">লগইন পেইজ</button>
                        <br />
                    </Link>
                    <p className='text-danger mb-3 mt-3'>পাসওয়ার্ড পুনুরুদ্ধার করতে আপনি যে ইমেইল দিয়ে একাউন্ট করেছেন সেই ইমেইলটি ইমেইল ইনপুট ফিল্ডে অনুগ্রহ করে ইনপুট করুন তারপর সেন্ড বাটনে ক্লিক করুন ।</p>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="" className='mb-2'> <strong>ইমেইল</strong> </label>
                            <input className='form-control' placeholder='ইমেইল' required {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} />
                            {errors.email && <span className="text-danger">This field is required and try again with valid email address.</span>}
                        </div>
                        <div className="form-group mt-2">
                            <input type="submit" value={'সেন্ড'} className=" btn btn-success ms-auto" />
                        </div>
                    </form>
                    { message && <p className='text-danger mt-3'> {message} </p>}
                </div>
               
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;