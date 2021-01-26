import React from 'react';
import {Preloader} from '../../common/Preloader'
import {ProfileStatus} from './ProfileStatus'
const ProfileInfo = (props) => {
    if (!props.profile){
        return  <Preloader/>
    }
    return (
        <div className='description-block'>
            {/*<div>
                <img src="https://theinpaint.com/images/example-1-2.jpg" alt=""/>
            </div>*/}
            <div>
                <img src={props.profile.photos.small} alt=""/>
                <div>{props.profile.aboutMe}</div>
                <ProfileStatus status={'hello'}/>
            </div>
        </div>
    )
};

export {
    ProfileInfo
}