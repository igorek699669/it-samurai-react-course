import React from 'react';
import {Preloader} from '../../common/Preloader'
import {ProfileStatus} from './ProfileStatus'
const ProfileInfo = (props) => {
    if (!props.profile){
        return  <Preloader/>
    }
    return (
        <div className='description-block'>
            <div>
                <img src={props.profile.photos.small} alt=""/>
                <div>{props.profile.aboutMe}</div>
                <ProfileStatus
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>
        </div>
    )
};

export {
    ProfileInfo
}