import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { useContext } from 'react';
import { UserContext } from '../../../App';

const AdminRoute = ({children, ...rest}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    const admin = JSON.parse( sessionStorage.getItem('admin'))

   
    const isLoggedIn = () => {
      const token = sessionStorage.getItem('token');
  
      if(!token){
        return false;
      }
      const decodedToken = jwt_decode(token);
      // get current time
      const currentTime = new Date().getTime() / 1000;
      // compare the expiration time with the current time
      // will return false if expired and will return true if not expired
      return decodedToken.exp > currentTime;
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        ((loggedInUser.email && admin.admin && loggedInUser.emailVerified ) || ( isLoggedIn() && userInfo.success && userInfo.emailVerified && admin.admin) ) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default AdminRoute;