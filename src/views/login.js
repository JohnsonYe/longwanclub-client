// import React, { useState } from 'react';
import React, { Component } from 'react';
import '../style/oauth.css';
import LOGIN_COVER from '../images/login/login_cover.png';
import Oauth from '../classes/oauth';
import { withRouter, Redirect, Link } from 'react-router-dom';
import Cookies from '../classes/cookies';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginId: '',
            password: '',
            errorMessage: '',
            errState: "hide"
        };
        this.requestLogin = this.requestLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAuthentication = this.props.handleAuthentication;
        this.handleCurrentUser = this.props.handleCurrentUser;
        this.currentUser = this.props.currentUser;
    }

    requestLogin(event) {
        event.preventDefault();
        var oauth = new Oauth();
        
        oauth.login(this.state.loginId, this.state.password).then(user => {
            // console.log(user);
            Cookies.set('refresh_token', user.refresh_token, 86400);

            /* Redirect to the main page */
            this.handleAuthentication(true);
            this.handleCurrentUser(user);
            this.props.history.push('/');
        }).catch(err => {
            this.setState({errorMessage: err.message, errState: 'show'});
        });
    }

    handleChange (option, value) {
        switch (option) {
            case 'login_id':
                this.setState({loginId: value});
                // setLoginId(e.target.value);
                break;
            case 'password':
                this.setState({password: value});
                // setPassword(e.target.value);
                break;
        }
    }

    errorContainer() {
        return (
            <div>{this.state.errorMessage}</div>
        )
    }

    render() {
        if (this.currentUser.authenticated && window.location.pathname === '/login') {
            return <Redirect to="/" />;
        }

        return (
            <div className="login container">
                <div className="login cover">
                    <img src={LOGIN_COVER} />
                </div>
                
                <div className="login welcome-message"> 
                    <b>龙湾会欢迎您</b>
                </div>

                <div className="login login-form">
                    <form onSubmit={this.requestLogin}>
                        <div className="form-group">
                            {/* <img className="input_icon" src={LOGIN_USER} /> */}
                            <input id="login_email" placeholder="用户名/手机/邮箱" type="text" className="form-control" name="login_email" onChange={(event) => this.handleChange('login_id', event.target.value)} required/>
                        </div>

                        <div className="form-group">
                            <input id="login_password" placeholder="请输入密码" type="password" className="form-control" name="login_password" onChange={(event) => this.handleChange('password', event.target.value)} required/>
                        </div>

                        <div className="form-group">
                            <a herf="#"><span>忘记密码?</span></a>
                        </div>

                        <div className={"alert "+this.state.errState}>{this.errorContainer()}</div>
                        <div className="form-submit">
                            <input type="submit" className="btn btn-login" id="form_submit_btn" value="登陆"/>
                            {/* <div className={"sender " + sent}></div>
                            <span className={"form-send success " + success}>sent <i className="fas fa-check"></i></span>
                            <span className={"form-send fail " + fail}>Fail to send! Please try again.</span> */}
                        </div>
                    </form>

                    <div className="redirect-register">
                        <Link to={'/register'} className="redirect-link">还没注册？ 立即注册。</Link>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default withRouter(Login);