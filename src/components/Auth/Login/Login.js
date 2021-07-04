import React, { useState } from 'react';
import logo from '../../../images/logo.png'
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword, storeAuthToken } from './loginManager';

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

    //const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }
    const handleChange = (e) => {
        let isFieldValid = true;
        if (e.target.name === "email") {
            const re = /\S+@\S+\.\S+/;
            isFieldValid = re.test(e.target.value);
            console.log(isFieldValid);
        } else if (e.target.name === "password") {
            const isPasswordValid = e.target.value.length > 6;
            const re = /\d{1}/;
            const passwordHasNumber = re.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
            console.log(isFieldValid);
        }
        if (isFieldValid) {
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
            console.log(user);

        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        e.preventDefault();
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
       // setLoggedInUser(res);

        if (redirect) {
            storeAuthToken();
            history.replace(from)
        }
    }

    return (
        <div className="login-page container">
            <div className="row">
                <div className="col-md-6 shadow p-5 mt-5 col-sm-12">
                    <h4>{newUser ? 'Create an account' : 'Login'}</h4>
                    <br />
                    <form action="" onSubmit={handleSubmit}>
                        {
                            newUser && <div className="form-group">
                                <label htmlFor="">Your Name</label>
                                <input type="text" className="form-control" placeholder="Enter name" name="name" required onBlur={handleChange} />
                                <br />
                            </div>
                        }

                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="text" className="form-control" placeholder="Enter email" name="email" required onBlur={handleChange} />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" name="password" required onBlur={handleChange} />
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
                            <input type="submit" value={newUser ? 'Sign up' : 'Sign in'} className=" btn btn-success"  />
                        </div>
                        <hr />
                        <div className="from-group mt-3">
                            <button className="btn btn-success text-white" onClick={googleSignIn}>Google Sign in</button>
                        </div>
                    </form>
                    {user.error && <p style={{ color: 'red' }}>{user.error}</p>}
                    {user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'Logged in'} Successfully</p>}
                </div>
                <div className="col-md-5 d-none d-md-block align-self-end m-5 p-5 " >
                    <img className="img-fluid" src={logo} alt="" style={{width:'800px'}}/>
                </div>
            </div>
        </div>
    );
};

export default Login;