import React from 'react';
import '../style/oauth.css';
import REGISTER_COVER from '../images/register/register_cover.png';


const Register = function () {
    const requestRegister = function (e) {
        e.preventDefault();
        alert("This feature is coming soon");
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
                <form onSubmit={requestRegister}>
                    <div className="form-group">
                        <input id="last_name" placeholder="姓氏" type="text" className="form-control" name="register_lastname" required></input>
                        <input id="first_name" placeholder="名字" type="text" className="form-control" name="register_firstname" required></input>
                    </div>

                    <div className="form-group">
                        <input id="register_identifier" placeholder="身份证号码" type="number" className="form-control" name="register_identifier" required/>
                    </div>

                    <div className="form-group">
                        <input id="register_phone_number" placeholder="手机号码" type="number" className="form-control" name="register_phone_number" required/>
                    </div>

                    <div className="form-group">
                        <input id="register_password" placeholder="请输入密码" type="password" className="form-control" name="login_password" required/>
                    </div>

                    <div className="form-submit">
                        <input type="submit" className="btn btn-login" id="form_submit_btn" value="注册"/>
                    </div>
                </form>

                <div className="redirect-login">
                    已有账户？ 马上登陆
                </div>
            </div>
            
        </div>
    );
}

export default Register;