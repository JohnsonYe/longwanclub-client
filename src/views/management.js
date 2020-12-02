import React, {useState} from 'react';
import '../style/management.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import CAROUSEL_1 from '../images/management/carousel_1.png';
import CAROUSEL_2 from '../images/management/carousel_1.png';
import CAROUSEL_3 from '../images/management/carousel_1.png';
import ESTATE_1 from '../images/management/estate_1.png';
import ESTATE_2 from '../images/management/estate_2.png';
import RESERVATION_ICON from '../images/management/reservation_icon.png';
import ACTIVITY_ICON from '../images/management/activity_icon.png';
import MAINTENANCE_ICON from '../images/management/maintenance_icon.png';
const Management = function () {
    var test = "Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae.";
    const estates = [
        {
            description: test,
            image: ESTATE_1
        },
        {
            description: test,
            image: ESTATE_2
        },
        {
            description: test,
            image: ESTATE_1
        }
    ]


    function genCarouselImgs(image) {
        return ( <div><img src={image} /></div> );
    }

    function createTool (classname, name, image) {
        return (
            <div className={"keyFeature "+classname} onClick={()=>alert(`${name}功能还在建设中!`)}>
                <img className="feature-icon" src={image}></img>
                <div className="feature-name">{name}</div>
            </div>
        );
    }

    return (
        <div className="managementCenter container">
            <div className="managementCenter title">
                <b>龙湾会物业管理</b>
            </div>

            <div className="managementCenter image-showroom">
                <Carousel showThumbs={false}>
                    {genCarouselImgs(CAROUSEL_1)}
                    {genCarouselImgs(CAROUSEL_2)}
                    {genCarouselImgs(CAROUSEL_3)}
                </Carousel>
            </div>

            <div className="managementCenter key-features">
                {createTool("redirect-reservation", "预约服务", RESERVATION_ICON)}
                {createTool("redirect-activity", "我的报修", ACTIVITY_ICON)}
                {createTool("redirect-maintenance", "我的建议", MAINTENANCE_ICON)}
            </div>

            <div className="estates-description">
                {estates.map((x, index)=> {
                    return (
                        <div className={"estate estate_"+index} key={index}>
                            <div className="estate-description">
                                {x.description}
                            </div>
                            <div className="estate-image">
                                <img src={x.image}></img>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Management;