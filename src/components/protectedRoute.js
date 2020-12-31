import React from 'react';
import {Route, Redirect} from 'react-router-dom';
export const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
            {...rest}
            render={props => {
                if (rest.isAuth) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to="/login"/>;
                }
            }}
        />
    );
};