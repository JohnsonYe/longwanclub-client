import React, {useState} from 'react';
import "../../style/userCenter.css";
import MY_HOUSE_IMG from '../../images/usercenter/myhouse.png';
import MY_MAINTENANCE_IMG from '../../images/usercenter/maintenance.png';
import MY_SUGGUESTION_IMG from '../../images/usercenter/sugguestion.png';
import MY_COMMUNITY_IMG from '../../images/usercenter/community.png';
import MY_GUEST_IMG from '../../images/usercenter/guest.png';
import MY_LEASE_IMG from '../../images/usercenter/lease.png';
import SETING_ICON_IMG from '../../images/usercenter/setting-icon.png';
import ABOUT_US_IMG from '../../images/usercenter/aboutus.png';

import TEST_ICON from '../../images/usercenter/test-usericon.png';


const UserCenter = function () {
    const [username, setUsername] = useState('Kollin Chen');
    const [userPhone, setUserPhone] = useState('139*****611');
    const [balance, setBalance] = useState('0.00');
    const [points, setPoints] = useState('0.00');


    function createTool (classname, name, image) {
        return (
            <div className={"management-tools "+classname} onClick={()=>alert(`${name}功能还在建设中!`)}>
                <img className="tool-icon" src={image}></img>
                <div className="tool-name">{name}</div>
            </div>
        );
    }

    return (
        <div className="usercenter container">
            <div className="usercenter title">
                <b>用户中心</b>
            </div>

            <div className="usercenter user-information">
                <div className="user-icon">
                    <img src={TEST_ICON}></img>
                </div>

                <div className="usercenter user-info">
                    <div className="user-name"><b>{username}</b></div>
                    <div className="user-phone">手机号: {userPhone}</div>
                </div>
            </div>

            <div className="usercenter user-credit">
                <div className="user-balance-section">
                    <span>当前余额: ¥{balance}</span>
                </div>
                <div className="user-points-section">
                    <span>当前积分: {points}</span>
                </div>
            </div>

            <div className="usercenter" id="management-protal-functions">
                {createTool("my-house", "我的房屋", MY_HOUSE_IMG)}
                {createTool("my-maintenance", "我的报修", MY_MAINTENANCE_IMG)}
                {createTool("my-suggestion", "我的建议", MY_SUGGUESTION_IMG)}
                {createTool("my-community", "我的小区", MY_COMMUNITY_IMG)}
                {createTool("invite-guest", "邀请家属", MY_GUEST_IMG)}
                {createTool("leasing-fee", "物管费", MY_LEASE_IMG)}
            </div>

            <div className="usercenter other-options">
                <div className="redirect setting">
                    <img src={SETING_ICON_IMG}></img>
                    <span>设置</span>
                </div>
                <div className="redirect about-us">
                    <img src={ABOUT_US_IMG}></img>
                    <span>关于我们</span>
                </div>
            </div>

            <div className="usercenter center-footer">
                <div>龙湾会物业服务平台</div>
                <div>台山市云朋物业管理有限公司</div>
            </div>
        </div>
    );
}

export default UserCenter;