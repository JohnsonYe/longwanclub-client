import React from "react";
import { Route, Switch } from 'react-router-dom';
import {ProtectedRoute} from './protectedRoute';
import Login from '../views/login';
import Register from '../views/register';
import UserCenter from '../views/user/userCenter';
import Management from '../views/management';
import PageNotFound from '../views/notFound';

const Routes = (props) => {
    const handleAuthentication = props.handleAuthentication;
    const handleCurrentUser = props.handleCurrentUser;
    const currentUser = props.currentUser;

    return (
        <div className="main-container">
            <Switch>
                <Route exact path="/login" render={props => <Login handleAuthentication={handleAuthentication} handleCurrentUser={handleCurrentUser} currentUser={currentUser} />}/>
                <Route exact path="/register" render={props => <Register handleAuthentication={handleAuthentication} handleCurrentUser={handleCurrentUser} currentUser={currentUser} />}/>
                {/* Protected Routes */}
                <ProtectedRoute exact path="/" isAuth={props.currentUser.authenticated} component={Management} />
                <ProtectedRoute exact path="/user/center" isAuth={props.currentUser.authenticated} component={UserCenter} />
                <Route exact path="*" component={PageNotFound}/>
                {/* Protected Routes */}
                {/* <Route exact path="/" strict render={() => (checkAuthentication(<Management/>))}/> */}
                {/* <Route exact path="/user/center" strict render={() => (checkAuthentication(<UserCenter/>))}/> */}
                {/* <Route strict render={() => (checkAuthentication(<PageNotFound/>))}/> */}
            </Switch>
        </div>
    )
}

export default Routes;