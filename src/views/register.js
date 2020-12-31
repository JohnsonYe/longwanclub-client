import React, {Component} from 'react';
import '../style/oauth.css';
import REGISTER_COVER from '../images/register/register_cover.png';
import { withRouter, Redirect, Link } from 'react-router-dom';
import Oauth from '../classes/oauth';
import Cookies from '../classes/cookies';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginId: '',
            password: '',
            last_name: '',
            first_name: '',
            identification_number: '',
            errorMessage: '',
            errState: "hide"
        };
        this.requestRegister = this.requestRegister.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAuthentication = this.props.handleAuthentication;
        this.handleCurrentUser = this.props.handleCurrentUser;
        this.currentUser = this.props.currentUser;
    }

    requestRegister(e) {
        e.preventDefault();
        console.log(this.state);
        var oauth = new Oauth();
        // login_id, password, last_name, first_name, id
        oauth.register(this.state.loginId, this.state.password, this.state.last_name, this.state.first_name, this.state.identification_number)
            .then(user => {
                Cookies.set('refresh_token', user.refresh_token, 86400);

                /* Redirect to the main page */
                this.handleAuthentication(true);
                this.handleCurrentUser(user);
                this.props.history.push('/');
            }).catch( err=> {
                // console.log("this is a err:", err);
                this.setState({errorMessage: err.message, errState: 'show'});
            });
    }

    handleChange (option, value) {
        switch (option) {
            case 'login_id':
                this.setState({loginId: value});
                break;
            case 'password':
                this.setState({password: value});
                break;
            case 'last_name':
                this.setState({last_name: value});
                break;
            case 'first_name':
                this.setState({first_name: value});
                break;
            case 'identification_number':
                this.setState({identification_number: value});
                break;
        }
    }

    errorContainer() {
        return (
            <div>{this.state.errorMessage}</div>
        )
    }

    render() {
        if (this.currentUser.authenticated && window.location.pathname === '/register') {
            return <Redirect to="/" />;
        }

        return (
            <div className="register container">
                <div className="register cover">
                    <img src={REGISTER_COVER} />
                </div>
                
                <div className="register welcome-message"> 
                    <b>欢迎加入龙湾会</b>
                </div>

                <div className="register register-form">
                    <form onSubmit={this.requestRegister}>
                        <div className="form-group">
                            <input id="last_name" placeholder="姓氏" type="text" className="form-control" name="register_lastname" onChange={(event) => this.handleChange('last_name', event.target.value)} required></input>
                            <input id="first_name" placeholder="名字" type="text" className="form-control" name="register_firstname" onChange={(event) => this.handleChange('first_name', event.target.value)} required></input>
                        </div>

                        <div className="form-group">
                            <input id="register_identifier" placeholder="身份证号码" type="number" className="form-control" name="register_identifier" onChange={(event) => this.handleChange('identification_number', event.target.value)} required/>
                        </div>

                        <div className="form-group">
                            <input id="register_phone_number" placeholder="手机号码" type="number" className="form-control" name="register_phone_number" onChange={(event) => this.handleChange('login_id', event.target.value)} required/>
                        </div>

                        <div className="form-group">
                            <input id="register_password" placeholder="请输入密码" type="password" className="form-control" name="login_password" onChange={(event) => this.handleChange('password', event.target.value)} required/>
                        </div>

                        <div className={"alert "+this.state.errState}>{this.errorContainer()}</div>

                        <div className="form-submit">
                            <input type="submit" className="btn btn-login" id="form_submit_btn" value="注册"/>
                        </div>
                    </form>

                    <div className="redirect-login">
                        <Link to={'/login'} className="redirect-link" >已有账户？ 马上登陆。</Link>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default withRouter(Register);