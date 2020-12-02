import React from "react";
import { Route, Switch } from 'react-router-dom';

import Login from '../views/login';
import Register from '../views/register';
import UserCenter from '../views/user/userCenter';
import Management from '../views/management';
import PageNotFound from '../views/notFound';
const Routes = () => {
    return (
        <div className="main-container">
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>

                <Route exact path="/" component={Management}/>
                <Route exact path="/user/center" component={UserCenter}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    )
}

export default Routes;