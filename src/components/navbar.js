import React from 'react';
import MAIN_PAGE_ICON from '../images/nav-main-page-icon.png';
import NAV_USER_ICON from '../images/nav-user-icon.png';
import { Link } from 'react-router-dom';

const Navbar = function (props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return (
            <div className="navigation-bar">
                <div className="nav-container">
                    <div className="main-page">
                        <Link to={'/'} className="nav-link">
                            <img src={MAIN_PAGE_ICON}></img>
                            <div>主页</div>
                        </Link>
                    </div>

                    <div className="user-page">
                        <Link to={'/user/center'} className="nav-link">
                            <img src={NAV_USER_ICON}></img>
                            <div>用户</div>
                        </Link>
                    </div>
                </div>
            </div>  
        );
    } else {
        return (<></>);
    }
}

export default Navbar;
