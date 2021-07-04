import React from 'react';
import { useForm } from "react-hook-form";


const LoginTest = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 30 })} />
                <input {...register("email", { pattern: /\S+@\S+\.\S+/})} />
                <input type="Password" {...register("password", { pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/ })} />
                <input type="number" {...register("age", { min: 18, max: 99 })} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default LoginTest;