import React, { useState } from 'react';
import logo from '../../../images/logo.png'
import { useHistory, useLocation, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword, storeAuthToken } from './loginManager';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    })

    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const { register, handleSubmit, formState: { errors }  } = useForm();
   
    const onSubmit = data => {

        const newUserInfo = { ...user, ...data }

        console.log(newUserInfo)

        setUser(newUserInfo);

    };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }


  

    const signInOrSignUp = () => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, false);
                })
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }

        console.log('hitted')
    }
    const signOut = () => {
        handleSignOut()
        const signedOutUser = {
            isSignedIn: false,
            name: '',
            email: '',
            photo: '',
            error: '',
            success: false
        }
        handleResponse(signedOutUser, false)
        console.log("logged out successfully")
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);

        if (redirect) {
            storeAuthToken(res);
            setTimeout( () => {
                history.replace(from)
            },2000);
           
        }
    }


    return (
        <div className="login-page container">
            <div className="row">
                <div className="col-md-6 shadow p-5 mt-5 col-sm-12">
                    <Link to='/Home'>
                        <button className="btn btn-danger">Home</button>
                        <br />
                    </Link>
                    <br />
                    <h4>{newUser ? 'Create an account' : 'Login'}</h4>
                    <br />
                    <form action="" onSubmit={handleSubmit(onSubmit, signInOrSignUp())}>
                        {
                            newUser && <div className="form-group">
                                <label htmlFor="">Your Name</label>
                                <input className='form-control' {...register("name", { required: true, maxLength: 30 })} />
                                {errors.name && <span className="text-danger">This field is required</span>}
                                <br />
                            </div>
                        }

                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input className='form-control' required {...register("email",  { required: true, pattern: /\S+@\S+\.\S+/ })} />
                            {errors.email && <span className="text-danger">This field is required and try again with valid email address.</span>}
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" className='form-control'{...register("password", {required: true , pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/ })} />
                            { (newUser && errors.password) && <span className="text-danger">password field is required and password should contain at least 6 character and one number</span>}
                            {  errors.password && <span className="text-danger">This field is required and try again with valid password</span>}
                            {user.error && <p style={{ color: 'red' }}>{user.error}</p>}
                            {/* <input type="password" className="form-control" placeholder="Enter password" name="password" required onFocus={handleChange} />
                            { (!fieldValid  && newUser ) && <p className='text-danger'>your password need to remain at least one digit and password should contain at least 7 character  </p>}
                            { !fieldValid && <p className='text-danger'>your password field is invalid or incorrect password</p>} */}
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="" className="text-danger">Forgot your password?</label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => setNewUser(!newUser)} />
                            <label class="form-check-label" for="flexCheckDefault">
                                New user sign up
                            </label>
                        </div>
                        <div className="form-group">
                            <input type="submit" value={newUser ? 'Sign up' : 'Sign in'} className=" btn btn-success" />
                        </div>
                        <hr />
                    </form>
                    <button className="btn btn-success text-white" onClick={googleSignIn}>Google Sign in</button>
                    {(user.success && newUser) && <p style={{ color: 'green' }}>User Created Successfully </p>}
                    {user.isSignedIn && <p className='text-success'>User Logged in successfully</p>}
                    { (newUser && user.success) && <p className='text-success'>A verification email sent to your email address please verify your email address to access your account</p> } 
                </div>
                <div className="col-md-5 d-none d-md-block align-self-end m-5 p-5 " >
                    <img className="img-fluid" src={logo} alt="" style={{ width: '800px' }} />
                </div>
            </div>
        </div>
    );
};

export default Login;