import React from 'react';
import '../style/oauth.css';
import LOGIN_COVER from '../images/login/login_cover.png';


const Login = function () {
    const requestLogin = function (e) {
        e.preventDefault();
        alert("This feature is coming soon");
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
                <form onSubmit={requestLogin}>
                    <div className="form-group">
                        {/* <img className="input_icon" src={LOGIN_USER} /> */}
                        <input id="login_email" placeholder="用户名/手机/邮箱" type="text" className="form-control" name="login_email" required/>
                    </div>

                    <div className="form-group">
                        <input id="login_password" placeholder="请输入密码" type="password" className="form-control" name="login_password" required/>
                    </div>

                    <div className="form-group">
                        <a herf="#"><span>忘记密码?</span></a>
                    </div>

                    <div className="form-submit">
                        <input type="submit" className="btn btn-login" id="form_submit_btn" value="登陆"/>
                        {/* <div className={"sender " + sent}></div>
                        <span className={"form-send success " + success}>sent <i className="fas fa-check"></i></span>
                        <span className={"form-send fail " + fail}>Fail to send! Please try again.</span> */}
                    </div>
                </form>

                <div className="redirect-register">
                    还没注册？ 立即注册。
                </div>
            </div>
            
        </div>
    );
}

export default Login;